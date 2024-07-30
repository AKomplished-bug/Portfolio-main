# backend/rag_bot.py

import os
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.vectorstores import FAISS
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_together import TogetherEmbeddings
from langchain_community.llms import Together
from resume_data import resume_text

# Load environment variables
load_dotenv()

# Initialize embeddings and vector store
embeddings = TogetherEmbeddings(model="togethercomputer/m2-bert-80M-8k-retrieval")
vectorstore = FAISS.from_texts([resume_text], embeddings)
retriever = vectorstore.as_retriever()

# Initialize the language model
model = Together(
    model="meta-llama/Llama-2-70b-chat-hf",  # Changed to a different model
    temperature=0.3,
    max_tokens=150,
    top_k=50,
)

# Define the prompt template
template = """You are a concise AI assistant for Athul Krishna A. Answer the following question based on Athul's resume:

Question: {question}

Provide a brief and relevant answer. Only include information directly related to the question. If you don't have the information, simply say "I don't have that information." Don't mention the resume or context in your response.

Context from resume:
{context}

Answer:"""

prompt = ChatPromptTemplate.from_template(template)

# Create the chain
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | model
    | StrOutputParser()
)

def get_response(query):
    response = chain.invoke(query)
    # Clean up the response
    response = response.replace("Answer:", "").strip()
    if response.startswith("I don't have that information."):
        return response
    elif "I don't have that information" in response:
        return "I don't have that information."
    return response

if __name__ == "__main__":
    # Test the bot
    test_query = "What are Athul's main projects?"
    response = get_response(test_query)
    print(f"Query: {test_query}")
    print(f"Response: {response}")
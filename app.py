import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Function to generate random data stream
def generate_data_stream():
    # Generate random data stream
    data = np.random.randn(100).cumsum()
    return data

# Function to plot data stream
def plot_data_stream(data):
    plt.figure(figsize=(10, 6))
    plt.plot(data)
    plt.title('Data Stream Plot')
    plt.xlabel('Time')
    plt.ylabel('Value')
    st.pyplot()

def main():
    # Set title and description
    st.title('FAIRflow')
    st.write("Welcome to FAIRflow - Your data stream visualization tool!")

    # Sidebar with options
    st.sidebar.header('Navigation')
    page = st.sidebar.radio('Go to', ['Data Stream', 'FAIR Principles'])

    if page == 'Data Stream':
        st.header('Data Stream Plot')
        data = generate_data_stream()
        plot_data_stream(data)
        
    elif page == 'FAIR Principles':
        st.header('FAIR Principles Page')
        st.write("This page will contain information about FAIR principles.")

if __name__ == "__main__":
    main()
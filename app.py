"""_summary_

    Returns:
        _type_: _description_
"""
import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Function to generate random data stream
def generate_data_stream():
    """ Generate random data stream"""
    data = np.random.randn(100).cumsum()
    return data

def plot_data_stream(data):
    """Function to plot data stream"""
    fig, ax = plt.subplots()
    plt.plot(data)
    #ax.title('Data Stream Plot')
    #ax.xlabel('Time')
    #ax.ylabel('Value')
    st.pyplot(fig)

def main():
    """ Set title and description"""
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

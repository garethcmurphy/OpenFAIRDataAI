"""_summary_

    Returns:
        _type_: _description_
"""
import streamlit as st
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
    ax.title.set_text('Data Stream Plot')
    ax.set_xlabel('Time')
    ax.set_ylabel('Value')
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
        st.markdown("""
        ## FAIR Principles for Data Management

The FAIR principles outline a framework for ensuring research data is Findable, Accessible, Interoperable, and Reusable. Here's a breakdown of each principle in markdown format:

**1. Findable:**

* **F1. Metadata:** Assign rich, machine-readable metadata to describe the data origin, purpose, and format.
* **F2. Identifiers:** Assign persistent and globally unique identifiers (e.g., DOIs) to the data and its versions.
* **F3. Search:** Make data discoverable through search engines and registries using relevant keywords.
* **F4. Data Access:** Clearly document how potential users can access the data (e.g., open access, controlled access).

**2. Accessible:**

* **A1. Retrieval Mechanisms:** Implement mechanisms for users to retrieve the data (e.g., download, API).
* **A1.1. Landing Page:** Provide a landing page with information about the data, access procedures, and usage guidelines.
* **A2. Access Credentials:** If access is controlled, define clear and obtainable access credentials.
* **A3. Long-Term Storage:** Ensure long-term storage and preservation of the data to prevent loss.

**3. Interoperable:**

* **I1. File Format:** Use widely accepted, open data formats that are platform-independent (e.g., CSV, JSON).
* **I2. Data Dictionary:** Provide a data dictionary defining the meaning, structure, and units of each data element.
* **I3. Controlled Vocabularies:** Use controlled vocabularies (standard terms) to ensure consistency and facilitate data sharing.
* **I4. Software Code:**  For complex data, include the code used to generate or analyze it, enabling reproducibility. 

**4. Reusable:**

* **R1. Metadata Clarity:** Ensure the metadata is clear, comprehensive, and understandable for future users.
* **R1.1. Data Provenance:**  Document the origin, processing history, and any transformations applied to the data.
* **R2. License:**  Clearly define the license or terms of use to guide data reuse (e.g., Creative Commons).
* **R3. Readme Files:**  Provide detailed readme files with instructions, known limitations, and data usage considerations.

By following the FAIR principles, researchers can significantly improve the findability, accessibility, usability, and overall impact of their research data.

""")

if __name__ == "__main__":
    main()

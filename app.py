#!/usr/bin/env python3
"""
Random data stream and plot it using Streamlit
"""

import streamlit as st
import numpy as np
import matplotlib.pyplot as plt

# Constants
TITLE = 'FAIRflow'
DESCRIPTION = "Welcome to FAIRflow - Your data stream visualization tool!"
NAVIGATION_HEADER = 'Navigation'
PAGE_OPTIONS = ['Data Stream', 'FAIR Principles']
DATA_STREAM_PAGE = 'Data Stream'
FAIR_PRINCIPLES_PAGE = 'FAIR Principles'
DATA_STREAM_HEADER = 'Data Stream Plot'
FAIR_PRINCIPLES_MARKDOWN = """
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
"""

class DataStreamApp:
    """Class to encapsulate the data stream application logic"""

    @staticmethod
    def generate_data_stream():
        """Generate random data stream"""
        return np.random.randn(100).cumsum()

    @staticmethod
    def plot_data_stream(data):
        """Plot data stream"""
        fig, ax = plt.subplots()
        plt.plot(data)
        ax.title.set_text('Data Stream Plot')
        ax.set_xlabel('Time')
        ax.set_ylabel('Value')
        st.pyplot(fig)

    def run(self):
        """Run the Streamlit application"""
        st.title(TITLE)
        st.write(DESCRIPTION)

        # Sidebar with options
        st.sidebar.header(NAVIGATION_HEADER)
        page = st.sidebar.radio('Go to', PAGE_OPTIONS)

        if page == DATA_STREAM_PAGE:
            st.header(DATA_STREAM_HEADER)
            data = self.generate_data_stream()
            self.plot_data_stream(data)
        elif page == FAIR_PRINCIPLES_PAGE:
            st.markdown(FAIR_PRINCIPLES_MARKDOWN)

def main():
    """Main function to run the application"""
    app = DataStreamApp()
    app.run()

if __name__ == "__main__":
    main()

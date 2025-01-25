
#!/usr/bin/env python3

import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt

def main():
    # -----------------------------
    # 1) Example Parent–Child Data
    #    In practice, replace with:
    #      df = pd.read_csv("parent_child.csv")
    # -----------------------------
    data = {
        'Parent': ['A', 'A', 'B', 'C', 'C', 'E'],
        'Child':  ['B', 'C', 'D', 'E', 'F', 'G']
    }
    df = pd.DataFrame(data)
    
    # -----------------------------
    # 2) Build a Directed Graph
    # -----------------------------
    G = nx.DiGraph()
    
    # Add edges from Parent to Child
    for parent, child in zip(df['Parent'], df['Child']):
        G.add_edge(parent, child)
    
    # -----------------------------
    # 3) Compute a Top-down Layout using Graphviz
    #    We specify rankdir=TB for a top-to-bottom tree
    #    If you prefer left-to-right, use 'LR'
    # -----------------------------
    # Make sure you have 'pygraphviz' or 'pydot' installed
    try:
        from networkx.drawing.nx_agraph import graphviz_layout
        pos = graphviz_layout(G, prog='dot', args='-Grankdir=TB')
    except ImportError:
        raise ImportError("This script requires pygraphviz or pydot. Please install via pip.")
    
    # -----------------------------
    # 4) Draw the Graph
    # -----------------------------
    plt.figure(figsize=(8, 6))
    nx.draw(G, pos=pos, with_labels=True, arrows=True,
            node_size=2000, node_color="lightblue",
            font_size=12, font_weight="bold")
    
    plt.title("Top-down Tree (NetworkX + Graphviz)")
    plt.axis("equal")  # Helps keep aspect ratio so it doesn't look skewed
    plt.show()

if __name__ == "__main__":
    main()
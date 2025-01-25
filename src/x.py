import pandas as pd

# Original DataFrame
data = {
    "Parent": ["A", "B", "C", "B", "D"],
    "Child": ["B", "C", "D", "E", "F"]
}
df = pd.DataFrame(data)

# Step 1: Build the tree as a dictionary
tree = {}
for parent, child in zip(df["Parent"], df["Child"]):
    if parent not in tree:
        tree[parent] = []
    tree[parent].append(child)

# Step 2: Recursive function to traverse the tree and build paths
def build_paths(node, path, tree, all_paths):
    if node not in tree:  # Leaf node
        all_paths.append(path)
        return
    for child in tree[node]:
        build_paths(child, path + [child], tree, all_paths)

# Step 3: Find all root nodes (nodes that are not children)
all_parents = set(df["Parent"])
all_children = set(df["Child"])
roots = list(all_parents - all_children)

# Step 4: Generate all paths starting from the root nodes
all_paths = []
for root in roots:
    build_paths(root, [root], tree, all_paths)

# Step 5: Convert paths to a DataFrame
max_depth = max(len(path) for path in all_paths)
columns = ["Level " + str(i + 1) for i in range(max_depth)]
result_df = pd.DataFrame(all_paths, columns=columns)

# Display the result
import ace_tools as tools; tools.display_dataframe_to_user(name="Transformed Hierarchical Data", dataframe=result_df)
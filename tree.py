class Node:
    def __init__(self, val):
        self.value = val
        self.right = None
        self.left = None

class Tree:
    def __init__(self):
        self.root = None
    
    def insert(self, value):
        new_node = Node(value)

        if self.root is None:
            self.root = new_node
            return
        else:
            temp_root = self.root
            while temp_root is not None:
                if new_node.value <= temp_root.value:
                    if temp_root.left is not None:
                        temp_root = temp_root.left
                    else:
                        temp_root.left = new_node
                        return

                if new_node.value > temp_root.value:
                    if temp_root.right is not None:
                        temp_root = temp_root.right
                    else:
                        temp_root.right = new_node
                        return


    def print_in_order(self, node):
        if node is None:
            return
        else:
            self.print_in_order(node.left)
            print(node.value)
            self.print_in_order(node.right)



my_tree = Tree()
my_tree.insert(10)
my_tree.insert(12)
my_tree.insert(9)
my_tree.insert(233)
my_tree.insert(91)
my_tree.insert(10)
my_tree.insert(50)
my_tree.insert(100)

my_tree.print_in_order(my_tree.root)

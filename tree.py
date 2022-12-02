class Node:
    def __init__(self, value):
        self.value = value
        self.right = None
        self.left = None


class Tree:
    def __init__(self):
        self.root = None

    def add_node(self, value):
        
        NewNode = Node(value)
        if self.root == None:
            self.root = NewNode
        else:
            temp = self.root
            while(temp != None):
                if (NewNode.value <= temp.value):
                    if temp.left != None:
                        temp = temp.left
                    else:
                        temp.left = NewNode
                        return
                if (NewNode.value > temp.value):
                    if temp.right != None:
                        temp = temp.right
                    else:
                        temp.right = NewNode
                        return

    def get_root_node(self):
        return self.root

    def in_order(self, node):
        if node:
            self.in_order(node.left)
            self.in_order(node.value)

            self.in_order(node.right)




my_tree = Tree()
my_tree.add_node(10)
my_tree.add_node(1)
my_tree.add_node(13)
my_tree.add_node(12)
my_tree.add_node(15)
my_tree.add_node(20)

my_tree.in_order(my_tree.root)




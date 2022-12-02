class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.head = None
        self.__nodes = 0

    def push(self, value):
        node = Node(value)

        if self.head is None:
            self.head = node
        else:
            node.next = self.head
            self.head = node
        
        self.__nodes += 1

    def pop(self):
        if self.head is None:
            return
        else:
            val = self.head.value
            temp = self.head
            self.head = self.head.next
            del temp
            self.__nodes -= 1
            return val

    def print_stack(self):
        temp_head = self.head
        while temp_head is not None:
            print(temp_head.value)
            temp_head = temp_head.next
    
    def get_number_of_nodes(self):
        return self.__nodes

    
            


my_stack = Stack()
my_stack.push(9)
my_stack.push(10)
my_stack.push(12)
my_stack.pop()
my_stack.print_stack()


#include <iostream>
using namespace std;

// class Node{
//     public:
//         int value;
//         Node* left;
//         Node* right;
//         Node(int value){
//             this->value = value;
//             this->right = nullptr;
//             this->left = nullptr;
//         };
// };

class Tree{
    
    struct Node
    {
        int value;
        Node* right;
        Node* left;
    };
    Node* root;

    public:
        Node* getRoot(){
            return this->root;
        };
        void addNode(int value){
            Node* newNode = new Node();
            newNode->left = nullptr;
            newNode->right = nullptr;
            newNode->value = value;
            if (root == nullptr)
                root = newNode;
            else{
                Node* nodePtr = getRoot();
                while (nodePtr != nullptr)
                {
                    if (value < nodePtr->value){
                        if (nodePtr->left != nullptr)
                            nodePtr = nodePtr->left;
                        else{
                            nodePtr->left = newNode;      
                            return; 
                        }
                    }
                        
                    if (newNode->value > nodePtr->value){
                        if (nodePtr->right != nullptr)
                            nodePtr = nodePtr->right;
                        else{
                            nodePtr->right = newNode;        
                            return;
                        }
                    }
                }  
            }
        };

        void printInOrder(Node* nodePtr){
            if (nodePtr == nullptr)
                return;
            else{
                cout << nodePtr->value << endl;
                printInOrder(nodePtr->left);
                printInOrder(nodePtr->right);
            }
            
        }
};



int main(){
    Tree myTree = Tree();
    myTree.addNode(10);
    myTree.addNode(9);
    myTree.addNode(11);
    myTree.addNode(15);
    myTree.addNode(46);
    myTree.addNode(52);
    myTree.addNode(91);
    myTree.addNode(100);



    // myTree.printInOrder(myTree.getRoot());
    int a = 2^2;
    cout << a;
}
#include <iostream>
using namespace std;

class Point
{
    int *xptr;
    int *yptr;

public:
    Point()
    {
        xptr = new int;
        *xptr = 1;
        yptr = new int(1);
    }
    Point(int x, int y)
    {
        xptr = new int;
        *xptr = x;
        yptr = new int;
        *yptr = y;
    }

    void displayPoint()
    {
        cout << "Point = (" << *xptr << "," << *yptr << ")" << endl;
    }

    void setY(int y)
    {
        *yptr = y;
    }
};

int main()
{
    Point p1;       // paramaterless
    Point p2(2, 3); // parameterized
    Point p3 = p2;  // Default Copy Ctor -> Shallow copy

    p2.displayPoint();
    p3.displayPoint();

    p3.setY(5);
    cout << "After change in p3 y value - " << endl;

    p2.displayPoint();
    p3.displayPoint();

    return 0;
}
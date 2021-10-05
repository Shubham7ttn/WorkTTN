//Constant
export const PI = 3.14;

//Function to calculate area of circle
export function calCircleArea(radius){
    return 2 * PI * radius**2;
}
//Function to calculate area of rectangle
export function calRectangleArea(width, height){
    return  width * height;
} 
//Function to calculate area of cylider
export function calCylinderArea (radius, height){
    return ((2 * PI * radius * height) + (2 * PI * radius**2));
}
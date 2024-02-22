# store
import './App.css';
import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
function App() {
  const [courses] = useState([
    { id: 1, 
      name: 'PRO T-shirt', 
      price: 599, 
      image: 
      'https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false'
    },
    { id: 2, 
      name: 'PRO Bag', 
      price: 799, 
      image: 
'https://rukminim1.flixcart.com/image/400/400/jfh54sw0/backpack/t/h/9/laptop-bags-men-mngvbn-laptop-backpack-new-era-original-imaf3xvezymt6bsw.jpeg?q=90'
    },
    { id: 3, 
      name: 'PRO Hoodie', 
      price: 899, 
      image:
'https://m.media-amazon.com/images/I/51ROWxWCC7L._AC_UY1100_.jpg'}
]);

const [cartCourses, setCartCourses] = useState([]);
const [searchCourse, setSearchCourse] = useState('');

const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses
                           .find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
        const latestCartUpdate = cartCourses.map(item =>
            item.product.id === GFGcourse.id ? { 
            ...item, quantity: item.quantity + 1 } 
            : item
        );
        setCartCourses(latestCartUpdate);
    } else {
        setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
    }
};

const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses
                        .filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
};

const totalAmountCalculationFunction = () => {
    return cartCourses
           .reduce((total, item) => 
                       total + item.product.price * item.quantity, 0);
};

const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
};

const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
);
  return (
    <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;

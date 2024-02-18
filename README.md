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
'https://in.puma.com/in/en/pd/active-big-logo-mens-t-shirt/680800?swatch=01&referrer-category=mens-clothing-t-shirts-and-tops'
    },
    { id: 2, 
      name: 'PRO Bag', 
      price: 799, 
      image: 
'https://www.maxfashion.in/in/en/SHOP-Max-Black-Men-Avengers-Printed-Backpack/p/1000013446941?c=531021567&is_retargeting=true&msclkid=306f6c60caab1d6ca18609b11ea83b7a&pid=googleadwords_int&utm_campaign=Sok_Shopping(Bing)_AllProducts_Nov%2723&utm_content=Ad%20group%20%231&utm_medium=cpc&utm_source=bing&utm_term=4587918433878374'
    },
    { id: 3, 
      name: 'PRO Hoodie', 
      price: 899, 
      image: 
'https://www.myntra.com/sweatshirts/highlander/highlander-men-navy-blue-solid-hooded-sweatshirt/13137068/buy?utm_source=dms_bing_shopping&utm_medium=bing_cpc_shopping&utm_campaign=Bing-Topwear-Shopping-Test&msclkid=94ddd451ad1f162c2cf5b18079a1a6d0&utm_term=4578847494411649&utm_content=Topwear-%20Sweatshirts'
    }
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

//React
import { useState } from 'react';

import {

  MDBContainer,
 
} from "mdb-react-ui-kit";

import { Footer } from '../components/footer'
import Header  from '../components/header'

import Menu from '../component/Menu';
import Categories from '../component/Categories';
import items from '../data/data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

export default function HomePage() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div>

      <Header items={menuItems} />
     
      <MDBContainer className="" style={{zIndex: '100'}}>
        <div>
          <h1 className="m-0 text-xl font-bold uppercase leading-none text-center mt-5">Food  Menu</h1>
          <hr className="mt-3 items-center" style={{width: '100%'}}/>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems}  />
      </MDBContainer>

      <Footer />
     
    </div>
  )
}

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
    // State for the new item input
    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');  // Fixed empty space issue

    // Load items from localStorage on first render
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("todo_list");
        return savedItems ? JSON.parse(savedItems) : [
            { id: 1, checked: true, item: "Practicing Code" },
            { id: 2, checked: false, item: "Play Cricket" },
            { id: 3, checked: false, item: "Read about AI" }
        ];
    });

    // Update localStorage whenever items change
    useEffect(() => {
        localStorage.setItem("todo_list", JSON.stringify(items));
    }, [items]);

    // Function to toggle checkbox state
    const handleCheck = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // Function to delete an item
    const handleDelete = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Function to add a new item
    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const newItem = { id, checked: false, item };
        setItems((prevItems) => [...prevItems, newItem]);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem.trim()) return; // Prevent empty submissions
        addItem(newItem);
        setNewItem('');
    };

    return (
        <main>
            <Header />
            <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
            <SearchItem search={search} setSearch={setSearch} />
            <Content 
                items={items.filter((item) => 
                    item.item.toLowerCase().includes(search.toLowerCase())
                )} 
                handleCheck={handleCheck} 
                handleDelete={handleDelete} 
            />
            <Footer length={items.length} />
        </main>
    );
}

export default App;

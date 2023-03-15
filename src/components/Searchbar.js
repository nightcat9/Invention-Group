import { useState } from "react";

const searchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const questions = [

        { inquire: "What do you do?" },
        { inquire: "How do I know you won't steal my invention?" },
        { inquire: "What is an invention license? "},
        { inquire: "Do I need to patent my invention before I contact you?" },
        { inquire: "What do I do next?" },
        { inquire: "What does this cost?" },

    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        questions.filter((question) => {
            return question.inquire.match(searchInput);
        });
    }

    return <div>
        <input 
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
        
        {questions.map((question) => {
            <div>
                <p>{question.inquire}</p>
            </div>
        })}
    </div>
};

export default searchBar;

import React, {useState} from 'react';

const CommentBox = () => {
    const [comment, setComment] = useState('');
    const handleSubmit=e=>{
e.preventDefault();

setComment('')
    };
    return (
        <div>
            CommentBox
            <form onSubmit={handleSubmit}>
            <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <button>Add</button>
            </form>
        </div>
    );
};

export default CommentBox;

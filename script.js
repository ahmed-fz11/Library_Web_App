
class Book {
    constructor(author,title,pages,haveRead){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.haveRead = haveRead;
    }
}

//this func appends a book object to myLibrary array of objects
function addBookToLib(bookObj)
{
    //displaying all books on the webpage
    let content = document.querySelector('.content');
    let div_bookInfo = document.createElement('div');
    div_bookInfo.className = 'book-info';

    let headings_name = [bookObj.title,bookObj.author,bookObj.pages,bookObj.haveRead];

    for(let i=0;i<headings_name.length;i++)
    {
        let h1 = document.createElement('h1');
        h1.textContent = headings_name[i];
        div_bookInfo.appendChild(h1);
    }

    let del_btn = document.createElement('button');
    del_btn.textContent = "Delete";
    div_bookInfo.appendChild(del_btn);
    content.appendChild(div_bookInfo);

    del_btn.addEventListener('click',()=>{
        div_bookInfo.remove();
    })
}

let bookForm = document.querySelector('.book-form');
let content = document.querySelector('.content');
let addBookBtn = document.querySelector('add-book');


bookForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    let bookObj = new Book(author,title,pages,read);
    addBookToLib(bookObj);

    bookForm.reset()
})




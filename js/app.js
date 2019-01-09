let form = document.querySelector("#bookForm");

form.addEventListener('submit', function(e)
{
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    const book = new Book(title,author,isbn);
    e.preventDefault();
    const ui = new UI();
    
  
    if (title === '' || author ==='' || isbn === '')
    {
        ui.showAlert('Please fill everything in!', 'error');
    } else {
        ui.addBook(book);
        ui.clearFields();
        ui.showAlert('Successfully Added!', 'success');
    }
});

class Book
{
    constructor(title, author, isbn)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// function addBook(e)
//     {
        
//         const title = document.querySelector('#title').value;
//         const author = document.querySelector('#author').value;
//         const isbn = document.querySelector('#isbn').value;
//         const book = new Book(title,author,isbn);
//         console.log(book);
//         e.preventDefault();
//     }

class UI
{
    addBook(book)
    {   
        const list = document.querySelector('#libraryList');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>`
        list.appendChild(row);
        
        
    }
    
    showAlert(message, className)
    {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        container.insertBefore(div, form);
        setTimeout(function(){div.remove()}, 3000);
    }
    deleteBook(target)
    {

    }
    clearFields()
    {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

}
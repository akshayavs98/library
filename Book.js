class Book{
    constructor(title,author,pages,isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead
    }

    changeStatus(){
        this.isRead = !this.isRead;
    }
   
}

export default Book;
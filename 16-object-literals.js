// object literals
//this not used in arrow functions

let user = {
    name: 'crystal',
    email: 'crystal@gmail.com',
    age: '30',
    blogs: ['cheese rules','marmite'],
    blogObj: [
        {title:'ten things', likes:30 },
        {title:'10 things', likes:50 }
    ],
    login: function(){
        console.log('the user logged in');
    },
    logBlogs(){
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    logBlogobj(){
        this.blogObj.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(user.name);
console.log(user['email']);
user.login();
console.log(user.logBlogs())
console.log(user.logBlogobj())
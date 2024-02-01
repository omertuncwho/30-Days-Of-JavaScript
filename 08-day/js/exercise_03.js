/*
const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: {},
    expenses: {},
    totalIncome: 0,
    totalExpense: 0,

    addIncome: function(description, amount) {
      this.incomes[description] = amount;
      this.totalIncome += amount;
    },
  

    addExpense: function(description, amount) {
      this.expenses[description] = amount;
      this.totalExpense += amount;
    },
  

    accountInfo: function() {
      console.log(`
        Total Income: $${this.totalIncome}
        Total Expense: $${this.totalExpense}
        Account Balance: $${this.totalIncome - this.totalExpense}
      `);
    }
  };*/
  
/*
  function signUp(newUser) {
    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
      console.log('User already exists. Please sign in.');
    } else {
      users.push(newUser);
      console.log('User signed up successfully.');
    }
  }
  

  function signIn(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      user.isLoggedIn = true;
      console.log('User signed in successfully.');
    } else {
      console.log('Invalid email or password. Please try again.');
    }
  }
  */
/*
  function rateProduct(productId, userId, rate) {
    const product = products.find(p => p._id === productId);
    if (product) {
      product.ratings.push({ userId, rate });
      console.log('Product rated successfully.');
    } else {
      console.log('Product not found.');
    }
  }
  
  
  function averageRating(productId) {
    const product = products.find(p => p._id === productId);
    if (product && product.ratings.length > 0) {
      const sum = product.ratings.reduce((acc, rating) => acc + rating.rate, 0);
      const average = sum / product.ratings.length;
      console.log('Average Rating:', average.toFixed(2));
    } else {
      console.log('Product not found or has no ratings.');
    }
  }
  */
  function likeProduct(productId, userId) {
    const product = products.find(p => p._id === productId);
    if (product) {
      const likedIndex = product.likes.indexOf(userId);
      if (likedIndex === -1) {
        product.likes.push(userId);
        console.log('Product liked.');
      } else {
        product.likes.splice(likedIndex, 1);
        console.log('Product unliked.');
      }
    } else {
      console.log('Product not found.');
    }
  }
  

  signUp({
    _id: 'newUserId',
    username: 'NewUser',
    email: 'newuser@gmail.com',
    password: 'newpassword',
    createdAt: '08/01/2020 10:30 AM',
    isLoggedIn: false
  });
  
  signIn('newuser@gmail.com', 'newpassword');
  
  rateProduct('eedfcf', 'fg12cy', 4);
  averageRating('eedfcf');
  
  likeProduct('aegfal', 'fg12cy');
  likeProduct('aegfal', 'fg12cy');
  
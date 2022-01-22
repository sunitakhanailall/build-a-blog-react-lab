import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import RecentPhotos from './components/recentphotoscard';
import RecentArticles from './components/recentArticles';
import RecentComments from './components/recentComments';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <h1 class="section-title">Recent Photos (6)</h1>
      <div class="container">
      <RecentPhotos/>
      <RecentPhotos/>
      <RecentPhotos/>
      <RecentPhotos/>
      <RecentPhotos/>
      <RecentPhotos/>
      </div>

      <h1 class="section-title">Recent Articles (3)</h1>
      <RecentArticles/>
      <RecentArticles/>
      <RecentArticles/>
      <h1 class="section-title">Recent Comments (5)</h1>
      <RecentComments/>
      <RecentComments/>
      <RecentComments/>
      <RecentComments/>
      <RecentComments/>
      <footer>
          <Footer/>
      </footer>
    </div>     
  );
}

export default App;
import React, { Component } from 'react'
import Comments from './Comments.js'
import SharePost from './SharePost.js'
class ArticleLinks extends Component {
  render() {
    return (
        <div className="article-links">
            <Comments />
            <SharePost />
            </div>
    )
  }
}

export default ArticleLinks
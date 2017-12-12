/users
  uid
    name
    uid
    avatar

/ducks
  duckId
    avatar
    duckId
    name
    text
    timestamp
    uid
    
/likeCount
  duckId

/usersDucks
  uid
    duckId
      avatar
      duckId
      name
      text
      timestamp
      uid

/replies
  duckId
    replyId
      name
      comment
      uid
      timestamp
      avatar
  
/userLikes
  uid
    duckId

/users
  uid
    info
  ducks
    duckid
      replies
      info
      usersWhoHaveLiked
    likes
      duckId

/ducks
  duckId
    replies
    info

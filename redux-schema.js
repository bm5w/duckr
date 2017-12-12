{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar
      }
    }
  },
  modal: {
    duck,
    isOpen
  },
  ducks: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      info: {
        avatar,
        duckId,
        name,
        text,
        timestamp,
        uid
      }
    }
  },
  userDucks: {
    [uid] : {
      lastUpdated,
      duckIds: [duckId, duckId, duckId]
    }
  },
  likeCount: {
    [duckId]: 0
  },
  userLikes: {
    [duckId]: true
  },
  replies: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      replies {
        [replyId]: {
          name,
          reply,
          uid,
          timestamp,
          avatar,
          replyId
        }
      }
    }
  },
  listeners: {
    [listenersId]: true
  },
  feed: {
    isFetching,
    error,
    newDucksAvailable,
    duckIdsToAdd: [duckId, duckId]
    duckIds: [duckId, duckId]
  }
}


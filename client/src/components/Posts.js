import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {useTransition, animated} from 'react-spring'
import {FaRegBell} from 'react-icons/fa'
import {Text, Block, Button, NotificationIcon,PostSkeleton} from '../components'

import PostItem from './PostItem';
import PostForm from './PostForm';

import { getPosts } from '../redux/actions/data.actions';
import { toggleShowRightSideNav } from '../redux/actions/ui.actions';

const Posts = ({ getPosts, data: { posts }, showRightSideNav, toggleShowRightSideNav, newNotification}) => {

  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
  }, [getPosts]);

  const transitions = useTransition(posts, item => item._id, {
    from: { opacity:0 },
    enter: { opacity: 1},
    leave: { opacity:0 },
  })

  return(
    <>
        <Block row middle space={"between"} margin={"0px 0px 16px 0px"}>
        <Text h1>Add a Comment</Text>
        <Block row justify={"flex-end"} flex={"0.2"} hide={"desktop"}>
          <Button icon onClick={() => toggleShowRightSideNav(showRightSideNav)}>
            {newNotification && (<NotificationIcon/>)}
            <FaRegBell />
          </Button>
        </Block>
      </Block>
      <PostForm />
      <Text h2 style={{marginTop:"32px"}}>Comments</Text>
      <Block margin={"16px 0px"}>
      {posts && posts.length > 0 ? transitions.map(({item,props,key}) => (
      <animated.div key={key} style={props}>
        <PostItem  post={item}/>
      </animated.div>
      )) : (
        <PostSkeleton/>
      )}
        
      </Block>
    </>
  );
};

const mapStateToProps = state => ({
  data: state.data,
  showRightSideNav: state.ui.showRightSideNav,
  newNotification: state.ui.newNotification
});

export default connect(
  mapStateToProps,
  { getPosts,
  toggleShowRightSideNav }
)(Posts);
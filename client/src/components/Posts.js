import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {useTransition, animated} from 'react-spring'
import {Text, Block,PostSkeleton} from '../components'

import PostItem from './PostItem';
import PostForm from './PostForm';
import {ReactComponent as Avatar} from '../assets/avataaars.svg'

import { getPosts } from '../redux/actions/data.actions';
import { toggleShowRightSideNav } from '../redux/actions/ui.actions';

const Posts = ({ getPosts, data: { posts }, user}) => {

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
      <Block row middle card>
        <Block row middle flex={"0.5"}>
          <Avatar style={{maxWidth:"54px", maxHeight: "54px"}}/>
          <Text h1 style={{marginRight: "16px"}}>{user && `${user.name}`}</Text>
        </Block>
        <Block flex={"2"}>
          <PostForm />
        </Block>

      </Block>
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
  newNotification: state.ui.newNotification,
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  { getPosts,
  toggleShowRightSideNav }
)(Posts);
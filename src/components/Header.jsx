import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  let sourceUrl = utils.getSourceUrl(props.url);

  return (
    <HeaderWrapper>
      <RankContainer>
        {props.rank}
      </RankContainer>

      <Title href={props.url}>
        {props.title}
      </Title>

      <SourceContainer>
        (<SourceLink href={"http://" + sourceUrl}>{sourceUrl}</SourceLink>)
      </SourceContainer>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  rank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

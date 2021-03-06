import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import colors from 'styles/colors';
import { SearchIcon } from 'components/common/Icons';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.bg};
  border-radius: 1rem;
  height: 2.5rem;
  width: 42rem;
  display: flex;
  align-items: center;

  box-shadow: inset 5px 5px 10px #cecece, inset -5px -5px 10px #ffffff;

  @media (max-width: 1511px) {
    display: none;
  }
`;

const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.75rem;

  svg {
    fill: ${colors.gray[4]};

    ${(props) =>
      props.selected &&
      css`
        fill: ${colors.primary[2]};
      `}
  }
`;

const SearchForm = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 1.5rem;
    font-size: 0.875rem;
    /* background-color: ${colors.bg}; */
    background-color: transparent;
    margin-right: 1rem;
    border: 0;
    outline: 0;

    &::placeholder {
      color: ${colors.gray[4]};
    }

    &:focus {
    background-color: transparent;
      /* background-color: ${colors.white}; */
    }

    ${(props) =>
      props.selected &&
      css`
        background-color: #f1f1f1;
      `}
  }
`;

const SearchBar = () => {
  const [selected, setSelected] = useState(false);

  const handleFocus = () => {
    setSelected(true);
  };

  const handleBlur = () => {
    setSelected(false);
  };

  return (
    <Wrapper selected={selected}>
      <SearchIconWrapper selected={selected}>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchForm>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요"
          onFocus={handleFocus}
          onBlur={handleBlur}
          selected={selected}
        />
      </SearchForm>
    </Wrapper>
  );
};

export default SearchBar;

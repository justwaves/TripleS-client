export const platformMap = {
  velog: {
    // icon: VelogIcon,
    icon:
      'https://media.vlpt.us/images/velog/profile/9aa07f66-5fcd-41f4-84f2-91d73afcec28/green%20favicon.png?w=240',
  },
  medium: {
    // icon: MediumIcon,
    icon: 'https://api.surfit.io/v1/channel/logo/w6rbw/1x',
  },
  d2: {
    // icon: D2Icon,
    icon: 'https://d2.naver.com/static/img/app/about/about_d2_img.png',
  },
  brunch: {
    // icon: BrunchIcon,
    icon:
      'https://lh3.googleusercontent.com/NhB6dVh-3h-6CSFObv_zxTW8Kpb95HDNXk8L2wknBdafAp2Sm4ucSwacBtGEp4fBhw',
  },
  festa: {
    // icon: FestaIcon,
    icon: 'https://festa.io/favicon/android-icon-144x144.png',
  },
};

// const getImageSize = (src) => {
//   const img = new Image();
//   img.src = src;

//   const imgWidth = img.width;
//   const imgHeight = img.height;

//   return { imgWidth, imgHeight };
// };

// const defineCardType = (ratio) => {
//   let type;
//   if (!ratio) {
//     type = 3;
//   }

//   // 사진 크게
//   if (ratio < 1.33) {
//     type = 1;
//   }
//   // 사진 작게
//   if (ratio >= 1.33) {
//     type = 2;
//   }
//   // 사진 없음
//   if (ratio > 1.82) {
//     type = 3;
//   }

//   return type;
// };

const getShortenTitle = (text, cardType) => {
  let length = 0;
  let realLength = 0;

  let textLength = 34;
  if (cardType !== 1) {
    textLength = 64;
  }

  const strArr = Array.from(text);

  strArr.forEach((s) => {
    if (length < textLength) {
      if (escape(s.charAt(s)).length === 6) {
        length += 1;
      }
      length += 1;
      realLength += 1;
    }
  });

  const shortenText = text.slice(0, realLength);

  if (text === shortenText) {
    return text;
  }

  return `${shortenText}...`;
};

// eslint-disable-next-line consistent-return
const getShortenDescription = (text, cardType) => {
  let length = 0;
  let realLength = 0;

  let textLength;

  if (cardType === 1) {
    textLength = 80;
  }

  if (cardType === 2) {
    textLength = 130;
  }

  if (cardType === 3) {
    textLength = 300;
  }

  if (text) {
    const strArr = Array.from(text);

    strArr.forEach((s) => {
      if (length < textLength) {
        if (escape(s.charAt(s)).length === 6) {
          length += 1;
        }
        length += 1;
        realLength += 1;
      }
    });
    const shortenText = text.slice(0, realLength);

    if (text === shortenText) {
      return text;
    }

    return `${shortenText}...`;
  }
};

export const mapCardList = (cardList) => {
  const newCardList = cardList.map((card) => {
    let logo;
    if (card.platform) {
      logo = platformMap[card.platform].icon;
    }
    if (!card.platform) {
      logo = platformMap.festa.icon;
    }
    // const { imgWidth, imgHeight } = getImageSize(card.image);

    // const ratio = imgWidth / imgHeight;

    // const cardType = defineCardType(ratio, card.title);
    let cardType = 2;

    if (!card.description) {
      cardType = 1;
    }

    if (card.image === 'None') {
      cardType = 3;
    }

    let shortenTitle = getShortenTitle(card.title, cardType);
    // const shortenTitle = getShortenTitle(card.title, cardType);

    let shortenDescription;
    if (card.description) {
      // shortenDescription = getShortenDescription(card.description, cardType);
      shortenDescription = getShortenDescription(card.description, cardType);
    }
    if (!card.description) {
      shortenDescription = '';
      shortenTitle = card.title;
    }

    const newCard = {
      ...card,
      logo,
      type: cardType,
      title: shortenTitle,
      description: shortenDescription,
    };
    return newCard;
  });

  return newCardList;
};

export default null;

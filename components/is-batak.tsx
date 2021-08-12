import { chakra, ChakraComponent } from '@chakra-ui/react';
import { FC } from 'react';

export const IsBatak: FC<Omit<ChakraComponent<'svg'>, 'onChange'> & { onClick: () => void }> = (props) => {
  return (
    <chakra.svg width="104" height="181" viewBox="0 0 104 181" fill="none" _hover={{ cursor: 'pointer' }} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.1775 15.6518C60.1775 8.78314 54.4438 3.21532 47.3676 3.21532C43.1405 3.21532 39.403 5.21242 37.0699 8.27791C34.7364 5.21283 30.9989 3.21532 26.7714 3.21532C19.6961 3.21532 13.9611 8.78355 13.9611 15.6518C13.9611 22.1089 19.0298 27.4139 25.5153 28.0272V65.3995H48.6237V28.0272C55.1104 27.4143 60.1775 22.1094 60.1775 15.6518Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.6237 65.3995H25.5153V28.0271C19.0299 27.4139 13.9611 22.1089 13.9611 15.6518C13.9611 8.78354 19.6961 3.21531 26.7714 3.21531C29.8126 3.21531 32.6002 4.24903 34.7939 5.97028C35.6497 6.64171 36.4151 7.41777 37.0699 8.2779C37.7247 7.41765 38.49 6.64153 39.3457 5.97007C41.5393 4.24881 44.3268 3.21531 47.3676 3.21531C54.4438 3.21531 60.1775 8.78313 60.1775 15.6518C60.1775 22.1094 55.1104 27.4143 48.6237 28.0271V65.3995ZM51.839 30.6826V68.6148H22.3V30.6823C15.674 28.8018 10.7458 22.8415 10.7458 15.6518C10.7458 6.91878 18.0107 0 26.7714 0C30.6902 0 34.2831 1.38177 37.0697 3.67473C39.8563 1.3815 43.4492 0 47.3676 0C56.1294 0 63.3928 6.91857 63.3928 15.6518C63.3928 22.8415 58.4661 28.8023 51.839 30.6826Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3667 15.8527C17.3667 9.01193 21.5519 3.46588 27.8115 3.46588C30.1626 3.46588 32.5824 4.50263 34.6383 5.87333C32.467 4.21921 29.7465 3.21532 26.7723 3.21532C19.6969 3.21532 13.9619 8.78396 13.9619 15.6518C13.9619 22.1089 19.0307 27.4139 25.5162 28.0272V65.3995H27.5884V26.4014C21.851 25.791 17.3667 22.2835 17.3667 15.8527Z"
        fill="#D5D5D5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0136 15.8527C19.0136 9.01194 23.1097 3.83146 29.3692 3.83146C31.7204 3.83146 33.4747 5.13069 35.5306 6.50138C33.3593 4.84726 31.3166 3.4207 28.3423 3.4207C21.267 3.4207 15.6088 8.78397 15.6088 15.6518C15.6088 22.109 20.6776 27.4139 27.163 28.0272V65.3996H29.2353V26.4014C23.4978 25.791 19.0136 22.2835 19.0136 15.8527Z"
        fill="#D5D5D5"
      />
      <path d="M25.467 40.5943L31.0122 57.6407L24.0293 47.9879L25.467 40.5943Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.7385 129.85C95.7291 129.714 95.7167 129.586 95.7065 129.451C95.5643 124.282 94.5851 119.324 92.8784 114.715C90.0955 106.578 85.67 101.171 80.6592 96.604C80.6086 96.5588 80.5589 96.5128 80.5092 96.4676C69.5449 86.5343 55.8453 80.5175 50.4101 58.7818C49.8412 57.3955 48.6332 51.6749 48.6332 51.6749C48.6332 51.6749 45.0366 59.7114 43.3007 61.4468C40.5725 58.719 38.8563 46.3449 38.8563 46.3449C38.8563 46.3449 30.3992 58.7679 29.0799 64.1118C27.8907 64.1118 25.5276 54.3193 25.524 51.6749C25.524 51.5196 20.4429 66.1755 16.6368 76.5487C8.65782 98.2947 2.9146 111.639 3.30482 130.738C3.30482 156.25 23.9968 176.932 49.5213 176.932C75.047 176.932 95.7389 156.25 95.7389 130.738C95.7389 130.627 95.7315 130.518 95.7303 130.408C95.7332 130.222 95.7385 130.04 95.7385 129.85Z"
        fill="#B94D00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M98.9538 129.737V129.85C98.9538 130.014 98.9502 130.199 98.9475 130.335C98.947 130.358 98.9466 130.38 98.9462 130.4C98.9466 130.409 98.9469 130.419 98.9474 130.433L98.9482 130.455C98.9502 130.51 98.9542 130.617 98.9542 130.738C98.9542 158.027 76.8213 180.148 49.5213 180.148C22.2335 180.148 0.10741 158.045 0.0895248 130.771C-0.269667 112.886 4.60307 99.7562 11.363 81.5418C12.0941 79.5719 12.8472 77.5425 13.6183 75.4412C15.514 70.2744 17.7302 64.0331 19.476 59.0924C19.8951 57.9065 20.288 56.7929 20.6425 55.7881C21.0244 54.7055 21.3618 53.7492 21.6394 52.9646C21.9073 52.2075 22.1235 51.5993 22.2733 51.1835C22.3472 50.9784 22.4101 50.8059 22.4567 50.6821C22.4772 50.6276 22.5074 50.5483 22.5386 50.4728L22.5396 50.4705C22.5481 50.4498 22.5969 50.3312 22.6665 50.1971C22.6881 50.1555 22.7322 50.0724 22.7949 49.9721C22.7958 49.9706 22.7969 49.9688 22.7982 49.9668C22.8338 49.9093 23.0091 49.6271 23.3094 49.3419C23.5143 49.1633 24.1546 48.7643 24.6068 48.5918C25.4125 48.4603 27.0771 48.8586 27.8044 49.4073C28.1856 49.8703 28.5911 50.7094 28.6747 51.0334C28.7076 51.225 28.7361 51.5411 28.7392 51.6704C28.74 52.2715 28.9764 53.7931 29.3712 55.6036C30.127 54.229 30.9329 52.8498 31.7106 51.5621C32.8744 49.6351 33.9935 47.8829 34.8206 46.6139C35.2347 45.9786 35.5768 45.4623 35.8165 45.1034C35.9364 44.924 36.0307 44.7837 36.0956 44.6875C36.128 44.6394 36.1532 44.6023 36.1705 44.5767L36.1981 44.536C36.1983 44.5357 36.1985 44.5355 38.8563 46.3449C38.8563 46.3449 37.7408 47.9836 36.2568 50.3266C34.4708 53.1465 32.1512 56.9866 30.6002 60.2183C30.4549 60.5211 30.3164 60.8185 30.1856 61.1092C29.6787 62.2365 29.2894 63.2634 29.0799 64.1118C29.0425 64.1118 29.0039 64.1021 28.9643 64.0833C28.4593 63.843 27.7835 62.1143 27.1646 59.9889C26.9868 59.3786 26.8138 58.7357 26.6509 58.0859C26.3682 56.9585 26.1158 55.8105 25.922 54.7768C25.6766 53.4685 25.5249 52.3433 25.524 51.6749C25.524 51.6733 25.5234 51.6733 25.5223 51.6749C25.4941 51.7158 25.1143 52.7816 24.5008 54.5174C24.2594 55.2002 23.9819 55.9868 23.6755 56.8554C23.555 57.1967 23.4302 57.5507 23.3012 57.9161C21.4762 63.0879 18.8424 70.5374 16.6368 76.5488C15.8695 78.64 15.1228 80.6536 14.4003 82.602C7.60992 100.914 2.95213 113.476 3.30482 130.738C3.30482 156.25 23.9968 176.932 49.5213 176.932C75.047 176.932 95.7389 156.25 95.7389 130.738C95.7389 130.677 95.7367 130.617 95.7345 130.557C95.7327 130.508 95.7309 130.458 95.7303 130.408C95.7312 130.349 95.7324 130.291 95.7335 130.232C95.736 130.106 95.7385 129.98 95.7385 129.85C95.7331 129.773 95.7269 129.699 95.7206 129.624C95.7157 129.567 95.7109 129.51 95.7065 129.451C95.5643 124.282 94.5851 119.324 92.8784 114.715C90.0955 106.578 85.67 101.171 80.6592 96.604C80.624 96.5726 80.5892 96.5407 80.5546 96.509C80.5395 96.4952 80.5243 96.4814 80.5092 96.4676C78.1571 94.3367 75.6792 92.386 73.1839 90.4218C64.0475 83.2294 54.6793 75.8547 50.4101 58.7818C50.2454 58.3805 50.0272 57.6158 49.8001 56.7318C49.243 54.5626 48.6332 51.6749 48.6332 51.6749C48.6332 51.6749 47.611 53.959 46.3935 56.3548C46.0092 57.1108 45.6056 57.8779 45.2085 58.5879C44.5035 59.8483 43.8191 60.9285 43.3007 61.4468C43.3001 61.4462 43.2994 61.4455 43.2987 61.4448C42.6807 60.8256 42.1146 59.7115 41.6086 58.3586C40.7874 56.1625 40.1247 53.3372 39.6555 50.9783C39.1384 48.3783 38.8563 46.3449 38.8563 46.3449L36.1985 44.5355L40.8947 37.637L42.0411 45.9026L42.0412 45.9031L42.0418 45.9075L42.0448 45.9292C42.0477 45.9495 42.0522 45.981 42.0583 46.0232C42.0706 46.1076 42.0892 46.2345 42.1142 46.3986C42.1641 46.7269 42.239 47.2031 42.3374 47.7845C42.5347 48.9508 42.8239 50.5241 43.1929 52.1695C43.3655 52.9392 43.5523 53.7104 43.7515 54.4533C44.289 53.3808 44.7762 52.3569 45.1305 51.5978C45.3081 51.2173 45.4514 50.9053 45.5497 50.6897C45.5988 50.582 45.6367 50.4984 45.6619 50.4425L45.6901 50.3799L45.6982 50.3618M45.6985 50.3613L49.7366 41.3382L51.7791 51.0105L51.7792 51.011L51.7918 51.0703C51.8004 51.1109 51.8133 51.1712 51.83 51.2489C51.8633 51.4042 51.9118 51.6287 51.9718 51.9028C52.092 52.4519 52.2575 53.1958 52.44 53.9798C52.6232 54.7671 52.8194 55.5776 53.0011 56.265C53.092 56.6089 53.1752 56.9068 53.248 57.1472C53.2841 57.2668 53.3152 57.3638 53.3409 57.4394C53.348 57.4604 53.3544 57.4788 53.3601 57.4947C53.3645 57.5072 53.3685 57.5182 53.372 57.5277C53.3759 57.5385 53.379 57.5466 53.3813 57.5525L53.3839 57.559L53.3847 57.5611L53.473 57.7763L53.5294 58.0018C57.5102 73.9214 65.8717 80.5225 74.8602 87.6185C77.4407 89.6557 80.0729 91.7337 82.668 94.0848L82.6721 94.0885C82.7304 94.1415 82.7517 94.1613 82.7741 94.1817C82.7827 94.1895 82.7915 94.1974 82.8025 94.2073L82.8138 94.2174L82.825 94.2276C88.1048 99.0395 92.9017 104.871 95.9076 113.636C97.7181 118.538 98.758 123.8 98.9181 129.274C98.9262 129.373 98.941 129.553 98.946 129.625L98.9538 129.737"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.7004 174.908C24.0268 174.565 4.13031 154.465 4.13031 129.723C3.78524 112.834 8.3428 100.544 14.9873 82.6262C15.6932 80.7229 16.4226 78.756 17.1721 76.7133C19.4822 70.4174 22.2723 62.5089 24.0576 57.4486C25.1004 54.4928 25.8004 52.5088 25.8615 52.3857C25.8615 52.3841 25.8615 52.3824 25.8615 52.3808C25.8615 52.3232 25.1454 54.3529 24.0532 57.4486C22.268 62.5089 19.4778 70.4174 17.1678 76.7133C16.4177 78.7574 15.6879 80.7256 14.9816 82.6302C8.33809 100.546 3.7809 112.835 4.12594 129.723C4.12594 154.467 24.0246 174.568 48.7004 174.908ZM26.2972 55.6583C26.1564 56.0572 26.0058 56.4842 25.8466 56.9356C24.1296 61.8034 21.4077 69.5206 19.1579 75.6521C18.4353 77.6213 17.7322 79.5173 17.0518 81.3522C10.6506 98.6137 6.25959 110.455 6.59266 126.726C6.59266 150.772 26.0957 170.266 50.1518 170.266C74.2115 170.266 93.7145 150.772 93.7145 126.726C93.7145 126.671 93.7125 126.616 93.7105 126.562C93.7087 126.513 93.7069 126.464 93.7065 126.416C93.7072 126.341 93.7087 126.266 93.7103 126.192C93.7124 126.092 93.7145 125.991 93.7145 125.888C93.7103 125.824 93.7047 125.762 93.6992 125.7C93.6937 125.638 93.6882 125.577 93.684 125.514C93.5867 121.979 93.068 118.549 92.1804 115.273C92.7741 117.034 93.2622 118.845 93.6373 120.696C93.1767 118.413 92.5438 116.192 91.7501 114.048C89.0278 106.088 84.6986 100.799 79.7968 96.3317L79.7847 96.3207L79.7837 96.3198C79.7388 96.2789 79.6945 96.2385 79.6501 96.1975C77.3491 94.1129 74.9249 92.2046 72.4839 90.283L72.4838 90.2829C63.5463 83.2475 54.3823 76.0336 50.2061 59.3323C49.8081 58.3624 49.0903 55.2241 48.7137 53.5151C47.6663 55.7539 45.4996 60.2077 44.2892 61.4169C44.1301 61.5704 43.7335 62.0124 43.617 62.1968C43.4862 62.1202 43.2982 61.9719 43.2624 61.9286L43.2514 61.9397C41.1582 59.8471 39.6741 51.9498 39.1312 48.64C36.9681 51.9352 31.4185 61.088 30.4434 65.0373C30.3024 65.0373 29.4569 64.7958 29.3396 64.5471L29.3396 64.5467C28.4888 64.545 27.0242 59.4224 26.2972 55.6583ZM43.9454 61.0699C43.9396 61.0776 43.9335 61.0855 43.9273 61.0935C45.7383 58.4793 48.4678 52.3804 48.4678 52.3804L48.4693 52.3876C48.3648 52.6206 45.7436 58.4483 43.969 61.038C43.9616 61.0483 43.9537 61.0589 43.9454 61.0699ZM38.9044 47.1711L38.9037 47.1664C38.9037 47.1664 31.7568 57.6649 29.7121 63.3436C29.8365 63.0133 29.9508 62.7321 29.9797 62.6613C32.2783 56.9364 38.7474 47.4021 38.9044 47.1711Z"
        fill="#E76203"
      />
      <rect x="89.5452" y="110.834" width="6.98288" height="12.7335" fill="#E76203" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.8409 118.808C41.9364 120.309 40.8971 124.009 39.7747 128.005C39.1254 130.317 38.4483 132.727 37.5599 134.868C36.9767 136.274 35.4008 138.85 32.6528 139.764C28.3346 141.201 17.3427 142.115 14.3985 141.331C12.9142 140.936 11.0617 140.174 10.0803 137.61C9.64767 136.48 9.22115 135.433 8.79792 134.395C7.84545 132.058 6.9096 129.761 5.95833 126.642C3.77067 119.47 3.69683 113.324 7.33231 112.149C12.0343 110.629 29.9049 109.407 37.9525 109.407C40.5312 109.407 42.3124 109.351 43.8427 109.302C48.9391 109.14 54.1612 109.162 59.2575 109.324C60.7879 109.373 62.5691 109.429 65.1478 109.429C73.1954 109.429 90.9998 110.874 95.7679 112.171C97.1443 112.546 97.1831 127.348 94.3023 134.416C93.8791 135.455 93.4526 136.501 93.02 137.632C92.0386 140.196 90.186 140.958 88.7018 141.353C85.7575 142.136 74.7657 141.222 70.4474 139.786C67.6995 138.872 66.1235 136.295 65.5404 134.89C64.6519 132.749 63.9748 130.338 63.3256 128.027C62.2031 124.031 61.1638 120.33 59.2593 118.83C55.7061 116.031 53.5019 116.273 51.408 116.284C49.2306 116.296 47.1726 116.184 43.8409 118.808ZM38.5413 113.324C39.8857 113.827 39.3597 115.766 38.811 117.788L38.8109 117.789C38.7188 118.128 38.626 118.47 38.5413 118.808C38.1427 120.399 36.4851 125.759 35.3338 129.481L35.3336 129.482C34.7841 131.259 34.3499 132.663 34.2231 133.105C33.8305 134.476 32.4565 136.631 30.2974 137.023C28.1383 137.414 17.7353 138.589 15.9688 138.394C14.2463 138.203 13.8301 137.267 13.0826 135.586L13.0245 135.456C12.2394 133.693 8.51002 123.313 7.92117 121.55C7.33232 119.788 6.74348 116.262 8.70631 115.675C10.6691 115.087 36.9711 112.737 38.5413 113.324ZM64.5589 113.346C63.2145 113.849 63.7405 115.788 64.2892 117.81C64.3814 118.15 64.4742 118.492 64.5589 118.83C64.9575 120.421 66.615 125.78 67.7663 129.503L67.7666 129.504C68.3161 131.281 68.7503 132.684 68.8772 133.127C69.2697 134.498 70.6437 136.653 72.8028 137.044C74.9619 137.436 85.3649 138.611 87.1315 138.415C88.8539 138.224 89.2701 137.289 90.0176 135.608L90.0757 135.477C90.8609 133.715 94.5902 123.335 95.1791 121.572C95.7679 119.809 96.3568 116.284 94.3939 115.696C92.4311 115.109 66.1292 112.759 64.5589 113.346Z"
        fill="#B94D00"
      />
      <path
        d="M63.5641 128.702C63.5641 132.824 58.9457 138.359 53.2486 138.359C47.5515 138.359 42.9331 132.824 42.9331 128.702C42.9331 124.581 47.5515 123.435 53.2486 123.435C58.9457 123.435 63.5641 124.581 63.5641 128.702Z"
        fill="black"
      />
      <rect x="51.7122" y="136.165" width="3.07269" height="10.535" fill="black" />
      <path
        d="M38.5472 144.505H60.9339C60.9339 151.729 54.2618 157.085 46.8873 157.454C38.1082 157.893 38.5472 148.455 38.5472 148.455V144.505Z"
        fill="black"
      />
      <path
        d="M18.4362 122.557C18.4362 127.406 22.3667 131.336 27.2153 131.336C32.0639 131.336 35.9944 127.406 35.9944 122.557C35.9944 117.708 32.0639 113.778 27.2153 113.778C22.3667 113.778 18.4362 117.708 18.4362 122.557Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.2153 128.925C23.6985 128.925 20.8476 126.074 20.8476 122.557C20.8476 119.04 23.6985 116.189 27.2153 116.189C30.732 116.189 33.5829 119.04 33.5829 122.557C33.5829 126.074 30.732 128.925 27.2153 128.925ZM27.2153 131.336C22.3667 131.336 18.4362 127.406 18.4362 122.557C18.4362 117.708 22.3667 113.778 27.2153 113.778C32.0639 113.778 35.9944 117.708 35.9944 122.557C35.9944 127.406 32.0639 131.336 27.2153 131.336Z"
        fill="black"
      />
      <path
        d="M20.192 122.557C20.192 125.466 22.5503 127.824 25.4595 127.824C28.3686 127.824 30.727 125.466 30.727 122.557C30.727 119.648 28.3686 117.289 25.4595 117.289C22.5503 117.289 20.192 119.648 20.192 122.557Z"
        fill="black"
      />
      <path
        d="M22.3868 121.021C22.3868 121.869 23.0747 122.557 23.9232 122.557C24.7717 122.557 25.4595 121.869 25.4595 121.021C25.4595 120.172 24.7717 119.484 23.9232 119.484C23.0747 119.484 22.3868 120.172 22.3868 121.021Z"
        fill="white"
      />
      <path
        d="M68.0382 122.557C68.0382 127.406 71.9688 131.336 76.8173 131.336C81.6659 131.336 85.5965 127.406 85.5965 122.557C85.5965 117.708 81.6659 113.778 76.8173 113.778C71.9688 113.778 68.0382 117.708 68.0382 122.557Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.8173 128.925C73.3006 128.925 70.4497 126.074 70.4497 122.557C70.4497 119.04 73.3006 116.189 76.8173 116.189C80.3341 116.189 83.185 119.04 83.185 122.557C83.185 126.074 80.3341 128.925 76.8173 128.925ZM76.8173 131.336C71.9688 131.336 68.0382 127.406 68.0382 122.557C68.0382 117.708 71.9688 113.778 76.8173 113.778C81.6659 113.778 85.5965 117.708 85.5965 122.557C85.5965 127.406 81.6659 131.336 76.8173 131.336Z"
        fill="black"
      />
      <path
        d="M69.794 122.557C69.794 125.466 72.1523 127.824 75.0615 127.824C77.9706 127.824 80.3289 125.466 80.3289 122.557C80.3289 119.648 77.9706 117.289 75.0615 117.289C72.1523 117.289 69.794 119.648 69.794 122.557Z"
        fill="black"
      />
      <path
        d="M71.9888 121.021C71.9888 121.869 72.6766 122.557 73.5251 122.557C74.3736 122.557 75.0615 121.869 75.0615 121.021C75.0615 120.172 74.3736 119.484 73.5251 119.484C72.6766 119.484 71.9888 120.172 71.9888 121.021Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.2517 115.933C42.3472 117.433 41.3079 121.133 40.1855 125.13C39.5362 127.441 38.8591 129.852 37.9707 131.993C37.3875 133.398 35.8115 135.975 33.0636 136.889C28.7454 138.325 17.7535 139.239 14.8093 138.456C13.325 138.061 11.4724 137.299 10.491 134.735C10.0584 133.604 9.63191 132.558 9.20867 131.519C8.25621 129.182 7.32036 126.886 6.36909 123.767C6.24749 123.368 6.13302 122.974 6.02123 122.589C5.33403 120.221 4.74794 118.201 3.22856 117.696C3.02017 117.626 2.82467 117.569 2.63867 117.515C1.76047 117.259 1.0942 117.064 0.284313 115.933C-0.269548 115.159 -0.0509157 112.576 1.26573 112.016C3.22856 110.841 5.78024 109.808 7.74307 109.274C12.5112 107.976 30.3156 106.532 38.3632 106.532C40.9419 106.532 42.7231 106.475 44.2535 106.427C49.3499 106.265 54.5719 106.286 59.6683 106.449C61.1986 106.497 62.9798 106.554 65.5585 106.554C73.6061 106.554 91.4106 107.998 96.1787 109.296C98.1415 109.83 100.693 110.863 102.656 112.038C103.973 112.598 104.191 115.181 103.637 115.955C102.828 117.086 102.161 117.281 101.283 117.537C101.097 117.591 100.901 117.648 100.693 117.717C99.1738 118.223 98.5877 120.242 97.9005 122.611L97.9003 122.611C97.7886 122.996 97.6742 123.39 97.5527 123.789C96.6014 126.908 95.6656 129.204 94.7131 131.541C94.2898 132.58 93.8633 133.626 93.4307 134.757C92.4493 137.321 90.5968 138.083 89.1125 138.478C86.1683 139.261 75.1764 138.347 70.8582 136.911C68.1102 135.997 66.5343 133.42 65.9511 132.015C65.0627 129.874 64.3856 127.463 63.7363 125.151C62.6139 121.155 61.5746 117.455 59.67 115.955C56.1168 113.156 53.9126 113.397 51.8187 113.409C49.6414 113.421 47.5833 113.309 44.2517 115.933ZM38.9521 110.449C40.2965 110.952 39.7705 112.891 39.2218 114.913L39.2217 114.913C39.1295 115.253 39.0367 115.595 38.9521 115.933C38.5535 117.524 36.8959 122.883 35.7446 126.606L35.7444 126.607C35.1949 128.383 34.7607 129.787 34.6339 130.23C34.2413 131.601 32.8673 133.756 30.7082 134.147C28.5491 134.539 18.1461 135.714 16.3795 135.518C14.6571 135.327 14.2409 134.391 13.4934 132.711L13.4353 132.58C12.6502 130.818 8.92078 120.438 8.33193 118.675C7.74308 116.912 7.15423 113.387 9.11706 112.799C11.0799 112.212 37.3818 109.862 38.9521 110.449ZM64.9697 110.471C63.6253 110.974 64.1513 112.913 64.7 114.935C64.7921 115.275 64.885 115.617 64.9697 115.955C65.3682 117.545 67.0257 122.905 68.177 126.627L68.1774 126.628C68.7269 128.405 69.1611 129.809 69.2879 130.252C69.6805 131.623 71.0544 133.777 73.2136 134.169C75.3727 134.561 85.7757 135.736 87.5422 135.54C89.2647 135.349 89.6809 134.413 90.4284 132.733L90.4865 132.602C91.2716 130.84 95.001 120.459 95.5898 118.697C96.1787 116.934 96.7675 113.409 94.8047 112.821C92.8419 112.234 66.5399 109.883 64.9697 110.471Z"
        fill="black"
      />
    </chakra.svg>
  );
};
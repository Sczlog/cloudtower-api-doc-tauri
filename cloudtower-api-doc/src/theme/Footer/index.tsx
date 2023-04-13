import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import i18next from '../../../swagger/i18n';
import styles from "./styles.module.scss";

const ZhLogo = () => (
  <svg
    width="231"
    height="32"
    viewBox="0 0 231 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M167.31 6.53798V8.75998H171.116V13.446C171.116 13.578 171.094 13.688 171.094 13.82H166.188V16.042H170.94C170.764 17.538 170.478 18.836 170.082 19.936C169.466 21.476 168.278 22.774 166.496 23.808L167.75 25.766C169.708 24.776 171.116 23.346 171.974 21.498C172.612 20.024 173.052 18.198 173.272 16.042H178.97V25.48H181.28V16.042H185.834V13.82H181.28V8.75998H184.734V6.53798H167.31ZM173.448 8.75998H178.97V13.82H173.426C173.426 13.688 173.448 13.578 173.448 13.446V8.75998Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M189.134 12.61H194.48C192.984 17.12 190.762 20.684 187.792 23.324L189.002 25.458C191.356 23.544 193.314 20.992 194.876 17.824C195.58 19.034 196.592 20.178 197.934 21.278C196.438 22.18 194.612 23.016 192.478 23.786L193.688 25.942C196.152 24.974 198.242 23.896 199.958 22.708C201.74 23.83 203.94 24.864 206.558 25.832L207.746 23.654C205.48 22.906 203.522 22.092 201.872 21.19C203.434 19.738 204.49 18.154 205.018 16.438V14.502H196.306C196.504 13.886 196.702 13.27 196.922 12.61H207.504V10.432H197.494C197.868 8.93598 198.176 7.35198 198.44 5.65798L196.086 5.37198C195.844 7.13198 195.514 8.82598 195.118 10.432H192.082L193.182 6.44998L190.894 6.07598L189.134 12.61ZM196.548 16.57H202.686C202.092 17.758 201.146 18.902 199.848 19.958C198.374 18.902 197.274 17.78 196.548 16.57ZM202.136 5.34998L200.574 6.84598C202.202 8.07798 203.434 9.26598 204.292 10.388L205.92 8.73798C204.908 7.59398 203.632 6.47198 202.136 5.34998Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M211.926 7.48398V9.61798H217.888V11.576H210.166V13.732H219.23C216.282 15.316 213.136 16.504 209.814 17.274L210.782 19.408C211.926 18.99 213.026 18.594 214.082 18.198V25.854H216.414V25.062H224.994V25.854H227.304V15.558H220.198C221.122 15.074 221.958 14.634 222.706 14.194L223.432 13.732H229.944V11.576H226.27C227.458 10.52 228.602 9.35398 229.658 8.05598L227.92 6.77998C226.49 8.53998 224.752 10.124 222.728 11.576H220.22V9.61798H224.95V7.48398H220.22V5.39398H217.888V7.48398H211.926ZM216.414 21.234H224.994V23.038H216.414V21.234ZM224.994 19.254H216.414V17.538H224.994V19.254Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M152 0.5C152 0.223858 152.224 0 152.5 0C152.776 0 153 0.223858 153 0.5V31.5C153 31.7761 152.776 32 152.5 32C152.224 32 152 31.7761 152 31.5V0.5Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M55.4236 9.15787C55.4236 9.88867 56.0963 10.2946 57.3871 10.3219C59.9952 10.4033 63.1413 10.9444 63.1679 14.6261C63.195 16.7917 61.5815 19.1199 57.36 19.1199C55.3971 19.1199 53.3803 18.7412 51.1213 16.8457L52.7887 14.0847C54.4292 15.4382 56.0155 15.7357 57.4136 15.763C58.5432 15.79 59.4304 15.33 59.4039 14.6261C59.4039 14.0035 58.9463 13.4894 57.1446 13.4354C54.6711 13.3266 51.5786 12.2982 51.5786 9.15787C51.5786 6.12607 54.4292 4.85336 57.3064 4.85336C59.35 4.85336 60.9902 5.36777 62.3882 6.58589L60.479 9.02241C59.484 8.31842 58.5432 8.04817 57.3329 8.04817C56.0692 8.04817 55.4236 8.508 55.4236 9.15787ZM75.9693 7.42531C77.1525 5.61139 78.4159 4.90741 80.3788 4.90741C83.1487 4.90741 85.6761 6.31561 85.6761 11.2965V18.6056H81.7768V11.3777C81.7768 9.69927 81.3201 8.58933 79.7603 8.58933C78.2276 8.58933 77.3134 9.91542 77.3134 11.4317V18.6056H73.4952V11.4317C73.4952 9.67198 72.7963 8.50797 71.2094 8.50797C69.6767 8.50797 68.8164 9.94295 68.8164 11.4587V14.6489V18.6056H64.9442V14.6489V5.23248H68.3323H68.8164V6.43696C69.6791 5.24517 71.0557 4.9347 72.0968 4.9347C73.5488 4.9347 75.1086 5.47592 75.9693 7.42531ZM107.676 5.25974V6.70526C108.563 5.45984 109.774 4.93467 111.253 4.93467C112.517 4.93467 113.566 5.31385 114.506 6.15282L112.893 9.2387C112.248 8.77888 111.576 8.56201 110.769 8.56201C109.101 8.56201 107.676 9.64514 107.676 11.6482V18.6056H103.804V5.25974H107.408H107.676ZM121.257 13.5974C121.257 15.0049 122.037 15.3842 122.763 15.3842C123.22 15.3842 123.946 15.276 124.376 15.0591L125.264 18.3081C124.296 18.6872 123.516 18.8491 122.467 18.9031C119.59 19.0387 117.412 17.7667 117.412 13.5974V8.56195H115.046V5.31376H117.412V3.82683L121.284 1.57776V5.31376H124.645V8.56195H121.257V13.5974ZM90.8151 11.9191C90.8151 14.1387 92.3744 15.4382 94.3107 15.4382C96.4884 15.4382 97.8331 13.7329 97.8331 12.0546C97.8331 10.1324 96.623 8.37259 94.3107 8.37259C92.3744 8.37259 90.8151 9.69915 90.8151 11.9191ZM97.8331 6.77556V5.23236H97.9674H101.598V18.6056H98.1021H97.8331V16.9966C96.9263 18.3489 95.0674 18.877 93.7995 18.9031C89.8202 18.9304 86.943 16.3317 86.943 11.9191C86.943 7.47951 89.9813 4.88071 93.9071 4.93482C95.5741 4.93482 97.1342 5.58422 97.8331 6.77556ZM135.247 11.7682L140 18.6056H135.375L132.939 15.0996L130.509 18.6056H125.857L130.616 11.7583L126.099 5.25971H130.723L132.928 8.43212L135.134 5.25971H139.758L135.247 11.7682ZM56.8178 23.179L55.4531 24.9088H55.2762L53.9565 23.1667V26.2758H52.9707V21.8246H54.1012L55.3903 23.5352L56.6852 21.8246H57.803V26.2758H56.8178V23.179ZM62.6856 24.6287L63.4494 22.8233L64.2075 24.6287H62.6856ZM62.3123 25.5063H64.5802L64.9022 26.2698H65.9699L63.9865 21.818H62.9129L60.9294 26.2698H61.9903L62.3123 25.5063ZM72.7466 21.8431L70.9526 23.9806L72.9047 26.2123V26.2698H71.7167L70.0806 24.3684V26.2698H69.0952V21.818H70.0806V23.6564L71.5529 21.818H72.7466V21.8431ZM76.0041 26.2698H79.3713V25.3539H76.9708V24.4575H79.1502V23.5859H76.9708V22.7276H79.2831V21.818H76.0041V26.2698ZM86.9588 21.818H87.9377V26.2698H86.9588V21.818ZM91.1941 22.7024H92.5397V26.2698H93.5186V22.7024H94.8642V21.818H91.1941V22.7024ZM104.719 22.8928C104.473 22.6319 104.043 22.5179 103.696 22.5179C103.26 22.5179 102.906 22.7024 102.906 23.0074C102.906 23.4144 103.292 23.4903 103.86 23.5415C104.732 23.618 105.559 23.9545 105.559 24.985C105.559 25.9774 104.649 26.4096 103.696 26.4159C102.931 26.4225 102.136 26.1235 101.763 25.5003L102.351 24.8833C102.691 25.3218 103.253 25.5132 103.702 25.5132C104.226 25.5132 104.587 25.3026 104.587 24.985C104.592 24.6095 104.296 24.4383 103.696 24.3876C102.761 24.2982 101.927 24.0634 101.94 23.0137C101.946 22.1299 102.78 21.659 103.69 21.659C104.372 21.659 104.884 21.812 105.338 22.3458L104.719 22.8928ZM109.872 21.818H108.892V26.2698H109.872V21.818ZM117.36 23.179L115.996 24.9088H115.819L114.499 23.1667V26.2758H113.513V21.8246H114.643L115.932 23.5352L117.227 21.8246H118.345V26.2758H117.36V23.179ZM124.074 24.1009H122.975V22.7594H124.074C124.542 22.7594 124.782 23.0773 124.782 23.4336C124.782 23.7896 124.548 24.1009 124.074 24.1009ZM122.975 26.2698V25.0105H124.074C125.198 24.9979 125.767 24.3042 125.767 23.4144C125.767 22.556 125.205 21.818 124.074 21.818H121.989V26.2698H122.975ZM130.048 21.818V25.3602H132.258V26.2698H129.062V21.818H130.048ZM135.51 26.2698H138.877V25.3539H136.477V24.4575H138.656V23.5859H136.477V22.7276H138.789V21.818H135.51V26.2698Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5057 24.5001L34.409 32L41.2905 27.9998V20.0002L35.2691 16.5L21.5057 24.5001Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.409 0L0 19.9999V28L6.8816 32L41.2905 12.0001V3.99977L34.409 0Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.88184 0L0 3.99977V12.0001L6.02153 15.4997L19.7851 7.49998L6.88184 0Z"
      fill="#001540"
      fillOpacity="0.3"
    />
  </svg>
);

const EnLogo = () => (
  <svg
    width="274"
    height="32"
    viewBox="0 0 274 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M172 24.5H166.578V8.5H172.109C173.698 8.5 175.063 8.82031 176.203 9.46094C177.349 10.0964 178.229 11.0104 178.844 12.2031C179.458 13.3958 179.766 14.8229 179.766 16.4844C179.766 18.151 179.456 19.5833 178.836 20.7812C178.221 21.9792 177.333 22.8984 176.172 23.5391C175.016 24.1797 173.625 24.5 172 24.5ZM169.477 21.9922H171.859C172.974 21.9922 173.904 21.7891 174.648 21.3828C175.393 20.9714 175.953 20.3594 176.328 19.5469C176.703 18.7292 176.891 17.7083 176.891 16.4844C176.891 15.2604 176.703 14.2448 176.328 13.4375C175.953 12.625 175.398 12.0182 174.664 11.6172C173.935 11.2109 173.029 11.0078 171.945 11.0078H169.477V21.9922Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M187.707 24.7344C186.504 24.7344 185.465 24.4844 184.59 23.9844C183.72 23.4792 183.051 22.7656 182.582 21.8438C182.113 20.9167 181.879 19.8255 181.879 18.5703C181.879 17.3359 182.113 16.2526 182.582 15.3203C183.056 14.3828 183.717 13.6536 184.566 13.1328C185.415 12.6068 186.413 12.3438 187.559 12.3438C188.298 12.3438 188.996 12.4635 189.652 12.7031C190.314 12.9375 190.897 13.3021 191.402 13.7969C191.913 14.2917 192.314 14.9219 192.605 15.6875C192.897 16.4479 193.043 17.3542 193.043 18.4062V19.2734H183.207V17.3672H190.332C190.327 16.8255 190.21 16.3438 189.98 15.9219C189.751 15.4948 189.431 15.1589 189.02 14.9141C188.613 14.6693 188.139 14.5469 187.598 14.5469C187.02 14.5469 186.512 14.6875 186.074 14.9688C185.637 15.2448 185.296 15.6094 185.051 16.0625C184.811 16.5104 184.689 17.0026 184.684 17.5391V19.2031C184.684 19.901 184.811 20.5 185.066 21C185.322 21.4948 185.678 21.875 186.137 22.1406C186.595 22.401 187.132 22.5312 187.746 22.5312C188.158 22.5312 188.53 22.474 188.863 22.3594C189.197 22.2396 189.486 22.0651 189.73 21.8359C189.975 21.6068 190.16 21.3229 190.285 20.9844L192.926 21.2812C192.759 21.9792 192.441 22.5885 191.973 23.1094C191.509 23.625 190.915 24.026 190.191 24.3125C189.467 24.5938 188.639 24.7344 187.707 24.7344Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M205.811 12.5L201.537 24.5H198.412L194.139 12.5H197.154L199.912 21.4141H200.037L202.803 12.5H205.811Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M212.672 24.7344C211.469 24.7344 210.43 24.4844 209.555 23.9844C208.685 23.4792 208.016 22.7656 207.547 21.8438C207.078 20.9167 206.844 19.8255 206.844 18.5703C206.844 17.3359 207.078 16.2526 207.547 15.3203C208.021 14.3828 208.682 13.6536 209.531 13.1328C210.38 12.6068 211.378 12.3438 212.523 12.3438C213.263 12.3438 213.961 12.4635 214.617 12.7031C215.279 12.9375 215.862 13.3021 216.367 13.7969C216.878 14.2917 217.279 14.9219 217.57 15.6875C217.862 16.4479 218.008 17.3542 218.008 18.4062V19.2734H208.172V17.3672H215.297C215.292 16.8255 215.174 16.3438 214.945 15.9219C214.716 15.4948 214.396 15.1589 213.984 14.9141C213.578 14.6693 213.104 14.5469 212.562 14.5469C211.984 14.5469 211.477 14.6875 211.039 14.9688C210.602 15.2448 210.26 15.6094 210.016 16.0625C209.776 16.5104 209.654 17.0026 209.648 17.5391V19.2031C209.648 19.901 209.776 20.5 210.031 21C210.286 21.4948 210.643 21.875 211.102 22.1406C211.56 22.401 212.096 22.5312 212.711 22.5312C213.122 22.5312 213.495 22.474 213.828 22.3594C214.161 22.2396 214.451 22.0651 214.695 21.8359C214.94 21.6068 215.125 21.3229 215.25 20.9844L217.891 21.2812C217.724 21.9792 217.406 22.5885 216.938 23.1094C216.474 23.625 215.88 24.026 215.156 24.3125C214.432 24.5938 213.604 24.7344 212.672 24.7344Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M223.229 8.5V24.5H220.4V8.5H223.229Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M231.371 24.7344C230.199 24.7344 229.184 24.4766 228.324 23.9609C227.465 23.4453 226.798 22.724 226.324 21.7969C225.855 20.8698 225.621 19.7865 225.621 18.5469C225.621 17.3073 225.855 16.2214 226.324 15.2891C226.798 14.3568 227.465 13.6328 228.324 13.1172C229.184 12.6016 230.199 12.3438 231.371 12.3438C232.543 12.3438 233.559 12.6016 234.418 13.1172C235.277 13.6328 235.941 14.3568 236.41 15.2891C236.884 16.2214 237.121 17.3073 237.121 18.5469C237.121 19.7865 236.884 20.8698 236.41 21.7969C235.941 22.724 235.277 23.4453 234.418 23.9609C233.559 24.4766 232.543 24.7344 231.371 24.7344ZM231.387 22.4688C232.022 22.4688 232.553 22.2943 232.98 21.9453C233.408 21.5911 233.725 21.1172 233.934 20.5234C234.147 19.9297 234.254 19.2682 234.254 18.5391C234.254 17.8047 234.147 17.1406 233.934 16.5469C233.725 15.9479 233.408 15.4714 232.98 15.1172C232.553 14.763 232.022 14.5859 231.387 14.5859C230.736 14.5859 230.194 14.763 229.762 15.1172C229.335 15.4714 229.014 15.9479 228.801 16.5469C228.592 17.1406 228.488 17.8047 228.488 18.5391C228.488 19.2682 228.592 19.9297 228.801 20.5234C229.014 21.1172 229.335 21.5911 229.762 21.9453C230.194 22.2943 230.736 22.4688 231.387 22.4688Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M239.521 29V12.5H242.303V14.4844H242.467C242.613 14.1927 242.818 13.8828 243.084 13.5547C243.35 13.2214 243.709 12.9375 244.162 12.7031C244.615 12.4635 245.193 12.3438 245.896 12.3438C246.824 12.3438 247.66 12.5807 248.404 13.0547C249.154 13.5234 249.748 14.2188 250.186 15.1406C250.628 16.0573 250.85 17.1823 250.85 18.5156C250.85 19.8333 250.633 20.9531 250.201 21.875C249.769 22.7969 249.18 23.5 248.436 23.9844C247.691 24.4688 246.847 24.7109 245.904 24.7109C245.217 24.7109 244.646 24.5964 244.193 24.3672C243.74 24.138 243.376 23.862 243.1 23.5391C242.829 23.2109 242.618 22.901 242.467 22.6094H242.35V29H239.521ZM242.295 18.5C242.295 19.276 242.404 19.9557 242.623 20.5391C242.847 21.1224 243.167 21.5781 243.584 21.9062C244.006 22.2292 244.516 22.3906 245.115 22.3906C245.74 22.3906 246.264 22.224 246.686 21.8906C247.107 21.5521 247.425 21.0911 247.639 20.5078C247.857 19.9193 247.967 19.25 247.967 18.5C247.967 17.7552 247.86 17.0938 247.646 16.5156C247.433 15.9375 247.115 15.4844 246.693 15.1562C246.271 14.8281 245.745 14.6641 245.115 14.6641C244.511 14.6641 243.998 14.8229 243.576 15.1406C243.154 15.4583 242.834 15.9036 242.615 16.4766C242.402 17.0495 242.295 17.724 242.295 18.5Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M258.584 24.7344C257.381 24.7344 256.342 24.4844 255.467 23.9844C254.597 23.4792 253.928 22.7656 253.459 21.8438C252.99 20.9167 252.756 19.8255 252.756 18.5703C252.756 17.3359 252.99 16.2526 253.459 15.3203C253.933 14.3828 254.594 13.6536 255.443 13.1328C256.292 12.6068 257.29 12.3438 258.436 12.3438C259.175 12.3438 259.873 12.4635 260.529 12.7031C261.191 12.9375 261.774 13.3021 262.279 13.7969C262.79 14.2917 263.191 14.9219 263.482 15.6875C263.774 16.4479 263.92 17.3542 263.92 18.4062V19.2734H254.084V17.3672H261.209C261.204 16.8255 261.087 16.3438 260.857 15.9219C260.628 15.4948 260.308 15.1589 259.896 14.9141C259.49 14.6693 259.016 14.5469 258.475 14.5469C257.896 14.5469 257.389 14.6875 256.951 14.9688C256.514 15.2448 256.173 15.6094 255.928 16.0625C255.688 16.5104 255.566 17.0026 255.561 17.5391V19.2031C255.561 19.901 255.688 20.5 255.943 21C256.199 21.4948 256.555 21.875 257.014 22.1406C257.472 22.401 258.008 22.5312 258.623 22.5312C259.035 22.5312 259.407 22.474 259.74 22.3594C260.074 22.2396 260.363 22.0651 260.607 21.8359C260.852 21.6068 261.037 21.3229 261.162 20.9844L263.803 21.2812C263.636 21.9792 263.318 22.5885 262.85 23.1094C262.386 23.625 261.792 24.026 261.068 24.3125C260.344 24.5938 259.516 24.7344 258.584 24.7344Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M266.312 24.5V12.5H269.055V14.5H269.18C269.398 13.8073 269.773 13.2734 270.305 12.8984C270.841 12.5182 271.453 12.3281 272.141 12.3281C272.297 12.3281 272.471 12.3359 272.664 12.3516C272.862 12.362 273.026 12.3802 273.156 12.4062V15.0078C273.036 14.9661 272.846 14.9297 272.586 14.8984C272.331 14.862 272.083 14.8438 271.844 14.8438C271.328 14.8438 270.865 14.9557 270.453 15.1797C270.047 15.3984 269.727 15.7031 269.492 16.0938C269.258 16.4844 269.141 16.9349 269.141 17.4453V24.5H266.312Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      d="M152 0.5C152 0.223858 152.224 0 152.5 0C152.776 0 153 0.223858 153 0.5V31.5C153 31.7761 152.776 32 152.5 32C152.224 32 152 31.7761 152 31.5V0.5Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M55.4236 9.15787C55.4236 9.88867 56.0963 10.2946 57.3871 10.3219C59.9952 10.4033 63.1413 10.9444 63.1679 14.6261C63.195 16.7917 61.5815 19.1199 57.36 19.1199C55.3971 19.1199 53.3803 18.7412 51.1213 16.8457L52.7887 14.0847C54.4292 15.4382 56.0155 15.7357 57.4136 15.763C58.5432 15.79 59.4304 15.33 59.4039 14.6261C59.4039 14.0035 58.9463 13.4894 57.1446 13.4354C54.6711 13.3266 51.5786 12.2982 51.5786 9.15787C51.5786 6.12607 54.4292 4.85336 57.3064 4.85336C59.35 4.85336 60.9902 5.36777 62.3882 6.58589L60.479 9.02241C59.484 8.31842 58.5432 8.04817 57.3329 8.04817C56.0692 8.04817 55.4236 8.508 55.4236 9.15787ZM75.9693 7.42531C77.1525 5.61139 78.4159 4.90741 80.3788 4.90741C83.1487 4.90741 85.6761 6.31561 85.6761 11.2965V18.6056H81.7768V11.3777C81.7768 9.69927 81.3201 8.58933 79.7603 8.58933C78.2276 8.58933 77.3134 9.91542 77.3134 11.4317V18.6056H73.4952V11.4317C73.4952 9.67198 72.7963 8.50797 71.2094 8.50797C69.6767 8.50797 68.8164 9.94295 68.8164 11.4587V14.6489V18.6056H64.9442V14.6489V5.23248H68.3323H68.8164V6.43696C69.6791 5.24517 71.0557 4.9347 72.0968 4.9347C73.5488 4.9347 75.1086 5.47592 75.9693 7.42531ZM107.676 5.25974V6.70526C108.563 5.45984 109.774 4.93467 111.253 4.93467C112.517 4.93467 113.566 5.31385 114.506 6.15282L112.893 9.2387C112.248 8.77888 111.576 8.56201 110.769 8.56201C109.101 8.56201 107.676 9.64514 107.676 11.6482V18.6056H103.804V5.25974H107.408H107.676ZM121.257 13.5974C121.257 15.0049 122.037 15.3842 122.763 15.3842C123.22 15.3842 123.946 15.276 124.376 15.0591L125.264 18.3081C124.296 18.6872 123.516 18.8491 122.467 18.9031C119.59 19.0387 117.412 17.7667 117.412 13.5974V8.56195H115.046V5.31376H117.412V3.82683L121.284 1.57776V5.31376H124.645V8.56195H121.257V13.5974ZM90.8151 11.9191C90.8151 14.1387 92.3744 15.4382 94.3107 15.4382C96.4884 15.4382 97.8331 13.7329 97.8331 12.0546C97.8331 10.1324 96.623 8.37259 94.3107 8.37259C92.3744 8.37259 90.8151 9.69915 90.8151 11.9191ZM97.8331 6.77556V5.23236H97.9674H101.598V18.6056H98.1021H97.8331V16.9966C96.9263 18.3489 95.0674 18.877 93.7995 18.9031C89.8202 18.9304 86.943 16.3317 86.943 11.9191C86.943 7.47951 89.9813 4.88071 93.9071 4.93482C95.5741 4.93482 97.1342 5.58422 97.8331 6.77556ZM135.247 11.7682L140 18.6056H135.375L132.939 15.0996L130.509 18.6056H125.857L130.616 11.7583L126.099 5.25971H130.723L132.928 8.43212L135.134 5.25971H139.758L135.247 11.7682ZM56.8178 23.179L55.4531 24.9088H55.2762L53.9565 23.1667V26.2758H52.9707V21.8246H54.1012L55.3903 23.5352L56.6852 21.8246H57.803V26.2758H56.8178V23.179ZM62.6856 24.6287L63.4494 22.8233L64.2075 24.6287H62.6856ZM62.3123 25.5063H64.5802L64.9022 26.2698H65.9699L63.9865 21.818H62.9129L60.9294 26.2698H61.9903L62.3123 25.5063ZM72.7466 21.8431L70.9526 23.9806L72.9047 26.2123V26.2698H71.7167L70.0806 24.3684V26.2698H69.0952V21.818H70.0806V23.6564L71.5529 21.818H72.7466V21.8431ZM76.0041 26.2698H79.3713V25.3539H76.9708V24.4575H79.1502V23.5859H76.9708V22.7276H79.2831V21.818H76.0041V26.2698ZM86.9588 21.818H87.9377V26.2698H86.9588V21.818ZM91.1941 22.7024H92.5397V26.2698H93.5186V22.7024H94.8642V21.818H91.1941V22.7024ZM104.719 22.8928C104.473 22.6319 104.043 22.5179 103.696 22.5179C103.26 22.5179 102.906 22.7024 102.906 23.0074C102.906 23.4144 103.292 23.4903 103.86 23.5415C104.732 23.618 105.559 23.9545 105.559 24.985C105.559 25.9774 104.649 26.4096 103.696 26.4159C102.931 26.4225 102.136 26.1235 101.763 25.5003L102.351 24.8833C102.691 25.3218 103.253 25.5132 103.702 25.5132C104.226 25.5132 104.587 25.3026 104.587 24.985C104.592 24.6095 104.296 24.4383 103.696 24.3876C102.761 24.2982 101.927 24.0634 101.94 23.0137C101.946 22.1299 102.78 21.659 103.69 21.659C104.372 21.659 104.884 21.812 105.338 22.3458L104.719 22.8928ZM109.872 21.818H108.892V26.2698H109.872V21.818ZM117.36 23.179L115.996 24.9088H115.819L114.499 23.1667V26.2758H113.513V21.8246H114.643L115.932 23.5352L117.227 21.8246H118.345V26.2758H117.36V23.179ZM124.074 24.1009H122.975V22.7594H124.074C124.542 22.7594 124.782 23.0773 124.782 23.4336C124.782 23.7896 124.548 24.1009 124.074 24.1009ZM122.975 26.2698V25.0105H124.074C125.198 24.9979 125.767 24.3042 125.767 23.4144C125.767 22.556 125.205 21.818 124.074 21.818H121.989V26.2698H122.975ZM130.048 21.818V25.3602H132.258V26.2698H129.062V21.818H130.048ZM135.51 26.2698H138.877V25.3539H136.477V24.4575H138.656V23.5859H136.477V22.7276H138.789V21.818H135.51V26.2698Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5057 24.5001L34.409 32L41.2905 27.9998V20.0003L35.2691 16.5L21.5057 24.5001Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.409 0L0 19.9999V28L6.8816 32L41.2905 12.0001V3.99977L34.409 0Z"
      fill="#001540"
      fillOpacity="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.88184 0L0 3.99977V12.0001L6.02153 15.4997L19.7851 7.49998L6.88184 0Z"
      fill="#001540"
      fillOpacity="0.3"
    />
  </svg>
);

const Footer: React.FC = () => {
  const { i18n: { currentLocale} } = useDocusaurusContext();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerLeft}>
         { currentLocale === 'zh' ? <ZhLogo/> : <EnLogo/>}
        </div>

        <div className={styles.footerContainerRight}>
          <div className={styles.footerContainerRightRow}>
            <span className={styles.copyright}>
              { i18next.t('components.copyright')}
            </span>
            <a href="https://www.smartx.com/global/legal/website-terms/">{ i18next.t('components.user_term')}</a>
            <span className={styles.dot}>·</span>
            <a href="https://www.smartx.com/legal/end-user-license-agreement/">{ i18next.t('components.candidate')}</a>
            <span className={styles.dot}>·</span>
            <a href="https://www.smartx.com/global/legal/privacy/">{ i18next.t('components.privacy')}</a>
            <span className={styles.dot}>·</span>
            <a href="https://www.smartx.com/global/legal/">{ i18next.t('components.legal')}</a>
          </div>
          {
            currentLocale === 'zh' ? (
              <div className={styles.footerContainerRightRow}>
              <a href="" className={styles.icpItem}>
                京公安网安备11010802027935号
              </a>
              <span className={styles.dot}>·</span>
              <a href="" className={styles.icpItem}>
                京ICP备14055327号-2
              </a>
            </div>
            ) : <></>
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;

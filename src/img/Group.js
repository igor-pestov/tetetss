import { useCountUp } from 'react-countup';
import { useState } from 'react';
export default function Svg1() {
  const [disabled, setDisabled] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 2018,
    end: 2012,
    delay: 1000,
    duration: 2,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    // onStart: () => setDisabled(true),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });

  // console.log(data);
  return (
    <svg
      className='test'
      viewBox='0 0 737 925'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <path
        opacity='0.3'
        d='M223.23 96H233.622V94.944H224.478L226.206 93.504C231.438 89.16 233.094 86.76 233.094 83.784C233.094 80.784 231.174 79.08 228.294 79.008C225.774 78.96 224.142 79.92 223.326 80.808V82.368C224.358 80.976 225.87 80.088 227.934 80.112C230.454 80.112 231.966 81.504 231.966 83.928C231.966 86.88 229.854 89.28 222.774 95.232V96H223.206L223.23 95.976V96ZM242.419 79.008C239.395 79.032 236.755 81.216 236.755 87.624C236.755 93.456 238.867 96.216 242.491 96.24C245.515 96.24 248.179 94.056 248.179 87.624C248.179 81.792 246.043 79.008 242.419 79.008ZM237.883 87.624C237.883 81.744 240.043 80.112 242.443 80.112C245.227 80.16 247.051 82.296 247.051 87.624C247.051 93.504 244.891 95.136 242.491 95.136C239.683 95.112 237.883 92.976 237.883 87.624ZM255.718 96H256.798V79.032H255.982L251.038 82.224V83.448L255.718 80.448V96ZM271.952 82.56V80.76C271.232 79.944 269.792 78.984 267.536 79.008C263.768 79.08 261.272 81.72 261.272 87.912C261.272 93.096 263.432 96.192 267.392 96.192C270.392 96.192 273.032 94.344 273.032 90.576C273.032 87.744 270.992 85.632 267.8 85.632C264.872 85.632 262.904 87.408 262.496 89.856C262.4 89.16 262.352 88.44 262.352 87.672C262.352 82.56 264.368 80.208 267.584 80.136C269.408 80.088 271.04 81.048 271.952 82.56ZM267.632 86.688C270.2 86.688 271.904 88.152 271.904 90.72C271.904 93.456 270.008 95.064 267.464 95.064C264.92 95.064 263.456 93.504 262.784 91.224C262.952 88.56 264.704 86.688 267.632 86.688Z'
        fill='#333F48'
      />
      <ellipse
        opacity='0.6'
        cx='247.5'
        cy='462.5'
        rx='460.5'
        ry='461.5'
        stroke='#D1D5DF'
        stroke-linecap='round'
      />
      <path
        opacity='0.6'
        d='M555.04 301H568.03V299.68H556.6L558.76 297.88C565.3 292.45 567.37 289.45 567.37 285.73C567.37 281.98 564.97 279.85 561.37 279.76C558.22 279.7 556.18 280.9 555.16 282.01V283.96C556.45 282.22 558.34 281.11 560.92 281.14C564.07 281.14 565.96 282.88 565.96 285.91C565.96 289.6 563.32 292.6 554.47 300.04V301H555.01L555.04 300.97V301ZM579.027 279.76C575.247 279.79 571.947 282.52 571.947 290.53C571.947 297.82 574.587 301.27 579.117 301.3C582.897 301.3 586.227 298.57 586.227 290.53C586.227 283.24 583.557 279.76 579.027 279.76ZM573.357 290.53C573.357 283.18 576.057 281.14 579.057 281.14C582.537 281.2 584.817 283.87 584.817 290.53C584.817 297.88 582.117 299.92 579.117 299.92C575.607 299.89 573.357 297.22 573.357 290.53ZM595.651 301H597.001V279.79H595.981L589.801 283.78V285.31L595.651 281.56V301ZM609.732 301.27C614.322 301.27 617.262 298.93 617.262 295.18C617.262 292.18 615.342 290.35 611.922 289.87C614.502 289.21 616.302 287.56 616.302 284.8C616.302 281.8 614.022 279.67 609.702 279.67C605.262 279.67 602.862 281.86 602.862 284.95C602.862 287.86 604.692 289.36 607.272 289.87C603.792 290.65 602.142 292.66 602.142 295.36C602.142 299.2 605.292 301.27 609.732 301.27ZM609.762 299.89C605.952 299.89 603.582 298.18 603.582 295.03C603.582 292.54 605.592 290.56 609.672 290.56C613.812 290.56 615.852 292.36 615.852 295.12C615.852 297.91 613.842 299.89 609.762 299.89ZM609.672 289.39C606.492 289.39 604.242 287.74 604.242 285.1C604.242 282.7 606.132 281.05 609.672 281.05C613.212 281.05 614.922 282.52 614.922 285.07C614.922 287.62 612.882 289.39 609.672 289.39Z'
        fill='#334047'
      />
      <path
        opacity='0.3'
        d='M436.768 157H448.026V155.856H438.12L439.992 154.296C445.66 149.59 447.454 146.99 447.454 143.766C447.454 140.516 445.374 138.67 442.254 138.592C439.524 138.54 437.756 139.58 436.872 140.542V142.232C437.99 140.724 439.628 139.762 441.864 139.788C444.594 139.788 446.232 141.296 446.232 143.922C446.232 147.12 443.944 149.72 436.274 156.168V157H436.742L436.768 156.974V157ZM457.557 138.592C454.281 138.618 451.421 140.984 451.421 147.926C451.421 154.244 453.709 157.234 457.635 157.26C460.911 157.26 463.797 154.894 463.797 147.926C463.797 141.608 461.483 138.592 457.557 138.592ZM452.643 147.926C452.643 141.556 454.983 139.788 457.583 139.788C460.599 139.84 462.575 142.154 462.575 147.926C462.575 154.296 460.235 156.064 457.635 156.064C454.593 156.038 452.643 153.724 452.643 147.926ZM471.964 157H473.134V138.618H472.25L466.894 142.076V143.402L471.964 140.152V157ZM475.847 140.074H486.377L478.837 157H480.163L487.729 139.892V138.8H475.847V140.074Z'
        fill='#333F48'
      />

      <ellipse
        opacity='0.6'
        cx='252'
        cy='462.5'
        rx='300'
        ry='300.5'
        stroke='url(#paint0_linear)'
        stroke-linecap='round'
      />
      <path
        d='M553 451L736 451'
        stroke='#9AA2A7'
        stroke-width='2'
        stroke-linecap='round'
      />
      <g opacity='0.4'>
        <mask
          id='mask0'
          mask-type='alpha'
          maskUnits='userSpaceOnUse'
          x='7'
          y='217'
          width='490'
          height='490'
        >
          <circle cx='252' cy='462' r='245' fill='#C4C4C4' />
        </mask>
        <g mask='url(#mask0)'>
          <g filter='url(#filter0_b)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M200.442 702.082C333.235 730.448 463.833 646.014 492.141 513.492C520.449 380.971 435.747 250.546 302.955 222.18C170.162 193.814 39.5645 278.249 11.2566 410.77C-17.0514 543.292 67.65 673.717 200.442 702.082ZM212.995 643.319C313.267 664.738 411.881 600.981 433.257 500.914C454.632 400.847 390.674 302.362 290.402 280.943C190.13 259.524 91.5157 323.281 70.1403 423.348C48.7649 523.416 112.723 621.9 212.995 643.319Z'
              fill='url(#paint1_linear)'
            />
          </g>
          <rect
            x='374.664'
            y='243.021'
            width='203'
            height='478'
            transform='rotate(12.0578 374.664 243.021)'
            fill='#E8EDF2'
          />
          <mask
            id='mask1'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='268'
            y='215'
            width='301'
            height='563'
          >
            <rect
              width='533'
              height='193'
              transform='matrix(-0.208898 0.977938 0.977938 0.208898 379.514 215.638)'
              fill='#EAEDF2'
            />
          </mask>
          <g mask='url(#mask1)'>
            <g style={{ mixBlendMode: 'darken' }}>
              <rect
                width='1440'
                height='810.874'
                transform='matrix(-0.208898 0.977938 0.977938 0.208898 399.985 119.8)'
                fill='url(#pattern0)'
              />
            </g>
          </g>
          <rect
            x='232.847'
            y='619.706'
            width='60'
            height='96'
            transform='rotate(12.0578 232.847 619.706)'
            fill='#E8EDF2'
          />
          <path
            d='M226.058 651.489C249.858 655.744 263.356 655.974 287.136 652.776L276.169 704.118C252.669 707.02 239.325 707.035 214.673 704.786L226.058 651.489Z'
            fill='url(#paint2_linear)'
          />
          <g filter='url(#filter1_f)'>
            <ellipse
              cx='256.93'
              cy='649.425'
              rx='42.5077'
              ry='14.8736'
              transform='rotate(-0.908154 256.93 649.425)'
              fill='#E8EDF2'
            />
          </g>
          <g filter='url(#filter2_f)'>
            <ellipse
              cx='224.053'
              cy='505.139'
              rx='175.073'
              ry='163.269'
              transform='rotate(39.1366 224.053 505.139)'
              fill='#E8EDF2'
            />
          </g>
          <mask
            id='mask2'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='-40'
            y='171'
            width='584'
            height='583'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M200.651 702.264C333.444 730.629 464.042 646.195 492.35 513.673C520.658 381.152 435.956 250.727 303.164 222.361C170.371 193.995 39.7735 278.43 11.4656 410.951C-16.8424 543.473 67.859 673.898 200.651 702.264ZM213.204 643.5C313.476 664.919 412.09 601.162 433.466 501.095C454.841 401.028 390.883 302.544 290.611 281.125C190.339 259.705 91.7247 323.462 70.3493 423.53C48.9739 523.597 112.932 622.081 213.204 643.5Z'
              fill='url(#paint3_linear)'
            />
          </mask>
          <g mask='url(#mask2)'>
            <g filter='url(#filter3_f)'>
              <ellipse
                cx='211.162'
                cy='508.448'
                rx='219.497'
                ry='222.922'
                transform='rotate(39.1366 211.162 508.448)'
                fill='url(#paint4_linear)'
              />
            </g>
            <g filter='url(#filter4_f)'>
              <ellipse
                cx='370.18'
                cy='672.464'
                rx='182.526'
                ry='30.1752'
                transform='rotate(-13.6121 370.18 672.464)'
                fill='url(#paint5_linear)'
              />
            </g>
            <g filter='url(#filter5_f)'>
              <ellipse
                cx='175.259'
                cy='412'
                rx='210.407'
                ry='196.22'
                transform='rotate(82.5592 175.259 412)'
                fill='url(#paint6_linear)'
              />
            </g>
            <g filter='url(#filter6_f)'>
              <ellipse
                cx='244.649'
                cy='469.426'
                rx='186.593'
                ry='186.495'
                transform='rotate(39.1366 244.649 469.426)'
                fill='#E8EDF2'
              />
            </g>
          </g>
          <circle
            cx='251.541'
            cy='462.656'
            r='185.077'
            transform='rotate(12.0578 251.541 462.656)'
            fill='#E8EDF2'
          />
        </g>
      </g>
      <g style={{ mixBlendMode: 'hardLight' }} filter='url(#filter7_f)'>
        <circle cx='416.5' cy='595.5' r='26.5' fill='url(#paint7_linear)' />
      </g>
      <circle opacity='0.5' cx='506.5' cy='301.5' r='5.5' fill='#24D32C' />

      <circle opacity='0.3' cx='389.5' cy='195.5' r='5.5' fill='#24D32C' />
      <foreignObject
        x='770'
        y='400'
        width='200'
        height='180'
        style={{ textAlign: 'centr' }}
        // className='graph__skills'
      >
        <div
          className='year'
          xmlns='http://www.w3.org/1999/xhtml'
          onClick={!disabled ? start : null}
        >
          2019
        </div>
      </foreignObject>
      <circle opacity='0.3' cx='247.5' cy='162.5' r='5.5' fill='#24D32C' />

      <circle cx='551.5' cy='451.5' r='5.5' fill='#24D32C' />
      <circle opacity='0.3' cx='247.5' cy='762.5' r='5.5' fill='#24D32C' />

      <circle opacity='0.3' cx='389.5' cy='729.5' r='5.5' fill='#24D32C' />

      <circle opacity='0.5' cx='506.5' cy='621.5' r='5.5' fill='#24D32C' />

      <defs>
        <filter
          id='filter0_b'
          x='-44.0141'
          y='166.805'
          width='591.425'
          height='590.653'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='2.00707' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur'
            result='shape'
          />
        </filter>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0'
            transform='translate(-0.000601937) scale(0.000375405 0.000666667)'
          />
        </pattern>
        <filter
          id='filter1_f'
          x='194.428'
          y='614.537'
          width='125.006'
          height='69.7746'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur stdDeviation='10' result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='filter2_f'
          x='33.5752'
          y='317.066'
          width='380.955'
          height='376.146'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur stdDeviation='10' result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='filter3_f'
          x='-119.791'
          y='177'
          width='661.906'
          height='662.896'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur stdDeviation='10' result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='filter4_f'
          x='162.636'
          y='590.445'
          width='415.088'
          height='164.038'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur stdDeviation='15' result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='filter5_f'
          x='-66.5566'
          y='157.954'
          width='483.632'
          height='508.092'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur stdDeviation='10' result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='filter6_f'
          x='-27.791'
          y='197'
          width='544.88'
          height='544.852'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur stdDeviation='5' result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='filter7_f'
          x='388'
          y='567'
          width='57'
          height='57'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur stdDeviation='1' result='effect1_foregroundBlur' />
        </filter>
        <linearGradient
          id='paint0_linear'
          x1='20.9655'
          y1='100.915'
          x2='413.59'
          y2='746.242'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#2CE8D0' />
          <stop offset='1' stop-color='#25DC2B' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='366.617'
          y1='253.224'
          x2='218.185'
          y2='717.992'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#8C9AB5' />
          <stop offset='0.036916' stop-color='#97A3BB' />
          <stop offset='0.0746798' stop-color='#B0B8CB' />
          <stop offset='0.119723' stop-color='#BEC5D7' />
          <stop offset='0.884211' stop-color='#E7ECF2' />
          <stop offset='0.915462' stop-color='#99A9C0' />
          <stop offset='0.972755' stop-color='#B3BBCF' />
        </linearGradient>
        <linearGradient
          id='paint2_linear'
          x1='258.012'
          y1='652.69'
          x2='260.84'
          y2='706.468'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#E8EDF2' />
          <stop offset='0.163836' stop-color='#CBD3DE' />
          <stop offset='0.38416' stop-color='#97A7BE' />
          <stop offset='0.635535' stop-color='#A7AFC4' />
          <stop offset='1' stop-color='#BAC2D5' />
        </linearGradient>
        <linearGradient
          id='paint3_linear'
          x1='362.001'
          y1='242'
          x2='218.394'
          y2='718.174'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#8C9AB5' />
          <stop offset='0.036916' stop-color='#97A3BB' />
          <stop offset='0.0746798' stop-color='#B0B8CB' />
          <stop offset='0.119723' stop-color='#BEC5D7' />
          <stop offset='0.884211' stop-color='#E7ECF2' />
          <stop offset='0.915462' stop-color='#99A9C0' />
          <stop offset='0.972755' stop-color='#B3BBCF' />
        </linearGradient>
        <linearGradient
          id='paint4_linear'
          x1='254.711'
          y1='722.514'
          x2='352.392'
          y2='320.676'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#8C9CB4' />
          <stop offset='0.403904' stop-color='#9CABC2' stop-opacity='0.14' />
        </linearGradient>
        <linearGradient
          id='paint5_linear'
          x1='364.798'
          y1='723.672'
          x2='373.785'
          y2='636.125'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#A4B2C8' />
          <stop offset='1' stop-color='#9CABC2' stop-opacity='0.49' />
          <stop offset='1' stop-color='#C9D9F1' stop-opacity='0.84' />
        </linearGradient>
        <linearGradient
          id='paint6_linear'
          x1='217.004'
          y1='600.426'
          x2='296.654'
          y2='243.597'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#9CABC2' />
          <stop offset='0.403904' stop-color='#9CABC2' stop-opacity='0.14' />
        </linearGradient>
        <linearGradient
          id='paint7_linear'
          x1='388.53'
          y1='492.813'
          x2='445.919'
          y2='493.029'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#CAE90A' />
          <stop offset='1' stop-color='#3BDC27' />
        </linearGradient>
        <image
          id='image0'
          width='2667'
          height='1500'
        />
      </defs>
    </svg>
  );
}
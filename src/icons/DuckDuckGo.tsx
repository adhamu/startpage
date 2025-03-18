import { useContext } from 'react'

import { SettingsContext } from '../context/SettingsProvider'

const DuckDuckGo = () => {
  const {
    settings: { prefersDarkMode },
  } = useContext(SettingsContext)

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlSpace="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 250 74.4"
    >
      <style type="text/css">
        {`.dst0{fill:#DE5833}.dst1{fill:#FFFFFF;}.dst2{fill-rule:evenodd;clip-rule:evenodd;fill:#FED30A;}.dst3{fill:#2D4F8D;}.dst4{fill:#D5D7D8;}.dst5{fill:#67BD47;}.dst6{fill:#43A347;}.dst7{fill:${
          prefersDarkMode ? '#fff' : '#4C4C4C'
        };}`}
      </style>
      <g>
        <g>
          <g>
            <circle className="dst0" cx="44.9" cy="37.4" r="30.3" />
            <path
              className="dst1"
              d="M70.6,26.5c-1.4-3.3-3.4-6.3-6-8.9c-2.6-2.6-5.5-4.6-8.9-6c-3.4-1.5-7.1-2.2-10.8-2.2
        c-3.8,0-7.4,0.7-10.8,2.2c-3.3,1.4-6.3,3.4-8.9,6c-2.6,2.6-4.6,5.5-6,8.9c-1.5,3.4-2.2,7.1-2.2,10.8s0.7,7.4,2.2,10.8
        c1.4,3.3,3.4,6.3,6,8.9c2.6,2.6,5.5,4.6,8.9,6c3.4,1.5,7.1,2.2,10.8,2.2c3.8,0,7.4-0.7,10.8-2.2c3.3-1.4,6.3-3.4,8.9-6
        c2.6-2.6,4.6-5.5,6-8.9c1.5-3.4,2.2-7.1,2.2-10.8S72.1,30,70.6,26.5z M51,62.4c-1.6-2.7-5.8-10.4-5.8-16c0-13,8.8-1.9,8.8-12.3
        c0-2.5-1.2-11.2-8.8-13c-1.9-2.5-6.3-4.9-13.2-3.9c0,0,1.2,0.3,2.5,1c0,0-2.5,0.3-2.6,2.1c0,0,5-0.3,7.9,0.7
        c-6.5,0.8-9.9,4.2-9.3,10.5c0.9,8.8,4.6,24.6,5.9,30.1c-9.9-3.6-17-13.1-17-24.2c0-14.2,11.5-25.7,25.7-25.7s25.7,11.5,25.7,25.7
        C70.7,49.5,62.3,59.7,51,62.4z"
            />
            <path
              id="Beak_2_"
              className="dst2"
              d="M43.6,41.6c0-3.3,4.6-4.4,6.3-4.4c4.7,0,11.2-3,12.8-2.9c1.6,0.1,2.7,0.7,2.7,1.5
        c0,1.1-9.3,5.3-12.9,4.9c-3.4-0.3-4.2,0.1-4.2,1.5c0,1.2,2.5,2.3,5.2,2.3c4.1,0,8.1-1.8,9.3-0.9c1,0.8-2.8,3.5-7.2,3.5
        S43.6,44.9,43.6,41.6z"
            />
            <g>
              <path
                className="dst3"
                d="M51.6,27.4c-1.2-1.6-3.4-1.6-4.1,0.2C48.6,26.7,50.1,26.5,51.6,27.4z"
              />
              <path
                className="dst3"
                d="M38.1,27.5c-1.7-1-4.5-1.1-4.3,2C34.7,27.6,35.7,27.2,38.1,27.5z"
              />
              <path
                className="dst3"
                d="M50.6,30.4c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7s1.7-0.7,1.7-1.7C52.3,31.1,51.5,30.4,50.6,30.4z
           M51.2,31.9c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5C51.7,31.7,51.5,31.9,51.2,31.9z"
              />
              <path
                className="dst3"
                d="M37.7,31.3c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9
          C39.6,32.2,38.7,31.3,37.7,31.3z M38.4,33.1c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6
          C38.9,32.8,38.7,33.1,38.4,33.1z"
              />
            </g>
            <g>
              <path
                className="dst4"
                d="M33.5,23.1c-2.4,1.8-3.6,4.5-3.2,8.3c0.9,8.8,4.6,24.6,5.9,30.1c0.5,0.2,0.9,0.3,1.4,0.4
          c-0.8-3.4-4.7-19.6-6.4-32.1C30.7,26.6,32,24.7,33.5,23.1z"
              />
              <path
                className="dst4"
                d="M39.5,21c0.2,0,0.3,0,0.3,0c-2.7-1.3-6.8-1.3-7.9-1.3c-0.1,0.2-0.2,0.4-0.2,0.7
          C31.7,20.3,36.6,20.1,39.5,21z"
              />
              <path
                className="dst4"
                d="M34.8,18.3c-0.8-0.5-1.5-0.9-1.9-1.1c-0.3,0-0.7,0.1-1,0.1c0,0,1.2,0.3,2.5,1c0,0,0,0-0.1,0
          C34.6,18.2,34.8,18.3,34.8,18.3z"
              />
            </g>
            <g>
              <path
                className="dst5"
                d="M55.1,51.8c-0.9-0.2-4.2,2.2-5.4,3.1c-0.1-0.2-0.1-0.4-0.2-0.5c-0.2-0.5-3.4-0.2-4.2,0.6
          c-2-1-6-2.8-6.1-1.7c-0.1,1.5,0,7.8,0.8,8.3c0.6,0.3,4-1.5,5.8-2.5c0,0,0,0,0,0c1.1,0.3,3.1,0,3.8-0.4c0.1-0.1,0.1-0.1,0.2-0.3
          c1.6,0.6,4.9,1.8,5.7,1.6C56.4,59.7,56.2,52.1,55.1,51.8z"
              />
              <path
                className="dst6"
                d="M45.9,59.1c-1.1-0.2-0.7-1.3-0.7-3.8c0,0,0,0,0,0c-0.3,0.2-0.4,0.4-0.4,0.6c0,2.5-0.4,3.6,0.7,3.8
          c1.1,0.3,3.1,0,3.8-0.4c0.1-0.1,0.2-0.3,0.3-0.5C48.7,59.1,46.9,59.4,45.9,59.1z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                className="dst7"
                d="M86.6,45.5V27.5h6.5c6.2,0,9,4.5,9,8.8c0,4.6-2.8,9.2-9,9.2H86.6L86.6,45.5z M88.7,43.4h4.5
          c4.8,0,6.9-3.6,6.9-7.1c0-3.3-2.2-6.8-6.9-6.8h-4.5V43.4L88.7,43.4z"
              />
            </g>
            <g>
              <path
                className="dst7"
                d="M110.3,45.7c-3.4,0-5.5-2.3-5.5-5.8v-7h2v6.9c0,2.6,1.5,4.1,3.9,4.1c2.3,0,4-1.8,4-4.2v-6.8h2v12.6H115
          l-0.1-2.2l-0.3,0.4C113.5,45,112.1,45.6,110.3,45.7z"
              />
            </g>
            <g>
              <path
                className="dst7"
                d="M126.2,45.7c-3.3,0-6.6-2-6.6-6.5c0-3.9,2.6-6.5,6.6-6.5c1.8,0,3.2,0.6,4.5,1.8l-1.2,1.2
          c-0.9-0.8-2-1.2-3.2-1.2c-2.8,0-4.7,1.9-4.7,4.7c0,3.2,2.3,4.7,4.7,4.7c1.3,0,2.5-0.4,3.4-1.3l1.2,1.2
          C129.5,45,127.9,45.7,126.2,45.7z"
              />
            </g>
            <g>
              <polygon
                className="dst7"
                points="141.4,45.5 135.2,39.3 135.2,45.5 133.3,45.5 133.3,27.5 135.2,27.5 135.2,38.4 140.6,32.9
          143.2,32.9 137.2,38.8 143.9,45.4 143.9,45.5"
              />
            </g>
            <g>
              <path
                className="dst7"
                d="M146.2,45.5V27.5h6.5c6.2,0,9,4.5,9,8.8c0,4.6-2.8,9.2-9,9.2H146.2L146.2,45.5z M148.4,43.4h4.5
          c4.8,0,6.9-3.6,6.9-7.1c0-3.3-2.2-6.8-6.9-6.8h-4.5V43.4z"
              />
            </g>
            <g>
              <path
                className="dst7"
                d="M169.9,45.7c-3.4,0-5.5-2.3-5.5-5.8v-7h2v6.9c0,2.6,1.5,4.1,3.9,4.1c2.3,0,4-1.8,4-4.2v-6.8h2v12.6h-1.8
          l-0.1-2.2l-0.3,0.4C173.2,45,171.7,45.6,169.9,45.7z"
              />
            </g>
            <g>
              <path
                className="dst7"
                d="M185.8,45.7c-3.3,0-6.6-2-6.6-6.5c0-3.9,2.6-6.5,6.6-6.5c1.8,0,3.2,0.6,4.5,1.8l-1.2,1.2
          c-0.9-0.8-2-1.2-3.2-1.2c-2.8,0-4.7,1.9-4.7,4.7c0,3.2,2.3,4.7,4.7,4.7c1.3,0,2.5-0.4,3.4-1.3l1.2,1.2l-0.1,0.1l0,0
          C189.1,45.1,187.6,45.7,185.8,45.7z"
              />
            </g>
            <g>
              <polygon
                className="dst7"
                points="201,45.5 194.9,39.3 194.9,45.5 193,45.5 193,27.5 194.9,27.5 194.9,38.4 200.3,32.9 202.8,32.9
          196.9,38.8 203.5,45.4 203.5,45.5"
              />
            </g>
            <g>
              <path
                className="dst7"
                d="M213.6,45.8c-6.9,0-9.3-5-9.3-9.1c0-2.8,0.9-5.2,2.6-6.9c1.7-1.7,4-2.6,6.7-2.6c2.5,0,4.7,0.9,6.5,2.6
          l-1.2,1.4c-1.4-1.3-3.4-2.1-5.3-2.1c-5,0-7.3,3.9-7.3,7.6c0,3.6,2.3,7.2,7.4,7.2c1.8,0,3.6-0.7,5-1.8l0.1-0.1v-4.5h-5.6v-1.8
          h7.5v7C218.7,44.8,216.4,45.8,213.6,45.8z"
              />
            </g>
            <g>
              <path
                className="dst7"
                d="M229.6,45.7c-3.8,0-6.5-2.7-6.5-6.5s2.8-6.6,6.5-6.6c3.9,0,6.6,2.7,6.6,6.6C236,42.9,233.3,45.7,229.6,45.7
          z M229.6,34.3c-2.7,0-4.6,2-4.6,4.8c0,2.7,1.9,4.7,4.6,4.7c2.7,0,4.6-1.9,4.7-4.7C234.1,36.4,232.3,34.3,229.6,34.3z"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            className="dst7"
            d="M238,46.8L238,46.8c0.2-0.1,0.3-0.2,0.3-0.4c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.1-0.6-0.1
      c-0.3,0-0.5,0-0.6,0.1v1.6h0.4V47h0.2c0.2,0,0.3,0.1,0.3,0.3c0.1,0.2,0.1,0.3,0.1,0.4h0.4c0-0.1-0.1-0.2-0.1-0.4
      C238.3,47,238.2,46.9,238,46.8z M237.6,46.7h-0.2v-0.5c0,0,0.1,0,0.2,0c0.2,0,0.3,0.1,0.3,0.2C238,46.7,237.8,46.7,237.6,46.7z"
          />
          <path
            className="dst7"
            d="M237.6,45.2c-0.9,0-1.7,0.7-1.7,1.6c0,0.9,0.7,1.7,1.7,1.7c0.9,0,1.7-0.7,1.7-1.7
      C239.3,45.9,238.6,45.2,237.6,45.2z M237.7,48.1c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.5-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3
      C238.9,47.5,238.4,48.1,237.7,48.1z"
          />
        </g>
      </g>
    </svg>
  )
}

export default DuckDuckGo

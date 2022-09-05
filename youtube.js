if (!YT_USERS) {
  var YT_USERS = [
    '9RM-iSvTu1uPJb8X5yp3EQ', //'Wendover productions'
    '2C_jShtL725hvbm1arSV9w', //'CGPGrey'
    'X6OQ3DkcsbYNE6H8uQQuVA', //'MrBeast6000'
    'sXVk37bltHxD1rDPwtNM8Q', //'Kurzgesagt'
    'HnyfMqiRRG1u-2MsSQLbXA', //'1veritasium'
    '6nSFpj9HTCZ5t-N3Rm3-HA', //'Vsauce'
    'FhXFikryT4aFcLkLw2LBLA', //'TheRedNile'
    'YzPXprvl5Y-Sf0g4vX-m6g', //'jacksepticeye'
    'QL5ABUvwY7YoW5lgMyAS_w', //'wheezywaiter'
    '3XTzVzaHQEd30rQbuvCtTQ', //'LastWeekTonight'
    '-lHJZR3Gqxm24_Vd_AJ5Yw', //'PewDiePie'
    'Y1kMZp36IQSyNx_9h4mpCg', //'mark rober'
    '6107grRI4m0o2-emgoDnAA', //'smarter every day'
    'EIwxahdLz7bap-VDs9h35A', //'steve mould'
    'HL9bfHTxCMi-7vfxQ-AYtg', //'abroad in japan'
    'bfYPyITQ-7l4upoX8nvctg', //'two minute papers'
    'BJycsmduvYEL83R_U4JriQ', //'mkbhd'
    'UdettijNYvLAm4AixZv4RA', //'scishow'
    'iDJtJKMICpb9B1qf7qjEOA', //'adam savage tested'
    'K7tptUDHh-RYDsdxO1-5QQ', //'wall street journal'
    'J0-OtVpF0wOKEqT2Z1HEtA', //'electroboom'
    'UQo7nzH1sXVpzL92VesANw', //'diy perks'
    '6n8I1UDTKP1IWjQMg6_TwA', //'the b1m'
    'WFKCr40YwOZQx8FHU_ZqqQ', //'jerryrigeverything'
    'UK0HBIBWgM2c4vsPhkYY4w', //'the slomo guys'
    'MOqf8ab-42UUQIdVoKwjlQ', //'practical engineering'
    'JHA_jMfCvEnv-3kRjTCQXw', //'binging with babish'
    'j1VqrHhDte54oLgPG4xpuQ', //'stuffmadehere'
    'hBEbMKI1eCcejTtmI32UEw', //'joshua weissman'
    'm9K6rby98W8JigLoZOh6FQ', //'lockpicking lawyer'
    'Eyr6FYPqXj3agOBSBPyLWw', //'handcraft'
    'uVLG9pThvBABcYCm7pkNkA', //'climate town'
    '0intLFzLaudFG-xAvUEO-A', //'not just bikes'
    'fgtNfWCtsLKutY-BHzIb9Q', //'city nerd'
    'qqJQ_cXSat0KIAVfIfKkVA', //'j kenji lopez-alt'
    'N3aYbtQ7yCqk9DM56B0kEw', //'tomorrow's build'
    'Dq5v10l4wkV5-ZBIJJFbzQ', //'Ethan chlebowski'
    'y0tKL1T7wFoYcxCe0xjN6Q', //'Technology connections'
    'Bw0bL8MtOIl1UX7db2MT3A', //'Always sunny podcast'
    'uZ4plJK1KkSqRBYps3rNww', //'Mr. Puzzle'
    'Hu2KNu6TtJ0p4hpSW7Yv7Q', //'Jazza'
    'Xy10-NEFGxQ3b4NVrzHw1Q', //'Eric rosen'
    'oal_hpPIPAnWlG-kWHLheA', //'drawfee'
    'C-UOdK8-mIjxBQm_ot1T-Q', //'CTC'
    'YO_jab_esuFRV4b17AJtAw', //'3blue1brown'
    'vjgXvBlbQiydffZU7m1_aw', //'Coding Train'
    'UHW94eEFW7hkUMVaZz4eDg', //'minute physics'
    'RIZtPl9nb9RiXc9btSTQNw', //'Food wishes'
    'Kp44bWWZIiOPShPN_ytShw', //'Wood whisperer'
    'X6b17PVsYBQ0ip5gyeme-Q', //'crash course'
  ]
}

// clear the existing list
$(' #yt .list-unstyled .wrapper').remove()

var x = $('#yt .list-unstyled')
$.each(YT_USERS, (_, obj) => {
  let r = Math.random()
  if (r > 0.95) {
    x.append(
      $('<div class="wrapper"></div>').append(
        $('<li></li>').append(
          '<iframe width="600" height="340" ' +
            'src="https://www.youtube-nocookie.com/embed/videoseries?list=UU' +
            obj +
            '&color=white" frameborder="0" allowfullscreen></iframe>'
        )
      )
    )
  }
})

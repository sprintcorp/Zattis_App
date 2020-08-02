<template>
    <div class="body">
         <div class="header p-3">
           
         </div>
          <b-row class="p-5">
                <b-col sm="8" md="3">
                      <div>
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQERUQEBAWFRUVFhUVFRUVFxUVFhUWFxYWFhUVFRYYHiggGRomGxUVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGxAQGi0lHyUtMi0tLS0tLS0tLS0vLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIEBQYDBwj/xABLEAABBAAEAwUEAw0ECAcAAAABAAIDEQQSITEFQVEGEyJhcTKBkbFCcqEUIzM0Q1Jic7KzwdHwB1OStBUkdILC0uHxVFWDk5Siw//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAQEAAgICAQMDBQEAAAAAAAABAhEDITFBEiIyURNCgQQzYbHwFP/aAAwDAQACEQMRAD8Av6SpOpKlZU2kqTqSpA2kqT6SpA2kqTqSpAykqTkkDaSpOpBA1KkUkApCk5BA2kqTkEDaSpOQQNpCk+kKQMITSF0pCkHOkKTyEKQMITSF0ITSEDKSTkkFlSVJ1JUgZSVJ9JUgbSVI0lSBtJUnUkgagnFNQBJIqFjuKwQfhJAD+aNXfAbe9EpiSyOO7agWIYb83OA/+ov5qMztxJWsLb+sdvSk2arbILIxdtrOsOnPxbD4arQYHi0M3sSC+hIBr0+CGk5JNzI2iCSSRQBKkUkDCEKT0KQMpAhPpAhAwhNIXQhNIQMpJOpJBZUlSdSVIG0hSfSFIG0lSdSCBqSJQQNK44mdkbS+Rwa0CySufFse3DxmV+wIGnmQF5vx3jz5ybd4ASQOTQNtObvP4dUtTJtY9oe2ZNthJYzbNs53n1Cw2K4mXE069b5qBjcVmcuAcqr+Ep3EJOevrqpWHx98/d/IqExhd4T00UZrTdIjbQCcjUag6FKHHOB0cQdRYNGlVwzEAXzXR+otu/MKEtDwntJPA4U4kcw4kgjn6H0W54B2pjxchiDCxwaCLIN/nBeTMd4dT6p8GKI1aSCObSQR6KZUWPdwivMeyfaWaN/dPcZA6suck0eeu/P7PePSoJQ8WFZV1SSCKlAIUnIUgbSBCfSFIGEJpC6UhSBlJJ1JILGkk6kKUBtJJ1JIGJJyBCBhTXGtei6EKHxSUshke2gWse6ztoCUS847QcafiXnWowfCw8uVnqf5rJcTxgosj/r/AKrvxHGnUNFbi/5KvwuGL3BrQST0VV0NsJJU3D4I1tdrf8C7CktD5tPJaeDszA3TJfqqXkjbHgyryOOHKbIUT7lJN0vVeMdlIzqzQ9FVx9nwzdR+pE/oZbedTwu6VSbE8t9V6NLwRpFUqXHdnwNgk5JUZcOUZl7hQLfeOi45uassRwlzNlBliI1rXorysrLDoZiDY3H9Fa7s12vMLg2T2DoeZHmFimOH9cl0jvqpir33Dyte0PYQ5rgCCNiCLBHxXULzHsFx18UrcPI+45NGg/ReTpl6A7V5j3+nBXVFJFJEG0lSdSCBpCaQn0hSBtIJ9JILBKk6kFAFIJyCAIJ1IIGEKu48zNhpx1ik/ZKsyFD4phzJDJGDWZpbY10I1+xEvBcaxz36DTl6cl6t/Zp2RYyEYmRtvfq29abyr13Xm+DYZJiAKAX0VwuAMhjYNmsaPgAs8vDbDzsDhgBsq3EABXMjlUYobqmUdXHaqsYFV4hvVXMxCrsZDaxsdWKCytVExEeqsBDSjytCK5RTTYS+SznHMAANFtKVPx2EZbV8b25uTDrbzySKkmkhSZm6nyJXLutV0OKrbs0zPi4ATQErD5nKQ75gL20Lw7guI7nERyV7LgSOdHevcV7iw2FaK05FAJylAJIpIGlAhOQQNpJGkUFgknIKA1JOQQNpJOQpA0hCk+k12iDyKDCNjxLvN7vdTj/Cl7lhT97b6D5LxrHMLsaGMFF0poebn7fP3UvSeNdoo8IwNHicAL12/mVnfLow8LyWqVXixYIWBxf9oU2wY3n1XPDdtJXmnRivK1XKNsM5K1rxRSxD2hqiHGd4wPCzvE+KECgVl5dVuptaTYsa6qG/FM/OH2LH43FzOPhJUaOLFO+j9qvMI58ue29RuDVaUVA4jCXtIVJAMQwWbHoVe4GcSN8xuouOu4mZ/LqsHjYHNcdFFdY1W54rg2lrjXXVYx7OS0xy25uTD41za7W+lfwXvOFNtaeoB+IteDMH2L3rCDwN+qPktYxrqE5IBOpSqCSKSBqFJyBQNpFKkkFignIKAEE5JA1KkUqQNQITkqQYOTDhnFYjyMrT8VscTg4Iw6acAkknxbAbbFUvGMP/AK/hXVu9v2OHP4Lv2q4ficTI3u3MYxln75ZBPLw1rW+vQLHkuq6+GbjP8e4lCG22INadicrb9Ada86Wch4oCdh7qI+xTeL8EYL72XO43b7GY379B7lXYbhOdwjjYXWf6Nqmp+Wv178PRuyrGy4d5I0CyPHoA0kBb7hGC+5sIGE+I1demwWN42A55Vdaa+ZWOOJymufU/y5qXisZLAxrnA+MW0aXV1dUa+KU+Cc1+dov5hdZ3PkAD2uNbX4q9Nb6LTpzWZenPD8ZP0hvyIr4HYlWmDmY85m6H+t1WM4fn0EZ8raVbYTgT2U46eWhVctel8Zl7d8VHbHDyPyWDcNSF6HMygRp8li8Lgu8mLeQsn0tOO9VHNN2K3B4V8rwyNpJvWhdeq9t4fjInARtcMwAGXnoFiMDG1txM8PWtLvzUSKUwTse07OHzV5yI/wDNNee3qACNIhFbuIEE5BA1BOQKAUkjSSCwQTkEAQTkEASRSUBqhcZxTooXPYadbRenM67+inKu7QYcyYd7W7inf4Sqcu/hdOj+l1ebHf5HuDP9zSkDP3rSSBVgAkkgaXoFocZhgRoFVdlpgcOwne3V5UB/NXM0+izx1Y6eWXHO6ZPiPD4hq4X707g4ga7KxgBPQfNQO03EMtpvZaV7GvnyZnOacrRV7g6X1pZe3Vr6f8tFxzwMq91guIizpqrjivEZJYe8fE6Ig0WuLT/vAjly1AWJxPEJGuOVod9Z2X4aFaXtjv449pmcNPjFK8wDGOF0CszNi+9aBVHf09/NTOEYzI7KTodlWxOOU21rImNFgD4BRZ5CTrsuT8VpS4Ge1DSueLGlqh4dDrK8bj5amvsV5jHeEnyVJwt1Rvcdi4X7rKSdOfP7oXDOIWRmaLJ3CcMKZcUI2/n19q5YXDjvbA8LTZJ2Wn7F4Al7sQ4da9Xb/Z81aTd0nLL442tYBSKNJLqeYCCcggCCcgUDUkaSQWCCKSAIIpIAkiggCSKSJRsDF3T8g9kuc9vo5hse4tHxUrHy1Y8rXPEPDQ1x3bIwX5ONEIztzPrq0t9+4/iubKfHp6OPJ89ZV5n2gxveT5AbAOquoeKOjj8LNBt6Dr7wspxJj4cQ9oHiL+fTlXkrLgvHJp8THgBGIxrb3b6auNcz0Vfjb4T+p3dufHeITO66jUAXr0+apJ4CG5nAg+Y+S9LPZbNWfEGznug0aAkCvgLWf4h2Ye0n78XC9LHkN/ipnUZ5XG+2Qje8HQaJ02K2vT+t1d/6KLQ0mWiWOeRpfhq6HMarN8Rlf3giLQepGhGl/wAVbypvXtoOG8S71uUnxDfzHVTGuWW4KHDEADobWlcVSztvjnbj264iTwH0UDggBaWEA+IkXrtX80/iU+WP1T+zvCpZxmic0Flk5iaOY7WLrY8lMxtnSlzky3VgcNnIa7bkBpryWx4dhBDG1nMb+p3VXwrgsjXB85b4dQ1pJsjYkkBXxWvHhrusf6jlmWpiakiktXKCCKSBqBTkCgaikignpIoIBSSKSAIIpIAkkkghcYY50Dwwa0CB5tOYfL7VJw04eGSD6QBPkeY+aeRehWZwmP7l8mHv2HWCeQPL4rPkx9ujhy9Gce4MJMdE/kTbvdsrufs3DKRJRbIywHsOVwG2hHqh92NlDXAeIe7l/wBvirWKYjysLGdV1eumE4j2cgw8hnbJIX+K3ullz+L2vEXWPcqXEYWN9uc6R1/nSyH1vXXl8Fse0GIeLGUHzpY/FYqz7I5dNyp+Uay4fHvFT4rhbHeFgofoudtzF3spEHDwwa6k7k6n3kqaybyXOeSgSotZ2Y+dIHCo8sr3/BT5ZgOaqfuvLfVRpMaXc1Px3WHz1HXiOLzLdf2dtHdPd+kB8Bf8V5tGMzqXp3YRuVkjOmQ/HMP4BaY9XTLPdlrUoIpLVgCCKSAJIoIAgnIIBSSSSCekiggCSKCBIIpIAkkkgBWP7aYZ0ZGJZsNH9RexHvr3lbBQeM4Pv4JI+rTXkdwT5JZtMunneH4xI0XmNfGufP3rccE41HKxoJojTWvtXmvF+HyYWTI4g2LBGxBH2FcsPxBzPZPT+axyx06cOV7Pju7yE0Ca3PVY3H4aM2XAXus+7tW90eVzrI59VCdxwke1z19FS47dGHLjJpZyNYN9FUcTxbSCG7BVuLx5J3VZiMUTopmDLPl31HWSbVNiF62mwUbvl/FDETcgNSrsFnwaLvJaGw1WywHGm4Jxe5hcx5DXZdSCT4T6WVR9nMFkaCbs7q2dGJA9jh4SK51Ya5xIO1ghvQjqBZFcPq5F8/p4+/bccP4lDiG54ZA8eW49RupS8SwnEJMLOYySHgjI6ywuboGeIbjnlOhXo/CO1IcAJRelhzQS8+bomg5R+ldHyXTr8OXbToJkE7Xi2n3EFp94NELoqpBJFJA1JFBAEkUkE5JFBAkEUkAQRSQBAp7W8yaF0TvV9QmxyCyK9j8I3U5mn6bSPkNdtlaY2ouWjZPDZI9mi5v0svMhVnaLizMOzwvAkoyw0CS9o1LS1uv2j+CPEOKDDNc972gsBMJJoyxc2Crsjo2/906rzLtJx8m2sJDM5dHY7sNEjLIN+I6nmdVfUxU7yamHgzOIRSOb4C8mSAHK0tDcubwN5Fz3C/Jed4yF8TzG8U5pLXeRB/6r0vhUxwR4bG8kAw5JLLKzShpsD2hclb7of2h9mO+vExDxj2wN3toUfMj7RXRc+d1l26cJvDp5BM51FKCU/JWc+EPkdlxlg5V8FCVe4uJ0TosO7cqVEwjcJziEHF4rQHRSeGYXO8XsFzjw+c6bK4gqMUFW1MizdicuWOMW9xDWj10tS4XBug10c4nLldoQ05hdZ2t8V8xJR3VXwuIEuke29Moa5p8QJAeWO5OAIr6wXcOzauNhp9rn3zG06M39HK2z510W3Fh8ZtlzZ/K6UvaaEPId+bXTY7fKz0PqjwHGva7uzRcDeRxy5tNHZhyAHs7KTigXkX1zOrKc10AYxzdlDQW9bVRjoskjXgBumw1LhzzDlfMcle+dqTxp6BgsS1oD2kN5DRsTr6CJgznqBz5WNFocHxo0O8aSDpnDXNs/VI2358ljOD4nOLaSXkEHL4pTtYkcfyAOl7hWUbC5xoAOGj2syyOFnQunl8OvJwFO2drqL6lim9NxDMx4tjgR5fx6LosXFiyw212tWAwmV4rcv2pumtnwnQ6aq6w3HK0mAB9WZv8ACHH+viqXD8LTJcoJkGIZILY4Hy5j1C6KiwJJJIJySKCAJIosaSaCBoF6BOprRmf7OxIu2OvSx0TZSzL4ichNE7Pa8GrJ+i3537jHe+Qh4c0GQW2RteF0ZGj2NPtO23rQa0KB0xx/LO5fhxdi3Oc+QtzZLZJG2iJo60cC6g4i9apo+kSumUgh7SHPa3NFuWviI8TK+m6vedhlbaq+FyZe7jjcZCQe7nJDu9YHV3H6TxZ8IAaDW66PcZGhsWYsJPdljhma8+1C552aTdm9TYC00zYftFxUOl+9v0aXGM2HODX+CVkkh0bROgGg5LJ4aHvJMhFl1NOu1nwPJ2a0beeis+M59CIxGSA8MaAADrZYLIJJaL80ezkBdiYwCQ1pcXDui+2iqzD6XiIWd7rb00vbKMEsDSMzYIsrmsIBNOfnEh9sZq+C2PZri7cZhmPO5bTh0ds4fFZDtTh3ylkrdKZFZPeMeba5mrKyt1aTQ8t7VR2R4q7CYl0LzTZDnHTN9Kvfr71nz4+23BlPDQ9p+yYcTJBpepHKzuQsZiOESsJaW18CvYYcQ2UaG1U8ZwjSCaC5flY6fhK8yj4WQNVHm4eOa0+LjrRVc0dq0tRlhIrmRBuwXeCHNZJADQTrdOI2bYGl7KRh8IXuDRz3PIAblTcYO5YGMOW/vj2lzZGSMaQGgfpXZ86W3Hhvuufkz19MQpxka1r80eUg205g3OC2R487qh6HohNpoRRAaHgAezoYpB1cSPF5eqbMKcY2almZ2R2rRG6nZr5u1NBRZ5MgbHETmdfdPzDMxr7a/vf0j9gW22J+Hc9zi5rczc2XMwZqO7nxXqCSCfQqvxEeY3qL1H57nHQu+rYN+qsMNCWtLhD7PeEFsuuhDG/1zUeCIlxygOAIvUBzru43WfCKAutioSl8DeA4tIcK0Hd8nbBgPOMl1laZsee2uDSY7tjXZcNC08835SJ3Mcj6Kg4ZGS5pZJkAF6+yBlOnnWbLfPvLWhiZ3gb4cpYfvcB2wt/+Jv2o3efVaY+GeR0DrDsha0Nd43OBZCx1UGua2jISNBIDrpdrqDlblFxgad24926zrTIoqPm03R2FEprZC/xNe1r4/CZiPveH6RsbtLE7keSMb2hucF0ZvIXO8Uznn8kR/cOvQ8rBVkOgJBzePU+0badNxUkoc0+oHQgK0wfFnDSQW3k4amhzJFg6g8+SqGSOBDg0xuOnct8eIkLfaY952eBq13MaJTyNsZngZgMoD55JA3a8rTQdoARtY5WKizZLY0f+lYfzj/hd/JFZ/vMT0f8A+zL/AM6Sp8It863aCKSyaEAuU0wB2JYCBIK++McPZkHMstp0F2R0BRxkdRuNAluR9O2y2bOoPJcJJSCCCzMWuMcmha4NIuJzti6gQPIE1prrhj7Z55O2I3c4G3EDMG7SsN5aPKQNuq5lzuiqeJPLmAMcQKLoC3Ocw0pkpZq2O3UGjV1a9Em4hr67lzmxOfE5hDJHPBe4B7QAKynKSbOp9rom41zo5XFseIIJw5FFkYLnOfmcQNf6AV/DPqqvDyOxAyxwzRxvMb6bHT25p2hwY+wGCweqXFHZcY1rcO0kNidb5tbbM4EkDS/F/VKVwFj2wFzo5aEhA72UNYAMUKGhtZyB2fGu8GGOkm7zWkzefXVLfS0VXbLBCKYMEbGguJDWSE6Nkk1HQivtXbsJCTODUhIDaDX27xuJNDaqA1O3qQl/aG0d9GSIfZkruwXamWQC/PfX1Vn2KwdNziMEGWNtn7yymjKLJ1f4g7TZV19a9+1H7a8blwzYYhG6i0GRrpC5waxweAC05SXW67vYaKg4/g/HbXW/MSx16Fv0ToAPE3Kdlo+M8LjmkcyQYZoMMZBZI8FtPLSQaomiQqrFl2D/ANXxIzaVFKzxtkY1zmxg1rY2vcUARpZmzfVVl13Ensz2kc2mvsEaEHl5LZvx7JG31XleIjDi+VjgCwNJbdF+tEtHUa+4KZgOLOaN1xZ8eq7uPk3O2q4i1l6KnlaE08Szc1J4XgnYqUMvKzMA5+wF2Q0H84gGh/AKuONt00yzkm0DieNdhsMHsJEmIcY2ECwxjXAOefPNoB+jfJccXMHPc6NgzMvvBplaxzWtLgBQLtLoDdcO1mIY7EEMLjFA0CMA200ABrzBcQb81CwOLcWNf4szLyOoU/m5o5Fwu7O3quudTThvd3+Ux7msyta7UffInmid9TNW56NO1i+ihcPjL3mQ90S6QA5nHXc3XIHRFnhZI5rspeQ3I5vhrd1H6xUjCNo0PucgPdvf0WfL+KgPghtjR3UZvxGn0aBe810OgHwXDCuaWudcRJzHxtdms1G0GualtZlhLssByxNFNJz24A239IUVJ4dJlEYzyjxtH4IHSNpfvzOZW9oduExt70NjETgLsAGMUwCrLtx4Sa6gK2OGkIOctLme3lkBficzQ8wyO08IB35UoOAeX5nZmSVD+X+95S5xvL19rdWj4i1kzu6wune7PO/dsYK+K0xUqM6Uv7vu2iQtFQx6ZGCjnhxHIkUSP+192zGvulr7cLifLJ4R1dhWsP0hycnR4EtcIm4YFr3sY7u59HCOPMSRy119yiytlzNlfC7vBlOtBgjstjcGsu5GuF3z6KYh1LqGdmdgkbZrxYidg2frq17OY3NH3KCN9ZY3NhY+yXVndI4g5u7P5SxqY7015rq3Fs7x7Yi6RztXvbo+dxr75h/7sAe0PQdSu2Jle0d04sbTQTONGZQaJgj+i9hqyN0Sg/6LH99N8cR/JJSO9xH/AJj9hSU9p1XoKdF7Q9QkkuVo48d/BSfqW/vQlivaw/69/wC4ckktv2sb4v8A3tKb+Dh+tF83rCdrPxj/AOL+29JJTj7/AJ/2ti5Q/ibv1h/zTVleH/jTv/U/eNSSV8vX8rxJ7XfjEX1R++kVvFtF+ti/zMySSrj/AHKj8Jcn4Vv+z/8A6qF/aP8Akv1rvnGkkpvj+FJ5iiwPtO/2fE/tBUGH2SSXNyN+P2mw7rY9nvxV362X/LORSVeL74c/2ME78p6f8KOL/B4T6s37TkkloqtsX+Kt+tJ+8aqofS9ZPkkkhEgfg/ez9krXcL/JfrJ/3RSSVvauaHxnl+oj/aauQ9iX6x/eQIJLbDwnHwD/AMOPrzfspYX8PD9TD/8AEkkl8GXhP4T+MwfXn/bcpfaH8Zh9Zfk1BJRfMV/cmJJJLByv/9k="
                        img-alt="Image"
                        img-top
                    >
                        <template v-slot:header>
                        <h4 class="mb-0">Billy Consultant</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Contact information</b-card-title>
                        <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text> -->
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item><b-icon-phone></b-icon-phone> 8755-86552</b-list-group-item>
                        <b-list-group-item><b-icon-envelope></b-icon-envelope> usermail@type.com</b-list-group-item>
                        <b-list-group-item><b-icon-map></b-icon-map> 22, Qubec road</b-list-group-item>
                        </b-list-group>

                        <b-card-body>
                        <a href="#" class="card-link">Whatsapp</a>
                        <a href="#" class="card-link">Send mail</a>
                        </b-card-body>

                        <b-card-footer>Zattis Properties</b-card-footer>

                    </b-card>
                    </div>     
                </b-col> 

                <b-col sm="12" md="9">
                    <div class="h4">Billy Consultant Properties</div>
                    <b-row>
                        <tr v-for="(i,index) in 4" :key="index"
                        >
                            <b-card
                                title="Inn For sale"
                                img-src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="m-3"
                                
                            >
                                <b-card-text>
                                    
                                </b-card-text>

                                <b-button :to="{name:'singleProperty',params:{id:index}}" variant="info">View</b-button>
                            </b-card>
                            </tr>
                       
            </b-row>
                </b-col>     
            </b-row>
    </div>
</template>

<style scoped>
    @import url("./agent.css");
</style>

<script src="./agent.js">

</script>

         
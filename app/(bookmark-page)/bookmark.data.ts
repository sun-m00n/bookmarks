type bookmark = {
    title: string,
    date: number,
    icon: string | null,
    link: string,
    labels: string[]
}

const data: bookmark[] = [
    {
        "link": "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus",
        "date": 1662024213,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADaklEQVQ4jW2Tf0yUdRzH39/nuTue5w70DjmdWcSBFGQgRx4pQnPSun90y6isVmyWrlaSm7XhXDVrDkcljbX+cEVj/siyMkHCzE0omRmTEzHofnoCDuFAuDvu7nnuueeeT380qT/u9df7j8977/fnjzfD/xgBDLy1aDNE4w7G8RvBsRUsKyvNicIEMxguQFO+LhzoczFAu+dh90T07Nk8aXB0H+PYq7zFbGGiCJJlpCanoHgDUAJBqOHIOJemT/Wc5UvbrT55MZmIzGlFOarJskYZ0BISSUM3KNTcSoFqp+R+oOy9XmzSLTYgon3p2bmD8qibT464kbo9CZJkMFGAPv9+iPZyZJWVghMEyDdGcbftSCTW299QErzWxWY/+6JUiyc7E5evFCv+IEAELtsEZtCDlBS0WBzQ62B0VMKyqwHG6iqo0yHMtx87H2k98jxzF1TsYTx32LC6kM+uewKiww79qpVgggCSZShjtxG/+DsWei6AMYZl7+yG+cV6pMORuZTX/wwmXnnj+HzHSUqFZjK9/y+qSvH+KxR01pNvzQaKnukhIlKJqJFpC7HzzGR8ipJJJP/2Qbp2HcrNMVBCAmdeAnGdHaaa9eCW5EByDeNOYxOYYMCq9s9hKMj/SAdQIt57CeHjpyC5hsF4DrzVCmbQIx2aReTEDzDWrod1/16IleWw7HwZMwcPI3q6m/L2vinxr43PrQ13nKyFqsLcsB157zYid8dLWLp9G3K2OMGJIqKdPVC8AZg21cBQaEO8rx+Kxy/p8u/7in+Ly9aWvrBty/IPm4zCIyWQXUNY6P4V8vW/oF+5AjlbnSAlhehP3dBZl8FUuwFKIIh4X787cdn1CSgYFNT5yNHwie8pWPc0eYvXka+8hrwPOcjvqKNo1zlKev3kd2ymsfoGSscTFO36RfM9XNUEADpms8lTb+//eKH3N7tQvubR3N27kFVSDHVyCjMtbQgdaIFQUQaSk0gFx5Ean4CxuupnU2VROzwD/w1p+v3mjUmP/+p8xzc009JG6t05Cn97mjy2Cpr+4BCFmlvJW1KlRk6d6SSiQmTizoFDBb7VjzV7iipHYxcvxRJXh1Tf2tpUtOtcJPHn4IC39PE9E87ncjOaF4cFcDdt9gfjfwxulYdHXr/lfHZn+LsfnySi5Znu/wH+RNQZHe+GfwAAAABJRU5ErkJggg==",
        "title": "",
        "labels": []
    },
    {
        "link": "https://android-js.github.io/docs/",
        "date": 1683464086,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1UlEQVQ4jXVSv0t0VxA9c+fu+7FvRVxU0IRECEIIErFbwQ+3EEQkiyDbWFoI4n8QSBCClnY2FsFmZUEFUwlW+TClWAQWiwUJIcgaV1DX9za+d++dFN9qSOGBYZhhfh4OLSwsfMXM/4Rh+Aige3h4aPEfuOffcpubm6rRaOSfnp76RCSgSqXSERFnrU2I6E/P835XSv1mrf3l5OTkAQAWFxcHwjD8LsuyGWPMtyLyBTNHAIgqlYoQEYIggLUWSZIgTVP4vv8XEf3onPOI6Ic0TT/zfR9BEEBrjSRJAADaGCN9fX2yu7sL55y0Wi25vLyk8/Pzz+/u7n5WSqFYLKJUKtmJiQk3NjamoihyGxsb6cPDQ14DIBGhgYEBxHEsrVYLKysrWFpasqurq845x1tbWzI6OsqvnFj7iRIiIiUiICLpdrtSq9Xo+flZ9vf3USgUoLUWIqLh4WFqNpuyvb0tp6encM6htxiKiCAipJSiKIpwe3tLURSRtZZE5M3Ozs5oZmYGV1dXuL+/Ry6Xw9sA5xyCIMD09DTq9TpKpRI8z0PvOhhjMDc3h4ODA4yMjGBoaAhZloGI8PoCnHNgZgwODr7FrwjDkPr7+3F9fY2pqSkws3LOgYig3xTDnzRjjPlfMxHJ0dGR1Ot1NTk5ifHxcRhjLDOLiEADEBFBt9uFcw5KKQnDkJRSiplNkiRUq9UwPz+PtbU1ISJ0Oh2ICACI1lpTmqZYX19HPp931lpzcXHBs7OzEBF4nic7Ozvu8fERe3t7rtlscrvd1nEc61wuB6pUKk89QXlExL7vI01TFItFdDqdTESoWCxyq9UiYwyYGURkmDkFYLS19sssywqFQmFIRMbSNP2GmT+02+1Z3/d9IsLNzU3med6vYRh+tNY2APwRx/HfIhIT3sHy8vLXLy8v3xOR53neT8fHx433aqlnqlqtcrlc1u8VlstlXa1WGYB67fsXNjxy8R1L2VcAAAAASUVORK5CYII=",
        "title": "Introduction · Android JS",
        "labels": []
    },
    {
        "link": "https://venngage.com/blog/pastel-color-palettes/",
        "date": 1684945397,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYElEQVQ4jW1Ty0tUYRT/nfvdx0yK0UpDChStnMcdoT9AKXAV1GakTSI+skUto6Cia8sWUUSWjfMSwdBd+8pVFLgIaXKR0wMScic5zp17Z+53WsydYR7+Vh/n+53X75xDaAQzgYgBILRonxaa2gcAlWLh1/bNE799EgFVDgAQWhBO2BdUQ73BbqUHmroHAChXuskQu+x4S1szwXetPn5UwEyVnsWyzKHX/yZxfVNr/DcThdvDK8yxTOlJo49SK8nM2AtQuKNiH9wVQp88Z57pqrkPp50BRTfGy7Ydl8THzYz9stpGNQhCCeeymSx+rhkii4cPzWRpu+9poXswtd9vZtx8OFGYAADE14SZKn6KLjlX/AoAofJsWSrzADGsnP51rmOeWb7o7FTfBynwlpkf5GY7l2GxjvVxr+zyIwieBQCcfb7fF00UNzD5M1BveY0FAIQXD2fCCXui0QYAuPXdiCaKG4ML+/2IZEpjsaz7pk1Xi5Uj3z5iy+5qZKU0pgICIOZWAiySdUeLZPPEiJmYWYLUkuPlg4J7EM/pWA+7bUHaQIzzmxoc2VOCm1d25owfpJA9dLF3xM/QVm5DdgUAhqYHRiDIyc905RWAmCWlNSNwr8oBH9UzLFbAYADQAsZ9KWXaX+nq7KNZJxnNOsnmhExgblr3aNpOxrJOqqYH1YWJQzEvuUmATnnFg8e5vb8fYPmaWDk9crJ3VNGP3VEE//mS+jiNjVEPIG47JjPtXIXANZRlkITYlQDI83qhqTYqcmVrylhtkrRFpPqphl8dhBAIDghU4EnayU0Z31o5APAf8hMOWHitEOoAAAAASUVORK5CYII=",
        "title": "20+ Best Pastel Color Palettes for 2023 - Venngage",
        "labels": []
    },
    {
        "link": "https://nerdschalk.com/remove-system-junk-windows-11/",
        "date": 1684907972,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACDElEQVQ4jbWTsWveVRSGn/fc+8sXS000AUNJdLA0lS66VBxcBJeCgyAOdnV0FYqzk1tRUPCvEHRRcHN3UKMUwSIxNKZJqlH4vu9373kd0kRq6iQ+4zmch/ccOOI+BvEQBH5Y/6T+nxHAweNPLy9dWPwQdD5wIpmI0mez94dbt75sm5uvxsLwJmYOrmlm5eDgLd25s1cBxse8WNB1wn8HxlDjAvC8Ip5RKa/QGkgUDJPJDWAvAIZ796YNf9Izj0ZnG+02tjarEVfHyxdfysbXbm1/zJxn7z0zv2EcjwACYOXw8LevtrZeN/FLRfV4ORWnjYb3hh9/+Dx7vj2UsmDp7uzoj2va2bl7KgB4AsI4JCGo2NGg1xpXx0uXXi72z4Sc6Oiz7aW9k7lTAVeuIMB2yv5J0v1zyKr1xtxt2baAcnltfzgrOMZIUvpmoO0KpWU34sUS9TXbDbmMZddnBN9tbXVDU4QSvqX744iilHrCJKXrSheM12LjrODa2sXVgpZ8HOKp2Nv9oDsPqynYCaQkIXk3Uw8Ifl9fX11cHb4wfb21Po8aN9vKygvK9m7UEoaGlOAO5Hxn58EEwzA8Wolni2oMigWVukwpz8X384967/sLpUwGaUBRBOef3Ng4PVoFaNPpn+3cuU+xHxGMZJ8k3Ba3p/PcfIeIN7CnwILxr9Pt7fznT/x//Nubn/AXIkMAgEYTz60AAAAASUVORK5CYII=",
        "title": "9 Ways to Remove System Junk on Windows 11",
        "labels": []
    },
    {
        "link": "https://camillemormal.com/",
        "date": 1684573211,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARklEQVQ4jWNgGOygEIpxAhYCBogSsoGJFOcMTgMYkdiFDJh+doDSB9DEXzMwMPRTxQWEQBsU4wQDH4gUG0AoJb6m1ALaAwAjmwYGh6mU4wAAAABJRU5ErkJggg==",
        "title": "Independent Designer & Art Director",
        "labels": []
    },
    {
        "link": "https://www.youtube.com/watch?v=Eh3EpwqT4cM",
        "date": 1684479034,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVQ4jZ2TQWtTQRDHfzO7yUsNKSG0heJJ0YKnCvVSkHrV7+BBeu7Vk9+lH8CLN6EXk4Lo1V48lGClFBELGmmSmr73djy8fS8vll4c+LO7s7OzM///LhQmBmrg+uDtZrgIBQQAKyf/YQbiBexFt9t9niSP7ji3umrW7og0UfWL0ZaOzGYjmBxn2c/BdPpJxuNz+vDwFxxnqmaqZs4V8L5AuS6haqmqXcDpO3jCEN4YmEFmkMcxrSCSGqSh8GcGIY52Am91Ce5HJ5EYBRwbG45222HmUHVS+DX2DhASuKu3oAeolGSqCiDs7gqHh8L2thCCxOQSbxFAO9BToClzNQSJokwmsLUFgwHs78P6eklnlQho6c0axUKbTVhZgUYjHpeqCwE8kMWFxYNF9uVlGA5hbw8ODuqJzajqnPENPtfYDxU2N4OtrRVzkVDfC0V8/h2G/g98AR7ESkJF8tFRcYdzkOf15iRW6y/hlD48voCz+BbmELFrvhrG8OMjPBOAV3D7qXM791R73Var00qSJRoNTyifB5Dn+eVsNv19dTX+mmWj93n+4SWciM1LKkmqy7RoImFBqPqPfH39K7t/4A18f74nAH8Bjm35s3ZkOjEAAAAASUVORK5CYII=",
        "title": "Protect your NextJs 13 app using Next-Auth - YouTube",
        "labels": []
    },
    {
        "link": "https://github.com/HamedBahram/next-auth-demo/tree/main/app",
        "date": 1684479026,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "next-auth-demo/app at main · HamedBahram/next-auth-demo · GitHub",
        "labels": []
    },
    {
        "link": "https://huggingface.co/",
        "date": 1684401553,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACp0lEQVQ4jXWTXWjNcRzGP7//+//MWfbGsR00WpO3YZElF8I01oQ7uVBqF+6s5IJYriiuvJf3ckFKEZFQFjK00iYyu/B22DjnbDv/s/P2/39dHCTse/l8n57n6dvzhXFHVEunlLYdlPD4HFB/A6ceSGX70s/r+Xy3ldzHWjAgVNdPzdrrJ247N7a3qsS4arFhWRIMHH0mz5eJdFeLdFeIdFeKPK0RedEs8unqo7efZNF/E3z4IvOiib23SJ6M4upg2CC/WAL5DGRMZPLegV7Vvm5+rXoNoAFsPSdO1Dt/gOEzUSY4BMpGfAERQPALgO5ASFBDh2bMC3Xtb2wX87fA4U0s5Pu1NVh5AlHsPlXN2ZuVYAq5vKLjyFSu3C8D2wD1DWKX2y7sYQGAAVCe7W5CvdMxHVQAqxaPMLM6C77C0IUtzXFMQ8AXsF0o9NpzJiUWAc80ADKxCKRBaSgdmuZ6pLMaeR8yeUXICWioS0OgQNNBhiE7FPmdADcSxzdhNAGuiZey2HU8yvRSn9SYjjMxz7EdA+gAY2NgTQU7EgcwHvdJOd7F1SSGwchAwqPK1ti3sQS3K4pf6hNaG0OPJyEnYCpIDyLxrrbHfXJJDcZleVX/poekboPh/rw8oAUQngiaQCIJyijulIJcCio20x85u8KoKhmpIRgC3QRNgWWBqUMyBdkxCAREg1IX8gXIFcCwoPCV2iqmGOiOj+VANgd2CFyr6OIa4I0WXcNhsIyisAIKo2C55HzEeJOwHtVP6biHVrGSXA94SYoVnAYlMwNQELzRSMWKtVFlUNYM1dvuvR/hoQLovCITOlpZHU4/b8Z7Oxu/YFKx+Ml7f9Y1CjBN9Wxg9GUTupsnXP8q6TTcPd3FnZ1rlPfvRzWKSYvY/+AtYtNYrO+f8wNmYBZLKqvBZAAAAABJRU5ErkJggg==",
        "title": "Hugging Face – The AI community building the future.",
        "labels": []
    },
    {
        "link": "https://colorhunt.co/palettes/summer",
        "date": 1683092602,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACi0lEQVQ4jXWTzWuUVxTGf+fe+87HG2femTTxAxV0KX4Ua1tqqwt3QhB3ghRXpcvqRhfixpXbbrSlLbgsrbT5F7IstEQCVok1TjSiwTFlxmRmkpl37j0u5n3tIPWBs7rnec5zPi5ABEiSJOcmJyd71Wr1S0aw/AcLkCTJV1nOaUCAyAApoKrqVHUAhOzxXUgIYZjlaBapVCqVz0MIj7vd7sv/Ib0XcRzvcs7tlVqttgLsVJXfIZ1L03C3XrfLMzMb6z+cRwEuzmJnZyvbmi2zP474SETOADPAfSmXy3uiKDprjLlsjN0nommn6zcHA32uQQOghaKJjWE6LksZxIWgf6vqrRDCb+O9Xjn28akbt787oY2HP0Xt11Var1NUYbJu+KBu2LPb+q8v/avzC5sXoPMLgAMKgAcmisWyPXJ4lxz5sAySgPMj6WE2167aQiQKsi3bjHHZ1D2gIQTxaUi1p9HIfcjMKdaiwROCYsFrxsGNtaAgSEGxxuODR2TkQFWxRkQ9IApYzUlubOeCDSrNWHk2hZgaIpkDVTCCeFUzWFPwMi6Qqw0kVuTulHDnkGqlKoS3Aoo16odDaTeXoBSUrVFRkwtYePJy9YWsbnpDJGJdinHDPATnzWq/a5r9LSk518iKBpMPY+/09NzTxYftnx89kP6BL/w/LyzLnQld7kzwpJfwKt0+/HaxQbu/9fRgtfpnLpB/GNPu9TZKUXHw1/2F0/EnJ6RfODpcbNak0dseFntJ+v2D+cKvj/+Q2JhvGmtr84ABdPyQBNBSqXS9UIquffbpcbdDdtB63mKptcRKZ6VTVHe1tb5+M8/NSbwrUq9UTrY2Ni7gOGAjS2TdvZIr/9hutxfGyQBvAMnmJ56TYt0JAAAAAElFTkSuQmCC",
        "title": "Summer Color Palettes - Color Hunt",
        "labels": []
    },
    {
        "link": "https://azeezatraheem.medium.com/implementing-authentication-redirects-in-next-js-c15907ec82b7",
        "date": 1683201073,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTsaoiQRBFT3e/mUFBmET8BH/ABQN/wFARFBTBSJjAVDQQzIwe7IcYjGBgZiCYGhr4ASZmBsLYrzZQm9G3y8puQdNwq2717erbAJ9AAljgC5C/rK977RX4VHeQ+654L1ytTnVWxphHM4wxTwxjzAN7kAUQdZek+DcFolMk1e/3ieOY5XLJcDgkm806RrPZZDAYAOD7vrrnFEopCYJA5vO5vMZ2u5VMJiOlUslhrVZLOp2OjMdjAeRDRGg0GtTrdZIkQamboOv1SrlcJooi8vk8IoK1lna7zfF4JAxDAD4AqtUq1lo3LKUUSimstdRqNc7ns8sVi8WnIWsAz/PcyelQSmGMQWv9hIm4x7o1WK1WaK2dTGstSZKgtWaxWLDb7VzucDhwOp24XC6uo/i+L3Ecfxvifr+XMAylUqk4rNvtSq/Xk8lk8vDPzRBBEMhoNJL1ei2bzUZms5kUCgVn4SiKZDqdiud5EgSB5HK594z0euffGckBr1ZOk/9gZf7XyhggBH6kVb9BFm5f+ucvMhDxQnv5W1IAAAAASUVORK5CYII=",
        "title": "IMPLEMENTING AUTHENTICATION REDIRECTS IN NEXT.JS | by Azeezat Raheem | Medium",
        "labels": []
    },
    {
        "link": "https://daisyui.com/components/dropdown/",
        "date": 1683117251,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADTUlEQVQ4jW2TT2gcZQDF3/fNzM7+m53dZDfZJLsJZCMGQ4NREAsihQrVIniyWIWKx94U8dRLThYRFBV7tiAqWrx4kaLQVqV4iAqBVk2sTbbJ7iazu7Mzs/Pv++cpQcR3/r33Lu8R/I8UQHo/rVwyrcKrChkmxvHGQXvn4sq5w+C/rH5sWgdtP9Z83DAM/NaVW62pmWeytdklomfARm4p7ziNznc2VVTPzdz6/VeyDgkA2lHjvdfnT1uz5U8KjfoFu1ZMNNNaNUulBqWAFFGkmO/ZreY7mWL+fD9v7D6/NNi6egNSB4Bf3l9YnrGsK8V6q2XYJYh0dMk/iJQehCBgiPvDcq5ceTNbbU7IVIK74kp91neA7k0KAMHYDzjRfJXJQjAGIrNlmcSV0OkjGQwRD0KT6tkJ7g8BAaiClSSm6QGArgByozDvhz7/2O913s7bpWnu9eH/0QZ3U4ABnFCY2SoEr0KpcRK54dXJ6eUdpXaIduZy8/zcov3B7OrimZxdKuuGZvbvtDHe6SBfjEBUAn8vRjwisOfrMK0yrPpcK5ORZ3evK6nDkE8bE9ZJWrAJ1SVY4KN/PwCNGbigkEqBZgG3G2NWMkCjuhSsKYRqCqG3dRhEEJ2AixSEMnAewOuGYHsciauBUCBxFUIRwx940EolaMQAFwpcUFf33fCHw/b+WqqLGoGcNg2UsnNF7P3sYtQW0CggBGA/UUQSU/S2HUfJw2jcccPhTn9DWzoV3fU2xbWylf5dmdRPVeoT9lRrCkGqMPYYSDGH4koNay8vo7pQg6aidu9e/62N6/cvb266PxIAuPXhUq2xNv95pVE5bRgmNI0iHgygCAPVNDA/hTUzCWIYkEwgHo2+du5vv/bQ2W2PAgBYtMqH4ycDJ0acKLjOMOJUxoWpKvKTNVCTysAdypQThH6C0a7zrPfX+OTxlJ97uBAoMS4SwU4opHB7vc90k5a1TH6Sc4LQd/uD/c5txcTCYOuB7N3t3hztsy8+vR055OhMX77RyJWr4pVsxciN+tG3rRONa8V6eVXTM0i8g+3dOwcXNK5eSkZRMnDYu+c+Cg4B4Djg31p/8ZHMU4967xVs8gIIUZKl36du9+Kf30B0FkHWv0J6xP4DgAmuZH+azxAAAAAASUVORK5CYII=",
        "title": "Dropdown — Tailwind CSS Components",
        "labels": []
    },
    {
        "link": "https://tailwind-converter.netlify.app/",
        "date": 1683108531,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACLUlEQVQ4jbWTX0hTcRTHv7977+713v1xqGVcaqyxBBOd7sXsoZQoRaR6WQ8GBT700L+HjdzLokuBOlEToacIqbcW+OLTemjISNsyh4IK4YOE5VjNtf/uz93tQYmCDUPowIHDgfPhy/ecA/znIPt5qMF/6YGuROiY8PDVR7RNYmuzyFgsheTycqYcsCy19cnoKSSiVxBPfIOisESjNciE2lyZcL86UFbbwICYY/nnKl7w63hVyD805AVAWhyDN1DIi1yNOM2cNsbTgY/XNYbjH6jfkzYbDQB8Xf1ZSsEqbzC/je3KpuZ7dqdx2setjI++VKtr5oup2LW4b84lJ1O2TKy09ZeChluOOkZNmyCT8NqU+wsAWB+4+uR8rp2DHED4x+e8XmvO0eS8VjzxJuhyLu4BFBDrQ6kb2XRjKZGM0HxVvcyy2lw2P7v+bHLpjDRsTIW326hipkomjKJrbFhcsNs3ABAaAJoidy8XM5nbulp9SCBKcGHy6WztuYtfWUrpP9bewZ8cfrwUn/d/5wW9MTQ1/nrL693Z90+hOn0+BoyqT6Ewk6e5zWhB6bc6nN2rI9LG1bGRR5SKNq7fd9zMRn++SO1EWwAQSBIFQAEAYvN4aFmnOzrT07MNAJ0ejyb2PnhHxTHpXCQ8V9hFkqvWdJVYlYkV2LFPbne80hoJJIlAkkoAYLEPdpFMwkxkQhfVQli4dOFdoLc3Ue5uKh7Unr+H+wUAoP6oDw05MH4B8bLIoUapouUAAAAASUVORK5CYII=",
        "title": "Convert Css To Tailwind | TailwindCSS Converter",
        "labels": []
    },
    {
        "link": "https://www.psfreebies.com/convert-any-photo-to-digital-oil-painting-effect-in-photoshop/",
        "date": 1683440576,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACCElEQVQ4jaWTPWtUQRSG33dmcu/GmGWvCPEDNGIlClYBIQg3VrLEKGKsxNbfYWWh+BtsLEIIwi7sKhhYUhkbERUUU9n4RVyMRXbvzJxjkbtrQhZBPNWZ8/HwnjMzwL+b2X3gwJmezitnz9Ue0nBCVQQgAShVFcZ0IXj7bXur8XJ1dbPs0z2A2dmFyVrGn5VKhVEEhsMUVBWAIop+CoW/02o1ng4gQznd7pYS2CyKIvg/tu2991EEIURvyBM0XLpUr58sFXAIyLIqQToAdsw5J6pLhYaZSLkYY3gAYCyE0E+SpDrO5EbZZt2IJakxxpD6+Vmj+a6Mrc9fuXad5CmSAmK6jIsZASgxiAM3z/ODAA/syCZA9AFgcXGRoxRQRFTBM/X6wmUSNRjeMoZHRKQvElNRfQEAy8vLGAkIIaghr6o1C8YYgoTEKEmSpv1eb+3jh6JZ3kLcNwJJLfeANE3pnIMhQWO08MWTXk9vbmy0+4P6fQpUFdZahhDWffBtwKUG4WuMWGu3G6/2bOmvgBiet5qNu6NGHDTvAXS7W5odqkWScafITuR57n6cv3/ajh99BONsULn95t6x94ASoAK7PkaWValA1VrnrHNWYcY7nU6w6eG5JDt+Ic2mZgjOAwDyjt2nQOR7AKZawfsJQMdUwmsA+LUdVia7X2aUTD3dYwBAZ274Rv7bfgOv2+uW5ipBAwAAAABJRU5ErkJggg==",
        "title": "Convert any Photo to Digital Oil Painting Effect in Photoshop - Psfreebies",
        "labels": []
    },
    {
        "link": "https://www.prisma.io/docs/concepts/database-connectors/mongodb",
        "date": 1683105523,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyklEQVQ4jY2SaUiUURSG33O/r6m0nLIoM0otUzNtG2yDFsGCMqEMW6H8UbT9K4I2YoaKiohEo6JAQwrRNttogaQF01BLjWzBoEJBC5dZ1Jn5vntPP4aRsiG6vy6Xc9/3Oe85QIjDzMQM6vV6T7r7vI/Z50sOvoeqH/hZAABL784j+Vc4LWcX/+zsvs1sF/8lAIC4ryu2orq+JcyWKUfNyfLnFd8w2NudEYpChHBnDBmx72RR2Xi/z6duFhzFy5p3eqvT2PxPW7vdHkDvcWaeL71nYOI8MzFzi1SseO+Jc/LU5ZIednUsGEjxJ0FbQ/jnH84jZwrLdFh0To6bAALx1pws9erN+7BePXw9ADgc+DOL/uAM36EdR/MZiYsNJC1RjvPFipkVM/O2g6fVxZLyDnZ3pvxOIZiZiEixuzPlzovaPYWl95XVahUEwSnxsUEn3rZ+pXxaVR+JYSM3BsPub4HtEC4acvh00Y1IU5lKKklWazilJkxiAKQUc1pqkm4ZpPG1u09yubt9MhEpABBExDjQu7rg6q21la9rzYiICNHn9fPEqDEUEz2WArRMADh3zXL54EXNOAyP3BRsPRCiZeiUxs9fCQBrBJKGH8nxsWwZpENKSUIQpJRInzuLDMPk8oqqXP75PZqIVEDA57y+PWdF63BrhG5KqaAYs5OnwJQSUiomItI0jTQhtDXLFhol95/FIjIqGwB0ZhZE9IX9Pcf25K674Mi7xIPDw4RtWgLrmkbQNHJ5es3KukaqrH+vNTY1WxbNtUEJzexPMjBGB7rde28u3bp/1dumj8bL4jz69LVFq2v4QG1OD8ZZhyEmZrwzY76tekZS3CNAnCMiMyhARMTsaUt9+OZ7xe7jBaNnJkxCfPQYM2Vq/LfFadOfx0SNeg1nezUampsoPd38a5WDi8HM2W1drmddbs9Z9nk2cEfzhBC1WvD+CzceczOX+ZqWAAAAAElFTkSuQmCC",
        "title": "MongoDB database connector",
        "labels": []
    },
    {
        "link": "https://grafbase.com/guides/username-and-password-authentication-with-next-auth",
        "date": 1683114347,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVklEQVQ4jX3TT0tVYRDH8QfNTXgzfAOtCtRExbch5q3Ui76J1mK4d+km/LcJjLKotyBuKykiqJ2ioN5aSmhKnxbOhfFwdVbnzPy+v5kz53lKiUBnSYEGfmERHehqq20DTuILTrCK+6l2Dx3XGc3gO/5iHQ9SbRTvXcY3NKrgNppYQV+qDeMD/uEjZrGEI2xhpmAvnFdb48U338ICPmMsjx2NYK+gF8+wi9+YR0+pBO7ieWh2g+nNgh7MxXjNeL6N7gCbUZu70iBGn0zvd0J0jMOAjiNXS7oprBVs4iyWNJEEtdjBQgV8HHs5x7tWchCv4xdeMUpgPcALvMVQq5BP2FAy+oQxjCfwDUaSvqvgB16hv43ReeqYwYdh9rNgOrqd4WXFaASjFXAjjHeqJ7IeyZbRQKoNBniBr3iSweplehSL/IMXWMZp7KFe0d54K59iHweYug78Dy0sXjBCoOyYAAAAAElFTkSuQmCC",
        "title": "Username and Password authentication with NextAuth.js – Grafbase",
        "labels": []
    },
    {
        "link": "https://nerdcave.com/tailwind-cheat-sheet",
        "date": 1683105503,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4jZ1RPWhTURj9fu59PzdNc98P7wUMgcKbIkQwo0uwWqyIILSgONh2ECcnwUlTqILg5lARNwc7uEvBQaqbCA5WcHBQMYp1SElJfMkLvU6BhNYWesZzznc4HwdhBGEY5lut1mUiOp1lWcTMf4joTZZlzwFgGw4CM19AxC0i+mnb9lMAaEgpHzPzd0Rsua575aDjS8w8UEo1arWaHNXq9booFAq3ACBzHGdpv/sIALbz+fztgxoWCoUbAND1PK88JhDRXSHEpjEGAQC01itSysx13fflcrk26pVSvrMs6+EoJ4hoRgjxAhENAIBS6rcxZtYYc7XZbL6dmJh4IITY9X1/vdlsrvX7/WtjBQaDwbE0Tb9qrfXk5GSj3W57vu9/bLfbi0EQXO/1enNpmp7b2dn5HIbhDyIKx15AxA9SypvFYnFRa72hlPokhNiampo6a4zBJElODr1KqSVE/DIWIKV8Ytv2y4WFBQcAYH5+noMguE9Eg1wulyql7gy9juOsMfPaWIBSqoaIu1EUnRrlS6VSUq1WL1YqFQsAIJfLVQGg7zjOmT0TMfMqAPzSWp/YIwJAsVisSCm/WZa1vp8+XOMZIvaklKue580mSXLc9/0Z13UfIWLXtu1NIurGcby3wUiT88z8ChH/AoBBxD4zb1iWNQcAEMfxvUNDhlheXqb9+DiOV4ioGwTB9KEh/0McxyuI2AmCYJqPEtDpdF5HUWQjIvwDbKKMUB/Ux7IAAAAASUVORK5CYII=",
        "title": "Tailwind CSS Cheat Sheet",
        "labels": []
    },
    {
        "link": "https://www.tailwindhelper.com/",
        "date": 1683105511,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABp0lEQVQ4jXVSTWsTURQ9576X+QhNopa4skErSgt2XbFu/Qv+Nf0T4t6VK8GNCIILFYvaQg1I2prMZCYz77iY6TQEfKsD9953zj33cLJ/BEASSUkANgBJrD2/3t3UNsDGsBeuuyUZzWgChABijaEB8kT7hyQC8zoPqh0RM3F0QlsE2Mx4QRBgQECu8rD/8H5y72SVfcw+LEMeMalUGP2VNHkAIExcqDxKd5+PnqTRTrA7D5ZPX01fXFZng96krC8ASCDhRuMdCDJ4WI3w5u+n271bBdx2vDfuH26lj7P6crE6NvZIkGgZIBjt52q27bYO+ntv559n+XEa7Z5l7/7k753FJEIACU9QaPZSZB5AFVb76aOTEDK7eVF8C6odIymQAGidrQ2PIKM7LX+9nr6M3fDu4FmtkmSzACDrbO2obrjhMmSnxXdBnkljY3MqgG40nlwfnyRQovpa/JhV5ySmxZes/m3mJJgBILssNSOSFsoj+NjiZZg7uJ4lItBKou9S1UVjZANBQSF1Q0FSuFJLALbeTRJErbp1AgEtaIPUpvV/8d4gb1b9BxQVCqw4KPO7AAAAAElFTkSuQmCC",
        "title": "Tailwindhelper",
        "labels": []
    },
    {
        "link": "https://medium.com/@aalam-info-solutions-llp/excel-import-in-next-js-50359f3d7f66",
        "date": 1682771199,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTsaoiQRBFT3e/mUFBmET8BH/ABQN/wFARFBTBSJjAVDQQzIwe7IcYjGBgZiCYGhr4ASZmBsLYrzZQm9G3y8puQdNwq2717erbAJ9AAljgC5C/rK977RX4VHeQ+654L1ytTnVWxphHM4wxTwxjzAN7kAUQdZek+DcFolMk1e/3ieOY5XLJcDgkm806RrPZZDAYAOD7vrrnFEopCYJA5vO5vMZ2u5VMJiOlUslhrVZLOp2OjMdjAeRDRGg0GtTrdZIkQamboOv1SrlcJooi8vk8IoK1lna7zfF4JAxDAD4AqtUq1lo3LKUUSimstdRqNc7ns8sVi8WnIWsAz/PcyelQSmGMQWv9hIm4x7o1WK1WaK2dTGstSZKgtWaxWLDb7VzucDhwOp24XC6uo/i+L3Ecfxvifr+XMAylUqk4rNvtSq/Xk8lk8vDPzRBBEMhoNJL1ei2bzUZms5kUCgVn4SiKZDqdiud5EgSB5HK594z0euffGckBr1ZOk/9gZf7XyhggBH6kVb9BFm5f+ucvMhDxQnv5W1IAAAAASUVORK5CYII=",
        "title": "Excel Import in Next JS. How to Excel Import in Next JS | by Aalam Info Solutions LLP | Medium",
        "labels": []
    },
    {
        "link": "https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell",
        "date": 1682782907,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQklEQVQ4jWP87if3nwEH4Nz0iLF+FwNO+UY3BkYmXJLEglEDqGAAxYCRYcl7nPHMECPI+H8n7nTA6D6aDgaHARQDAKgRDRsLiHU6AAAAAElFTkSuQmCC",
        "title": "Get started with OpenSSH for Windows | Microsoft Learn",
        "labels": []
    },
    {
        "link": "https://www.mongodb.com/docs/drivers/node/current/quick-reference/#std-label-node-quick-reference",
        "date": 1682686559,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHUlEQVQ4jWWSzUtUURjGf++5R0dzHAwatEmlaOPHKjTRJAL3RRt3Qi2E9m37H5SW07aWQZto0cJapGQgEqS2iKD8QiKzGcevufe8Ld7rzGgPvNxzn/Oc5/04RziPK/2jeD+FhnGgJ2XXETdPkjxnY3WxUS61VWHoAv54BpFHiAMCHCa21xoBDjSAapE485itpYO6QfdYK5Re0+QnCAmgUElgIGsGq/vQFpncRVCN5wgtd9laOnAAuPIsTX6CJAZVOAmQ8/C0zyLnjVOFJIYmP4GvzABE9AzexLmiZU5RSeDJdbiXh64MeAdvf0PG8qEK4obJ5d84lGnrOcVRgP4sTHaCWjdMdlo7RyEVKYgDZdrhGEdD3eA4wJ2LkG+uc/lmuN1he6dQBSe3HHDZ0jTcSyFj3+8nFgJ0ZhrvLC1NC47zUCBWc9rBAjFO/1PjgO0z1gJ8Ltv6WxoAX/bPVSCAbHkC83g3WJtDWwTvdmH5L6ztGLfcBe9307dwel4gCQtC98AIUbRYMxCgnNjQXt0w7v4yfNiD9ihtQ0wXdCSi9GuT9nwB74dqJhkHKxXoy8LXCsz+gA5fn0HkIWiR9ZVnVlO2dw49GcP7a2iqisSe8MIeHCT2L2KHq/EcmntAaSM2g/J2lWzvS6R6CZFhXARe4E8MpQQyEUjafwhFkpaHbH46PO34LK72j6J+CtVx0N50MD8RmSeOX7C59rFR/g9XJMcXmM6rnQAAAABJRU5ErkJggg==",
        "title": "Quick Reference — Node.js",
        "labels": []
    },
    {
        "link": "https://m2.material.io/components?platform=web",
        "date": 1682586863,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVQ4jZVTy2rjQBCsbo3kQUEGg0HgjwjkFPIDhpAvyUm3TQ7OKT4ke8tpL/6JPSwB/0DIKZBvkAQGGyNBduQZjyaHWEHxY8nWbbqrumoamrCFwWAQBkEwBPADwNmm/ATgp9Z6muf53zaftvQX/X7/1vO8EwBwzn2Q6INmrX2Zz+c3AP7sDBiNRpe+7z/Ude03wm0QEZjZGGOS8Xj867MRhuF5kiTafRNJkugwDM8BgOM4Poqi6K4oCj/P873ObeR5jqIo/CiK7uI4PmIp5dDzvGMiQpqm0FofFGutkaYpiAie5x1LKYdMRFfOORARlFLIsuzggCzLoJQCEWGjuWIApw2BmQ+maNyZuV0+/fL6V4q2exsM4PlLYU+KA+4A8MzOufv21H0p9rlv9nDPVVVNrbWv7WaTwhgDY8yOOxHBWvtaVdVUzGazt263ey2E+C2l9BuStRaLxQIAUNc1pJQAACklhBBGKXVdluWbAICyLB+ttclkMnlYr9e+cw7OOQRB8LkDIgIRQQhhrLVJWZaPwNYxdTqdi16vd8vMJ41z86XN+2W5XN6sVqvdY2rwv+f8DjlDGpHfSLNqAAAAAElFTkSuQmCC",
        "title": "Components - Material Design",
        "labels": []
    },
    {
        "link": "https://dev.to/adrai/i18n-with-nextjs-13-and-app-directory-18dm",
        "date": 1682764944,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMklEQVQ4jZWSv09TURTHz7nvB7wX2w6gTDJISCQ0Qd9rhzJodWokkaSmdQD/AcrUvwQDCyaYyE6NRE20HZoUaEs7tYTaQmlSgoPVqukPWt579zg8Ak108U73fs/nDuecDzqcLvifwwYfRPRPaDC//sAYQ0REHORs9CokIpFzzjk3TdMwDFVVLcsiIkTgnGRZBgDTNEXxEpMkiT0Ph+OfP2Uz6ZcrK6Io6h7944f3mXR6b29X07RX6+uRSKTTaY+Njb2Nbc3NPWF3p6Y8Hs9xtbq8HIlGo/4HD/1+/9Hxcb1ebzS+jY/ffrG4QJxr2v1AIND80WQIcFgqhUOhrVhM1zVJlguFQjgUehYMfimV3m1vT05Ojt685fP5arVadn+fAYAsy4wxy7Qs0+p2u9PT07lc3v/oMQDkc3lFUbxe76xvtlAs/v7183JKnHMiIiCG2O/3T0/r5+ddUZKKBwfVk5PI0tLExJ14PA4AIhEZhgEAqqoKojCsKJXKUTAYBACH09VsNjPpzOLiQqfTyaSzTJAYMrw3M5NKpebnnyaTyV6vp+taKpXa2dl1u93ErXgiDgDlcqVcKSvKsDAyMoqIRPR6Y2N1da3VarlcLkDs9XqJRKLxvXF29lUQhDebm6XDwyFZxqFh5eLCIG4B0A2H0zCMfr9vb1VRVXtlnXZblCRFUYgIHU4XQwREu3XbDiJCRHsSiMgYIyK7KgIAJwKiK3lsc66Es9FrlwatHDTv78S+/wF72SshkV+RyAAAAABJRU5ErkJggg==",
        "title": "i18n with Next.js 13 and app directory - DEV Community",
        "labels": []
    },
    {
        "link": "https://brilliant.org/courses/reinforcement-learning/",
        "date": 1682664945,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACmUlEQVQ4jV2TTW+UdRTFf+f+n5lnpi9CmlKgmtSopKFi8DUQJBgXkrBwgSsXJm50695P4J6Feze6ED+BcSFxUYWAiTZSpb5AIlZs1enQzuSZuceFUxM5q5Nzc25y78kR/0e3ruuzwGMRcQA4N9GvZObfwI/D4fALYG/fUPbJ1NTUYinlYkSck3TTdiPp18zcAP6IiJ6kV6qqOtRutzebptn5b8H09PRh228CR4FF27OStoE5STXQB44DC0Bl+3hd1z80TXO/AHVVVW/ZriVdBML25Xa7/antnqSfSilfAV3gPHAS+A5YGY1G10un0zlreyciDtp+1PbHkrZtr9g+AxwDZjJzB7gr6XFJa5m53mq1FgJ4IiK2bE9LuhQRW3Vdr0oaAPPAvKRBXderEfG7pEu2pyJiCzhWqqq6IAngz8z8FuiMx+M3JF2VtCbpG6A3Go3etr2emRuSakkPAY9Utp8Diu0bkh6WdFTSvYj4OTOXACLiF+Ce7UXAtnvA07ZPVhFxB9iRdAEYS3ovM+vMfMn2XYAJvxwRQ9vv2q4kfW/7Ttg+nJm3MnOYmXu2X8zM2czsSzol6VRm9jNzdjLbsz3IzFuSjpSqqs5HxBLwSUTs2b4WESeAJ22/bvspSVsRge0bEVEBX0bEq8C4lFJs+2VJm7afn3y9b7staVlSY/u6pPu2n7V9QtLQ9mngozIej2+3Wq1lYAa4Iqmuquoz4JCka5M0+qWUz20vAV9LWpG0NRwOPyjAuN1u37R9JiIOAs9k5mvA7UlNAuhm5jvAwuSEmYh4v2mavwpA0zT9uq7XMvOI7TlJm0DXdgBdSfNAz3YCG6WUD3d3d38D0AN1nup0Oi8Ay8BpSXP8G/w2sAqsDwaDq8DuvuEf+YpmSDfnc3AAAAAASUVORK5CYII=",
        "title": "Practice Reinforcement Learning | Brilliant",
        "labels": []
    },
    {
        "link": "https://every-layout.dev/rudiments/global-and-local-styling/",
        "date": 1681975465,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB5UlEQVQ4jYVSq67qQBTds6eloYWAIDUYSDAYHArFJxA+AH7g1CCQSAwCQUgTBAYBBssH4HAoEmoRFAIklFcfM3PEEHJy7825IyaZzFoz67HJ5XIRQsD/FiEEAIQQKNG/cD4AIQQhRBFCICIhRL4h9z/QABBF0RsQBMF8Pu92u5qm/UR8mJzzbDY7Ho8ppVEUKYqinE6n9XoNAOVyOZPJBEGAiIgoPwcAVVUnk0k+n69UKgoAKIqCiNVqNZfLJZNJVVUJIdfr1TAMz/PCMASA4XBoWRalFAkhQgjOeafTsW1b1/XD4XA8HpvNpu/7X19fo9HItu1CoeD7PqUUpXcA8H3/9Xr1er3lcplOpx3HGQwGjuOEYfh4PKQrIYTyM2lKqWmahmE0Go0oiiilsViMc04pBQDpB/8uiDHGOZeJpdNpXdc/VRBCUAYnz4wx13XDMJzNZpvNhnPebrfb7bYUEwSBEEK5XC61Wm21Wnmel0gkWq3Wbrfb7/f1et2yrOPxyBhLJBKGYZRKJQAgruuaptnv9xeLRbFYVFVVxnq73eLxOKVUCHE+n7fb7XQ61TSNnM9nALjf71IMY0yGhoic87duxFQqZZomIr4JiBiLxWS7/xwnxlgQBACgyGvO+fP5/H3CZazfonwWjCaBJtoAAAAASUVORK5CYII=",
        "title": "Global and local styling: Every Layout",
        "labels": []
    },
    {
        "link": "https://dev.to/alexeagleson/how-to-build-a-fullstack-nextjs-application-with-storybook-tailwindcss-2gfa",
        "date": 1681974155,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMklEQVQ4jZWSv09TURTHz7nvB7wX2w6gTDJISCQ0Qd9rhzJodWokkaSmdQD/AcrUvwQDCyaYyE6NRE20HZoUaEs7tYTaQmlSgoPVqukPWt579zg8Ak108U73fs/nDuecDzqcLvifwwYfRPRPaDC//sAYQ0REHORs9CokIpFzzjk3TdMwDFVVLcsiIkTgnGRZBgDTNEXxEpMkiT0Ph+OfP2Uz6ZcrK6Io6h7944f3mXR6b29X07RX6+uRSKTTaY+Njb2Nbc3NPWF3p6Y8Hs9xtbq8HIlGo/4HD/1+/9Hxcb1ebzS+jY/ffrG4QJxr2v1AIND80WQIcFgqhUOhrVhM1zVJlguFQjgUehYMfimV3m1vT05Ojt685fP5arVadn+fAYAsy4wxy7Qs0+p2u9PT07lc3v/oMQDkc3lFUbxe76xvtlAs/v7183JKnHMiIiCG2O/3T0/r5+ddUZKKBwfVk5PI0tLExJ14PA4AIhEZhgEAqqoKojCsKJXKUTAYBACH09VsNjPpzOLiQqfTyaSzTJAYMrw3M5NKpebnnyaTyV6vp+taKpXa2dl1u93ErXgiDgDlcqVcKSvKsDAyMoqIRPR6Y2N1da3VarlcLkDs9XqJRKLxvXF29lUQhDebm6XDwyFZxqFh5eLCIG4B0A2H0zCMfr9vb1VRVXtlnXZblCRFUYgIHU4XQwREu3XbDiJCRHsSiMgYIyK7KgIAJwKiK3lsc66Es9FrlwatHDTv78S+/wF72SshkV+RyAAAAABJRU5ErkJggg==",
        "title": "How to Build a Fullstack Next.js App (with Storybook & TailwindCSS) - DEV Community",
        "labels": []
    },
    {
        "link": "https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7",
        "date": 1681969446,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMklEQVQ4jZWSv09TURTHz7nvB7wX2w6gTDJISCQ0Qd9rhzJodWokkaSmdQD/AcrUvwQDCyaYyE6NRE20HZoUaEs7tYTaQmlSgoPVqukPWt579zg8Ak108U73fs/nDuecDzqcLvifwwYfRPRPaDC//sAYQ0REHORs9CokIpFzzjk3TdMwDFVVLcsiIkTgnGRZBgDTNEXxEpMkiT0Ph+OfP2Uz6ZcrK6Io6h7944f3mXR6b29X07RX6+uRSKTTaY+Njb2Nbc3NPWF3p6Y8Hs9xtbq8HIlGo/4HD/1+/9Hxcb1ebzS+jY/ffrG4QJxr2v1AIND80WQIcFgqhUOhrVhM1zVJlguFQjgUehYMfimV3m1vT05Ojt685fP5arVadn+fAYAsy4wxy7Qs0+p2u9PT07lc3v/oMQDkc3lFUbxe76xvtlAs/v7183JKnHMiIiCG2O/3T0/r5+ddUZKKBwfVk5PI0tLExJ14PA4AIhEZhgEAqqoKojCsKJXKUTAYBACH09VsNjPpzOLiQqfTyaSzTJAYMrw3M5NKpebnnyaTyV6vp+taKpXa2dl1u93ErXgiDgDlcqVcKSvKsDAyMoqIRPR6Y2N1da3VarlcLkDs9XqJRKLxvXF29lUQhDebm6XDwyFZxqFh5eLCIG4B0A2H0zCMfr9vb1VRVXtlnXZblCRFUYgIHU4XQwREu3XbDiJCRHsSiMgYIyK7KgIAJwKiK3lsc66Es9FrlwatHDTv78S+/wF72SshkV+RyAAAAABJRU5ErkJggg==",
        "title": "How to Build Scalable Architecture for your Next.js Project - DEV Community",
        "labels": []
    },
    {
        "link": "https://github.com/Maxvien/next-full-stack/issues/1",
        "date": 1681968082,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "How to Organize a Next.js Full Stack Project · Issue #1 · Maxvien/next-full-stack",
        "labels": []
    },
    {
        "link": "https://www.hackerrank.com/domains/sql",
        "date": 1680611547,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABWklEQVQ4jZWSwU7bQBRF7x2/WITYDnHcZbrtH/ANrVqBBOLv+APEClVl20X5li6SEGTToMzYt4txogZVKLzNvMWbN3fuPSyqj3hPGSDp0GkCBpAEtoekXdOPAPhno+32e+8BJIm1rQdgiaFTP0ogYf8Cia6DI6ZlKahpnsfjCcGnulZucHG92LTxsgGubTfF5OTXz3u/8V/Orn7c3aS00/Nvv68/8cNIElY+u3jAKjB1RkbdrpqW3odpOamqagDnEmKSqhxAAiXSSYBc/CWJP+uXPM/uv9/m2Wi9XhNE6BiEIAQRAgnRvSsEAI6kJAnHw6O6bj5/vayb5+FwKAjmZIQRRoFRm0kgKXXzxdJv/GL5OJ/PU1rXCo8b2kASVoF9QGRRzaKtRVFEW7Ns1Ns6Sl7ZSoD5dBbFhRC2wYW3g4vpI03TSESS9A0c/4PGjpodI3sw7nO5B9+B9Regd7sXQH4UPAAAAABJRU5ErkJggg==",
        "title": "Solve SQL | HackerRank",
        "labels": []
    },
    {
        "link": "https://9elements.github.io/fancy-border-radius/",
        "date": 1681804102,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTklEQVQ4jV2TO4hlRRRF167Pfe/Z3eMHBAfGTEwM1EREQUxEhEHQQOykBUM/kQgmwguNBGEYBCM/oLSYTjIIBgOCoGAiiKYmoozzfXOr6tY2uLdh6Arr1F51ah1KnFpbtmHLtgP8wVfnCn5mjZ9YwbkBrzP+8T7u+VS8tgPQaQDAZT5/co/4zhpeWqGz+0QGYMCsEBPlsvDhGd74N9wdNOgSX38YWV9Zs/fmRDq7w75Gm65Tp2u0dpVS99l/YYKP7u5Axxxn4c/u1fqoecdAr1mOg9HJ7ZmuAfqG4MhUoD6bwAL5BtPHD+jg6D9u1SxHm9wtEAZjIxM8n+8+YNh0OJ9AvsC35wnp7avetcFES0GSscGWNcdsJNRBrgRX9HjacjyM6INMcncDSbMOq8+hpUmwjCx1rBFo6EyC+HSRn7rpkSwiIM8EzBzExtbMkbBhFJpMSzXwXGKVi8tk0KJV9gxhUe2FKs3l5uCG/kkj4dGk0BuyvShb3jynZqI1F2Yz1h1BM3+mBrsRQoCOJM+92lq6WSAGpEUD6JabM+mXULq/vO1aKikWmKqCR1D1bLpIjILKvD/KNpk7+K8blJ/CRV690rrfqwRNDGnEvSi0EVwMFbk6uCyQgiaHQSNcepGjvwOgi7xyYdfbyyP+1Wyi2aRJKRSkYrmIXkwvuHVyvu7xZiN8AhBPPP/MN78/6Oe/OPDmt04Nlg8s7UVijOQQSCGSY8e3J7e3Dnn9e06GcvobA7zP8UOZ/FgK/ZFV98MDvn8V1NXrd+9y+MMyHv8PeWdN1SidKh8AAAAASUVORK5CYII=",
        "title": "Fancy Border Radius Generator",
        "labels": []
    },
    {
        "link": "https://css-generators.com/wavy-shapes/",
        "date": 1681804077,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfUlEQVQ4jcWSXUhTYRjHn/c9Z3PTs7a1L5ky58dW5JoXQlSkTiFNvZkXx5YRrSATjG66ECrqRJddVNClZPhBtAi68UISMboQb4pQMiGiMdTp0i33cXY+3vN20QcSFXUR/a6ehz88/4f/8wD8b9DOmud5nEqlUCgU0gRB0HieZ1KpFHI4HLS+vp5eBwAkCBoFQBCLYdTbS3426Pf0U92PGyAAoENDFz3x+MZRWZYtRpNlIeiyz71ZXe0siGKNqKqr0VN96eZAZY+U26wwGLkMw9lnrJ79owgAYOD0id5PRe2+qtEySrU8y7IEIRRXFNWv1zOJgqi4fB676Xx3AFRsoFwJRmaXFzhfUyNz8+qF6sR6dqqowXuzzdXmr/UOESm3WZTJWX2p6fLE2Gjk+eSEVI6S7Wa3P25t7BuwumoeZYvKZJnV/Yypq/JGFMr2lHCOM6PD9+ZmZ2dJT3Ng5WNOjciSFK7z720QJVLtc5v8UnrFWkgut7I0bzE7K+dZo2UJq5R+CZBF3xLFV+6Mr7UHaxtKdPgaZ9Q5p6Znjt198lJj7HXzGANJvnsVTr198TSTWOpnjne1bCW3sv2yJO072NI+Fe7uyPtq3G2LG5Ln4fjYyMLi4kjbkQMkubndusvbcOtQx8nHVM4H0h9e21hTeQ4BAJyL9kVyIhlWNarDGG8TVTEgjCWMMQKg67JMqoL+itJoZxAUgogiZphSi5s49xwOfz/jpcHBqvV0uksDsGGsn9/NMWuZbKFVQ4yNALN8+8agU6fkm/LZbQdnsSf0Vu8Dzl4x/dePFB2hhl9piOd5JhQKsYIg4J09z/NMLBZj6FcjQRAwpRT/qem/5TPr9Al3RzVpgAAAAABJRU5ErkJggg==",
        "title": "CSS Generators: Wavy Shapes & Patterns",
        "labels": []
    },
    {
        "link": "https://wavier.art/",
        "date": 1681804048,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC7UlEQVQ4jWVSTWucVRR+zr133o/JODM101SxbqxI6Eo0qxIVqbhwU0sX0mIVwS50Iy0tZGUHRET8DSqoheDKldgqrUUQpCS16YfYYCrW2jRTJ03m833fe8/jYib4deBw4PB8nAeOYFwkRUTI1dUpVJNXYMwzCH4XlDGc/RVBfwCKeansWMJ/i82mAQButA4y7/1CZqQOyGxz1KFPMiOzjQ4HGye38FvOI3K3dYIsyKJL9toFe23PXjuw11b21z177YL9dZIk++15njvnyKYRAGBvfR+S8hfIBx4hCEQsRAgSAKAAVFWsMSoiHmk9Qu/P96XSmBPeuFHnVO2CxOkuDPsKEQuAAIRjAXEOEAFCgKqqcY4gPDSfNX9Uo/2Spo+OyYajXKKqEBGIsTizehsfr6xgPc9prDXBeyJJY8C9YRef3zs3Xavt3hlFNqjCiEggYY1BJwQcvbyEd5eX8eXaHXzTaslT90+yESeW9JQQJsxmkT957NKPsum9WmMkCwHWWnRDwJGLizh16xYqzqERx7je6+HgwgJ+7nYohHjBw6buHK91Onjr8hIKEnGSYKMo8PrFRZy5exdTUQQFUKii6hxuDgc4vLiAtcEAzofYNl5+6VlG0fSVe/f0SmdTMlWcvPaTfNduY1upBE9CAIgIlERqjNwcDvl7UeDFHQ9cl/3nTx+/WuQfZP2BH2iwGlScMShbizAmQ+TvtxnNYMqp3Vue+MQ8vX3yVJznLbXWVIzTailC6hwDwP+ROVopgMgHudrvzJuju2du70zSuaScmoKqCgaSAlIgwrErRymEJPNSreomjfn0++f2fW3RbJrl145c+urVQ5VOksxmRWGELEREAAhEICOREEiJ6rXSQz6cPTD9+KE9tZrfuk8ImAPfnn5zpcje7oppDLMMEgJAQo1BnCQoh+AfjOMP37tv+7GZmZn+vwICEAD8aOnCI5+11g4X1Bd80MdyZTThzG/W2rOz9W2fv/PEnvP/xP8FJvaz7TXI+iwAAAAASUVORK5CYII=",
        "title": "Wavy Divider Generator | Wavier 🏄",
        "labels": []
    },
    {
        "link": "https://trygalaxy.com/",
        "date": 1681642204,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADD0lEQVQ4jTWLy2+UZRyFn9/7fd/c2yntTGlhSsFCQaW6URcmJCSs2LnQxIXxT3AFmybGpSsTtrpw5ZZEF2o0mBCijSHeCGq7AKRctLRlOp0pnfku73tcWM/uPOc5AEhakvSNpKEkr6BQ+EJSkCR5X0iSPwDDA3eJg/NZSQ/1X7wk730IknRnpwirW2nQ/2MI3ofgD+pDSWdj4ArQATJJiZlhzqzX3dJn1x9adXySiRedKo0pJsbqDgJBljmjA1wxSSkQB8mcmWV5rr/ur1vkHCeOHVGUJDYaDOj3uvy26TV/4jinJ2MDC4LCQghBZnLget1tPd3e5tjRGZL6hAno7nvuD9DNB/t8vLKBqzd5Y7HK8rmGIjDz3gfnsO9v36MWOc0c7djqDvy+MeKXjZz1nme9Hxjm0BpPGKZeeQhcfWuKV2djYuecffFHj+VrQe12ywYrfT3u5xZjNCpGPxVHaqLTNgbpSL5csltPAqtbGa/MxMRrG3v64IcUq01ZUaQ6FMumDxslhEcMg2Oq7Og0I26sx3Z6MqjbTPhpI+fdlyDe3NwgzysUCiy0oF6JWVkvuHiyRC8Vi1NGf2RULOPD82W29mC3MLv1pFDmwR1vJjZfz+3Rs5JKccXmaqY3F41TTVgoF5xsepplxz99z1drz9gb5bbUjlnv5Xa3m5trjZXVaUjH66mdn4+0/GVmO6OcF6aNrtW4/O0+0xXPwBu/7lT13nV0dS1TNYkkM1mx9zR88nNf79+M7O0FeLnT5M6u+PFun3tpzbYGBfPjQUM5albYc+Neh5PM3nltRhdO1i22uJyfOWRxoxzz6Zox/3iP3Sw2SJhrjPR6q+BYNbfnm56FsaAjDcepE7NQqRtYalmWX/Mhv3Dp8wfZn/tjSaceWJosODMBc/VgrSqMJU7eB3Ichw7PEpXKPjJi4DsbpOnZauS+jlR0/t7eDeOViMRkRRDDIpDnIs8LnHNMT7cplUsABjwCLhpAmqZLUVL6qEiH5/ZHWanwAe8LZ5JC8DjMWu12iGLnwEbADeCSmd3+F4t81BDlQIobAAAAAElFTkSuQmCC",
        "title": "Try Galaxy on your iPhone.",
        "labels": []
    },
    {
        "link": "https://www.labnol.org/code/19871-get-post-requests-google-script",
        "date": 1681564798,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABQ0lEQVQ4jZVSy5LTQAzsljTjclIsAQpOHOBb+DL+g59bDjyKBZIsceLYVnOwWbaKhSI6qEYaqaVSN9++eYdLzC6qBhAAJJGU9Lei+Zfk0jC/Zv+g/UIEiYAgLNhK0bjEMyTvTwBAEwUsK9W2kLQwL1ZX1YpJoC3bSpQUFAAKMrfnrzbrTXvYnc7dsN60h223etx+/7jffT54sUwZGAIhTWPScNz3/WHITA//9mE3jSmh1AA09GMUFxWZ2T5qnr28Ov04E4zqpanH2z5TzapG8eOpf/H6aRT7cr0dhymU8mJRY3VlXn3sx2bdRI1oeqWadSE5nMf1k/b2a7e/6cLDut3p/fYTSTpyEAwklTJnTvJwZd5cb83Nw+KOMkkaAALCnMlJAMZhIpdbkYg7CgHgIeru8ykh/i2KPyXyWxr/2XOxWn8Cjee5N+WQeaIAAAAASUVORK5CYII=",
        "title": "How to Handle GET and POST HTTP Requests in Google Apps Script - Digital Inspiration",
        "labels": []
    },
    {
        "link": "https://tx.shadcn.com/",
        "date": 1681539255,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVQ4je2TPQ7DIAxGH4VUGRhzm14mAxfgAtk6cUkOkNEDqRTRoVHUhCTqz9KhT7KEsPn4jDBABwxAfjMGoFPT4sxn3NSkNqOUQmu9WT2OIznnYn9hrW3bvIdzrmilcGCtpWkaAEIIGGPw3gPQ9z0isrjdrO2IyFwkIlRVRYxx9xFOu5kX+Qv8gkDxkZ6p6xqAlNKhwFfDpHm0cQG2J+jgMHC9AxmoWRhsCBqsAAAAAElFTkSuQmCC",
        "title": "Taxonomy",
        "labels": []
    },
    {
        "link": "https://mishalaskin.github.io/curl/",
        "date": 1680938345,
        "icon": null,
        "title": "https://mishalaskin.github.io/curl/",
        "labels": []
    },
    {
        "link": "https://dev.to/noruwa/folder-structure-for-modern-web-applications-4d11",
        "date": 1680845794,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMklEQVQ4jZWSv09TURTHz7nvB7wX2w6gTDJISCQ0Qd9rhzJodWokkaSmdQD/AcrUvwQDCyaYyE6NRE20HZoUaEs7tYTaQmlSgoPVqukPWt579zg8Ak108U73fs/nDuecDzqcLvifwwYfRPRPaDC//sAYQ0REHORs9CokIpFzzjk3TdMwDFVVLcsiIkTgnGRZBgDTNEXxEpMkiT0Ph+OfP2Uz6ZcrK6Io6h7944f3mXR6b29X07RX6+uRSKTTaY+Njb2Nbc3NPWF3p6Y8Hs9xtbq8HIlGo/4HD/1+/9Hxcb1ebzS+jY/ffrG4QJxr2v1AIND80WQIcFgqhUOhrVhM1zVJlguFQjgUehYMfimV3m1vT05Ojt685fP5arVadn+fAYAsy4wxy7Qs0+p2u9PT07lc3v/oMQDkc3lFUbxe76xvtlAs/v7183JKnHMiIiCG2O/3T0/r5+ddUZKKBwfVk5PI0tLExJ14PA4AIhEZhgEAqqoKojCsKJXKUTAYBACH09VsNjPpzOLiQqfTyaSzTJAYMrw3M5NKpebnnyaTyV6vp+taKpXa2dl1u93ErXgiDgDlcqVcKSvKsDAyMoqIRPR6Y2N1da3VarlcLkDs9XqJRKLxvXF29lUQhDebm6XDwyFZxqFh5eLCIG4B0A2H0zCMfr9vb1VRVXtlnXZblCRFUYgIHU4XQwREu3XbDiJCRHsSiMgYIyK7KgIAJwKiK3lsc66Es9FrlwatHDTv78S+/wF72SshkV+RyAAAAABJRU5ErkJggg==",
        "title": "Folder Structure for Modern Web Applications - DEV Community",
        "labels": []
    },
    {
        "link": "https://nextstep.tcs.com/campus/#/homePage",
        "date": 1658330702,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABnklEQVQ4jWP8//8/AymAiSTVZGn4d7fi38NO4jWw/H18m4FdhEmeaA2/n3B93XCTgT2RVUtDoLr877Ndfy4s+fP01X8GGVa9IHZzrz8/PzNcq/x989bfz1IcrmUsP6+KMQmLcUcHM4uJ/r0x7dPkXjbrLFZjvb/v7v84uJbd3Ov0vCkmSptZzWYwPnr6//dPhrd5de9re//////v1/vXoUZf1q79jwS+fvo+2SL3bZbV3/dvISJMDP85GBjYGBgYfl+99fs2P6erG7KLn1x9/lVa699nvdfBWT+OnmNgYGBiYGCDaPj/nY2BgZeBgRFZw+Nzj9RNFIXnTuL093lfMOHnqetMTDwCDH9ZGBgYPgqI/mYQ+LH/HFz1t7dfbm+9ZOylzcjKypcX89fe4fuaY8y1WcWf1p99/I99/8JT/zh5+Hae/snJ9fMf46szD460blVyVH/x88/XV59/vflyd89tcQUxxn8/fn1q3/jswrO3Boomxa7/j974tv70h/c/PooJCHroKXjrHdp86cre69yfv6sri5plOzEOvsQHAJLKzIarTkZsAAAAAElFTkSuQmCC",
        "title": "",
        "labels": []
    },
    {
        "link": "https://heroicons.com/",
        "date": 1680537499,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACs0lEQVQ4jX2TzWsdZRTGf+e8c+9kbm/SEASXjWBRzELFXcXShboUQUaTtkiVuhFdGdNSEhj6nbTZiCIoBdGmbTp+ZKUgUQr+AbpRQYiCIojVKu39mDsz73tcXC9Eqb7L8/Gc5znPeQUgw/TrFJm5fk24ti9kSABYPViumlk9vxYfAQCTqymaAzM5liFBuM07fWBwXyT++I5m8hRAryyuFNVgcWl9cuvftQJwdra3R0UnTJl2YntVG3NJw3Gz37sgYBOt1uFOURKC3xCRj+sgP5mz7rGLyReyfLC4Ryx82WomiSjUNdS+/hRj5ZW1xmcA5+fqJyXiRREeG4scAegO+gWiD0Rmfm8cxUm/Ki6Yt08IyVcL642tkWaA+cuyAWycSP+8KzSbD3nk8TiKXyjL8hF1sMups4CcW7jc+mBhXbYAsswUxEAsTc0BLOWTP8yvtd4vy2rViZqI3a1mOhUC+H4paWouw3QIMHQCIM/Fj9wagfkAJrJTTcINFWhGbjzPxWdgt3NmCIDlufik4dpOQeB3VfQbUSQ4nQFIQf8LYJQLwv2iSDC+VSv954OqKgx7FmDmfxiMchYsHVRVv+74TQCWD3TeefOw2emnew8PJw11/nP6MHZ8tvvg6895W9nfvQojurUtV3Xdj2N5O0utnSN+tCyAbJ9FOeIXnrg+vqOh7wWzMmjjFIBAppCFs3O3Xp5qt1+7WQw2i6JzaDG/4+ftDE7Nde6MI3dxYmzs0d9udV89dqV9HkwEwDARxFb29xcn22MnuoX/sarL+ekq+XDze3T3vcUzThsn24nbdaNTLB29lJwcHpnYts80DJyZ7T4fN5vnkmY01en1v0OQ8STZ3Sv9L2VdHDl6qf3uqPZvCdt9Ns2QcGb2j2nnkpeQcEhFqxDsrV6vfiP7aPzX7c0AfwFWR0F/KULFAQAAAABJRU5ErkJggg==",
        "title": "Heroicons",
        "labels": []
    },
    {
        "link": "https://www.jotform.com/blog/css-layouts-40-tutorials-tips-demos-and-best-practices/",
        "date": 1680439654,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB+klEQVQ4jXWTT0hUURTGf+e+qdB005QOM0JOQRlJEGK2DVoYtQmiVkH/MGrRaOCmzUwRQhCtJkICDVpZEYT9mwiE6B+kEVFmO6OZWYTMJitHm3tavDe+9ybnW557v/N95zv3CvWQUcM6moixwGFZrHfNrFgd1lXE6GMNTymR5aa21msQWZEM5xAuAmsRdqO8BUb0GB0IPQgfGOGjgJr/yEIKPLKLBWBOj9KDcA+4hTLGKTrCI7jKAyiZALmM4Ur+fds8EUaB7V49iaXdb3BHHU85HVIWhr5NbnyZKBeywLaA1wmWmPIzKNGJMAg0BmwP5afaXicWC1lw7Xp4jnBWbvPDb+CgWDRILkwm3sT/FsNk5RlwWkaZrZbcEQpMew7uYkjNvmt/Fa8Ur9eQc0SbUxzvrGhuR3VMhCAyarQoDkuMAQcDJ09IRtPsivVh7T6UCRyTkt7PpfAaM2KJo8CvgPIjtkTTdMfOY+1JIIFwiIrtWs5AVZNAN/BARMp6gstY5oDfbF1/n52tg1h7JCBVQJ28HyJsBm4Am1T1moh8BQYA9PGGSzXk76j2y4FPX/wQQXH3nwYuqGqDP4K2hMiGM7J/5mG1EFk+gBdAC7AXGAf3oSBmGIij2oDRq9I7kwvGJl4GAjQDqz03P0X8L6zjXY00/TGyZ3qeGvwDKOOzckCaWYEAAAAASUVORK5CYII=",
        "title": "CSS Layouts: 40+ Tutorials, Tips, Demos and Best Practices | The Jotform Blog",
        "labels": []
    },
    {
        "link": "https://www.jsmastery.pro/resources",
        "date": 1680435510,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4ja2Sz0uUcRDGP/N9313NTFkPFiqkIBFtCaaXrSCUTqHQZT1ERHXzf+gwf4GXunaroIQgM6mMXOwQIXgIUvvdakLlala6uuv7faeD1SECEXxgYBiez2GeGdhJqarbCc9/qLGQrUBVrVfVHsAxNhYy/DTF6Lvaf2yiqj2qWv9nEGaz2WBwcNB7788RBCtAHK5WHffibuK/O7s/ccOJrEvJT/qN/D2mpvZ5OAcMZLPZwKXTaQFIBIETkTnU3IFi/rlZRRtRlBeRDrx9lZDzNJ5oqiutvnFmIUA6nRanql5VKzfgSOPi/EtU4inw9LR9AykByTjkfeQTlznekF+yaF5EDqlqpap6p6oClKuicv7OwcxpHk2fpK/PA5jFRcwKYRT3746L7TyezvysrG3A7AtQVlVxgFPVODQriLi9WPl64uFkP8MTl4IwccpcONo1N3NraPjK0v6F2UOF6rrGZBwtqGoMuCCXywFYpqu76UhhPnjQcviahckL4qNWwQ3gODNXnZK7ze1vCzWppd6PL9rEx6/Gxsdncrkc8vdAIyMVmS/LLc8unn0NwO3RPayGJeqTe0FqcJXVlIv57s+fdj3paJ2ls3MDQH6XMTR+lMTuXmJfRlxic08rEUuMowXMg6wiwSIr64P0HVsDCAEDwMkH1qKrJK0ZXBksRRx9ZS1apLqqnUgKWPkHbmWZvq617T7zNmQmmAmqDrPNjP72JlvQ29cvquL635Q4CEEAAAAASUVORK5CYII=",
        "title": "JSMastery Pro | Free Resources",
        "labels": []
    },
    {
        "link": "https://scrimba.com/learn/frontend",
        "date": 1680194831,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVQ4jWNgGPKAEZ/k////mb99YxDDoe4/FxfDC7wGXD75/+iXDwxWuOT5hRm2MeEz4MsHBmO88h8ZTPG64PWz/1HvXzN4Y5X8z/BfSJJhDQs+A/7xvHPgZP9hhNDD8E+Qk6+Jl4t3JUwMrwGff3yOY2RgZEdx9q/vgQwMDMQZIM4jHPfjzy8LZIfzsfPMQ1bD8vfVpSkMX56FMfArzGASUu/9++TILsY/X1UZGBgYGF4eZeBC1s3A+ItBROcUAwPDVbgB/z8/TmRk+M/1//OTGAYu4b2Mvz6a4XIRIwMDw/8vz0JRvMDIr9rG8PV5CKOA/GwGDpHT/7nF1jP+/qaEzYD/DEy/mHnlZuLz9hAEAEEkWOSP2J8OAAAAAElFTkSuQmCC",
        "title": "The Front-End Developer Career Path",
        "labels": []
    },
    {
        "link": "https://dev.to/jamesshah/how-i-automated-the-google-form-filling-for-my-college-attendance-using-python-3ao1",
        "date": 1680183027,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMklEQVQ4jZWSv09TURTHz7nvB7wX2w6gTDJISCQ0Qd9rhzJodWokkaSmdQD/AcrUvwQDCyaYyE6NRE20HZoUaEs7tYTaQmlSgoPVqukPWt579zg8Ak108U73fs/nDuecDzqcLvifwwYfRPRPaDC//sAYQ0REHORs9CokIpFzzjk3TdMwDFVVLcsiIkTgnGRZBgDTNEXxEpMkiT0Ph+OfP2Uz6ZcrK6Io6h7944f3mXR6b29X07RX6+uRSKTTaY+Njb2Nbc3NPWF3p6Y8Hs9xtbq8HIlGo/4HD/1+/9Hxcb1ebzS+jY/ffrG4QJxr2v1AIND80WQIcFgqhUOhrVhM1zVJlguFQjgUehYMfimV3m1vT05Ojt685fP5arVadn+fAYAsy4wxy7Qs0+p2u9PT07lc3v/oMQDkc3lFUbxe76xvtlAs/v7183JKnHMiIiCG2O/3T0/r5+ddUZKKBwfVk5PI0tLExJ14PA4AIhEZhgEAqqoKojCsKJXKUTAYBACH09VsNjPpzOLiQqfTyaSzTJAYMrw3M5NKpebnnyaTyV6vp+taKpXa2dl1u93ErXgiDgDlcqVcKSvKsDAyMoqIRPR6Y2N1da3VarlcLkDs9XqJRKLxvXF29lUQhDebm6XDwyFZxqFh5eLCIG4B0A2H0zCMfr9vb1VRVXtlnXZblCRFUYgIHU4XQwREu3XbDiJCRHsSiMgYIyK7KgIAJwKiK3lsc66Es9FrlwatHDTv78S+/wF72SshkV+RyAAAAABJRU5ErkJggg==",
        "title": "How I Automated The Google Form Filling For My College Attendance Using Python - DEV Community",
        "labels": []
    },
    {
        "link": "javascript:(function()%20{var%20protocol%20=%20window.location.protocol%20===%20'file:'%20?%27http:%27%20:%20%27%27;var%20url%20=%20protocol+%27//www.sprymedia.co.uk/VisualEvent/VisualEvent_Loader.js%27;if(%20typeof%20VisualEvent!=%27undefined%27%20)%20{if%20(%20VisualEvent.instance%20!==%20null%20)%20{VisualEvent.close();}else%20{new%20VisualEvent();}}else%20{var%20n=document.createElement(%27script%27);n.setAttribute(%27language%27,%27JavaScript%27);n.setAttribute(%27src%27,url+%27?rand=%27+new%20Date().getTime());document.body.appendChild(n);}})();",
        "date": 1681366486,
        "icon": null,
        "title": "Visual Event",
        "labels": []
    },
    {
        "link": "https://codein.withgoogle.com/archive/",
        "date": 1680163178,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADC0lEQVQ4jVWTTWhcVRTH/+fce2fem49MYmsXJjYJaQutC5vVKGmlcRZuhOJC7VYXYg3aurB0oRAoXahQoehYN340uFA3BRfFWgjiQpH61YCgCTraDzetyeS9N/Peu+/e42IygZ7N4cD/fzgf/Aj3Bk22o5eIuJV7OnF7oXIDACbOdfeYQL3jxH3xz8LI0pZUAEBvWxeFsUgeIsdUrXLIRNHB6Xa0AhAD8jDXqw/6KAFAFwdaCAAQIDTsNnl+fZZK4TLB1ZhYwQSD5rYPJ+RI3Lr17tGbC421gQ/goXni3W4Tyiwxc8MVjjZ61qdx1/XjrtvoFV4KS6TLOzXpT8ffiw8OfCS0u917WbF+1vt8VmlTybPMhwZ8bL/B/EwAL8DV1T4+/92JLURMOWRv+5tUCn6xeXpRs7jDFIZznGRS2NyFGur9JyrSmlKEu9cAVmjNz+KRcUsnr6bkbOqIaIRL5jGdZ79xnKcnfBL/qYxBkgs9c8BIa0pR8c0pFB83UXzURPHdGRzdZ3B0r0JiAW3K4uJopRvZ03zn1fv/BXBdVJlKLP7IdEB+/Vfgx7ehyEPBAj+chY9X8fhMBUzioQ1B8NP66fu6vPXEYYbzArABSAMCwGNQs4bzIiIDnRAUAPCu8xszBJpFkfncE19ZS4UbB0BzZ1GYBopgB+jwm+DKNC7/0SMhYrG5Z1Bzx7k74zTZjr/U9eqTLk4gIo5E1FvzZTy9vwT0/wJIAcFufHI9xxvfZlBMjogU16soNqIlLaw+k35u4f2cKoW7bNb3ry3ntPy3pdbMNJwHrqwl+KojwoCwCZSz6S0k+fcgukTD3ScudPcqrz9UpnTI2dQluYAgAgGEmWoGYBMqn6dfg+0LneNjna3jCWFR+OaLjVVni+d9kd8l1mhUAzU6OqJHx0Z0IzSK2MDb7FaUpc91jo91sCgMCG1PABECkUy1N5dVrX7ExcnPInINEAVQUzdqD7lufKmzUH9qG7x7aKQBExC6UMS9laiovv7fK7QJAA98IDsp7p1xJJcB0JBEAPgfGjB5OQNzteQAAAAASUVORK5CYII=",
        "title": "Google Code-in Archive",
        "labels": []
    },
    {
        "link": "https://cvbox.org/avatar",
        "date": 1680072652,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jTWOy2tcVRyAv9855955JJlnTEyaGDUvmkUqpGhiTKE0tGDFP0GpdqVItwoiSosKRUrBdcFNt13Uja4a1AbBEAtqH5rEMHk0zSTemST3zsyde46L6vrj+/gEYBD6p8qlGznPK1eaje+bcXI9ODwM/gABmABX6OwseJ6+NJRKn63H8d7S3v47FdgygBop5C6+PzRw6nGz5QHHfwpq80tw97RWPsBhYluT+a7ZVwv5CYHUs6lU/GXSvlgJ6ldMPk8+a7yxjGh/uiunH0aR6dT65ZGO7NS18REALj34k5w2us/3eTGd5nErlrTxxvKQ1yeGO7/t6lMvbNNQh1g57mXNmVKRtaihzpVLKquUun8UqvcG+x2C+8HWwjuyHwTdcUc2Z86b01P50Q/fGujLZJSuVBpc/nRd+usea+3Y3T86AuDh4RFfr6yz2RXLJ58NZt4e7M5EUVK6fGOjaM6czNWzKdXvLGplteXO6Rwz5Q5ZiRtcra0D8G6pyLCXZtEeuZXVpjw3kBFPK4dDyevThV9fO9E17mlSG7+03RfZYVGIfLzzlzM9TgDaT8Rd6R0Ri3MfhStu4KSRVpvm7bvBmnr0KHjjcTXaHC2JzJuCpJR2y9EBC7t1uRB0cyHoZmG3LsvRASml3bwpyGhJZGcv2gz/OTirBnJUw6ba2V41zKaKJM7JrbjKzGSeoXKRoXKRmck8t+IqiXMymyqyvWoIm2qn5FFV/hjaWtzuVsJCVGMjbhKk2/SXfZRWKK3oL/sE6TYbcZOFqEZ1K8FanD+GVgC1MNGLe3XCuZjrzQ1GJ9L4Bpx1OOvwDYxOpLnWqBDOxSzu1V0tTDSAuXcP3pzW9uoHz9PX7fFMr2FoIMV3twPAAWCUcH6+wN/jTU69knMz013q828q9sefwezsgG/EHevxne8pmZ8t2EbLIsj/PoIw2JdidCjjREQd6xHXkdZWa5zp7QVECQ5BgSBKKUFEUCJPAyIoJYgWwT09mnspV92qbDsDkLQtYSOxFhwOomYirbaV0CYAtNqWMEqcsziHk1bL8mA9zG4ABuC3tZCvbm498Yy0AeK2k6Xfj3IthQ+wUA1a+zfjumfE/cfNneVax/ou8i83FnU0c5cSCgAAAABJRU5ErkJggg==",
        "title": "best free notion style avatar generator, free avatar builder, illustration generator",
        "labels": []
    },
    {
        "link": "https://www.drawkit.com/product/2d",
        "date": 1680072193,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfklEQVQ4jZWTPWtlVRSGn7X2Pufsc3KTCZkUY2WthYVVcAr/hT/ADwSDgv6CW4g/IIKK7YAggp2FDIyNAyJWA8MMWPkBCk4yJjf3nrM/zl42SczYuarFgvXw8r688H9mudT/nuRyOfjmpzfnRp9Lq6eWUpRUInMcy3pMf56W/EN6/61HV5Dlsj4DePG7h4v9WlYstpg2p6Q8EeNEjhPj6oxxvUlG+XZO8cOzD9778TpEAG5//3h7qOWXUuNiGs8tp1Fy2hBzYspJc05ubhrIaZNiev3k8PDLi19TgCbPNjhxodFm6JwPQX3badME9SGoht5Z0JS7XvqtvXDn1hefvwoYoAqw0zjZFpEdFQZvElqk64S+NQk9hEEIgzQh1Lnb1qbv7FOOjjqgeoB9nuB0QUtGpOC04FsjOUjVpJhaMWfVxBmlstO88FJfbz+Ae/7SzcbWOK2YRBrJdJpJzGQ1qlWpYAYYOvudQdJZeZl/AccEGahSUZ2YybQ1kbVQrFABMxNDDMFa75i8BoArBa2MIBUlMkti1kJbZ4pUqglVxcDAcL4k8SK/XwH2eULLAsQQjVhNVCnMGNmgijNDREWqOi81Tuci5d4V4CYwywYEvERME9UKs8OcKXNtRLQxRfKwu+jWT1efffzK27+yRD3AmCfbDlJFsCzRIGOSmc1wNJbVF0Sk31104+nqrm35JYYgFzHujX+pv7HotRWZJYuRERLVKlFUcht0Si3T2frO3+P0zicHh+tL7zzArXOmUxkfeng+W6oQVYnUarVY/SPOw/1cbnz90cEbd691yJ5p49HP73Z73OxOjo/ZA+CEuNvZbw9WcfnaVwngQrZdr/M/Fd1W3zTyh6MAAAAASUVORK5CYII=",
        "title": "2D | Drawkit",
        "labels": []
    },
    {
        "link": "https://notion-avatar.vercel.app/",
        "date": 1680071933,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVQ4jY3Tv2pUURAG8N+9uuASVxAMC0kjwUYUFF3YVAlbhBVBsbMQLC3zAoL6AjZiYSlWFmmCb2CRKoQEQiBFNuUWCRIRXE1i1uLOIZfNNevAcO6c+eabP2cu1ZIhL9l53I2VbAzwjO9f4Bt4gi6OsYb36I+rYBKf8APDEd0O4nMr+RjgE/wpBR/GuayizWRcx3cchf7CV6zgZxD8xt3RKtK0u5E5ZXuJy7iKZ9gN/9PAX0jBielKfNewgdVoaQePcC389wJ/MlrBA3zDazTj7jm+4CE+Yw+buKRCZvChXq9PV/hacS5FewspecqeoYf+YDB4VQq8iAkcxCxuBkE7xZUJtNvt9Var9aJWq72Lno8xrXjSxSCARpzDRDCERqMx2+l05Hk+h/mYyz46eON0B3opcXkhctzCHcUOLOE+phT7keGt4hVuY8t//mBlaeLxeYBMsSBZyU6aVwX8BTKVSOSE8PjSAAAAAElFTkSuQmCC",
        "title": "Notion Avatar Maker",
        "labels": []
    },
    {
        "link": "https://www.streamlinehq.com/freebies",
        "date": 1680071619,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACn0lEQVQ4jV2TQUhjVxSGv/veSyaticki6iobEZQsChJKDR1IyjAdZEAK4lYx0EqhdC8MxS6U7lzoyo1IhED2bnTTZxcZmAHtakqh6jpKQqpiIu/evwtNiX6bAxf+cy7/+Y/hKQaQJM8Y8zXwEvgc+Bc4lvTBGOMAD3AAwYDYkyRjzBtjzC+5XK4wMzPzIpPJcHV1RaPR6Bpj3gO/Ar8PNulPBvgpnU5ra2tL19fXGqTVamljY0PxeNwCS4M6D8D3/beZTEaNRiN61DhrrbPWOueck+Qk6eDgwCYSiSgIgpf//z2fz8eBTzs7O05Pcc+qJGl9fV3AH5K8fo9vJyYmFEVRZK11h4eHuri4kHNOURTJOaezszN3dHTkrLWu0+m4bDYbAV95knzgy3K5LN/3/V6vx/z8vGq1GpLodrtIYm9vzywsLCBJw8PDplgsesA3waMRqZGREQDFYjFzenpKLpfD8zyGhoYAWF1dZWlpyfi+L0Cjo6MAyQAQ0O10OgBGksbHx83u7i5hGBKPx7m/v6dUKrG8vIy1Ft/3TavVEnDb9+C7qakp2Qecc06VSkXZbFbValWpVEorKyuy1spa625ubtzY2JgFSgDMzs6+AP6qVqtyzkV3d3dqNptaXFzU9PS0KpWKa7fbrtfrSZI2Nzcd8HFtbe0hiMVi8TPg73q9/nyNury8fPIWhmGUTCYVBMFreAi+B3xfLpclKarVatrf31ev17ODwtvbW7u9va1UKiXg534STaFQiJ2cnHycm5v7ot1uE4bhP0A0OTk5WSqVSKfTNJtNjo+POT8//xN4J+nAGGMAh+d5PxhjBJwCP+bz+eSjJ3PAGvAb8A54U6/X/We3A4lE4pXneSuFQiE2GE1JRpIvKXisfZHPAP8BMN3IiR3D/TgAAAAASUVORK5CYII=",
        "title": "https://www.streamlinehq.com/freebies",
        "labels": []
    },
    {
        "link": "https://guides.popsy.co/",
        "date": 1680071459,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABuUlEQVQ4jVWSvWpVQRSFv7XPyTU/YgQRMZoUKRLtFAtrUSwEQVE0D2LhO6hPYB8QK0GtRKzSe0EkqE2CEkWCyYVE77mzl8W5OdEpZphh/TBrbdkGbKTx/s8y/H+36/bs0DYgSFwgwKjqCJJkpxEGEsKYTKI6lM4iqbOqW/WEQMbKQlW72fHHx+x9YeGW5u6RBbXOyE7nmO8cqZrI/S3e3eHHGpMwARceafGBsiAhKbOF205FlYMNv76pnb5me65SkSa5vKq5FbkQVdiWbCeK3P7Ms+va6ss9+kNtjJxBE2ysuo3MhCTbkigjP1/R93XlNO+HbOKfqIR+p6eXJAkMte2QjI01eYI9vN4wgFOw0PPu0KcvafkhmZaC1gFIR93L20+bb/PxqWGmZmlKw6GPnteVFzF5EizCEONGI3J/MOi/3b16v1k+q/mR/uz7yKJuvNTMGZeR1CLHBJBGe7+arx9iYZknb3zuWs5e5O4rzS5SGkXVJtnFigFotjerqeP19LHMxEXVhEshoitdMCYAxqEwUAoRIFxQMBan/a0ys022G091U3owuj6oVlJ92MOBraF9Yqxy6AD8Be8g+fQ0kZSOAAAAAElFTkSuQmCC",
        "title": "Popsy Guides: No-code website builder that works like Notion",
        "labels": []
    },
    {
        "link": "https://app.gumroad.com/d/0d6d1e16c462334bb7df08e433a1afc8",
        "date": 1680070623,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACzElEQVQ4jSXBz28UVRwA8O978+bNzO7MLt2WYmkVhCwllEZALMaE4MHYuAcSvRESbyb+Jx5NiBfDyZPRi55M1BhJE2obaqHbrlYqsCy7W5jOdmd2O7/em/e+Hvx8SP8wJYCUAgWghBKDUiAEkRBNGWNAlcoRgABBRADNGEUAACAIqLUGrTUC5yajJI8OYqWnTpyUQiIgIQQ1MoMABfI/g1IgwE0zePXymztf9LudQZhdurr08aefUdMSMq96ZUYoIQCAiARyKY/iJBqNk+ClGqf317djoTabfyXUunrjw2EQmCZnWimtSJ6LvWfPez1fyIw5ziRkZ0/M3m407v74QyrzKDhwHVuWzDQvWCHSIIiSLJMqm572OKuVJzz/wfra6v3Fy1cunj41Hvrn5s9MTVcsrhRoJvK0XDYYt45VLATMhKxOec1X3ZLjcpPNVb25hfkL15biZEwMAxWyJM/iVGYyszlDVELCwV7fmJj+d7/97b1f37tYv7TcENrigEgQgJC1PzcM01JK5oVMk3x9ZfuPlXtRsC9jf6ZqNm5c/35lJxS4sLD40SeNU2deZ0hpksWikHbJaW3tfX3nS8cx3cqxOFaTVe+r737xo5HnVn7a3bVK5u3Pb1HXKVFimIyjor/9/HtyNBzHY4OiZrz5PIilIsQgBqtUvO6Tp4VUjDPmueVM45N/Oq3mI8ZJ/ey845QyUbwxO+u61V6/0+t2DMTRKFB+SC1uq0KoQqyurIVD33XLhcbW3608jvZ7vZ3th7ZVmjs5J2Q6DMPHW5vs4e5GkiVlt9baegRaRsN0v/eiXr/wwfLNaBRuPlh9vNuceW0mTuO3arX202dsNB5O1SbanRfddhtA50osXn732jvXAXDy+HGbW8zAw8NAoq54NgHF4iMfSNzc2PH7HTTY+TfPv39lKUU1GIS27YTRQGk9P1tZfrs+UIXFS/8BJ0aOhTSMuN0AAAAASUVORK5CYII=",
        "title": "Humaaans",
        "labels": []
    },
    {
        "link": "https://phet.colorado.edu/",
        "date": 1679916100,
        "icon": null,
        "title": "PhET: Free online physics, chemistry, biology, earth science and math simulations",
        "labels": []
    },
    {
        "link": "https://drawer.design/",
        "date": 1680070475,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZElEQVQ4jXWTT0iTYRzHP7/3tfnObbqhublZasrMRR00unjoYIdE8JRBlOQxsFMHO5TVISGC6pJQgiGEh4JCKsJDwi4RRGIlVgcvgflv6t7pnC7d+3SY75qRX3gOz/Pw+T6/P89PyFddXSFJbwvK6gKaAf/OzQLwHtGGcJtjTE+nbURycFlTBZq6hnAe8PJ/mSiGsaSPpfE5AD0H6+oxwgXA2AMGMBBOoBHGGYySmkvqRCIONgr6dmDIZECB6Bq6roFS2TOR7MqqHsGgyvdOCDS1odRTwGcUOmg/fZKmYw0cCAZwFRmYiTU+jE/yajTK7NwiaJptEkekU8dVcRs4jlIYhsHVy10cqa9lxUxgJtbweYvpaD9Fa0szHz9/Y3FxyY7ECRQI/sYZIAQgIhS7XXg8LuqqK/k0MUVqM01D+BAD964zM7tAZ3cvv7e27Ch+aUDA3imlSMRNaqsqGXxwk5rqSqztDFOTP3gyPELj0cPsL/WBpWwkkEsoJxHWUykKHfso8bhBWaAJ/vJSNtLp7Ot/m48GzP9rsJpMkbEsvCUenG4X5zrauHTxDCNvo8SW4/ndmBf8jc+AszkDSxEK+Ym+HCC2HEdEqDkY4sWbMXrv9LNiruYbPNfxBDeA1p2q2mFQGSxHAeNfvnP34RCDwyMk11P5cByRW0Ik4mDJuI/QnZ+JrmkopbC2M4ACXd9dK0U/ZZtXdGKxDM7gBBphoD6/IwpAk/zPY+s1lvTw82sia5uaS+IMRhEMhDB7z4OJYhBLenYPk21S4RpjyzkBygH4gKJs/MwDo4h2A0/iETNTpo39ASbc08kT+LtaAAAAAElFTkSuQmCC",
        "title": "Premium Lottie animations Market - Drawer",
        "labels": []
    },
    {
        "link": "https://itnext.io/how-you-can-control-your-android-device-with-python-45c3ab15e260",
        "date": 1679762355,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlUlEQVQ4jXXTzUuVURAG8N997+26CrEiEYMgDVpZLoRAo25EXwoRCUErDSRatGnXIhL8A6JdraJon0RJO4mihCAIQjSUgrb2sYha5NUWZ4735YKzOe+Zec68M888U9GyAhvxfQmnsSfua3iJp+3YapvjJB7hID7hVZwFxnAdX/AVe/EvP4ZrWMYZ29u5wFzFAHpzoIHPOIw6dmNXqbpafHcEZhnD+XEd73A8Hi3gBubRWarwSLSzE6fwFjtgHM9KZU4FYXfxpPTnj5go4V7gQhU38SEy1vEeo/iBQ/iNy2jidmCa2I+hGrqwGlmbqEQV83iIe9IYj0asGdhVDBbhLNsmuvEn+v+OvxKxm224LUBfOHOyB3iOK5iUtPE4YpnUfvwsgrBj4VzHDL5JYnod/NyXRHMrThjBnCBlIZIcwBtpjHPS/LNa92FREk9DIj3rwwlJHINx75E0UIkEGVjDUGBz1Vs9TWEJ521vo1pShiKTlpepgWn8irZWIt4vjbETd6QlK7BRHmF5nS/irDQ6Wus82479D6D7WUitcjDtAAAAAElFTkSuQmCC",
        "title": "How you can Control your Android Device with Python | by Kush | ITNEXT",
        "labels": []
    },
    {
        "link": "https://pyimagesearch.com/2020/09/21/opencv-automatic-license-number-plate-recognition-anpr-with-python/#download-the-code",
        "date": 1679721088,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZklEQVQ4jY1SXUgUURg99zYzu7Piuj9qJmWarEv2kCaLRJKEEApqCCImbCBCENRTEL331Ev4EJFCWST9sIVE0WaIRD60JGEqSH+utRJL5oy2u9PM7uzM7WEz1m2Vzst3ud85537n4xLkYPyr1n7/s9L/TtIbFJ0VAkABT+L1bst0b404cnyP9Vk2n2wconFWcvGNPBSMJLtyTbPRXiE+HPQ5ztjtZBUAOACIxVhx1+SPF/Nyum47MQA8jajdy0p670/GWosIkSkAnJuWh/9HvIFZSfedf7l2DQDIxLLW2jchB3NJHZVWeB0cpqIp9HlsCMfSuDqfgN9rAwVw8/0vBNqcLdzdj+pAvlc6K0V0VlpxymvCZaHgKZAyGGpdPHqqRTxYVHHvgzpAZ6SkL59B0mAAgMszcVTcieJ5RMOF+kI8XlIBAAfdPBIpdpjGdWbPZyDQTB2PaDAZEIxosHEEC2tpSJqJtgorju227KJbLSqdGQD7nTwAoHGnAIMBUcXAo7CKnmoRzeUWgSsS6HosZTj/MTAzdajZgVXNhNfBYXhBAQMQWFRxurYASprpnK+Uf72cMKq2inB2ah11xTyW4gbGwpn8c5KOtaSJqGJ8o36POJQvgpXLfNIvcQNXZhN/xQ4LxWiLC04LhW0HuUSPlIuvuqvE0VyDsbCKwbkE1lPm5gYD5KSJwKIydaBYuEUAQGLM3h+Un4S+J49utdRsNJUJk9db3SdKCUlQAHATEhtpc3Wc9Ig3thMSwPTX2IY3xH/uNiO0ojcFPin+t6upRkk1SwCgVKQrh0qEUO8+2+2GMiGUzf8NAij0MW9nuQ4AAAAASUVORK5CYII=",
        "title": "OpenCV: Automatic License/Number Plate Recognition (ANPR) with Python - PyImageSearch",
        "labels": []
    },
    {
        "link": "https://flaviocopes.com/access/",
        "date": 1679655527,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADWElEQVQ4jV2Sb0zUdRzHX9/f/Y67446TP/If4p9gkTEDUxRxWs1muZVuTps5q9kDWG1O59ZWbFcPGj3ogT1pa60WK/5sslpC7DRLoQZGSMEKiqnQYYf8TeB+x9397vfpQWCsz/be3k/er30evBT/nRIfSvmwgE2PP0m9J4lChJWvumhJ8VJTs4uHOjrpx+Rj4C/+N9YAh9vJO6deIBAYQcK3kOUx5GIL0cvtSOgm0t6EVFRwfm23HlK6p4rPmt9DZAKRUURGlMgfSiSwmiBybwCr9AE+WAPoq8V97CBN5xuozkgHQghO1OKSSCgCXgW3J+GHASxnEtrmrfresT9TM2H6rg6Ql4Xv3MtUZ2RBfAmJKJT/KvLrSBHRqEclp8WZnBQ2pdZqhTmGKsm7UACaC0AH2LmV0sqHAUMR0VBNfre4jaPqlQOVeBMTsEyF25sAzqj61j8kn3eUKjzTxSwzrgHoNiIhAwnbxOzsEcnRTqgTJw+QmabjSrHjTorSfX1ADp390nqqJy0+e6jBgejP3P/AnYEWciZyvN4jg5NeTj9tkN3dT1VpLt09Q7x/JcAXI3bF9sNw7iWdKzcgHOI+ILjgkdtTRWzU01Vesls1XAjK25eX1M7MYfqTKwnnP0FusFXmzTtWuN2vqYsf3RTL+ATAJqCOj274+furZk3d0W05jfXb41uy7bbxwLz0pu9HfK8rmTN5drZLDmfOW/a+r7X8xcHm8ZnFTwGl/2vCzNjoBN/NGMNV7vJr2vNbCvBauepg5zTxJj9Fg63UnUpVtoiLkoJ7qs2fncRvd5XP51MA6sgRbEBZeQnBW98gK79jLo9VW2fOPma9+do+a2qgTCRYIdfb9sT72jaa28o9r643cb2OFWWF9muNpx+MT/2YEpdIgsjCZgn27paWd4/Fe1tr441nNAMoXgPYVks+aCd1Te0wbZm7dj+yN9X4O1+FpwNkJN5RDhXCnfyTWlyaUB+2p+uzCxTHYjE/EFZAnsPhbrLbXfsQwelykZLslLrnduBxKuVM6rE2eOa1vl9Ci81d3hsrsfRapyNum5mZ8hmG8ZYNeNHl8j6qafYslGaapqmWl6Pa8Pis0myazE3n0D+UoVo6om9ojrQ5yzRqYzFTRGKDkUj00j/8wXe/s+Qj5QAAAABJRU5ErkJggg==",
        "title": "flaviocopes.com",
        "labels": []
    },
    {
        "link": "https://nbviewer.org/github/chezou/tabula-py/blob/master/examples/tabula_example.ipynb",
        "date": 1679491657,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwElEQVQ4jZWTz2sTURDHP89NtdgcQnPoNj1JaSEughdPRgIePFVvoQHP+gd4y2GXsJcQ8OxFBa+9eBItCKaKIJJDinVFKZKCZQuBBEuIuD/ePg/ZNN2kpfYLjxnmzXzffId5AsA0TQUohlAT5ygmhGh6nrdWr9cP4zipkWPbtojdkU3Asizy+bx0HOddpVK5U6vVugAXTko+DeVyuWgYRl/TtK1qtaqfm+AYSVdK+aFUKmmps0vGsCxr5BYBdF1PJQjuv3AormR4eHMJgPWn22w8uM7a4wavbHuKLJvNqikJO+4AL4wACAN/aMPg1K6mCK4tXqa59ztBIIOAj98PsDc+8/LT7lGu67rJDiIpKSxnaHzrTHXwY79H+dYqb1ttXjd/ApDL5VRiBmHgk19Ms9/t0xv4hEEQxwPWC6ukZ2e4e2OZ91/aXDpJQhj4CKCwkqXx1SX0xxJmZzQAMnMX+eMNiR3HURMEw4vbVxfYbO0lJOy6PQB22h2u6BkADMOYkBC/uDQ/R0qoxBCfb7YY/PX51Tnk2aN7PNl+My40TVOdhShS6qDbV1JGSiml4g8o/nsThQB9Pj0ZHks4tqbnwj8JPu8epUHj5wAAAABJRU5ErkJggg==",
        "title": "Jupyter Notebook Viewer",
        "labels": []
    },
    {
        "link": "https://towardsdatascience.com/programmatically-build-regex-regular-expression-in-python-for-pattern-matching-3fee104fe42a",
        "date": 1679490347,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACQUlEQVQ4jY2TT0hUURTGf+e+N29mnDGVShEDMTAQcVGYC9sIQavWJq2K2kTQSqRVLlpEBEIbd0GrqFUUBAUtoiCIcFMigSapkYmgjvP3/bunxcwbVBT6NvfCOfd83z3nOzI8MWUBRERUVUVEOAJJXFUVEETK7p7gvvN/4SaPjDGoWkTMkcnW2iZJItRtyCdRdVCBMQa1Fm3kHfyhaVZsMCR3EcEYoViu4ocRIuA4BmME0CaRSeT4QUQmnSKOLUEYUfV9tgol7t++wtjwIDvFMju7ZbYLJazVhmpwRQRrLS1Zj5nJ66yub/Lo6StOn+qir6eTiyND/FzbIJfNMH5plFKlxvsv34gii3EE14hQ8UPODfQxMtSPovT3djMzeY2V9U2MY9gqFHlw5yoXzg7w7M0nHGOIxAKKsap4nsv80hqlSpWHT16yvVum60Q7N6dnWVr9S74lw4t3n1n+vUFPZwdGBBRA6k00jSkEQci9W+P0nOygUCzz+O4NzvR243kpOlpz7OyWuDx2ns7j7QRRhIjgdA+OTjvGUPND+fHrDynXkY9zC8wtLFOu+bz+8JX5xVXyuSxtrTlmn7+V74srpFMpQQlleGLKNiYhlVqg1Vogba1ZwjDGD0NcxyHtuQRhTM0PNJPxJJf2VBFBKDeNBJDPpjmWyxJbSzqVIi+ZuvOskvY8juWzoBDHMYgiYmjugogQW0WJAcGqNhrVgCpxbOvOFCHx475lEgHVutMOQ2J5UYW9u7AvKPXxHIbEtXvL/wNN9BbKFZm2+wAAAABJRU5ErkJggg==",
        "title": "Programmatically Build REGEX (Regular Expression) in Python for Pattern Matching | by AbdulMajedRaja RS | Towards Data Science",
        "labels": []
    },
    {
        "link": "https://davidwalsh.name/browser-camera",
        "date": 1679482132,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADc0lEQVQ4jXWTW2jbdRTHz+/3/zf3NJcmTXpJ0yxxtk3T2rVdXQJOKXZb2dA5/o5V9yAWZAwFwYFPEi8M8UHwYTIKw+nYkE2xDKlmliXVqJmt6erWxEibJhkxabq1za01t//xIYsOnAcOHA7f7znn4XwA/hu0ViAAuV8yHFfNh+kAAAjHXWYQa4YRKag4BdiOvQLwkvYhS/413k+sNSxDB0Y6tdsftstTimCcF3S1SVLemO59tShvKENlzXMtfhEg8pfc+IRd0tKwVDtRe+Tke8czicCTRjZ8yKzchOWtNmhq3QmBeQ8oxUWwGWUwE5Ymv5q1DDeU3PylzyeCH527eoIFAP3EVdf0vSy1Bi99ChqFoHJrJYPPjI/D6L591HtjvuL98XtYDHzJd6k3tMpnBdd3dDhjDUr5esDn/ZaOvXH6lKmnz7o49fG2SCQtxkt9uEmN9DGblbq+mcLceoK+c+okc7copbntPGDSq90z0D145QvX2UjkZoQ5fOL1D0iFbfzuk3fJ3oNjTMtOB/H/FsJwMo+GVg0BKoY7qVXwznigIDRAFlvL2gYllhmhKp4XhpiD46+9VckuydMBN4pbHKBWCqFN3wyMcQcJhu9hj6WJmBulZP+hoxBJ5KG3304NTRroebS9maXMADPCjb0Z8nkl2SyP4RTC6J4OcnjUTkPBEGq6bMR/OwilQhl+XfgdujvMpPsRHfX9chsEQgHVadUySikttXb2EZoPgK4yR/Q6FflhfgUf77TQQXad7LcZYC66wfujqygXsqRRJMDjR56mdSyb/2l24TSb29hcNxpNeg+YeXk6xKxEE9jVYSHnJmfR3meC1J+rqNxOkP7nDtB04g6yWIazl6fRNe1/fs59forGlsMLzaZ20utwlGSGXn7+ZgQ1KhkeG7GRlkYVpLYypJs7SqOhJb5eIi7OLIbIGiuOzbnPu9xuZJkMUx+VQu7F0d1JaZN+mGFFYnLms6nyU45+9Pn8fL1tN+BWjg4blIysrlL3R5ol6Y3s2zeuf/2zyeSs/r7ZPODgXuh91b8oHtxrB8PdPFuXQSs0qIUgkwkB4jF+19CutYsXJm8lM/wV9+SZif9jQQSKIatEr3yZLWwbGQTcKBYKjERxobJ8zQMAm1VMkQAh//ADAEARnRSdzgcRrQ2vepxVDcdxDyINfwMXr2kyvUqsFAAAAABJRU5ErkJggg==",
        "title": "Camera and Video Control with HTML5",
        "labels": []
    },
    {
        "link": "https://shravanmeena.netlify.app/",
        "date": 1679388637,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAC6klEQVQ4jT3SW0yTZwDG8ed9266GjlSKtbHaiRlgKRFP1W1WAug8sczA1CUuVTQSxcjF5pEEkm0uLi6LiYcYL7wgmmhcPCTqLpyHaFBxGOdU2AAVLQexBdquaynlo9/7eEHi/e/u/xckASgqASGEeD7Y80f7g/ZQQAhR4MhZ4f4sz+4iSVAKCcAIQKcyCNkTDe68fORiy1WMJmHOAJVIJTnB8tUnXx6u/M410THOkFY6yXuvn2XtXozNM6rO7n/S1zmipWIjiYfd/1T/9jO2urN2LmoOtJFMKx0kX4f7J+0twVb3ucc3SLb2v9xz+eiP107+GWgl2RMNTa4rm7jL1x0NkQTJDafq4Xeubawjqem6p2EF/FMNNYXY5pn7q//VUN+yE7XwO6tON5CUHaHAldYmTLDMduYBMEm5zrcGtik6IIT4+99m36FNbW9fwTr50tPbzwe6DUUVxRceXwfgmTqz3ONLpbXP8xf6F5TPcrltmdkxsC/YldRGpDkjlYzNdhUYPKt99188gjmja6i3sqjMkWlTZLbFOt/lrigq3bF47XRHzs3OFk1PQx8rnDZTCiFAGo2mSDxccrT6+L0Lg4koAADjibZ8uvpgxbccTUJIKYTMt7sgpKIymsyhcH/tmR9yf6osPVZz4Ebjm9igyWAEsLJg0QcWK6jy7S5ZkufNyrSp4dh676qywmJoqWQq0dTxoOH8wTm/rO/9LwRgNK1pY5r1w6ySXK/8eNK0r+ctw/9hp9V+q/ZE1dKN0mCE0gFBUtPTAK60NmGo9xvvqpxsJ0gG4xH7vtLc77/oGnpDMjwcu9p29/yTm4OJKMnrnS2iptBVvzwYj5CErnSST/tfOveVYkvumsa6a+3NA/FIbCTREmirOrsfm2Z8VL/82dsukrrSBUlFJYUMD8fqfj/eeP+iHo/AZIY0YGzUYLFWF687UL4922IdZ+L93oCQQgTj4Tsv/uoY6CbpduQsyfM6Mm2KCsD43u8A8ymCa/rC82MAAAAASUVORK5CYII=",
        "title": "Shravan meena - portfolio",
        "labels": []
    },
    {
        "link": "https://www.reactnativepaperdates.com/",
        "date": 1679232166,
        "icon": null,
        "title": "react-native-paper-dates-example",
        "labels": []
    },
    {
        "link": "https://hosseinshabani.github.io/react-native-modern-datepicker/",
        "date": 1679232162,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACLUlEQVQ4jY2Sv2oUURTGf9+9MxsnriYGiTYbELUQRIsIYmFhoe9gY23hm/gK9oIgPoBYRcTCxthYWEQs3ICYTTbZyezMvZ/FbFSsPM3lcs8535/7AWDQ+Mt4nf+s8ZfxukEAerSTno5yGt2dT288X1rdWgpgW7l//10BI8lNhofN5O7W4Mz2txC/6fGu/WM/kyb7VBfOsXIKUu6HtNhh92cMsH8M9e4ecXWF8yuB4njStWHeagJhWLdpNkOW0T8MjJFFFJ5CXGuafDwpre3d2kEihuAuJVk6AVxQ78Wmk7utoohOKSvb6HA6zz1NI4kAVAEMZEPtXsJy6BfU/8grmmwtfoJoM0vm5QwOkri2ZDYrKIH3R2Jmc7uC1kIytiiwUMg4B0plXhzAqBSbp82rKZwOYi/B1hGcjeJO1cMHwBKFBFgEwbHh/lBcGZilCJ8a+N7CjcpcGsDrQ2FAGC+sLeDEMoPE5QF8qOHdTNSGJ+fMMMJOK7oFdf6SECRZCjYQJQNcLODB0GyU8LYGqceUgEUPkiUcbMu2ouQ6Zb05kjcG8s1luFXhz/PgQlgKRtg5CzA5K2dULLwgG4ZB/jo3z/ZgVMofa7g3NJ37ONog/mIAaDJtnXPGQEBEYLsxP5O4OjAbpWjcL5lmsRb5bWAIAU1n3UERKBd5EcCygJxiG2Kau08jQCFo+yYL1GVaNY2vS+0QykwJXdtq1vUDJVAWf2LddlBVpWkB2mCXh78AHYEvjhf4hIIAAAAASUVORK5CYII=",
        "title": "React Native Modern Datepicker | React Native Modern Datepicker",
        "labels": []
    },
    {
        "link": "https://www.mongodb.com/developer/products/realm/build-offline-first-react-native-mobile-app-with-expo-and-realm/",
        "date": 1679229014,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHUlEQVQ4jWWSzUtUURjGf++5R0dzHAwatEmlaOPHKjTRJAL3RRt3Qi2E9m37H5SW07aWQZto0cJapGQgEqS2iKD8QiKzGcevufe8Ld7rzGgPvNxzn/Oc5/04RziPK/2jeD+FhnGgJ2XXETdPkjxnY3WxUS61VWHoAv54BpFHiAMCHCa21xoBDjSAapE485itpYO6QfdYK5Re0+QnCAmgUElgIGsGq/vQFpncRVCN5wgtd9laOnAAuPIsTX6CJAZVOAmQ8/C0zyLnjVOFJIYmP4GvzABE9AzexLmiZU5RSeDJdbiXh64MeAdvf0PG8qEK4obJ5d84lGnrOcVRgP4sTHaCWjdMdlo7RyEVKYgDZdrhGEdD3eA4wJ2LkG+uc/lmuN1he6dQBSe3HHDZ0jTcSyFj3+8nFgJ0ZhrvLC1NC47zUCBWc9rBAjFO/1PjgO0z1gJ8Ltv6WxoAX/bPVSCAbHkC83g3WJtDWwTvdmH5L6ztGLfcBe9307dwel4gCQtC98AIUbRYMxCgnNjQXt0w7v4yfNiD9ihtQ0wXdCSi9GuT9nwB74dqJhkHKxXoy8LXCsz+gA5fn0HkIWiR9ZVnVlO2dw49GcP7a2iqisSe8MIeHCT2L2KHq/EcmntAaSM2g/J2lWzvS6R6CZFhXARe4E8MpQQyEUjafwhFkpaHbH46PO34LK72j6J+CtVx0N50MD8RmSeOX7C59rFR/g9XJMcXmM6rnQAAAABJRU5ErkJggg==",
        "title": "Build an Offline-First React Native Mobile App with Expo and Realm React Native | MongoDB",
        "labels": []
    },
    {
        "link": "https://www.skptricks.com/2019/03/react-native-installing-realm-mobile-database-in-react-native-application.html",
        "date": 1679228315,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABoUlEQVQ4jbWTv0tbURTHP/cmL/oMGkWwgoLoooFOBTdBpI1IkepYqkNwcnQJIoi6ObnbofgHiIvJVLNYnAQ3QSRiMKTGFoM/HvG9vOd71yHGn41phX6Xew73nM+953u5ggrqT57/8pAtABLv9+aHxjd/qvNXAjR3hTaKkrFYBxRMkpsV6mQlQFmu+/J+VUA1/T+Apgi+GpAwVNgfZNS7BhwQgi//BFg9Zc2yQDs8IJc6RNRA3FDJvwLEsipqBggD4C+9smtBnc775byKVAXkbL5SLMX+TJrT9BFSQNGB9gArLwImM+qbXUOgnPuuTNxLEwBPga7TliiouYc9ohyo+ELdeO98IXWWfXRCtFPHtJ27PKy18lEX4hlg4kDtbFupd7snaah1ofEEjjvh7QYojZBs5sLLMx36zIDTsz7UJEbuRohlVTQf5L75SofzVpA2i/WDLDYMlDyRQZaMOCrEp4ShwnD7mTJFRnL27dUtH0i7tHoBZozvoLQHQzv8sPbp83XPAmMCYDmvIlsXJGzuDQQwPZhqe+o7mNf8BCLD9WLvBuZ6lB+/KLK8AAAAAElFTkSuQmCC",
        "title": "React Native Installing Realm Mobile Database in Android or IOS | SKPTRICKS",
        "labels": []
    },
    {
        "link": "https://hellokoding.com/todo-app-with-react-native-realm/",
        "date": 1679226571,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAA4UlEQVQ4jcVSu4qFQAydl5lG0FIQrcRCkPkUe8HaUhD8BwtBbK39NUGttHOwyC0WLjJc1l1Y2FMEQs7JCUkI+U9QSn/B+4qWZTHG7lVmsAGgqirHcRBRKVXXNQDcrUwBpTQIguM4lFJFUUzTdJ4nIr4J3BBIKdM05ZxnWda27bZtBkEYudY6SRLP85qmua6LUnpv/2Ekxti+71rrMAzNbXwUCCHWdR3HsSzLKIoQ8WG5Usqu64QQvu/3fR/H8YMDIi7LYtv2PM/DMOR57rrudw6EEM45uR0OAB4Eb/z0Nf4YL+1aQ2ttXZXsAAAAAElFTkSuQmCC",
        "title": "Todo App with React Native, Realm",
        "labels": []
    },
    {
        "link": "https://blog.logrocket.com/build-better-forms-with-react-native-ui-components/",
        "date": 1679145601,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGUlEQVQ4jX2TTWsTURSGn3PvTDKTSGybtlHR2nYhlrZ+gLgQsVhx4U6EYkAQf4PYleDOP+LOnYi4qODKD6Q7wUVFKKTS4EchtU2nyczc42KampjqWR049zz3Pe89VxZvvFL+ClVFRFDNSp1cRPbqqAiiipp/NaeJw1hBjJCmrgfYHX0AEXDOIUa49+gsdx/OgnbAff29ANVMbitKuX5nkqmLI8xcqnCtOsHuTrqn4j8AESVuOypjRa4unGTt8yZfv/xivjrO8LGQOHaIaM8ovQAjtKKEc3MVombCuxdrvHlWI245zlwZpR1lKqRrFq/HPLLCYKVALrCUhvIoSi6wlI+EONfvwz5AREhjR7HkM3K8QFj0mb89DgL5wGP0RJFiySeJHcZaQHtHUBTnoLo4w6nzZeI4JRdY/JwljlNOXxih+mAa57KzfR64VAkKlonpAVyq+L5FxGCMwfctLlUmZwcJClneB7DWEG0n1Fe3MFaorTTY2WrT3GxTW2lgrPCtts1uM8HYA0wUgSR2fHr/g436Lm+f1ygfLYDCz/Uml2+OsVGPiNsOL+/RWYh9gHNKcMhjealO4/sqC/enmLs1DsDrp6s8efyRodGQoOihqSJ72j3dd8TQEVYazvPh5ToDwyFpoiwv1TlcDlDNdkBxqiqAqhz0GxFoRym50IJCu5W9SOeq7t/YpaArFHKhh7qslAv+5B1EpgD3G5P9+EHr7LUNAAAAAElFTkSuQmCC",
        "title": "Building React Native forms with UI components - LogRocket Blog",
        "labels": []
    },
    {
        "link": "https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/",
        "date": 1679145598,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGUlEQVQ4jX2TTWsTURSGn3PvTDKTSGybtlHR2nYhlrZ+gLgQsVhx4U6EYkAQf4PYleDOP+LOnYi4qODKD6Q7wUVFKKTS4EchtU2nyczc42KampjqWR049zz3Pe89VxZvvFL+ClVFRFDNSp1cRPbqqAiiipp/NaeJw1hBjJCmrgfYHX0AEXDOIUa49+gsdx/OgnbAff29ANVMbitKuX5nkqmLI8xcqnCtOsHuTrqn4j8AESVuOypjRa4unGTt8yZfv/xivjrO8LGQOHaIaM8ovQAjtKKEc3MVombCuxdrvHlWI245zlwZpR1lKqRrFq/HPLLCYKVALrCUhvIoSi6wlI+EONfvwz5AREhjR7HkM3K8QFj0mb89DgL5wGP0RJFiySeJHcZaQHtHUBTnoLo4w6nzZeI4JRdY/JwljlNOXxih+mAa57KzfR64VAkKlonpAVyq+L5FxGCMwfctLlUmZwcJClneB7DWEG0n1Fe3MFaorTTY2WrT3GxTW2lgrPCtts1uM8HYA0wUgSR2fHr/g436Lm+f1ygfLYDCz/Uml2+OsVGPiNsOL+/RWYh9gHNKcMhjealO4/sqC/enmLs1DsDrp6s8efyRodGQoOihqSJ72j3dd8TQEVYazvPh5ToDwyFpoiwv1TlcDlDNdkBxqiqAqhz0GxFoRym50IJCu5W9SOeq7t/YpaArFHKhh7qslAv+5B1EpgD3G5P9+EHr7LUNAAAAAElFTkSuQmCC",
        "title": "React Native form validations with Formik and Yup - LogRocket Blog",
        "labels": []
    },
    {
        "link": "https://github.com/hustcc/timeago-react",
        "date": 1679157147,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "GitHub - hustcc/timeago-react: :clock8: Simple and efficient react component to format date with `*** time ago` statement. eg: '3 hours ago'.",
        "labels": []
    },
    {
        "link": "https://mockturtle.net/",
        "date": 1679138929,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnklEQVQ4jaWSvW4TQRSFv539s9eOYxuBBBIRwVQUiLhIQZSIBgpKngEKXiGvgERFSwPvgARSJBAhiiKlSxfJIhWmAf8lZnd29lBsFJI0JObrRnfO0dwzB0n3JH2QZHVxckkbkrpIen8J4Xk2PElHQJXZsAYIZxQDhAHAxIqfU3GjbghMOUkd9CeiFTtG0zGuEJ5XziSYr1ZoJgkBwMee49VOyvqDmCedAAne7Vne7uU8uztg/2CHI5uTWkvo+xjjsdLp8LS7VBqMMnEwFC+3M243DT8OxevdjEkmrtRbPHq4xvfRmDebWywv3mLlToe5SgWgNABIotJo/XPKJBOhgdCHOAy43mxhjE9gDO1ajYV2+ySEcmNBI/J40Y3oDQpsAc/vR4TG+2eKwbGeQrB602ehEdOIPawDVwiduiydPZ8YzEVwNfFIAni8WG6123dcqxnqYfmKwPeZr1ZJwnO/LsmO00LfBk65+1ux37nU++U0PS64Kwr1h0MdpumZKnqS7OkwL4sB7KxiIDfA5n8YfEVSV9InSU4Xp5D0RdLyH09jauXYmIqhAAAAAElFTkSuQmCC",
        "title": "Mock Turtle - GUI-Based Random Nested JSON Generator",
        "labels": []
    },
    {
        "link": "https://loremipsum.io/21-of-the-best-placeholder-image-generators/",
        "date": 1679035345,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jX2TO2tUURSFv33O3KuZQhQLKyXkH4j/wNJSSYpIGA0JRgt7wWLAFLaCoARBRFPI7QQJWgiCrUQsFB+glTYqGjNxZu49e1nMnWgek9Oevb+1134YuzwtnD+JWYvQGCf5U77/umFFsS4wA/0fazuSL85fJVobiMghRJBWwc/YzTuftseHrcmzEyhdI6VIVZUkT/T7PfL8OJXPAQjiSADrpZB+IgloYBYIIVBVCXR4qDMaoE4XM8NMmAnJECAFQuNI7dlHA3rxNyF8JMaA5JgJZJgZSh9q+bArQGBWFOuoexb5F8wikIgxUlVvWfu6WE9h9woMJAh268E73B+RNQxIg8/QseWVNQOpPaKCfxwg6f1g4gqkJOQndGnusWZmjll7jx4YJM23ptiXXaZfeW3DcHdiPMWBsRe6cO700PImYNgYLcxO0Rx7SPJx5CDZplC/3yVvHKWRtXZWMDk5DJwAc9x7bN1SJ4SMXvmNjY0rOwFFUS+HVkkpIMJghPWTElkWSeWi3V1+IwjDmwi1dxcY/voZyZ/T3J8hrwBHKsnznLJ6xY/OUp3sWysYQGRLL0vUm6JfFmR5joVInuegz5S9aSuKP+x1jcNz1fT0IQ4274GaxCxSdq7b7ftPtqsD/AX9duZm1TwayQAAAABJRU5ErkJggg==",
        "title": "21 of the Best Placeholder Image Generators",
        "labels": []
    },
    {
        "link": "https://placehold.jp/en.html",
        "date": 1679035340,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABOklEQVQ4jXWSvY6DMAzH86mIKAtC6it07MDYF+FZOiJ1YOMFOpWpj4HY2hEWHqFCSG2KKAjwDdHl7nL0P1mO7Z8dG4dhiBBCCAEAxhj9k+Nn1sIYA8CyLABgPIQQxpjx2BzmVFJKMcbMc9d1Wmsp5ToBADjnp9MpCIK+7wkh4zheLpfz+SyEsJAVQpIkeZ4LIfb7fRzHVVXdbjcppWmV/E4AgHme27a93+9t22ZZVtf1brd7v9+2q58E/C3f9zebje/7URRtt9uyLE1L7gxWh8NBa00pxRinaXq9XqWUy7K4M1gdj8eiKJRSXdc9Hg/P8wx/5ZeMns9n0zTjOAKAUurjHkwZSinnnHNuVuZEu0MDwOv1mqbJAK3/T1HnljzPG4ZhnufVu1onmGhLcORumlKKPl+uS1i1HX0BFKLDZ3NaVRkAAAAASUVORK5CYII=",
        "title": "Placehold.jp｜simple image placeholder service",
        "labels": []
    },
    {
        "link": "https://www.mongodb.com/docs/realm/sdk/react-native/quick-start/",
        "date": 1678892436,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHUlEQVQ4jWWSzUtUURjGf++5R0dzHAwatEmlaOPHKjTRJAL3RRt3Qi2E9m37H5SW07aWQZto0cJapGQgEqS2iKD8QiKzGcevufe8Ld7rzGgPvNxzn/Oc5/04RziPK/2jeD+FhnGgJ2XXETdPkjxnY3WxUS61VWHoAv54BpFHiAMCHCa21xoBDjSAapE485itpYO6QfdYK5Re0+QnCAmgUElgIGsGq/vQFpncRVCN5wgtd9laOnAAuPIsTX6CJAZVOAmQ8/C0zyLnjVOFJIYmP4GvzABE9AzexLmiZU5RSeDJdbiXh64MeAdvf0PG8qEK4obJ5d84lGnrOcVRgP4sTHaCWjdMdlo7RyEVKYgDZdrhGEdD3eA4wJ2LkG+uc/lmuN1he6dQBSe3HHDZ0jTcSyFj3+8nFgJ0ZhrvLC1NC47zUCBWc9rBAjFO/1PjgO0z1gJ8Ltv6WxoAX/bPVSCAbHkC83g3WJtDWwTvdmH5L6ztGLfcBe9307dwel4gCQtC98AIUbRYMxCgnNjQXt0w7v4yfNiD9ihtQ0wXdCSi9GuT9nwB74dqJhkHKxXoy8LXCsz+gA5fn0HkIWiR9ZVnVlO2dw49GcP7a2iqisSe8MIeHCT2L2KHq/EcmntAaSM2g/J2lWzvS6R6CZFhXARe4E8MpQQyEUjafwhFkpaHbH46PO34LK72j6J+CtVx0N50MD8RmSeOX7C59rFR/g9XJMcXmM6rnQAAAABJRU5ErkJggg==",
        "title": "Quick Start - React Native SDK — Realm",
        "labels": []
    },
    {
        "link": "https://freedomaini.com/clientarea.php?action=domains",
        "date": 1678874216,
        "icon": null,
        "title": "Client Area - FreeDomaini - Get a Free Domain Name | Free Cloud 25GB Hosting No Ads",
        "labels": []
    },
    {
        "link": "https://blog.logrocket.com/comprehensive-guide-dark-mode-react-native/",
        "date": 1678879681,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGUlEQVQ4jX2TTWsTURSGn3PvTDKTSGybtlHR2nYhlrZ+gLgQsVhx4U6EYkAQf4PYleDOP+LOnYi4qODKD6Q7wUVFKKTS4EchtU2nyczc42KampjqWR049zz3Pe89VxZvvFL+ClVFRFDNSp1cRPbqqAiiipp/NaeJw1hBjJCmrgfYHX0AEXDOIUa49+gsdx/OgnbAff29ANVMbitKuX5nkqmLI8xcqnCtOsHuTrqn4j8AESVuOypjRa4unGTt8yZfv/xivjrO8LGQOHaIaM8ovQAjtKKEc3MVombCuxdrvHlWI245zlwZpR1lKqRrFq/HPLLCYKVALrCUhvIoSi6wlI+EONfvwz5AREhjR7HkM3K8QFj0mb89DgL5wGP0RJFiySeJHcZaQHtHUBTnoLo4w6nzZeI4JRdY/JwljlNOXxih+mAa57KzfR64VAkKlonpAVyq+L5FxGCMwfctLlUmZwcJClneB7DWEG0n1Fe3MFaorTTY2WrT3GxTW2lgrPCtts1uM8HYA0wUgSR2fHr/g436Lm+f1ygfLYDCz/Uml2+OsVGPiNsOL+/RWYh9gHNKcMhjealO4/sqC/enmLs1DsDrp6s8efyRodGQoOihqSJ72j3dd8TQEVYazvPh5ToDwyFpoiwv1TlcDlDNdkBxqiqAqhz0GxFoRym50IJCu5W9SOeq7t/YpaArFHKhh7qslAv+5B1EpgD3G5P9+EHr7LUNAAAAAElFTkSuQmCC",
        "title": "The comprehensive guide to dark mode in React Native - LogRocket Blog",
        "labels": []
    },
    {
        "link": "https://freedomaini.com/cart.php?a=confdomains",
        "date": 1678873223,
        "icon": null,
        "title": "Shopping Cart - FreeDomaini - Get a Free Domain Name | Free Cloud 25GB Hosting No Ads",
        "labels": []
    },
    {
        "link": "https://www.freehostia.com/domains/?sld=siru",
        "date": 1678871573,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACVUlEQVQ4jXWRy0tUURzHf+dxnzNznZuiFx9Fj9EkJUjzERZuCjJSMGpRu/6AVq1ctQmiFm1atQx6SI9FICFElAVhmKYYkTLlIi2dmZw7zp3OfZ3T4sgsenxXh8P3c87v+/2h8xdvAIAQAiEUx5yxgAuBABBChOAgjBBCCiUCIAwjQ1dp1R2GkZUy+3v311gmxpjHfLPo1dVZGKPVtQLBuKEhPfshSwFAuh3HHrt87svXH9Mzn/OFUi7vDg50tre13H/4quwxz2OXjg3X2qltwA+izJ7GtbXC1evjqqZwzp16u6er9drNR7mcm0jopVLl7fSnXN7dHsnQldn5bDJpOM6OwA/drcrpoZ65+ezGRtG2k1HELct8P5dlfoglQAipVPypN4txzP0gbKhP72yun5icAYQ8z+ecI4SYH2KMtkcSQlBK5BVjwcipPlWljmO3Zpo8j61+/+n7IcYIADAAVBmMERfcsszDXZml5W8HO3a3NNedGTnSeWAXYz5CAABUAkIIiXllNjzUl8+7t25PmIbG/LDn0L71nKuqihAAADSOOcZI/sA5TyaMwaMdd+69sCzTNDQLILuyzrmglMh14ZoaU1GozOCWvJMnuopFb2FxRdeUKIqjKAYAjJF0AwBuaqwFgDjmm8VyZm/j0PHu8SevKSVCgHT8IWzqWntbCwD0drddGbvw9Nm7peVVXVerqaqtyANd+LhydnRgdLjfNLTxx1OTz2dTKUMW//fzAECDILr74KWdTpa9X2WPJUxNtvE/UUIwABQ2twjGCVMXQlTz/VO/AZNOIymwibsMAAAAAElFTkSuQmCC",
        "title": "Low cost domain name registrations and transfers | Freehostia.com",
        "labels": []
    },
    {
        "link": "https://search.register.it/search",
        "date": 1678871569,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVQ4ja3SOy+EQRjF8d+OlZBQuCREsCgUGqVKQbfotaIUfAOtWqPXEkofQFSi0iA6Ia4hCoVClmJn441sxvsmTjPJnHP+mcvDP6sVIeGHmGmqIWxjJgGoYgv9v40u7OEBCwnAIl6wg86ssYo3LCXKUMJKzC43Nvtwil20/QGADhziGN0Bk6jgAB85AO/YxzgmQizXcJWj3NAFvjAS/HxbrQDgM67lgCe0YLAAYFT9QW8CzvCKOekhaqgcs4/qV1HCJu4xmwMwj2dsZDcrOME5phLlaVziCAMyR77GeiQPJwBjuMUa7poFeqWHqR09Cb+4vgGYqiip6BFq7QAAAABJRU5ErkJggg==",
        "title": "Domain Search - Register.it",
        "labels": []
    },
    {
        "link": "https://builderx.io/",
        "date": 1678859082,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACf0lEQVQ4jZVTv0scQRh938zsbs7b8zYnJgjRFZsrLCNelfrsUglCRLCwSrBMlT5/gH+Bhc1JjAnYicWBgmAVBEMUTBGJlaKe2XN2d16K+6GFBPKYZj5m3nzfm/ekVqu9tdZqAAQg+A94nkeZmJjg5eUltNZQSoEkSD56gSREOm/keY4oimDSNP1jrQ2MMby+vkYQBBIEwaMkXQJ2CSTLMquUUkprray1anZ2VlWrVdVqtZTWWimlFADVg9ZaAVAi0i+pXltJkmBxcRHVahWlUglJkiDLMvi+jyRJ0G63Ya2FMaY/Jkkq6QwlWmu5urqSpaUlWVtbk9XVVSEpMzMzsrKyIiMjI9JoNGRoaEjSNJUeFACICPI8RxiGODg4wNzcHMrlMpaXl9FoNDA4OIidnR1sbW3h9PQUhUKhr4t6qG673Uaz2cTNzQ329vYwOTkJay0ODw8xPj6O3d1dZFnWFxQAEMdxO4oiAnDb29uu2Wxyfn6ex8fHrNfrrNfr3N/f58LCAo+Ojjg2NuaKxaIrlUqM4/hOR1H0IUkSY4zB7/Nz/Dg5kZdTU2isr+Pz5iamp2v4tLGBr1++4DZJYG2Ks7NfMMZIoVDIEcdxOwxDRlHkNOC6jiQAln2PAtAD+PSJTwAMABdFkQvDkHEc3xmSFBHSOVZqr6AGipDuN+UuxzOlQRLOOTz3POS3Ldrv33o60PSsCQiC129gXsSgtYCgb1uSAAHxA2RnP5F+fA8RgYiIjI6O3l5cXARaazK1AHkfqD45ewsiQjE+cpdLpVKxxvO8Ad/3obUGfR/3Hf0jTCTyPIcxpmCGh4fflcvl+zgr1Tntei55AOc6NdfZep7Hv9s7N5sEk68HAAAAAElFTkSuQmCC",
        "title": "BuilderX - Design tool that codes React Native & React",
        "labels": []
    },
    {
        "link": "https://designcode.io/react-native-for-designers",
        "date": 1678858950,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACS0lEQVQ4jXWTz0tUURTHP+fNTG9+vVHHdESRsSbSirAfQkEtAkUINylWG42CIFq0Cxdtgxa1iwL/hEgjXURJqSXYYuiXRpDUQgpN8Rdmmjnz7m3hffYUu3A4nHPv+d57vvd74N8S46uBW0AWWAVywChwF6jb5vymoAOYA7QxZcyLV4A7gO0vtozv9B1cA1wfgCuW5eU08BSI+F/RYTb+AG7IDqtookBF4o4KhHaooG1vAJm2NHDPe3oGeAs4gC5MlVmn2i6yMDkJliW7Dx5i4stnPfNtnJGBFyg377VmAQ0Bc3sDIi4QSFWmkbxi+PFD2V9bp0eHBnjf/0zqz15gb+1Rxt5lRWmlDUBMgDfAEQ+1MlOtK9IZKx5P6Omp7/IxO8yZtiv604es2OGIjsYcsq/6tIiI1voHwG9AIaIAVV6RVjdudqp0pkYDuuX8ZX3g8HENqFg8oZqa2z0+FJCzgCAYWgDRUGDZ5JeXQQRnR4zcz6WNvw65ILJBvgSAc0CpgZCSwlKWFuZkT1WNtjTyfLCX1qZ25hdmpCiRJG5H+To+hqz/4GwA2AccE8QFrFRxGZGgzZOXPdJ4okmvrCwx8LqPq63X2FVeRU9/F2u5NdeQOBQApoFLnqDCQVtO1zVS7CQJaZHmk81SUrBTZuen9KPBbln8teg1HACue73cNslVwE1EE6q0sEQlnaSKR+Iq6RRtJ6Ruv5TDRp4ayLM+QH4pKxHJmbwGRgxvmwYqAtw3AP8bJg10ASm2LD9SPfAAmDA35g1PvUDL1pq/U0Le2g+EQJwAAAAASUVORK5CYII=",
        "title": "React Native for Designers - Design+Code",
        "labels": []
    },
    {
        "link": "https://utweb.rainberrytv.com/gui/index.html?v=1.3.0.5655&localauth=localapid56684ed7138a23c:#/library",
        "date": 1678704621,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADVUlEQVQ4jV2TX2hbdRTHv+femyxZ0ybrEpM43R9nV2tWupWmg7o5SsExHYhPWmRjfxwTYYqIIKjYMovsQQYd6GAPggpdKUPqqhm0y2ZDWxJH7bZ0Zc3WdVnbpK3tkti4m9v7+x0f0s3pFw6ch/P9ch4+X0JRBDAA4voO7Kr1B45ucAQaXTafDwCy+lx6cil+OZaKnx1uRgRgAggomlbUAsfh8Ob2jsQJfbowxiYb/EjLUuepwih3JE7o74Q3t6MFjn+NDMJJlL4fqQvdKvQXHXJlntxWdNsY4g8j9SGcRCm4+AYO9T5/esL4/fGRkIKllMyyGDAyf4l/GPuC+6c7BTPzHSPKR3q3nAYABLvQcC7RVjCEbsYX+kUs/SubYlkysxSiGHRq5LB8pRvyvSs1vKinBDNzZ+KrQrALDeobx2va9gdaas9c/0B2JNqU6OzP2Fr+Mrltz5BgE6qioczqoet/hilrzHG5zU9bnEFyO/3qnYWIVVnvCDT6rRXwl1QoYECypIHUeRARVFLBzKh01aPCVYdladBvM53QZV4+pW3kjc7qRsVl8fqZGQ3e18muOkgjC4bne7GopwEiCFn8YvfTzbBrpUjmRmko9RMRVCpf5fMriqICADY5a/CccxskCyzo04ilL0AhBQyGZIntnia4besAAL8kz2Aiew2G0KFkjfkUSLBKGtX7XmPBJqyqHRfufYPbmWFYVCsUUnBzcQCZwhw01coTmRH+/Ooejs31pNTKt9XtwXV7a1YrTi6zuDE02w1TGvTQzCE624PpfAKxdA9+HG/FC2t28IGqL6EpVrnW4VPnl+53q/xqanbD6vX7q9Y0aCWWMtzNXqOJ3AjbNAeYJd16EEUyf5Nr3U048uLXVOkK0g7vPiVXeGCEkueOAwCOhbe2J80/mJl5IHVevBXycPNFL7dE98nxzFU5mRt9BBazYJ4yb/CxcHX7f1D+eHB3aErEWbLgjyI7zTcveuTBvk0y+ddYEWVRpHRGjvIng02PUVbRCqAPxuCz97rzypVSu1ayTVulWiazcSqYD8kQOtV59yDDM7iU/L7w3Y1Pvz3VN/QuPsMSWlc6+WSdX+rCrmpP1dG/zXyjlMJn1xwIrN2Zvr80fjmSjJyN/a/O/wBbq/0xWNLVqAAAAABJRU5ErkJggg==",
        "title": "μTorrent Web",
        "labels": []
    },
    {
        "link": "https://logoipsum.com/",
        "date": 1678771728,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChUlEQVQ4jXWTz2qdZRDGfzPv+51zPD2pWqOEUhcKFWk0K3Xhos1C2wtwJRW0eAVCFHQhRxfSoiBegVSvQfBPDWlcFrowbRWEJLZBRVKliUnP+b7vncfFiaYtdDbDzPA8zL/HuMtkYGIoZ2jBW+NnGeQFh5fdmAn0ewTf0JRPOdddYSg37mfvNafopi9we4wdQSuRzThgIP3JqLzGR9V3xjua+h/Ux7j5Fzw0dRTyEskG1KWZf6LkY9Nh1zZdS2uppZMqStmiLi9mumUDwAySQIcepAQ9TB2rIz6Yr6s35lqSu0o0dn6lyu8v0qifDgILGUsHMVADbQMYWLegkXT8aPEzc6Ht2mkCq9z1+jOtXVhP6eKqyyteclcrxkXPH2n09vxIb74wVi9LFNnsdMhde+CJTwnNTrdOIxwOZ3dZNMbxxwtnTzSs3TK+X3fWt42fNs1KgWyiCaNyVAp2dTMH2SzQby4ZGOy2sLFtFMFzMwFmLP+a+PzHxFRXTPfRoBN2/krW8qoXDpiFuJBt75BuonIYFTgz1/LVL4nbYxj+UHHxRuLpR8KubVYsraWgmyrqcou6fJLv/CE32G2M2UeDz07WLHzbYWvXWPw5sUgWSaLnhusmtU5zrnt1n8Amf5hc/FMbp54MDr8y5suVzOU/jI0dZ9y4Rahmt5zk485lkLk0wYegLdCGIYy/R8ZTh8SHJxq+frXm9LFQjN2S6zbr1RWGcjBlM4GMfiVmBgKDyvdJ64AjA/FwLwwhA2eGHkPbAsghgwqWryfeXTJ2GrhTISHoZ1i+kaDCSgAPoP/qOWJCcOl64tJquq+2SEAXFHenM3sjeEd4F9BkofvXmcQRk264R7//Auc3OydImf0+AAAAAElFTkSuQmCC",
        "title": "Logoipsum | Free Placeholder Logo For Your Design Mock-up",
        "labels": []
    },
    {
        "link": "https://www.npmjs.com/package/react-native-vector-icons#android",
        "date": 1678616246,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJElEQVQ4jYWSPW4CQQyFP3uGREqEFIlQcgY6Wg6wl4BTcBLOQ4nE3oA6VehAiPCzdopZZtkkEHd+Y/vZb56U4CBACDyIqkplERBwsKp6UK9paGoweOr3X0cjNwNEpK5ydwBEdb9anTYbBUrVJayLwt3N3bwVGVkXxRJK1ZgGutWVACKZR8DMEHGzhEZq2lbY4fAxm513u7fxuDeZNA/uMc+rVzcTVT+fP+fzL3c5Ht+nU0Cu5Ppz+LU/9noxhNDt3u6Z5LorPFWFWSPaPw13oj4664h7TjJO/hJ3pc3Y3PI3KjH1iqqIcNVeOh0XaXAQ1UQk5W9rqPrptF0s7HJ5HgxehkPM9mWZrCElkMzXJtdsypuUZL7k23Brb3fMHEQkqEJj7285nLmISMvnnQAAAABJRU5ErkJggg==",
        "title": "react-native-vector-icons - npm",
        "labels": []
    },
    {
        "link": "https://www.techonthenet.com/about_us.php",
        "date": 1677764707,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVQ4jcXSvW4TURAF4O/u2k4s8ZcUuKCgQ4gGCaVIhUKbt+AZyAPkAWiRoOIFeABK6KFEoiWAglJklZ/Ca689FHctxRsnUgrEaWbm3HuOjkbD/0ZaHr8NeLLOQZnnyYx7QVlwVmRuOOX++ULRyyVK0oyNV0z26J9S9BncYpZoagZjypImOHq8MCmWk6QHVB+YPqN+nunRHbxn8pR6hxTUg04C81zK7/jIw4qfY2LCPIjTzKk4ek3cxvEFg9QaHLxja5r79R5NQSRSu5Po8ekNn+fdBC0WYohYuWcvmotT4UqkrhKiS1xjsNr1Bgbl4i3af+mGCTZPUFM0RLVKfAUi8WOD6iXjyMs8/MqvR/nglpEui1PwZ5u7u5zPGGNtyPw3o7ekadfkX2C/yEcTPb702/5SfPgLfFRguqh7UgsAAAAASUVORK5CYII=",
        "title": "About Us",
        "labels": []
    },
    {
        "link": "https://oblador.github.io/react-native-vector-icons/",
        "date": 1678615863,
        "icon": null,
        "title": "react-native-vector-icons directory",
        "labels": []
    },
    {
        "link": "https://reactnative.dev/docs/text-style-props#fontsize",
        "date": 1678615554,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACeUlEQVQ4jZ2TT0iTARjGf98f3aebm186cTaWfY4wDUEESxETDcGQSE8llIQR0VWogx48BnmwjoGHqEOHwrJb6LIOiUadCtNilnM6x5bNuf9/vg42U/Bi7+l9ed/nhed9nleoqqrq0nV9HLBxuFgXBGFAUlX13V5wcV0jJU0dJIN+MtFtAAxWG+WdvUj5BuIb3txoEdAu7wUr5XbK2rrxTj7G3tNP+PuXnUlnLb7Xzzl64Qpx/xpx32oOYhM0TdNzVUljG4IkEZidBuDknVEQBBbuDgJQ2tSBnskQnJ/Z5SHuJZWOhJFMZgDU+mayyQTZRBy1vhkA2WQhHQnvO4ScS/LMKpa6RspauzjS0EJBRSXBORcAx68NUt7Zi1Grxu96RdTjJrW1CYCkqupIafM5Krr72Jh+iVJWQSr0m+XxewiSRCq0ydrkE4yVJ0hvb+GbmsBx+SaCKBL1uHcoWM+eZ2lsmMjyIr8+vEVSFESDQs3QA2qG7iMaFGSTmeCci8jyIktjw1hbu/7dIBuPUehwAmBy1iIXFZMI+Ih63EQ9bhIBH3KRBZOzFoBCh5NsIgGAoGmaLhoKcFy6gVJqQ6lwEJx1oWdSrE48AsDe0w+ihLWlk9jqD+KBdVaePiSbiLFPxkKHE/vFq0R+fqPkTDvof1u6TnB+BpNWjefZOFGPe1cFSVXVkV1rOWuI+71sTL0g8H6KktNtZLbDfB29TejzRwRRRFIKiK2vHOyDbDKJbNzxQb5aip5OI8gy+ap1R3OjmWwyebAPAEILnyjv7MVyqoFUOMTi2DAAx/pukVdkAVFk483kvgWCpmlrHP4Tc+ETgeuA7z/AXmDgD9AW23M4cke8AAAAAElFTkSuQmCC",
        "title": "Text Style Props · React Native",
        "labels": []
    },
    {
        "link": "https://www.codecademy.com/learn/react-101",
        "date": 1678427573,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVQ4jaWQsUrDUBSGv5NEfAwjLk6uOoiNDgUFQaEGN50EN6vu+gSNcyc3oXXwDRrBVfQR4uTaVWnu71CEFtI0of92uP/9zncvLBhb2W11kLXLW0q+Bs/XRUcBsraD1Jd1iwrO1LTxghkAwJd1s9feU1EhjFrfws5nyXml6hWyMCCYHFb34h3nuASdCj492AdVN5DTrdA6xo1gCLZVy0Bw6GHH2aD3AnQAwqgVVTYYxw3nbZ1pgHh3ZmdhdDIEO4Lfh1oAM94Q2zI+QBhLGSgrA0w9IUv7V8Hy6CB3bMjP17K0/1jJIDddhI0YgPwHAgNGAWEj3nSoaRMXwii+nwaYEk/Wlqnwtw3AlPzPQnfzrGrlD8cwXPlzd3LVAAAAAElFTkSuQmCC",
        "title": "Learn React | Codecademy",
        "labels": []
    },
    {
        "link": "https://www.codecademy.com/learn/learn-react-native",
        "date": 1678427450,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVQ4jaWQsUrDUBSGv5NEfAwjLk6uOoiNDgUFQaEGN50EN6vu+gSNcyc3oXXwDRrBVfQR4uTaVWnu71CEFtI0of92uP/9zncvLBhb2W11kLXLW0q+Bs/XRUcBsraD1Jd1iwrO1LTxghkAwJd1s9feU1EhjFrfws5nyXml6hWyMCCYHFb34h3nuASdCj492AdVN5DTrdA6xo1gCLZVy0Bw6GHH2aD3AnQAwqgVVTYYxw3nbZ1pgHh3ZmdhdDIEO4Lfh1oAM94Q2zI+QBhLGSgrA0w9IUv7V8Hy6CB3bMjP17K0/1jJIDddhI0YgPwHAgNGAWEj3nSoaRMXwii+nwaYEk/Wlqnwtw3AlPzPQnfzrGrlD8cwXPlzd3LVAAAAAElFTkSuQmCC",
        "title": "Learn React Native | Codecademy",
        "labels": []
    },
    {
        "link": "https://www.toptal.com/designers/ux/empty-state-ux-design#:~:text=What%20Is%20an%20Empty%20State,there%20is%20nothing%20to%20display.",
        "date": 1678422928,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB1ElEQVQ4jW1SO2gUURQ9587Mzu7gbjbqJn5SuKQIiKCgjagIKVTwUxgbRdBGmHSSTm0CIYWVnQT8oLWCoJ22ChaCSgQR/EQkCImSxGyc3ey8d1PMZHZW8+DxLtx3zrmfw11n3gIAoJq+JAGopkESAwRAwsX6SbKqSSa9CSxDAjlAokCyuWpjg6BIBYS0VplxEILcIRE1zaG95euXtzdbtlb1Th6uDvQVYoN/FZJKSLWKWq979cK2UlHuPJk3KX2nH6c6FKqChEJVWfLl5bvG5h43HOn3PEw9nltqGM9lNgI3qUQVAIVY+BOPDPeeP7Zl+vPfiye2Cjlxd7ZtVIiEV7J2hRq17PGDPVPX6q/eL58e+/Tha3TpVK2+019t22xOKUAEUcvurpcejg/O/GyN3pyZCAf2DAZXJr9Nf4lKvth0S3CqQyEAKByHi414U+AOH6gc2Vc5ur8yduv7oxe/y4FYZbaoTg8EjbE3bv8wRkfP9d97Ovfg2fyOWsHYdEpJD11TEhHP5fPXS0FRwrN9vxbNm48rfoG6sQKpqkIGRZm8P9uOdWE5BpD/DYB585GZ53QlsiIs+bJumf+81NGBEiwHjgLWat55XYAOjVKhFpm3uxTWAL5o0fCPwOS2AAAAAElFTkSuQmCC",
        "title": "Empty States – The Most Overlooked Aspect of UX | Toptal®",
        "labels": []
    },
    {
        "link": "https://css.gg/math-plus",
        "date": 1678279071,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACl0lEQVQ4jX2Ty0uUYRTGn/O+3zeOM6OjqKNmBYm3RRcKomUta5GLopDyVgmtuiC1qoVlqyBo0ZUIQoMuUCSU/4DVQqIIMkJHrUgbHbzMON/MfJf3PS3yrvUsD+f8ODw8D7COjuC5XDtlAlisntJ6gEVQyWTIL5IBOSGTj7AluwQi/i+gJTJ8GAa1CuI6ZoRIYJo1fVKue687Xvv2nx/UF3/LK5C+O6aR0+jZhGzGAQkGa4Ecnw8yYLuecq91x6qvzt8yLb0FaiqNdgXMwuOJuVmvrNLE7vqgqKgyMTXu4UNvWo18dGReKE/YnLzQHau6MX/XIQCgKTJ8qK1ijBvCQ27nwTEV/+nwclkJjx+2T3qNRd9VS/nIXHPxcA0ACKBDA4AwcFJ5ggsiEm03S6h4kwnlaYwPOXCzmgP5Evsa80WoWGupgiHhwzEAMACgCZ+DQlBNJulg54EAlVWapBXjxfUZ9N6axda9ueTzSx7oy8C2mE2D2FXYsQhIlQaDYSCkWVFugSBmsNZM/T0pzMQ8vH9pwXM0+YMS/hARQ4MI5iIgO8GJ8EaekcIsm/mtmAhCSsH15wvpze1Z7NofRG5Qcv9rC+ODDpOSTEB6WcKA5vLh7lPlMW4pj7pf+9J6wTzXVotGjg/Z+nTViHsiEuPWDdEz8yZeIQDQiu9qYbueLen+2Uk90JdhZobhEwAYP744/OBcXFnThqGN1C8ryU/XBKmpNHrZb+R3pjMpmH52a/b4qWSzSYm44sH+DKfihpkTgqM8+2jXRHUPwLQM8DfjzZHoRcM0L5H2h21LQSmGEAK+XAIZzqhjZ9ofT9W+WthftwutRaN1MHUDGWI7gX0gspRS75xE5tkTa9vE6kKtUseayq7Uykr/AXFcUzLpiuatAAAAAElFTkSuQmCC",
        "title": "Math Plus - CSS Icons",
        "labels": []
    },
    {
        "link": "https://www.blobmaker.app/",
        "date": 1677043734,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACSUlEQVQ4jX2TTUiVQRSGn3e+73o/qsVtU0GSBbUokv5A+m8jtAiCFmIQQT8WBGW5rE3uCoqojUREUGSEriShjRDUKheaIBRFYAQZiJSJ2r3OzGnxXX+QamDgzJzzznvmvOfAP5aB5u120nnbFu6BBccioBNmQmZP9hwGf4pgG+xxHKFsD6XBPjMkYbCYBZwgVo+yjo13KBSvABAFxWVAhIq/pvPvbszFay5dgRk4aN0Se9I2l42d4WdlFgkqk44fnwNJ5liepkR/QqffPbN2nBbAF3YDt6nRLj5cz/z6VTjlKcqiMdwFb24GahIHjFKe3qaLH8ZdDj5fD3oJtg9CDR6feHCv+6I+dhnlKaz+uFi31zEzGcgKa8myZgCXf9m1givB7G8MUEwERlu3eH4VJj7lYXFWSBAx5BoB0lwubYYYwaUIEYQVkHpuGaWguGIlbugpjLwyspLDexDrrImkmgERTOT0IENgfBsTb7+bG/tlVncAag9CZQrkQLliLkfZCCQGZli1rNHg2F2zxkviZi9WqoOdzcK8J3Ui2nt1E6qNFHohOQnySAbCnJwetJgmpo39m0wghsqBcqGI4hQz4d6iGmQ9UOmHtAGsjI8FQjQ7sk0A8gFeDHjOvhZHa7/6htGWwqHhAaNKl0t5disU+8BWs7lUocYJb8Jh/KpEvowVoejB7RP3+w0SQVjSiee2Q/oIwo68oHO7ACTjJHZZoaPTmkjUTVg6C9VHTmUky5uw2IhpDTCNbJAYOsWDz3Nx/xph91fHf/x/AN/eCxKEjuunAAAAAElFTkSuQmCC",
        "title": "Blobmaker - Make organic SVG shapes for your next design",
        "labels": []
    },
    {
        "link": "https://medium.com/@nikhil725051/just-four-simple-steps-to-save-images-to-local-storage-flutter-89c93d76ad0c",
        "date": 1677064419,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTsaoiQRBFT3e/mUFBmET8BH/ABQN/wFARFBTBSJjAVDQQzIwe7IcYjGBgZiCYGhr4ASZmBsLYrzZQm9G3y8puQdNwq2717erbAJ9AAljgC5C/rK977RX4VHeQ+654L1ytTnVWxphHM4wxTwxjzAN7kAUQdZek+DcFolMk1e/3ieOY5XLJcDgkm806RrPZZDAYAOD7vrrnFEopCYJA5vO5vMZ2u5VMJiOlUslhrVZLOp2OjMdjAeRDRGg0GtTrdZIkQamboOv1SrlcJooi8vk8IoK1lna7zfF4JAxDAD4AqtUq1lo3LKUUSimstdRqNc7ns8sVi8WnIWsAz/PcyelQSmGMQWv9hIm4x7o1WK1WaK2dTGstSZKgtWaxWLDb7VzucDhwOp24XC6uo/i+L3Ecfxvifr+XMAylUqk4rNvtSq/Xk8lk8vDPzRBBEMhoNJL1ei2bzUZms5kUCgVn4SiKZDqdiud5EgSB5HK594z0euffGckBr1ZOk/9gZf7XyhggBH6kVb9BFm5f+ucvMhDxQnv5W1IAAAAASUVORK5CYII=",
        "title": "Just four simple steps to save images to local storage — Flutter | by Nikhil | Medium",
        "labels": []
    },
    {
        "link": "https://flutterstudio.app/",
        "date": 1676965367,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZ0lEQVQ4jX2SS0iUURTH/+d+937TzEiOpEVSYmQFOouiBxjhA4WKMjCaiaBVlBsDg4I2ER9YBIlBbsqoIFw1ovSQNlKpWCQ9N9ZiKogWGTk05jSv7/vuaTFj+Bg8y8v5/+75/88BClWEDQA4OJyqCE3YQ1XRqAfMVKhVFASEyQVA0iM3QYpgzbeKjSDiQq0FqYdfpOo8RZ4urWkXABDxT9fWbf075SMw03zYEkDtS/aWw/6oilRlJuWGCa4jpRx0s+6XWFoFRxopvayFUhMEguNm3azByLINYmYGIGcTS/sXPlgsHu+gJKC7hTSU8hsP/KvNAaFE3AGff9tCSWBhmHIxsXqSTcw4h4QEZePpe2SqYek1xh7Wer7nXRcME2AWuQDts8ejzKFX9kTDc8590HClCsfu3kG4tz0/6v/JRV5MINKtrzmofOKCneTZtGN3jDSSE4qwgdLAOgh1AmrFZbTeCAKWRn4BNOc9VA2p1ztPvGWyKTmVvTi4x9MJZgEiANA4cvMc/Ku6kIw/xVe9H29/uIClBSwWsEg7azOnvaWyKT3tjqfWmFdhsQCRBqABCNBUDzLxUfgCTdiA9twUliAAaHmWqfGVqHEmNpJ/3IahOvPdHHieVY3Qra1Q5hiIXDjZ3bh/6pOojkyapk90mysp4PzVlwqIcxZgCfS3fYCd6YTyB8B0Ddt7ldxSvrnDVyb3pqbd0dSMvJ73PV88dyQ5SCLTA+P3AfhK9qEydobCb1wmwnsnkTg6UF8cXXzri4oAMEK3q6BUBKy3CWbui/8SzQP1xVFgWTEAMABC/8nPiMWawbrvH713B44oTh3iAAAAAElFTkSuQmCC",
        "title": "AppBuilder 2 20180529-19:35",
        "labels": []
    },
    {
        "link": "https://www.fluttericon.com/",
        "date": 1676965219,
        "icon": null,
        "title": "FlutterIcon - Flutter custom icons generator",
        "labels": []
    },
    {
        "link": "https://oflutter.com/flutter-style-elevatedbutton-widget-with-buttonstyle/",
        "date": 1676532996,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuUlEQVQ4jXVTTUyUVxQ99wNGpkI6SKOLAaxTRJtKZCCxXUnUtXHlwsSdmy5IShqTJsbiBnTTdN2itGkJBLXtRmNEiTIEkCqQRilTYmEAa5EqhJ+ZjxnmvXu6+OajExrP6i3uufe+c84V/AchCREhgEA0eqKhruFQ1Y4dxRz59fHL30YfjgLIkBQRAQACQKFPBkARCbZe+fpc7Ucffrq/OhLZWfJOEBAkk8l0YmZ+ZmIy3i4iHQCSPscnIxgMVnR13exdWl7h27C0tMKe6788eLe4eN/WYJISCiHU3f3TQK5OrbXGGKPb+IaqtJbsufHzSGkp3iMpAICWlrZL68kUSVpjjKqqkuTg4COOjz/l7Oycrq6tq7VWSZq19SRbL3/V5otX3tcXmyZJVTXZrDf51u1e1tUf1Tt3+vTkqTPsjw0pSRpjDUnevx/7Oxw+WO6cPn32k+r9kTAAknQKCgr4+vUbfNP+A2sOHJBotFZcd5MCJye0J15NTWT38eONjYUVVe9Xl4VCRQByFlLS6Qwz6YxkswavFv9BUVGBiJCe1d7aZWUhp3Jv1QeFIiLGZCXXANZaVlaGnSNHoijftQt1hw8hmXLhm+95BhhjEQgErPPnTOK5624ovD+I76+7kWbKdaGqcByH8AJG5FZIpVKcisfnnOGBu+OJxPx0roHSKxCqCpVwHAdUI6QCgKgqAWAmMffX2Ni9EQBAc/OFS9Zz3RhjlaQmEnM6/+KlktRnE5O6urrm25tVJS9ebGtF3trBju86h/KClPXT42eCpCG994+dN0YAlGwFiaSUlOzZ/e3V72OZzBb3f9jcNLzW0TlYUVET3iJvQ2FT0xef9fcPPYn/8dxdeLWoCwuL/H1yaiM2MDx6/vyXnwMI5BPyu+Sfc1n9x8ci9XWH99FQ4vGp2eHhu9MAlref87+tgRkx7v210QAAAABJRU5ErkJggg==",
        "title": "Flutter: Style ElevatedButton Widget with ButtonStyle() - Oflutter.com",
        "labels": []
    },
    {
        "link": "https://www.nerdfonts.com/font-downloads",
        "date": 1676545148,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC30lEQVQ4jW2RXUhTYRjHn/c011KZU5JNGcudFLbUYbYN10VgwcKPTdBBgyES04uuFiFiF5UgRgq7kBFYQ8gbg2nEzNH0okBwmos29pGdM/cRBsqRxlHxY8Z8u3Hh1l54Ll6e///H/88DkOclk8mSgYGBF2VlZb/5fD5LkuSG2Wy2ezyemxhjdF6L8gEoipL19fW9AgBIpVIFDMMIU6kUt7Cw8Gh6etqkVqu9GS2Ra2ZZttTlct0NhUJ1S0tLtyiKkkml0sTw8PCToqKiQx6Pd3xezzn/SSQSFb29veNzc3P6k5OTggywvLx8Z3t7u0Imk/1QKBTBfKkBY4wGBwefEwSRBgCcGR6Pd2S1Wh9qtdoFh8NhyPX9SxAMBuvm5+d1p6enWbU4HM4flmVLPR6PZnd3VxCLxbwkSf7MogQCgfrOzs4Zs9ls53K5xwCQSZGWy+XfxWLxJofDOamuro74fL6G3OgFRqNxemZmppNhGJFWq104g2AASCuVyi8SiSRBkuTG4uLindwzEm63+7ZAIGANBoNzdHS0PxQK1c3Ozt5rbW118fn8/ebm5k8TExMPNBrNCkEQpwghnFUxHA5fUyqVXxFC6fX19ddNTU0enU73UaVSeWw2m0UoFG61tLS4I5EISVGUHAA+ZwEODg6KxWLxLwAAuVxOAwB9ttvBGD/b29srQQjhycnJ/WQyeTn3CoRIJNqKx+NVGONLXq/3+vklQihN0/QVjPHFzc3NKqFQuJMLgEgkcrWjo+O93++v1ev1zpGRkcerq6s31tbWVENDQ0+7urreBQKB+vb29g/RaFSS60cAAFar9VE8Hq+yWCzjTqdTHwwGFQAAjY2N/ra2NtfY2Fh/bW1t2GKx2PICGIYpttvtFp/P19Dd3f2mpqaGBgCgaVo2NTV1X61Wr/T09LysrKw8zAsAAMAYX1heXlY5HA5jLBYjCYLAUqk0ajKZ3qpUqm8IofR//QHgL5ZoQF61508iAAAAAElFTkSuQmCC",
        "title": "Nerd Fonts - Iconic font aggregator, glyphs/icons collection, & fonts patcher",
        "labels": []
    },
    {
        "link": "https://developers.oppomobile.com/wiki/doc/index#id=72",
        "date": 1676208610,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABQElEQVQ4jWNk6A5jIAUwkaSaLhpYkDnMjEymEso6IrKiXHz/GRhefft4+fWjsy/v/fv/H6GGwU2bgYGBnZm1wjxgsXeOLK/I+59fP/36LsDOFaxm3mwTnq7vwsjIeOrFXYg2RobuMEYGxp2hVUIcPAEbep58fotsp4u87oaAUm5W9rW3ToZs6oP6wVhC0VVer/LQcjTVDAwMex5eXnj1IAMDQ7CaubqQFFTDy68f//7/ZyiugOlFZkYmXRE5BgaGH39+v/vxBeqHT7++P//6odMuWpCD5877l+9/foUotZZWn+uR4SCr9f3Pr+QdM04+vwP1A8QwZQHxbEN3byUjQXbub39+inMJsDGz3Hj3dMvdc9Mu7Hr46TVEGSNm0mBnZhXi4GFgYHj348vPv7/xxQME/Pz7+/nX95jiEDAI0xIASKt2sRWKslIAAAAASUVORK5CYII=",
        "title": "OPPO Developer",
        "labels": []
    },
    {
        "link": "https://nordpass.com/username-generator/",
        "date": 1676208327,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACSklEQVQ4jZWTz4uNcRTGn+d83/fe7r3Dxk6SBWWlZMfGUMhSETFyRYqVhWhS80Ziw/6WMV2DMrOa1CzUmOtXFv4AFgqJrJDu3Hdm3vd7HosZxWjEZ3VO5/fpHOBXssx+Vbe0WumWViv9mw+XyNo+enO9WXIQFrYi+mpIBPkZxIsyzt9/cvTkq+USYOfd9iDNzlu1ulIxwj0CAiwYGBLEudkewOtThwaGAGghQZYZssz774wMp/XG8XI2F1wFgEBSAkCBgiLINKnXWcz07uvN2iMdPHYCQP9oe7DSV79SzPTmCSUiCUlmZiKBGF0kKZeIIm2sqJbd7tWpI8cGuf3eyEaTvSRZkztF0iS3kDDG8hPI0kJY6zE6gABJDOZwebRym1F2MqSVPrk7QBKCSGO1YnSdE/wMk8QABEoCSUWHpWnFPDllFHZ5LEXSsDBvAfJbMTPzfOrB5Pj04eZkmecd0r6IKCiJpHlZSNJuo7RB0SFAoZJS5AuPcR8sjGF8PAIATNcU/QKAh1armSRfbGaNgUgJiQDk0RXjUGeg2RHiE2RZAgDfu8WjkJSTweySinKOZqAgQOCOu+0PcF8dajUre/nw9NHmCYztDziwWH0J/bdv3UgbfWfLvFcCyA3Qs7TRQJyf+9iNuAiAODDuf0QuNMkizF6Oef42rddN5FNzVxtmJunSy2bzM7KMP6/sN0ghy/js8OmvkT7IEAyudli1Z+/7EIseSrbeTUxEdDp/Bv9k0bZu0+bXZa2ar8iL0WV9/48lL/pPLOwEPwDUzDrrJYNm7gAAAABJRU5ErkJggg==",
        "title": "Username Generator: Millions of Random Ideas | NordPass",
        "labels": []
    },
    {
        "link": "https://c.realme.com/in/post-details/1181577150981996544",
        "date": 1676207617,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVQ4jd2RvwqBcRhGz/vzkSKKCH0lRZTBYnAVIrdgMLgDNyKb0WayWRU3wGARpRjJ5+/3GuwWGTgXcDpPD/w8otOYfiIwnxZ8XzCbv18o90lMOz2XSlFY7xSvB+y4sNkrRweuNzidwWMgGYVMSlisXtJ2w2AUyNlwuig+C44OLDdKq2YI+uH+gHJBSEahVTf0Ry7nC6jCwQFLBPJpoZQVBmOXdELIpKA7dAkHXzV2HCIhAaBZNay2imVBKPAXN/4BTzyePFQjOGrYAAAAAElFTkSuQmCC",
        "title": "Theme Creator - realme Community",
        "labels": []
    },
    {
        "link": "https://www.toptal.com/developers/javascript-minifier",
        "date": 1676137071,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABgklEQVQ4jZVSXShDYRh+32/nnM22tE1OWBPyE+UvU0ohtRvyk9RcK1ohd8oVd9rtSikXXOFGKVe7cuMSmyvGFaP8pISz2PZ9rxud7Rxb8d29X+/zPs/T82DNaAz+81jBX0Qg+huAMQgGymbHVUXGghgpfyACm8IGukoHu0sVhW3sP6YzhGgAWFxNoXwl6QydX6c6Gh1jfW5BEEtonEM+xixJECECAsgSzk2qoQlVlgzaDAxcUG2VNbxQ3dZg34m+KDIO9boJIJbQhPjFIAjqvLbwfHVnkz2y97C2fR9LpBQZ2xvsJVamkzDdrstpWZnx9rQ6d6MvW4fP0yNqMOA5jr+vbt69fnDdxo8kRBAElWWKv9khSazeZ5seLT+50JbXkzcPXxaWc53zwDnEr1KZLAz3uvwtzrNLbSmSvH00bBtyQIRMljYPnhBhcaoCEACBmVL4nQMXEL9KZTmN93t8qnJ0+mbKTjId0HmynN40/pkWJg4s2FYCYAAF61ekrUW2AeAbfoeRaUVw4WIAAAAASUVORK5CYII=",
        "title": "JavaScript Minifier & Compressor | Toptal®",
        "labels": []
    },
    {
        "link": "https://www.imgonline.com.ua/eng/compress-image.php",
        "date": 1675062895,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB20lEQVQ4jZWSTUjUURTFf/e9N9NE4xg2zmY2UgQFBUIghLSwTUX0oWELK4JoU7QphFzUasKEFNvUokBbtKhRWwhFEAUFUbQIKgOlcCElRjqEYzbNf/7vtvCjmWgzZ3e43HMv5xzpeHOJMpQGT1GJnrlCOTVUCeltzKrx4v9uehuKig1liaqoU0HEghrvIoGArRAJ3H+1QwBb9UuupIqHUM5PHBm+8qj98v6lwZfxmaGOF26dnBjZsz6VAF4Nv/1wZ8qJQT0+VBFRAzBw+kE4Zw/0Nx+81RSLx2YmZ283PU61R05ea43Go049eFAFCBVYHKOYCwrzhUQyUd9Qd3PniOTM595SV+/9dLN1fgEtgZHVL8+9bgPyucXR/ifHMocK37Vml+182Ap8/fTN7cikCz+DdxdmV3zg+vaR/BjRNRJv9GRIHXUTV4O+TUMtN7bWNyRdbSrRsnfbvjMA888DYG3aBvmijZpCPnw6+PJ492G6l4+/fzYuPXXZzRdrapPxjwPTxWk2nk1M3V0o5VWs+iIa6obGWENb8lf+9+S9XCRupG9L1nkDqPGhAXAiYsCAp+QxoRIKICJE1DkrWAUEWU142bqlClhZaYICoj8qkxz9N9r5rt3ltOpq/AEgL7WAjX8T6QAAAABJRU5ErkJggg==",
        "title": "Compress JPEG file - IMG online",
        "labels": []
    },
    {
        "link": "https://leetcode.com/playground/new/empty",
        "date": 1673639122,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChUlEQVQ4jY1TTUhUYRQ993s/87735qU2oz4nzCGHoJEkMAhqZQuTFmaRtGhRi0JCbNGibUIE0SZq1YD0oylqoCZGrdJFBKUQFC4qqFBL+6HUmdH5e++2UCcxje7y3HvOvedeLrB5CAAoKSkpNU3zmW37b21atAnuWZZVupiIDxJnDwCeXMnRP5r+EbUsq1SaxrhPU1nAFwOgNTVB+X+yNMYUIfhCve1xd/g6t1dtBQBu23TqPNmRUh+Tusbn6+w57tyW5OFyznSWv+auXRUAwGtsrKrRimfHdbNDrst7/VIduHEmuA/Ctyfzgzq0AuzOuYlHqZ5IJQG8VoTynQ19TNc1llL2hsNhA2ACmEZGWM10Rdp5ZAcnOyov9/X1KRyr0dYKkGnKYV3X2LJkTyQS8W3kkW+rh7gB9lqMACAYLKhJxFPjJOhFIBCsnZ6eXurvvxew9EBjjtlgdhkCSMFZ0L05Q6GsRcxvDjc0PFUBgHO0ncGeoqojU1NTKSKiLZZTX1bmtCcXF6EIARBDVwiZbAEMaeLLzMxkLBaLqAAgNHyiFISXy9VVVVVdAZBYmJ194nrZ026OdcADC+I4h+Yl5kwd3y0W6kRzc3M2vwPbbw7ousa27X9YXV1tbbwD5QifQ9F6nADAcZxivymf65rGtm0ORaNR/+oV3t9s9WXuV3TwaCUv3V2+wkRbVM+TV8NxnOJEYn4wnc7tLzSVx2+vFl+0LMMlpC5pRTjBv/gVKdpROvlxkpfJTOsm4VAoFIzP/+yt3SkOdrcWsqEJT7FJyS3gpcryGJ1695kBIoAB/PUcIh6PJ1sanQfXjpvpokLV8kBfkRZ3EnG0yLMfvnEbBI0ukwHgN/Oi9YghGvOOAAAAAElFTkSuQmCC",
        "title": "Untitled - LeetCode Playground",
        "labels": []
    },
    {
        "link": "https://developer.chrome.com/docs/extensions/mv3/getstarted/",
        "date": 1671123976,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADO0lEQVQ4jV3TS2hdVRjF8bW+vc859yZp3gnmIQaTNDElFtImKjalRUQjSnDgoyAEwUIHgiNFg48ohSCCFLUDHdgO7CBxUClOi49iNQ0ZWCwkbaw2ShKax22Sm5t7zzl7fw5KBP3P1+jHIv7XQv/efsvg5YyVhxJFMw0RGbOYQKeA5Ez9D9emFSAAEFDuDieBcLD/gQ8UfFUMyxMFYMSLEAJI1hqosBAIP5nNzbx7cAYJAHIMkNohBM/e7pqosGZ4PXWeQeBojNFCkYDQZso8oU7gTWMmlKLT85d+zB27gvmEALDS2f6h1EZvrMVpyURhqPltcLuEPa2tkBBayC9SslnYoEIdfNIURdGOdePl38yMEldHDkx8NPfT4akVs1WfEV1eY3Xvg1r51nu4Ub2PEGhP2W8wC2OI16fAwACaqDEoOdketO3zO8c/HWqK+q5tpbqSY3XvPo1PX8Dzk05+vrGlAvBAWx++GLmgLdHTTHOXIUacZF0Z4uAVaYyTwZtloueO1LPqrw1k3z7JExOe3/26omUVirI9wMXZ2zh+lkzbxlVdBPUZo7FVBMHDsuN8U10+xVfdIVeHe/Rv24mr85usacpqnCp3Es/mxqxeWbjDuVwnw8r76VXpVRTe3iPeKwLnkQ8MPz/aghCKVADoXV6C8Ar4XW8CoAHEADQqECzGVDT4QM/5JW7W/IFH7qvU9dUSbSBqQ+rqapGH2mq0q/o64vwtFRuqiCUDsyypSy+pkPDOZzXC6zOf4dQLXp/sqmUmT2Q3gKGuOp4+poqFURVjoaBnYKkpf2HHl0/0BTSXXepsCMPFQg59zR0YO3iCmVI3AgBLdk6zt97Ho8E0IFWgjxURSuLiQwSA7jNPjUskb8Z3iqVATLhe2kLJ5bW95l6o9yxu/KkX92+yMVsOn8SxrZfIb6fjZmBhlBiDAD12b0vrJDN2ON0sqlXjUqU4V+BSifp1d6zPNGyYkvMa1Qm1kJznzd9fxHNI/j0TjsB2vPT4SZ/610BmTOqwVgIeq0p1cn+OsIQmrqiBPyW52Xd4FOkuyn9q/XhwwER2JCAObxbR/G1vHv0N8bJL9Xvvi2fDgevTuKtMAvoPS1eAiSEF3fUAAAAASUVORK5CYII=",
        "title": "Chrome Extensions getting started guides - Chrome Developers",
        "labels": []
    },
    {
        "link": "https://www.mdpi.com/2073-8994/12/5/715",
        "date": 1673025332,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABZ0lEQVQ4jWP8//8/AymABY/c8xdvtmw78vTZa3ExIW9PazlZCQYGBkZcNty997S+aeb3Hz/Z2Vl//vzNyspSU5Gko63MhMv4+Ys2/fr9u6o8cemC5paGDGYmptnzNvz//x+7hr9//924+VBfT83YUIORkVFTQ9HCXOfJ01efv3zDpeHv////OTjY4CIcHOwMDAx//vxlYWBg+P////kLN589f/0foeEfAwPDixdvHz9+KSsrzsDAICcrIS4uxM3Fwfj////Fy7Zv2HQAq1XMzEx11Sk6WspwESYGBoYdu44j+EyM4uJCyJ7Zs/cUshFMDAwMP3/+gvM93KymTigTExOEi/z69RtdAzLg4uJgZGTk5GDH6kIsGggCFgYGBkZGRHxfuHhLVkb8xct3CCWMjOg2qCrLwPl37j7un7QM2VcqSjLIGhj/////6tW7eQs3P332Ci1VMTMxGRqox0R6srAwo2ggyQ8AIRSMVXkxGGkAAAAASUVORK5CYII=",
        "title": "Symmetry | Free Full-Text | Improving the Accuracy of Tesseract 4.0 OCR Engine Using Convolution-Based Preprocessing",
        "labels": []
    },
    {
        "link": "http://www.fmwconcepts.com/imagemagick/textcleaner/index.php",
        "date": 1673024903,
        "icon": null,
        "title": "Fred's ImageMagick Scripts: TEXTCLEANER",
        "labels": []
    },
    {
        "link": "https://www.syncfusion.com/blogs/post/top-10-angular-component-libraries-for-2022.aspx",
        "date": 1672404926,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVQ4jWNmIBEcL5dYKS3Iwnvw1o8LpOplmB4tXP19ity/71Pk/k2PFq5mYGBgYFE3KrwFV/H//8ff7w40sAo79sOEvny4v/vpvQ3ZdT4CiQmW3M0wcRibhYWFWwWun4Hhzeuf7GKSSGIMDAy7GRgYGCT5maWQXfOfgeFn7z627UzEOj9z6dvW9h2fkv8zMPxkYGBg6NjxKevO8+fnWIg1gIGBgaFpy4f5Sy4rvCq1eWzQtOXDfAYGBgZGJXkDb2RFX9/eOc0trGIK4zP9evn88+fPT5DVvPzy5RWMzcIp7rMZyV9vPvzcXc4p7joXJvbhzZXpG+JOiOjLsvnBxHS6VULuPbywlYGBgYFoLzAyMLBjEyc6EHEBig0gKhAZGBgY/rGJSyKrgQUkUYHIwMDAICCik4mwZosvwxdIIA58GLD8Z2B4A+P8/fP1AwMDxCvoCrGJMTAwMAAAgIyJs1qPHBIAAAAASUVORK5CYII=",
        "title": "Top 10 Angular Component Libraries for 2022 | Syncfusion Blogs",
        "labels": []
    },
    {
        "link": "https://getbootstrap.com/2.0.1/less.html",
        "date": 1672403235,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4jZWTT2sTURTFfy++NNaUGIOhQ0q0G6EWtQsxy4zVtVD6AVKkH8BFEV25cCPiwgru6kb3Luqqq+KAK93EPxALoqWlcSLSNoSqM+9NnosZM5mkFLxwB9579xzOvfeMcLY61Tuvtx+9cw8qIEBwdJjwc8XKvn14tXxblJ7Wv7d+KWsILAaYjBkiGT+RdmWr40VgMwA0HBr/iAy0Op4lUToGCcHCpSILM8UEZrPtsbqxx+rG7gCJQRod9KkVnM0KqmdyCYIqULtY5Przjzjf2j11xkAKX2N8Db4GpSEIALi/1kDeesnpu6/4sNMGwJ7IhjV9GImvouFFMoIuAJOFMezzk+SPS06OpgFwGi54Kp6RAYlS0THaQkRQq5SpVcq9Nt5v71Hf2seoeAsAKTwFfpSe6rXw4s0Xrj1YY/7JOs5nl5nyKR7PX2CwXoaS+jygQwWbPw5wGvsA5DMj2FMW9rlC3EKkQhpfJUxjohbsqXHuzR0jn00zd3kCgPrXnxhfERcbJL6OLwTQDVuwpy3saav35Hza4ebyOiiZ8JgQN56ZxBb0nzAHIyUhnU061YA0WpP4CYQEOTZMAOGAEw43yFJupNnc/V06HHF0lAqjzdTK0uyilcu4BF3+J61cxl1Zml38CyKE6ChdR6Q4AAAAAElFTkSuQmCC",
        "title": "Bootstrap, from Twitter",
        "labels": []
    },
    {
        "link": "https://www.youtube.com/watch?v=LiLlsGUW4AQ",
        "date": 1668966418,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVQ4jZ2TQWtTQRDHfzO7yUsNKSG0heJJ0YKnCvVSkHrV7+BBeu7Vk9+lH8CLN6EXk4Lo1V48lGClFBELGmmSmr73djy8fS8vll4c+LO7s7OzM///LhQmBmrg+uDtZrgIBQQAKyf/YQbiBexFt9t9niSP7ji3umrW7og0UfWL0ZaOzGYjmBxn2c/BdPpJxuNz+vDwFxxnqmaqZs4V8L5AuS6haqmqXcDpO3jCEN4YmEFmkMcxrSCSGqSh8GcGIY52Am91Ce5HJ5EYBRwbG45222HmUHVS+DX2DhASuKu3oAeolGSqCiDs7gqHh8L2thCCxOQSbxFAO9BToClzNQSJokwmsLUFgwHs78P6eklnlQho6c0axUKbTVhZgUYjHpeqCwE8kMWFxYNF9uVlGA5hbw8ODuqJzajqnPENPtfYDxU2N4OtrRVzkVDfC0V8/h2G/g98AR7ESkJF8tFRcYdzkOf15iRW6y/hlD48voCz+BbmELFrvhrG8OMjPBOAV3D7qXM791R73Var00qSJRoNTyifB5Dn+eVsNv19dTX+mmWj93n+4SWciM1LKkmqy7RoImFBqPqPfH39K7t/4A18f74nAH8Bjm35s3ZkOjEAAAAASUVORK5CYII=",
        "title": "Build A Language Translator App in HTML CSS & JavaScript | Translator App in JavaScript - YouTube",
        "labels": []
    },
    {
        "link": "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_google_translate",
        "date": 1668966396,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbUlEQVQ4jcWSPyhFYRjGf+85h5QykEUxYbAQiwxkEzFJyqpzTnEHGZSuRbKwUFf3flcsKCkDmf0ZTEwGuRsDsijCde895zPc43K5FgPv+D7f73mfnj7475FfUXGnG1+qMeXR+pWBxz3Qg+enLJS7B7otCLSFHbUBUO426M4cpHUER4WzBuYZRX4/2nCEZacdXw5z3niNiFWO1kdf7j7zmqojtHINwGKokpLUvsnO6SV9La0gtYABUgW6F6Tm/TbZroqwjFJ2T/dQ7iqW3wXiZUuM2c2InIB8KVWngDGQSLBIY6QbKHu44qGiHs+/+ACUuwkM5PM6ghMbRbkHQEeQZwMnOvT+xPhU7RSazCf6iYw5E2iTubUwSNRp/G5gxxMIqx+8LDCydBtox2i9m2PEaCqQAJDMNPCC5p7i5Fye5nlhwAed4OZ8nR8n5s6jnImCmnLXUG5eT99/opmexTOTBQ0kM87w8h32z/f/ft4AMdl8cgoInWYAAAAASUVORK5CYII=",
        "title": "W3Schools Tryit Editor",
        "labels": []
    },
    {
        "link": "https://www.google.com/inputtools/",
        "date": 1668964131,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4jYWSS0iUURTHf/fe8RvHooE2VlT2FNqUGWmNEYUR9lhEEVJhUIsoXOQuap1Rq6KHNQt3LaPAIOxhlNTChUwLMU3NR1CklUzg6xvPd1ro2KhTHjjcA/e8/uf/hzmmqsUiEheRLhHxp/2TiDxQ1aK5+ZmFeSJSrwuYiMRVNZKuMxnFz51zu9T3GX/6iPGmRqS/F5WAUMEawuUVRI5UYjwPEWl2zlUYY8YMgIjUW2vPBkPfSV6uYbKvJ+uW3rZSojfuABAEQdw5d96oajHQqr7P8IUqpL8X43lEjp3EK4mBtfgt75l4+4po7U3cytWZPbcyjUlTidv642ipDu7foX7bh2zgs92jDhHpUlWdbNmuEw15OvqweqE7ZjboCAEFADrSjs1LkRM7NAt3+bWRebfYudFx9XguwFqbwePs9z/mT/6NLdAHMBpex28W0/C1Y1Zy05VFM75nUwiAZVGT/v5sgdcA3UurOPUrxvXOFhJD7fOmdn4LeNc5NbpkfWimv5mWZ8KXFKdfXqInOYBnc6gsPEjZ8mKssbQOtvEkMczYl0oK8z3un4lgppbYkhZS3Fp7bnD0Jxeba+lODmTFviFcxq29NeRHDUEQ1DnnqtNSjohIo3Nutx+keNz9gmf9zfQkB0ChYMkK9q2KcaLwMJFQGFV9Y4w5YIwZzyBBI2lRLcD9PVXN/SdFqlokInUi0iEiE9P+UUTuqurmufl/AKTzsFGmvUNUAAAAAElFTkSuQmCC",
        "title": "Google Input Tools",
        "labels": []
    },
    {
        "link": "https://codemyui.com/input-field-label-wave-animation-on-click/",
        "date": 1639375348,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "Input Field Label Wave Animation on Click – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/zoom-in-circle-effect-for-radio-button/",
        "date": 1639375397,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "Zoom In Circle Effect for Radio Button – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/email-validation-microinteraction/",
        "date": 1639375401,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "eMail validation microinteraction – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/password-strength-indicator-signup-forms/",
        "date": 1639375405,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "Password Strength Indicator for Signup Forms – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/smooth-gooey-radio-slider-button/",
        "date": 1639375408,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "Smooth Gooey Radio Slider Button – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/strike-off-todo-list-animation/",
        "date": 1639375410,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABwklEQVQ4jU2SS24UQRAF38vMqp6P5bHYIXFcjsZF2GJhMcYz011dmY+FN8QJQorg9x8/Uwo3Ai1ac5dEEv+hkiAJZoyCSlUigVLBQmOOsXtv7g7AzOgEIAlAhJnTBJUkieCY88/12pZ+eX6OiNe33+FxOhxab6TFoS8FKSsrSUKKiOP5VFmfPmOMj/3+/vdvtFj6EpDCjM2FJpUgIw7LAndzFwDASDPLmbf9ZgBm1sxEieKcJbD1bjQBBI6Ho0eUVCUAIfDUacB9iuSp877DoXAZUcLL5fLl5RmZjzFujy2a87LYx9C3JwO0hM3S611fTyS5Ft/WOhDn87Ll8utwjhTWRHdtUyLXLEJr6nUzVD0tNrNGADM/NpUQyLyuRZqAQlGS4OR1FaB75kysE4IImDG296vRZGZm1ru8kyXSjSQyZQb/7A1JCAsTiMoaQ5n35jnLrFoqDGykiYS7uzug0EgAIAHQCBDk5wXbPRHcdRv7Rjc3X1oLmksFSSkFqqpKgABaEO615/F0PB3P21jXbYt2uQiFKpRELMWksjhHsQAUgcdjlTDGmlkhQCA9vJuEs6RuJACrlFRZL2MfmdnbMq3+AQqMQ2czPtoHAAAAAElFTkSuQmCC",
        "title": "Strike Off ToDo List Animation – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/input-highlight-seen-tripadvisor/",
        "date": 1639375413,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "Input Highlight as seen on Tripadvisor – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/single-field-account-registration-form/",
        "date": 1639375416,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "Single Field Account Registration Form – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/custom-input-field-accept-numbers/",
        "date": 1639375420,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "Custom Input Field To Accept Numbers – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/tag/input-field/page/6/",
        "date": 1639375431,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
        "title": "101 Input Field Design Inspiration - HTML & CSS Snippets Ξ Page 6 Of 12 Ξ ℂ𝕠𝕕𝕖𝕄𝕪𝕌𝕀",
        "labels": []
    },
    {
        "link": "https://www.cronj.com/blog/export-htmlcss-pdf-using-javascript/",
        "date": 1639385534,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADA0lEQVQ4jX1TTUxUZxQ993vz5v8NMwNVTIBpEFy4cGGrCa2GVNtYJXZhSgIa/IsBgwvsoqtGHUjcVGOMmmibxsZU24TExqYVhOICfxYaB0UMUcZWHUdQB5jOG2eAee9918XA2EDiXd7cc+65594LzI9wWCAcFgDAgDfZ2HKQ19QFwEyo71QW1C8Az8WdUffp9pMb9KZWHtzz7dpCnpneCw5dGVz5Yd/QucX9D+Prfr829Wp7q7n5t79fFt+IXqjqHqiZT2IrJIhkee+9veR0HFWcbo9iUwA9BQaBi/yL7R7vVmka9aGeyHfPiI7MYtiGcFiASJb3DTYoTvdpAJDJcX1Gyj/Ln/0Tc+aMtmAs1mO6PDVQ1VJhd3xf0RNJxYh+BDMRAGh9t4qDcD0Qbm+p1FNxR/JVx2Sg4q/EsQNFqZKSSFHkZg0d/3mmUnVcll6tkjNvUsbryRWjjbXPBQAEyLVFaL5Snp7KcVo/NbJmw/nxL5ePjRR9kAaBn9Z85sbGVY/EVGYPsllDaD6/zefZVvCAQKvJ4WSeHH+R9ga7ef/uFXpT6yeWIUsI5AmkcyaYKUrUH/q1ez25NR/rmdg7E0F+MCDAiWTl0glToR020Dcs8EYyD0uRy4KI28NhEdu68cb/l0cAELp6/6woXrRTJl6OWDmzPl738dAPzc1qczIphwFleWenQQBAxGW9A7WK3Rk0spmno5tW3c0rkHIAuZldpKghEuZaRKMjLdXVMy35JhbyXqOi5/5HZFd6FZ/fLvXUYQB3BQBkLPOi1FOT5HI5hGpvCz3W66q6or45lcGuqK/syr3VpNIZcrhUayIxbSVe/5IfYfYgKrojLYo/cIZNA2zkXoC5iyGGBVvMEMsg6CtS7WWk2mHF/z0U+3pdR+EOCiRdtw8Kj9ZObi9gmZDZrATAwuVSYLOBp6chE2MnYltq2+Yw7x5jjuTS9c8Vj7Zfgj5lIo3yKtOwrDvyv4mTzxu++GPBFuaTAMCSny6GVI9WBRZCJseexPc1PZ5fAwBvASQYXl4kRq9fAAAAAElFTkSuQmCC",
        "title": "How to Export, Generate, Convert HTML CSS To PDF Using Javascript",
        "labels": []
    },
    {
        "link": "https://www.codexworld.com/convert-html-to-pdf-using-javascript-jspdf/",
        "date": 1639385544,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABl0lEQVQ4jd2Ru0tbcRTHP/fmoWCMxDxs6x3aQZCikyEQJLamix1SUh/Q597tzlns1tJBEAQRBBeHXMjgFCyFINUutbQIdghNQR2kxSTk2UeSm/xccuVK8g/ogcMPzvd3vt/vOQeuVzQeeISR1Wn3G0VTBfexKpoq8Hj6jX+KplZ9b5/OAchGsRb2HprJSrqwAdx89CIo9NbPW8tP1kxw31ksngSwGhVZEmOTX4ozZaEfAfy3cFY7yuZ67nh3y5t7M86XoffA8xuxh15D0+xAAtgv66l0hUy6Qua4SCm79GEVoJz8tmPoWMZH9pv5P1uAMDuQBdQB/dJScrm/AIwO9wM4F4J+SZZu/1rZ9l84b79CAnuXvTZFo/ldeT33A8A5G0gBkD4tdBAA/At74hGfPRrx2aOPhxw+gOL6x2dI0mArX00g4UBv/QZaHVK7E65X5jNm77nftSGboqmCAVyKpgrHQuiuue/iClNfCxufAy53L8IKkG+IT22oUT8tLFKiVD84ma8m9jJdRr1EaGunpYuQpaPj6sc5MWWTMOnqkX4AAAAASUVORK5CYII=",
        "title": "Convert HTML to PDF using JavaScript - CodexWorld",
        "labels": []
    },
    {
        "link": "https://medium.com/technofunnel/javascript-function-chaining-8b2fbef76f7f",
        "date": 1639403994,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTsaoiQRBFT3e/mUFBmET8BH/ABQN/wFARFBTBSJjAVDQQzIwe7IcYjGBgZiCYGhr4ASZmBsLYrzZQm9G3y8puQdNwq2717erbAJ9AAljgC5C/rK977RX4VHeQ+654L1ytTnVWxphHM4wxTwxjzAN7kAUQdZek+DcFolMk1e/3ieOY5XLJcDgkm806RrPZZDAYAOD7vrrnFEopCYJA5vO5vMZ2u5VMJiOlUslhrVZLOp2OjMdjAeRDRGg0GtTrdZIkQamboOv1SrlcJooi8vk8IoK1lna7zfF4JAxDAD4AqtUq1lo3LKUUSimstdRqNc7ns8sVi8WnIWsAz/PcyelQSmGMQWv9hIm4x7o1WK1WaK2dTGstSZKgtWaxWLDb7VzucDhwOp24XC6uo/i+L3Ecfxvifr+XMAylUqk4rNvtSq/Xk8lk8vDPzRBBEMhoNJL1ei2bzUZms5kUCgVn4SiKZDqdiud5EgSB5HK594z0euffGckBr1ZOk/9gZf7XyhggBH6kVb9BFm5f+ucvMhDxQnv5W1IAAAAASUVORK5CYII=",
        "title": "JavaScript Function Chaining. Function chaining under the hood | by Mayank Gupta | TechnoFunnel | Medium",
        "labels": []
    },
    {
        "link": "https://codepen.io/aktorou/pen/MymKoB",
        "date": 1639484473,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
        "title": "jQuery UI Date Picker",
        "labels": []
    },
    {
        "link": "https://codepen.io/ankithingarajiya/pen/jjOxMo",
        "date": 1639484478,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
        "title": "air-datepicker",
        "labels": []
    },
    {
        "link": "https://demo.mobiscroll.com/datetime",
        "date": 1639486709,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQ0lEQVQ4jcWTvy4EURjFf9/MiLW7hYZiIwoFkSh4ANFJxBsovILCa4jeC2xBKRodD6AjJEQhEcmKDYrZrN05CmdkbLuFL7nJvec7379z74UxLSQFkPwCEUMASWmFp4goRrlAMW4DhKQlYBMYAhlwCjwBu0AdSIH7iDiTtAhsAX3j50g60V9blzQ7gl15rO0RvJ0Aq64+AHLgA3gFDt1lDzjw/sXngWNWMmC6IkwO9CKiAPYlNYCbiGjb/wl8AZM+t5DUl1R4dSXNeYRmKZSkBUkhaV7SW4XfTyyGSlFdZQM4ltSUtAMcRYTMK7kC0sxt1w2mvoncal8Cy8C1/Zk5ZbE8A7pArZKgZpG+gDV+Hsu7/VNOUj6gTgI8ODA1YcbBEyYlFZFbQKPCv8uAPc9cBnWAZ+Ol4rdO8FjBM+CCce3/P9M35UHMzS4ImkgAAAAASUVORK5CYII=",
        "title": "Date time scroller demos for web and mobile | Mobiscroll",
        "labels": []
    },
    {
        "link": "https://pdfmake.github.io/docs/0.1/",
        "date": 1639487349,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADQ0lEQVQ4jW1T32tbdRQ/53vvzb29uVmypGlCSy9XM6gdqe7JweiCUm3hztbB7IOD/QMTNynYh+JD9UUCA1Em9kVdERtN14eJjHahLGuFTgpLWy6GsJBEEDSjqR3GNLfJ93t8MP54yOfpfOBzPhw+nA9AFxCRure3dzIQCASmpqZ8RBQgIrWbFv8/E5G8s7Pz0urq6juyJD2fz+ehWCxq8ZERRMRt27Z/tG37BiLWiQgRkWQAgOnpaSmdTnvX19cXF2/duthoNOC1Cxdmy5UKGoaRzD16BJZlvew4TqxcKp0joklEdAEAGBGxdDrNMpnM0nd37lzM5/NHsizzUDj8tFqtHjLGhKIoFIlGS2NjY19tb2+/mkwmvyWiAAAwhohiY2Pj/NbW1it9kch9v9+vcM6lVqslezweWQjBAABc1/UQUfCgVuM7udzra2tr14gIGBEZu7u7HxcKhQ9qtdqipmmyEOK/YBCBiJAxRsQ593q9UrFY5D9sbl4FgJMMADwHBwdxIjqUZdkAAEJEEEIAdIwQEQAAGQBwIUBVVeY4jppKpZBls9lGpVzmfr9f5pyLDjhjDP65QwjRIiLqcGq3239qmnbCMs23mWVZ0OYcyuUyIiLXdV3yer3SvyZCgGEYCgAwRGSIiLquGx1OzLIswxwclBzHcVVVDcVOnbo/NDSUdV3X32g0IBgMwqBpfiRJUuPIdducc/FsLPZhuK/vl09u3vyMAYAbDIWccDh8Ih6Pc5/Pt37UbH6vqqq/Xq9Df38/zM3Nzek9PdLDzc1vXjx79qeZmZm7z1iWsrS0dMQQ8Y/h4eG33rh0KTkwMLCfSCTSRBRjjB17JElUnzxpr6ysREKhkPbcyMj+7Ozslcy9e19Go9GvAaDO5ufnmW3bD4dPn75bKBQ+TyQSPYqiHDIArmmaEu7tlWVZbqqq2p6cnNxfWFi4gYz99ubly+8h4t9d6Lyytry8fPvnSuV8tVr9ddA0b4+OjmY1j8cuPH786caDBxnTNJuSJP1+7fr1c4goupYplUqNVUqld3t0fah1fPzUdd2G1+frbbda+gtnznwxPj7+PiI2O7vUraFARJ5cLhcAgBAARCYmJoJEFO6m/QuSQIJbxTNWogAAAABJRU5ErkJggg==",
        "title": "pdfmake",
        "labels": []
    },
    {
        "link": "https://openbase.com/categories/js/best-javascript-pdf-generator-libraries",
        "date": 1639487448,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1klEQVQ4jY1TSUiVYRQ99/v/Z6m9bLAgiazoJc1lpU00DzZg4ysskwhJoixo0aIJCVq0aNM8EAURgUFCJBQVQWQhFFmSVtRL4WFo/vY/f9/UN9wW0mBEdDZ3cc85XDjnAgCCwaCFigqB/0QwGLSAbj79saPtu/cPsQ1ynA53QiwRy2WmLn96em1GRr8G0Zc/XDx+PNJDACBtQ9Guzf4BA2ZahDE+nxVI8dmZtm3DGANmgAhQSimldFhr08iWeOO0tN27VXnugb3+wIFRXsi54GcSkg1kXCKekCwEGUtYTMTQ2pAxbDMwHCSGQ5nlnqWXVfKbadaZx4+HeloG39c89/XunWqklNDakFSapJQi+U0JqTRJpSCVYi2VdKIeL9pV0pQ/LPe66A98XLpxTXvf0dlW19cIGQYppaCVJqU0/ZhKaRAJam9tE4Els62ps/PcSURRMYXITSHqKCgtIqfLBTETM8gwwzCDmWGMgTGaXKeDoz7mlZvWwIb1DgAEABit3+blBDBy7nTTHPrI8UQcnteJzs4IHKcdn1vCaPoUQn19Hc0r2UBZaamUTCbfAoDdnQV9YGazekcJHb77kFtf1cHqlUJGKRitYQiIuREet3guCtauEhFj2Laspp8XQIjmJJHIyhxoF5aXkhv5imQsyolEHFJJ1t+SnOJPp6L9ezhVCChBDNsO/zRoCYVrPzsdrg2gYF2hHr9gDmKeR8IiJkHU1enRguKNZvLEcQKAcFq/PGsPh0M9Klh+8tKMq43vXtcx8/mX9XJQ9kQ9ZMRkHpQ11gTyFqk7bkQ/ZeaztS+q5m8pHdqzwMwEAP6s0ZknHj25VsPM246dYH+/bJWRGZBHb9/l+xFPHqyqPvSX+nej4rdnOlJVvfdyw/toTv4SXlhcxtebws1lp6+sAIAKZgHw300AUDcB2Hfj5qz81VsaFm7d+bD01KURv8T/gd+IgwH0+Zf4O+mFihnO1DevAAAAAElFTkSuQmCC",
        "title": "10 Best JavaScript PDF Generator Libraries in 2021 | Openbase",
        "labels": []
    },
    {
        "link": "https://andrewwoods.net/blog/2018/name-validation-regex/",
        "date": 1640010324,
        "icon": null,
        "title": "Name Validation Regex for People's Names | NYC PHP Developer | Andrew Woods",
        "labels": []
    },
    {
        "link": "https://www.toptal.com/designers/htmlarrows/symbols/black-star/",
        "date": 1641041636,
        "icon": null,
        "title": "Black Star HTML Symbol, Character and Entity Codes",
        "labels": []
    },
    {
        "link": "https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/",
        "date": 1650881242,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB8UlEQVQ4jd2RO2gUYRSFv/+fmTyMRrQRi4AEBU3AKCqIsYmvKBZCHpgELawEUSuJooV2YmMhFgqKKQIqEhTRiASxSaoUgo9FMYYomCjZQLK72d3ZnfmPxbqSRlhbT3Ob8517OddkWnpjDBZJGGOoRGWvcBaDFVAx/NtbYrAWSaacWqmWMPbP5n+8oDxtxdBf9B8E+AB4S3JiV3qzZ6Hcq0DOYQCshXLdTviKYphPgxNYAyvqMIGPMlnIF0rGwMfULwMnNJ+CKC6F19bgm5XLCU52Ypsbid9NEA0O4+YW8Hdvwe/ai6mpJnoxRvRsFGqrCE4cwWttQT/nKN5/CfHUtFwqo/DRiFx6UdGnKS0evSCXD1UYHlNh6JUkKXf5lvLXB+UWcwrvPFaUmJSTZFwxUq6rn+j1OP6eHQRnetBMkqB7H9n9p4jffCQ4fhicqDrbg5LzZDvOYVfVExw7hIkSX5TrvQS+B2ERzSSxm9ZRc+8K3voG3PQs0fNRCjce4B/YSfXV0+BZ3NvPFB+OYKKv08p19KN8iKkO8Joacd9+QDHCNjfibWsi6GvHfZ8l130e07AGb/MGvLbt+Ad3gYudchdvKrW2XflrA4ozWYUDTxW9n1B6a58W6loV3h5SPJNUcfyDwrtPlFrdpvTGTkWJSf0CLbgAh451MVIAAAAASUVORK5CYII=",
        "title": "More Transparent UI Code with Namespaces – CSS Wizardry – Web Performance Optimisation",
        "labels": []
    },
    {
        "link": "https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/",
        "date": 1650883391,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyklEQVQ4jW2RT4hbZRTFz7nfe3mZJDMTujN9CTFWUATrpiuZhVjQpVArXXRRRBezcFUrtUhVEIv4D3EjutKiSDeCgoobt6ILRTdVZ8Y0iQmlJSNO4kve9757XUwyjODZn9+551xup+llEbnDVHOSsQFjOvdKu9udEzDsi3+024mF8AKBI2bmKZKYWS+iyHUHvFxyDgWAFRJjVUfg+WuAewJQAFaovnjEuYuZGSIAuRkK8jQBYDtNL1aduzI1mzvAOVK89491hsMvAGCn1Todk5+qmSpQlMlypvpsp99/UwyQ3mDwxlT1qxqZBEANEEbRe9uNRmtR4VJMigdChSxPVT//qN9/2wARAPYQULAoNjOzP2Oy5M3yCtkw595fAK541aJCxlPVXinLNl9aVBMCZgA7o9ENXxSbBIID3MTMrzr3yO9pernT613LyXcdKQjhqdbt20MDSMC4SIABQkC3Wq3X1kWe+zuEwpEUUmd5fjIejb6fp+mpewaDj5dmADgALCDsttsJzD5LgEczMx+TsTfr0/uNzmh0Yxm09Aj+K97Z7c4C8NeSbGYqwPpcdQ3/owPAQYU0faZKnsnMAgFGpKjq5r03b/5yvdF48HD6AWDRSX9tNk+URF71qmqA1kSiLIQP7hoMPtlK0wv1UunL344efWDpObwBf15fr6/W69+WgOOZma+Q8czspyzLNpI4vj+O46/L5OpU9YcwmZw8Nh7vETCx/Sussrb2VpU8PjPLS4DzwF4oiifvu3VrIlH0TkKuTlTnNZETrNVeX7xfhIDupOnZssi5iVlOkjEpvigu3D0c/mgAqXrV9s+VqVm+Qj691WyeIaDcaTY3SH5TESnPzVAVwW4IHx7r9c4dftl2q3W1LnJ2aoaExD+qU6g+HBl5KiK/2wthJmQ8CWFc3t09vxhIFztZdT4/v5ckKwrUC1UfiZRz8vF/ARaSZfGXfHu0AAAAAElFTkSuQmCC",
        "title": "ITCSS: Scalable and Maintainable CSS Architecture - Xfive",
        "labels": []
    },
    {
        "link": "https://dev.to/mmcshinsky/why-frontend-architecture-matters-1ldj",
        "date": 1650884358,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABDklEQVQ4jc1RsYqDQBDdzYraCGIj+hWita0/YRP9DpsFaz/CPxBShKRKI9gJqxZGe0EQtxPF9QpzCeG6Cxz3qpmB92beGwD+HdCrQgihR8txHPzGtm3P+WcbPM9zXXcYBgBAEAS2bfM8b5pmVVW+78/z3Pc9hBA+CXmeF0WhaRohxDCMOI7HcQzD0LKspmkcxynLEkJ4eBLGccQYd10nSdKyLFmWJUlCKT0ej/f7vSxLAMC2bQfwjt0oY4wxtq4rISQIgjRN91QAAC+CLMsYY1VVKaWCIDiOI4ri5XLRdf16ve7yb6anaeJ5Poqi8/ms67qiKLfbra7rtm1PpxNjbCd8EOvPxz1uQOiX2n+FL+rrfZxuq3c7AAAAAElFTkSuQmCC",
        "title": "Architecting Frontend Projects To Scale - DEV Community",
        "labels": []
    },
    {
        "link": "https://blog.openreplay.com/building-a-mobile-app-using-html-css-and-javascript",
        "date": 1651696990,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jYWTTUhUYRSGn3PvnTszlbQpWgQtynCw/4xRoyAscZEzEGILjbAIWgXt+6GiH6ioTRQtooUpoVIyKeGiAgscJY2wHwzJKFwE0ULLuXPvzD0tZpxJs3rhfLv34fk+zgf5lJZqkEJUcvP/CEC0XjdZJvdV+erD2cGEPMuDDBD/XwAjf+yzbCLADtvmaVVcOypiGimW1fwnwAfNZvHx2O253LACNNrCu+q4nqvYo0tBskWjBQCiqAiGazKRTMgxb4ZqDO0PhDhlL+ZNZVwP5G/sz3+fHEAQVTBThMrPdNiDjyU50G3s8hz2I5oJhmjdHtfn0b26E0Rzk4MUlMQAecWMUz4djbQ/HI20dzUMJKRzoFvWuClOqBANhuivimnb1jotzUF+BwikADXVEMtcr0hXWWvnk7Vt7TXJR3Ix7bDOdbktQlMozItovVbPAahCMISIiK9u2gPFLFlSI559GEVG+mRcs1wDRu0wK0TY8odB2kEFsSW8KCC+JL2fU7UfWhqbNtbp8sqYXreCjAEbUj+4anzjLoBVMPDBWIXlpYKfrKxzZOxgwx2A6pgeFYPzls0yL02v+pwe7JGR2Z6V11cFjJVu+HNz83vgY2Vca02DywGbzZ7DW2eGlqFe6S3uQ27JCgaiaMC0v2+LO2WWYV+xLWKex5TjcDwzyc3hYfHml4sAIQD44nPJkmCLZSCuy62Uz4XXPTKZL5q5jZz7N6z8Ok0YJqZpc8jP0OdmODmUkJfzilkWiAUwPc49VlMiBl+SCXlQVEX/VpzNL3x/8CyNuL6qAAAAAElFTkSuQmCC",
        "title": "Building a Mobile App using HTML, CSS, and JavaScript",
        "labels": []
    },
    {
        "link": "https://www.hacksplaining.com/lessons",
        "date": 1652893714,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACXUlEQVQ4jWWTvWtUURDFfzPvvt1ls1FUJIkL0UWzKCJ+NVZaiqVYpLJQLMRW8D8QC7GzEKwstPA/ELQQ0UYbC8EviJGY/cjuJibuuru+N2PxdmMwAxeGudwz556ZI2Y2ECECiQBwN0R0lLuDsT0cECAVd0vMiT4u/vAkTeXw/jKL9SbdXp/qbJliIY+ZYe4AqCoqsgXKzHr9vk1dvJZy7pJ9/r5sJ67eNE5fsDcfPpu7m2+PzVrI6LhGIYIQxN2QEEEcY5axf/fxKy/evkeA82dOcXyugpmhqh4Acf9HKTWDEd0xwKNnL7n/8AkI1K9f5t6hA5KaISISAETAR492T5YIkYI7ooK701z9ie7ZBUBzbYPsTXYXMrGzAu48fv6K1noXoghFEBG+1BoUJ4o4zpdaAxFBRRAYA3imrBk37z6AnZOQizcZLDbb7J/eiwPfGi2GfxJyccDc0a10EOHsuTPsKJUgSYijwEbvN532Kgf3TVGZmaLZ7tBe38Dds8ZjDcwdVHl86wbVmb0wHJKLA8udNej2KBXyTORz8KtHvbM23rPtGnT7/dEkIETKQq0JuZinr9/hOMSBhfoKJ+cquIMCLpIBqOq/I0KkytJKGzVjspBnR6GApsb3Rmtz7JrtgdMbDLD+ADPj92CI9QckqfFpqYY1Wty5Os/tK/NYo8WnpeVNSwQEV1U5Vp6hVSp5sZCXo+VpbHWdfBwIZlTnKhyZLWPuVKsVcqOdERHEzBIRiczMAVFV3B0zJ4qyPHUnaGbQxAwdmcodJE3ToYjEIuLj78jIbf/n465bXf0Xs99hK2KEZ9kAAAAASUVORK5CYII=",
        "title": "https://www.hacksplaining.com/lessons",
        "labels": []
    },
    {
        "link": "https://www.programiz.com/",
        "date": 1652893720,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACd0lEQVQ4jXVTTUhUURg937v3zd9zHBnKYujH0n4EI8KVLpQWQVFBmylKoSAiyEUgiRCSr0JctIpqlWFrXQW5k6yFkDATQZFJP5SRWKnZOM7Me/Pe/Vq8mWYGp7O6F77v3HPO910CAIAJIL6zJ33O0EJ9islWzBlB8BHxNK8s3+r5VZ82wZoJYgCMAghlMGMLISMUOuvX/GZYBrZlXUAQ4LJK+qH1XZyjqfIHNxAUcaFhamub3tGvCD2KNL1Y5Kr03feL924/WLu+XKzVKjpNU4uDxeMvhxcvd4n+r+LjGR0qKQhQDDcgaq62xK5NDzd+ayoqqaZAiKE35+XmXb1WnbrEp2tf3m+2BjSl32AQCUCwwokrH2gijjEhKzw9XGuWdmZE0432fACAzAS7MdGiZj/v2xSMaNvrowgbfsdWjg0A43jHnoUxz4qey3VytL7dDmScmoWMdbI3M2igebqOtnSlshl3dv47/V6BFCQLDw/CO8S9seSj/lxo1XZbnjL2P3N8RjbcYSHLDq86QYroOU6pTz/nRw5iR6IwROUR0DgBQPuoS7tfWyKylHfzILbJcnUOSgc5afGfJwQ1/Eg1zmCxFJjmCYgDAA5NZqh2yUVWEmsAdJbSRe6FQu7oKJpOjWLvjAmumJz0wvCwLgQMlxF0GD92Bmg1nB6YfNswVAr6JpkgtYEgXiAxXBfrUQ2JYyHMdfoofyDyHG1Aa2tCTyYpj7IVrqogcTyA2SNhpGJ5RpZYvrLCDoBkstWpsi+lDDDmXWa6w0jFNNAakcaCnJDfBQCY1Ve+RFCUYGsgxWCfDiUFQP9vrLDwD0J4GRO8zyZl1aZy/AVhUPz5ntRYhAAAAABJRU5ErkJggg==",
        "title": "Programiz: Learn to Code for Free",
        "labels": []
    },
    {
        "link": "https://ai.google/tools/",
        "date": 1652893724,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC7UlEQVQ4jXWSXWgUZxSGn29ms7M/Yk00xotISP1B3UQMMYZYEioWKbYrIngh/kRFe1ukhUKNuIn2wpaCYKBKK61FYloKNgSKrtqaZDE/RlHUtCIqraVNYhK7SXZnZ3ZmTi82pg2Sc/2+38d5ngOzTKadZV4nKTtO82wZAB8AIgqlBGCourRoZCL4QkIDtgjDOowRE61iZfQ9y9N6B3a03QElIAqU5B6YKv9VuXxBMBQYXGR4jcGNxEBeByWRlm31vpL8L7JPx++DKs/9nev4AGqOpCrQnd9T5ysn8ubKMQ0nLj9hWHnqoKHojQw7/c6Q2eGq5I/rP5CqQJH7uW1mLyeOBj9hVUz8tU3pP95onKz//25yhQp5iDhXaAPYtHt3GKAuZp/ZfFaktimdWf3hYFgBrG/4Z8monR2+2lXhhAP5n2Vtp21h4tdf0pfZF9K4GXm+HX/I+8F2xr8r6I9/nzffPeyYdlfX0WCzBnDj+LzHDz8tnACCOhzQdX2dUjjht+UrtYk7+Kwy34LAEuUaGxMn1F3HzJydzLitoEQRE18t5td43jddTXOutUcrQ9H2W2npoNSDbrKc09/iozUXtr2TDCX6i28P1Rv5nLCS6Xt/j4SqNK4DSrmuJgKQrwI6QCYDSA4HgHI1T7fSHho6ClCa9spRJGuKC5Ibyq3hNyMNUygVwKqWLbvWdu6UstZ3u3Mgk5urP54smtZY15BZ5trG4HjLYjO4lC/F8XqknzxrTO03PG5GRo37zovMI9Hs6zWHpFwPuzv9yioBOZ3TGEs9q2s0Z2rsmKkxGo2GZtX48pC+PV+ZKlgcPOzabrzw/YE+6zUOGIq+yEjU9M/xN9v22MW5PT/3BgqzJx07eylxJNw4g8Gf61bMH9+wWp7XlcVmMLiwdW9Vzx6JtG55MBWdBuj7L6ikuO+30SfVpYtKnadj5jVK/D7VqVmcUzcuxtZoW8MeXvdU1nvZecXENINLLPU6mLTjnJo1BPwLuoZb6vx+CZoAAAAASUVORK5CYII=",
        "title": "Tools – Google AI",
        "labels": []
    },
    {
        "link": "https://github.com/jychri/google-apps-script-cheat-sheet",
        "date": 1653927009,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "GitHub - jychri/google-apps-script-cheat-sheet: 🚧 Big changes coming! \"auto\" branch is the future of the project",
        "labels": []
    },
    {
        "link": "https://www.behance.net/gallery/75870375/Wikipedia-Imagination",
        "date": 1654435068,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJklEQVQ4jd3Sv0sCARTA8e/dmR4NNtbQUEMNh1NLQllX4BhCxUFJ9AuHtqLBpnIqWhzSFuco6g8QlyJwiGgwqskhuUmuCNGD0uS6ho7wcHJp6C0PHu8D7z2egGbTSYgddf8J8PykSQVVcUpGldM8tTp+Gb/sFF9NGlYLUBV257h6xNvF6BDRMUIJoiE2wg5YPqagtwCgaRHeBzhcZHsGQSBzyUuVwV5ui063C0gie/P4PCxNcJbHtrnYRA1QeOZggfgJyawbiALjw0gS3T5kLyMDzAZJ57gpInuJR9rA70hakPMtnnSAQD99PZQrlCttZxVFVlXWp4hNY32Rvcf8wKiRytFoUv907/BmUjLYiQDU3llJc1dCS3K0xnWCB51YxgHCP/ilb8TZWZArQpcpAAAAAElFTkSuQmCC",
        "title": "Wikipedia Imagination on Behance",
        "labels": []
    },
    {
        "link": "https://dribbble.com/shots/16412267-Weather-App-Animation-Popshot-by-Lollypop",
        "date": 1654435076,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKElEQVQ4jU3Tu28cVRgF8PN9987M7s7O7Poxttew3jgBIx6igQbZIYK/ACSUEqwoSQWiQ5T+BxCKZJogESQ66IkEha0QCiSQoCdgOXh3vevHzL7nce9HER4+1emOdKQf4UkIgADAj60brykHt4yRa4WYVQIEFkdE2COl72798cXPuBD6t3z7zAdeaAafaNa3WeA4lRLmogVYY2HzAtl4imQ4mBnY3fafk4+v4xsDAGoH4HuXtr3Upvejcnh9Ya1Bosien8eIlpYQBAFKflkqtcB6lbLjpdikqn3l3fjtr9exD7UPyFv1l3dXKvV3wlYjLZfKulyp8CCJMUgS1Op1WGOJNbO1QOe0l82r8vPTsFfZjn/7jh6svbepFD9srrcKv+pzlufsaEcmkzE9+v0RVhoNREsRTnp96XQ6tLy8bKu+bw8PDiGgV7WB+XBlblHCeg2mMOQ6rhhryCuVEAQB+r0ekjhGlmXUbD4t9bl5AgTz1VAfJ6fva2a+NjMZjttdTvOMijxHlmfIsxxEBBGBUgovvPQilFJUFAUcrbkU+iLJ6ZuamaPRdEqT2QyslGityferqEQVBGGAbqeL4WCA87MzFIUBE4nruZRbQ4q5oa21aD61ijCswVoLEKCUQpqm6LY7SJIExhgcd4/heR5EBKYoYKwFM0OLSN/mRSRipTAFK6XQ7/XRPjqC1hrLjRXE5+dgZqxfuQxTGFJK2bNuD0fdTodF5EE2mgKA1UrLSa8vfz1+jMUowrPPbSCKItTrcxgPR0inqUAgELHFLCOx2GMNunM2iCmdzpDEsbTbbWq1WtJYbQAAsiyDX/VBRDIej8n1HBkPRzhJYuMqtctXD796mBnz+ajd1+12J2+uNaU2P0d5lv+zBnEdVxzXpel0Imma55PumTZi72wefPmr2gF4I9j4fmhla16Xr1QWauI6jmXFxMRPjnIczNKZHSVD6FHmdMfx/epi6eZq55f/Me1d2i55zJ8S0c16EGrXL4MdBQCweYFpMsJwPMpE8Fl60ProDewUFzX+x/mHyze2YIrbAF4HU0NAQlaOFNG+Ad29enDvp4uc/wZh5puCV3Q9QgAAAABJRU5ErkJggg==",
        "title": "Weather App Animation | Popshot by Lollypop by Lollypop Design Studio on Dribbble",
        "labels": []
    },
    {
        "link": "https://cloudinary.com/blog/lazy_loading_javascript_for_high_speed_webpage_performance",
        "date": 1654435088,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACYklEQVQ4jZWST0hUURTGzzn3/fG9GcfRcUbHsBSzITGKUdDIWjiFloEwEG0EqUWrEgJX6kZCJFxE0CLatHFRULSsVRH+QQpaSEQT1SIcUyRHZ+bNe2/eu/e2mBjd9u3OOb/vbL4Pe4dX4H9EhwcpJQAgAhEQAeLBsirlME2IgFCyueMIQDANVqMTAEopseKuGCo/iNDzZbnMe0+Hk6dCnMvVj7nP34pBkyEeeFi84yYiMoaOw02DzU8lBs9FCpZfG1TH0i2J44GltRwRVD3YM7RMhEXLrw0qD2ZP/so6cw+/2zYHhIawtjCT2PjtTt/PxBo1KVFKSRU6fbn5+eMz2S1nej6jaRRr1GMR3XH45L2vA331Y+kWqyR8LhGRheLjF8423L5x9M7Ml3eru8nuuuyW45aF64pAgNmO2Npx01eaBwciS2s5jwviQl5NRRdfbn5az89Odj5Z6O5sC4ykoqPDsf28r2v05u3O+MS6EHL82pF8gZPKkDHM7Xu6TrpKmkaxqDY10XH3VnvXieCjua7ro3G3LF693m4/ZugakVsWmZ/W6FATI7Rs3/fln13P9cTGpt3WavT31Pclw1JA6nxke8d1y4LqQurii00iHLkYLVhcUdA0GCLGovp+3geA3J43cima6Ag8fZYNmgx7h1d8X6gqmQZrbFD7k+HlD7nmJr01XvN+bbc/GS4U/cyP0l7eK1q8RiPsGVquhCIEcCFtm5sm8zzp+zJgspLNGUNVRUbIGAohlWqEjIGioKETF6CrAAhCQF1IAQlCAgAIIRFRAYBqsaQEXrlJgH/QQU8r2F9pkxsMwQ0iXwAAAABJRU5ErkJggg==",
        "title": "Lazy-Loading JavaScript for High-Speed Webpage Performance",
        "labels": []
    },
    {
        "link": "https://codepen.io/timhuang/pen/MWKEZMJ",
        "date": 1654435164,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
        "title": "Simple Mobile Detect",
        "labels": []
    },
    {
        "link": "https://github.com/niinpatel/calendarHTML-Javascript/blob/master/scripts.js",
        "date": 1654435171,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "calendarHTML-Javascript/scripts.js at master · niinpatel/calendarHTML-Javascript · GitHub",
        "labels": []
    },
    {
        "link": "https://testbook.com/aptitude-questions/verbal-reasoning/course-of-action-55af9e8aec7b2f79cb00044f/55dc5adbec7b2f09150038c4",
        "date": 1654435182,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACMklEQVQ4jY1TQUiUURic7/krbllKuXYpIugQWJfOnYy8J3T0FJ462LHwYkU3KdBDdPDgQQNB6KAXqUN4EWQjRLQNQ9YVZWVd1jVc99//zXRY91dXgub08d6befMeMzYzM3ezu/vOeDJ5pcc5J0FmggkABUCEcw7HkHNOlUpouVx+anLy8zOsrq5/UQPYuPAPpFIr71EoFCXJk6QnFZGUpENSr75919jHiZgQRRG99yLpJTGb3c6gUChSEr338eWL+QM9WtrUpQ+zar14XX2P+5VOr9fckfTeUxK3tnY26o8z55xC0t6t7+LJUgY/imV0JprR3n4Zc3Pz6O3tw8TEJ1gNAmAA4OpDxdP6U1kMp3MwA9oCh6onSKKjox2lgz8YGHiOwcGXIGkAIMni7z3yRKp4iI6gCWaAl2BmAIAoitDS0oJEohULC4uIIg8AIIVYwJkh0eRACBBiMlCbSUIS2touxHvO2YkAAKh2HDBA0sn6KTekTlMQ4BwEQXBmEFALkXNnBE/DnSFKMBgCGI5IHEQepf0SwjBEEASxm0YB1Yw7Bc4QUihUiVvNDqMP7+Pt6xdIXktiL78HknUh1cSgOEj7YVU35ld59+tPjf7eVSmsxgnMZLIaGnqjzs7bunfvASuVkJK4ubm9EUd5P4w48iunnaOQ9UZUvVd4Smh5eYUjI2Mql8snUf7fMh1X5FyZgrW19FPnbLyr62qPzATJ7DidjSAp55yq1chyufzU9PTs8F+FSg3vkZ4tSAAAAABJRU5ErkJggg==",
        "title": "Directions: Below is given a statement followed by three courses of action numbered (A), (B) and (C). A course of action is a step or administrative decision to be taken for improvement, follow-up or further action in regard to the problem, policy etc. On the basis of the information given in the statement, you have to assume everything in the statement to be true, then decide which of the suggested courses of action logically follow(s) for pursuing. Statement: Faced with a serious resource crunch and a depressing overall economic scenario, the state &#39;X&#39; is unlikely to achieve the targeted percent compound annual growth rate during the 10th plan. Courses of Action: A. The target growth should be reduced for the next Plan. B. The reasons for the failures should be studied. C. The state X&#39;s performance should be compared with that of other States. 55dc5adbec7b2f09150038c4",
        "labels": []
    },
    {
        "link": "https://coryschmitz.tumblr.com/post/95785006897/set-of-posters-for-sirvos-award-winning-video",
        "date": 1654435276,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACr0lEQVQ4jS3ST2hcVRTH8XPuuW/eZDJp0tSkMGkJopQkBmmLBbUIbcGlO8EuLLpoKbpz58qlG6UYuu+qUgqhoIGiCxVUJKWCWrROm5lm0qbNZPJmMm/+vJk3993zc1E33+Vn9eXqxmMRY0QMs7VirSEiImImIhKRfjeJoubM7Ix6n6YjS0xEz0NEJIYVKiJEBKDd2q9VH7Waza1qZWn5lTCftwRiMOF/kpiKhcKgPwDRgckD6SAtHZmbO1JyLgvD0KWpBUEZTACR9368MPHN7e9Xb60dmj746vHlD9571xghQFUJlA4H/PDBpjUiImw4CCTM5z6+eKmx8bDVG2bj4z/98J3kwlEyICIoMucMACUAAJTYuHj/7NzEfF7nZw8Ok+TGype9f9YpFyg8iEBk4BVeVRUK7zOTyx1fXDg6NfXbdlTZ2StmXd9tjPYjElF4KIz3Xr1XVe+9S9PJw6UnnsPR8CT1v175/K0z52qVigkCAgGqyKxXz4aRZfmxvBVTvncv6bTKvd7UCxPl6qNiILbbaUTNw6W8qiogly99BCAMw1YUfXHlq08+/Wx5Zuz1pRcz9Vevf/vjnT/LtWe9OD595lw6HGjmjXOZDexWbev9Dy9eu7naH7ora3fXN/Zu/10fUPj4WSOXL5x/41jraY0lUFXjnAuC4PrN1fKD+4EEVqTd6a6s/fLHZgPMTLxZb3V6SXz/juv3nMussonj7q/rd5lzcImZfVOUUf8ZEjiAxGzVo0a7e6gf7/37+2h63u4+rZPhJ9vbsFbJartCYIBJ8XxBr9iN4snpMCr/VTr7stnfi6qV6rATk6r3hEGEZIdMQAAzww0XlxZPvf1Os9EcNVvIMjn12umFhWPFUXtnd1ftmHOejBATEYsxyJKTJ06cv3BhFBTHj77EhYn/ANqplx8fc4tZAAAAAElFTkSuQmCC",
        "title": "Cory Schmitz - Set of posters for Sirvo’s award-winning video...",
        "labels": []
    },
    {
        "link": "https://m.twoplayergames.org/game/axe-of-janissary",
        "date": 1654435281,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADUklEQVQ4jQXBWWtcdRjA4d/7P+tMZskymSSdtjGttUuiEApFkVKFemGvpBUJiHfihXcKbh9Cit/BG0sVRIV6Y62goGi1tY1dSE3aSWIyk8msZ+asr88jAMnWJ6+ZieL70ktPg+MlaSaqCoBlBGMQjEIGQKBF/oybrcveoU+/knD93YtuQa6S9aX+7xN13Yxc3sVz8yA2Gxsd7tzaZqwtHDk3ycy0S3GyIrjjEPKG7Y6lH3Wadbl9+37UCUv2wcpJclGZYuUGM3PKvWshxZOvU5qtsHqvy343pvf19/HUvO8+89KJD+1Re3dpZ+tENr+wYpfdcUkiYXwQcn+zSzD8juMvv8Oh0lkoWpzJ+ZK4Jf0nrtq//HQ5qx6tLppuIN5EOEOh62hqRBnu0W5tgHmO+nqJVKv01u7iaMRwFGh/9Q9dOjjDsdphfEd9027b+qQVi13w8R0j7uQUvblljLPKmTMtbPmZ3vxpYnGw/TxRN5K11XWZOO5LcaqoMnq4Em/WQ6s/OKfGlCXTDFtvMj31A6WJPMNgyObmKYxzARMHpP3HiH1HD58YiJ1/WmW49naSZXtm0At01C5LpAGV6SaOXyWMDZaEuKbLZn0cl5RsLKVYLuDZeQwutiMO1/vQRHCrG9jpAaKhwzf33qSly3z81Gd82XqVeb/Db50FJlKb7brD8/lf+WDxR2xLRkxGMBhl3B60OWY8dhLB6TxiqbLH5+tnaSUxXTG8MnWFG40XaAxn1fc6gmbI6MFKHGrfCuq5LAxSU6pt027X8Ar7OME0O1JixvQZRjEzbLNbrpBte9glm0otU1t8kfDvnO5efczY+VlNGRPr2we4b9VIvrjF7GQREoexOKY+d4Scn2q21SF+sUJKIsay8qPG73vo/IIMU0f2H8ba7Pe0tVZiL7PYerRJMwzYjVI1p2raT0JpBCHRfhvbaGiMtlYLh8umsfooCfZjbTZyMqodle4DW/vHF8kuXKRjDmhjaGTn+h2J8s9qe3eQpCY0ttW/K+HNxUtG/Sv19ZFxvWY2CspYHoSBEddr43nQac9hmb66fkjSdVHfM4eOaSaZuyIAvWu5S4Vy8l7nv3g5TfE1A7FAM0QVjIWigILlMypV3b/iXuGyd7519X/ky6Wi6IhTCQAAAABJRU5ErkJggg==",
        "title": "Axe of Janissary - Two Player Games",
        "labels": []
    },
    {
        "link": "https://www.behance.net/gallery/84492197/JobDone-Team-management-system",
        "date": 1654435287,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJklEQVQ4jd3Sv0sCARTA8e/dmR4NNtbQUEMNh1NLQllX4BhCxUFJ9AuHtqLBpnIqWhzSFuco6g8QlyJwiGgwqskhuUmuCNGD0uS6ho7wcHJp6C0PHu8D7z2egGbTSYgddf8J8PykSQVVcUpGldM8tTp+Gb/sFF9NGlYLUBV257h6xNvF6BDRMUIJoiE2wg5YPqagtwCgaRHeBzhcZHsGQSBzyUuVwV5ui063C0gie/P4PCxNcJbHtrnYRA1QeOZggfgJyawbiALjw0gS3T5kLyMDzAZJ57gpInuJR9rA70hakPMtnnSAQD99PZQrlCttZxVFVlXWp4hNY32Rvcf8wKiRytFoUv907/BmUjLYiQDU3llJc1dCS3K0xnWCB51YxgHCP/ilb8TZWZArQpcpAAAAAElFTkSuQmCC",
        "title": "Behance",
        "labels": []
    },
    {
        "link": "https://okobugames.com/",
        "date": 1654435309,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtUlEQVQ4jaWTMUwTYRTH/3ecZ5FCS85ACBELrZi0CJIYMODAApsh6VQiIZ0kLjgxG2dcaGKqWwPl3EgIi0BICIEmGkBEbOBKwVQrYnpJ7wq0vWvvOeDVwuqbvuT7fu/93/99jwERg/J4d+CGYYyCqJevYNsBQCsaO2CYdbDsWwy5ouXP2UvwjDTJg7Z9Dqsn0u+glNeRTXkd2Ui/g3wOq4cHbWNGmixHmJKC8P6G284zc32NTYvHWWHqSMUnOVcAgE7Bwo0012CgoVIeXEkmommNMHz3wb8EM9Kk23bt0VxfY9Nw5EQwwavhd9q4Vx21mYdLPw6iir6GJ63PGYgxDw/a/vr4tjIRTQsAEIorBb/TxpXDobhSyA7d4QDgLK9nbs5+q9TA3GdhGKPepqrVFisvBLvq4L1lLUHBrjoEu+rwOZ0HACwdn5fuvE1VqzCMURZEvWMuwfbs429crWgCHfbrAIAXX2QAwHTivHrMJdhA1MvyFWx7m51tDcWVwuGpJvc33Cglmf1+elHtryrTm6kjFW12tpWvYNsvjdH0wOy/o/aispm0U7Bwh6eaXG4yqxWNnd20IXUKFi4UVwoAMO62ywAw0FApm234nTbu5T0BE9G00ClYuN20IWlFY4cFw6wHDmRlpLmmZFSLlRf8Thu3eJwVzDbG3XbZWc3JobhSGGmuQeBAVsAw64AY8/CipMcy+VT3QoKefjihIhGpOU3tXkgQL0p6kYiKRPT+5xl1LyQolsmneFHSIcY8LIZcUc2g4OBKMhHuqZfNkZWb9iamlEwN99TLgyvJhGZQ8GIviC5+4/Tepnv+cCuWyafUnKa+ltLEi5LOi5Juqopl8in3/OEWpvc2S1zpQMQgvB/gRUn3rSWXI79yG2pOU9WcpkZ+5TZ8a8llXpR0hPcD5Qzzv+v8B66ajnc8q7lqAAAAAElFTkSuQmCC",
        "title": "https://okobugames.com",
        "labels": []
    },
    {
        "link": "https://dribbble.com/shots/8501324-Restaurant-landing-page",
        "date": 1655015303,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKElEQVQ4jU3Tu28cVRgF8PN9987M7s7O7Poxttew3jgBIx6igQbZIYK/ACSUEqwoSQWiQ5T+BxCKZJogESQ66IkEha0QCiSQoCdgOXh3vevHzL7nce9HER4+1emOdKQf4UkIgADAj60brykHt4yRa4WYVQIEFkdE2COl72798cXPuBD6t3z7zAdeaAafaNa3WeA4lRLmogVYY2HzAtl4imQ4mBnY3fafk4+v4xsDAGoH4HuXtr3Upvejcnh9Ya1Bosien8eIlpYQBAFKflkqtcB6lbLjpdikqn3l3fjtr9exD7UPyFv1l3dXKvV3wlYjLZfKulyp8CCJMUgS1Op1WGOJNbO1QOe0l82r8vPTsFfZjn/7jh6svbepFD9srrcKv+pzlufsaEcmkzE9+v0RVhoNREsRTnp96XQ6tLy8bKu+bw8PDiGgV7WB+XBlblHCeg2mMOQ6rhhryCuVEAQB+r0ekjhGlmXUbD4t9bl5AgTz1VAfJ6fva2a+NjMZjttdTvOMijxHlmfIsxxEBBGBUgovvPQilFJUFAUcrbkU+iLJ6ZuamaPRdEqT2QyslGityferqEQVBGGAbqeL4WCA87MzFIUBE4nruZRbQ4q5oa21aD61ijCswVoLEKCUQpqm6LY7SJIExhgcd4/heR5EBKYoYKwFM0OLSN/mRSRipTAFK6XQ7/XRPjqC1hrLjRXE5+dgZqxfuQxTGFJK2bNuD0fdTodF5EE2mgKA1UrLSa8vfz1+jMUowrPPbSCKItTrcxgPR0inqUAgELHFLCOx2GMNunM2iCmdzpDEsbTbbWq1WtJYbQAAsiyDX/VBRDIej8n1HBkPRzhJYuMqtctXD796mBnz+ajd1+12J2+uNaU2P0d5lv+zBnEdVxzXpel0Imma55PumTZi72wefPmr2gF4I9j4fmhla16Xr1QWauI6jmXFxMRPjnIczNKZHSVD6FHmdMfx/epi6eZq55f/Me1d2i55zJ8S0c16EGrXL4MdBQCweYFpMsJwPMpE8Fl60ProDewUFzX+x/mHyze2YIrbAF4HU0NAQlaOFNG+Ad29enDvp4uc/wZh5puCV3Q9QgAAAABJRU5ErkJggg==",
        "title": "Restaurant landing page by Abdullah Sajol 🚀 on Dribbble",
        "labels": []
    },
    {
        "link": "https://www.toptal.com/software/definitive-guide-to-datetime-manipulation",
        "date": 1661588363,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB2klEQVQ4jV2SPWgUURSFz3lvdiez6yZLYhITEUMUImKhgo0YC0GEIFuoCCksUogxjUIKQSSVsbKwC6TI2gsWsVTshYAiiBD8BZMihARGdsfdzNxr8XZmJ3nVLe53zzv3Ho7VPgIAoApAAZAAqKquAKCqriDhIX3dPpCEpK0kSWZtXcApkIzakiRa7jEKkBDRDCBh0H1KImolk2crj2dGo7YM9HlTF6ujg8U4ER5QSKUhgqF+7+H0iF80y6+3jKG1bjiYAaogqaoK9pZtfXX7zHjp/s1h3+PC8gahBY+qziQ89zNVBWCgO2Fy+2r/9LWBT+uNO1OHSTytb8axGrc250EVAAzZbMn1S9WlR2Pv18La/PqXn9FMbejkUb+9J5nvDmDIf205dTyoL5z4sdF68PzXs7ljp8eDu4vfP39rBr4VNxWw1YlZZ9tahs2kHJgrF/oun++dPFeZf/H71bvdSsmKup0y74Ek4lieLP2JE527dWRldevlm+2RwaJI5z7Ot61OzLpKVY0xBY9vP4SBb+7dGN4N47WvjWLBqNIxeYXOZkkGvllc2dyLdedvnAYJ3WPnw+d0XKgaUWINenx7ANgXvlQHJA6VLAAR5JO3D8gYsDPUpV1zKwLwH4JA10poM/ayAAAAAElFTkSuQmCC",
        "title": "Demystifying DateTime Manipulation in JavaScript | Toptal",
        "labels": []
    },
    {
        "link": "https://web.dev/css-masking/",
        "date": 1646800788,
        "icon": null,
        "title": "How to use CSS masking",
        "labels": []
    },
    {
        "link": "https://bennettfeely.com/clippy/",
        "date": 1646800788,
        "icon": null,
        "title": "Clippy — CSS clip-path maker",
        "labels": []
    },
    {
        "link": "https://www.cssportal.com/css-cubic-bezier-generator/",
        "date": 1646800788,
        "icon": null,
        "title": "CSS Cubic Bezier Generator - CSS Portal",
        "labels": ["css"]
    },
    {
        "link": "https://www.cssportal.com/css-clip-path-generator/",
        "date": 1646800788,
        "icon": null,
        "title": "CSS Clip-Path Generator - CSS Portal",
        "labels": ["css"]
    },
    {
        "link": "https://codepen.io/dissimulate/pen/CqIxk",
        "date": 1646800788,
        "icon": null,
        "title": "Platform game engine",
        "labels": []
    },
    {
        "link": "https://javascript.info/file",
        "date": 1646800788,
        "icon": null,
        "title": "File and FileReader",
        "labels": []
    },
    {
        "link": "https://stockromfiles.com/samsung-galaxy-s-duos-2-gt-s7582-stock-rom/",
        "date": 1646800788,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABmklEQVQ4ja2Sv4pTURDGfzPnXjf+WTQQhAUbERstt7BQC61U3FIfIY3vIBGsfAQfwXYLZQWxsDCIpQvLYplmSRHYTW7OvefM2JiYNSEo+sEU5ztnZr5v5sA/QpbOvoJdhi8X8j9I+5UuszbFIvX80+2HOYebyWUcM0WNeDSlMaRC0xQ9HzPf9mTv7SkLrz7fum620a0zl+us2iBWm0hyiKZMgWjq0VwrEYuuR1XKr/s77w8LAMthC+Gujcb3X+58naxTv727fW6z7Hwwk13gUAGCagRGXKh0QdmqoGWtADIKLSKAAjRqinn4bcqrAoZAJphlnQ8xuLgrUG1qr4f21lhIW0lKAXHxxS0gKrn3qH/Mih0vok//+N67B3n2qgAQoXST9ouPdx4nwnCaKGIQb7JLA0QvvckuJ06qPXQaaLuGcl5gMhl8aRVXuoTwDOOaFDJRkzJIsOwgjppK0qxng/J9gnePNuLBbNpzPHlz48zVS+1OlbRpLmbhBMY/76Y5+KholYPRYLj/dL9e8uZ//5VZUrCGO53+P/EDRAK6xHBgWh0AAAAASUVORK5CYII=",
        "title": "Download Samsung Galaxy S Duos 2 GT-S7582 Firmware",
        "labels": []
    },
    {
        "link": "https://www.the-area51.com/2013/01/samsung-galaxy-s3-jellybean-stock-apks.html",
        "date": 1646800788,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABrElEQVQ4jV2SP2tUQRTFz7kz+xLeQ6LLS1QCKQIrIrzKJoUosRAxtaVdylRW1n4JP4JgF7CwEvxTaKdEDdElCsLGtTAqLMqub47FzA5Pp7oz99w7c+f8WNc1Sc2XmcUtyRACAACSAJAE4KMubnI61mRRzkryXVG3X44lgjAiVhrn679OANsAI9aXdXZJQEq5siy7r5QURJAnS1wZYGeTd67bZMqXH2UESZ/UJMA2qPAcrODaBd5oUBXoOZ5ewudv6c40Q2y8fAIb69hqcHnAssCjt5q12GpwPMH7cSCTLN1w8yJ3NnnuDHoeh19x96GaVdzaYLmI4Sd9+SEzi//pqqqKA0ymWPBcO4UXh1joYfsSCw8CTz9g9xXznD6EQPLNCHsj7r7W/W1ePQ+QziCBwLsjzoIck60WS52h5zD6zudDLRYYjjH+CTP8nmH/KNkSIXBVVWUH2gAAIeD2AzwbYrBCI+490fFENreI/X4/uybBO3njr6mCsNZHs8rHB5r+QQaMdV13sQtBQDIxBLWCN3RJs0SIpYBzZiSZ0VGZ5Xju8S8XMc78ZWwz1H8BD9r1V34DAB0AAAAASUVORK5CYII=",
        "title": "Samsung Galaxy S3 JellyBean Stock Apk's Download | The-Area51.com : Technology | Smartphones | Reviews",
        "labels": []
    },
    {
        "link": "https://www.nationalskillsregistry.com/nasscom/pageflows/itp/itpRegistration/uploadAadharKycAction.do",
        "date": 1646800788,
        "icon": null,
        "title": "https://www.nationalskillsregistry.com/nasscom/pageflows/itp/itpRegistration/uploadAadharKycAction.do",
        "labels": []
    },
    {
        "link": "http://js.redirect.hp.com/jumpstation?bd=lastpass&c=*&locale=*&pf=*&s=*&tp=edge",
        "date": 1646800788,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABwElEQVQ4jYWST2tTQRTFz5kZ2xdssmnRUFKX/kGLfgRB9DsILqtFulHUlaC4ESwUQfQDiH8QBD+CKK5026VQjQu70DQlMWny3sw9Lt6LVcE6i+Hc4dzL3MOP64tHsOeRRFJSWYa93Zi4SVYNEgChrMsxf+myByAps1DqyjEZs6sllZeUxmOXZa76m/cIAYAAOIcQAEqC9/QeAEOonTwFkwNoMcZOJ25tmRmkuL1ddDpW5CBTvx+7XRv84Mz+2fMXJHOyyCybv3Xn4NXrACzP5y4ut+6uhtm51Os1zp5buLeWHV+04Y6KnERIvV7zxsqBpWUA408bxebX1s3bAEhurq0euv/Q12rTR4+1Ly+VmTmCGo2qVfNcMZbaRjtK0UajSptVsbpG4/uTx5JsOOi9eY2U2teuTC20Os+fWr//eeVS4/SZrRfPFGMZbKBzkn179ACOfqaOELqvXiJGV6/7en344f3g3VtOTYdmk95L4PqJwyDhPQClBIneg0RKkugcnFNKIPfNt/IvbVchEiNiJEASKSHGcm+YWVEQUErjjY90DBVY/0aDJX/OuawmszB5xK71d/0nLyT/R+sE1V94/wTcfP0Hwpj6MwAAAABJRU5ErkJggg==",
        "title": "LastPass password manager",
        "labels": []
    },
    {
        "link": "https://www.mediafire.com/file/u2ssz3ofqn9f8xu/S7582DDUANJ1_S7582ODDANJ1_INU.zip",
        "date": 1664434077,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABg0lEQVQ4jcWSsS+kURTFf/f5ZkeCiWLNRqFihDAz0ZislkKxwoagotauCtnsFAiVUuUPILFsoyKaTSYqGUYi1pRERkTIZDPM590t1icz8hGd09133jnnvvsuvDfkJaJ9/uQLIiMoceATwg2wp+jm0V1kg6RYX4PYXLbbil0Coq8EpwLQvz8duXSeEhdPWnmQHxY78obOPxfhF9BV3kFSTcw57bSGMWCilApVVnBbeHjmo30C0D572oDRKT/RQKyG8UQt4WqHXN7l288L0mcF78qyPL552ztxjNBWH+RrPERvazVVH0xZ5u/sXybWzr1y1ykVA7hWSZ8VuMy7AAzGQ2UGRatltQkaU5uZjkgAwqB9HnF+45LcyjG5cUHu0SyXd1lJXZfqjwWgY/5PXRFNqJpOEf2OD/yGaNT0GID9+6YrFYJidNRPDPj8AKmDmcad/xNKij2aal7P3DW1qOgQcPiSkScOQD+8ssrRhWwUq8OKdiN8RCkgpFFdzdxHtrxVfn/8A7mZj3v/u8YmAAAAAElFTkSuQmCC",
        "title": "S7582DDUANJ1_S7582ODDANJ1_INU",
        "labels": []
    },
    {
        "link": "https://www.gsmarena.com/samsung_galaxy_s_duos_2_s7582-5876.php",
        "date": 1664441792,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVQ4jXWTT0/UUBTFf7fTDgPqGBfAgKnILAihsDCEP7KBEDbqQv08JJAx+iGMCQkxfgVZaPxDgo5jAjEmqAnMMHYhRowxmkkrbZ8LpqUtnbt677x77jvnvvsEoFK5rxABpUCEdCiliNBY3urKskhEzgilFMNDV5ibu37mrF5vUH1XQ48qhtVPmAAU8nnu3L1NsVjMvKBae4+WIIbk9n5hYb4jOQwtlBovopRiYKDEzOx0hDmOk+URDaWQuAIRcprGrZs3ErkbTzc6KEg3UCkmJ68xeHkwgna2dzho2h0KhA2MhTU2Fq1brRbPnr8gKw+R2CuESkRYf/yE8vBVJsYtdnc/4bguhq5nKtBDUsJFELBfb7Bfb0S2HNfl++Eh/aVSwq4eLs70IvDJecf4+QKIcOx5PHy0xpBpMj0zReD7bQsdvJ2vbmF8/IJXNvk3YeH2mwA0bZumbUeX6lljbBx9w/jwGYDcXpOeva90917EHbdwyyMEunHaA5WaAwl8el5ttp2dnsmP3xRevqHrbQ1vdATHsvAuXEKX1Bgbf34h3V0EZh8iEKQcCpD7ecS5zdf8XVw6+aWVew+SaenPFcdj2OrKsvwHA4yxIqyn5dkAAAAASUVORK5CYII=",
        "title": "Samsung Galaxy S Duos 2 S7582 - Full phone specifications",
        "labels": []
    },
    {
        "link": "https://muffingroup.com/blog/purple-color-palette/",
        "date": 1632503917,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABk0lEQVQ4jcWTPyiEYRzHP7/3fbs4NwgXSiZJkvEyGAwGSTebpZgkhVJ3588tSjIZbjYZJd0gGQw33qArkqTrcn8Tui7dvT+Dt/MeYTB4puf7/J7f9/n+PvWIqgp/WMZfmgGEcD7SeKRVMNLUONVoe+Z3g0hev6m9oizoRkfsJwP3CHGUeZQl4BrwIOzJasH3k4Hlip7UDX8MQCKFF4QY0IRHu4AbWc568RpTIL1AhgpHut3xYn12lDksugk48pac/07C2SFazBOgp36xmbSEcmNuBhWgDPgAD+glNTvIVec9g4VLYACIUdMdTJkFVoAjN4MCkAKS70YyhGnuM1AKOM2gZDCYRCk7PeNuBge67l8DkHAxgKEJYAJDHz7mYxHEdlQJ5OkLA+elJ5co1bc1DeiW/6aB2QcDTQDnIBYQBPqBClWjH8s+BoaBC9SOgrQiMoty6EogI8BIAxNlRqNtaQkVpzE1DowiRtyp24ikhHB+7lP+Kpj3PJcvdLenUrdfznrxmkGgD/QRNc90sy0l//4b3wDEWZHAPlcMAQAAAABJRU5ErkJggg==",
        "title": "Websites with a Purple Color Palette to Inspire You",
        "labels": []
    },
    {
        "link": "https://fullystudios.se/",
        "date": 1632503464,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACOUlEQVQ4jVVSPWgUYRB979ufu9uL+ZHkSBA1MUEOLPwhCokWFqJisBDRSkipiIJFCls7wcbGXus0oljYpVARFOUEMSEQEyTJGfRyuVxub7O737PYEOJUw/Bm5s2bx8meKgAJJCSRBAHt5Fl9b5j/0IaS4rYkkARAKgPsadgzO9mWhP5hR1aykiBRAKndHlcEBJJJrI79vHg78PLcquvVk6YfACCEjGlGxGQ7ScSRrj3siCO9fdbqH3bGbuQv3Q3ChrVWpCRlxxgJNGxv2dKgM3TS+/QyunAnWKwk5bN+LuDEg2Kxx6SJQGasXBCycnxevhc4Lpp1VeeT3kNOocu4ORa7FDYsQAISBLjGQdjQqYlcedzv7DO3Hu8LuplEiEJbGnRmXoTlc353v5l5HuY7DAQjC9fn6nxar9pwU5s1uzqXbPxOcwXTaqg05Ixdz8chZEFIgrEWXgGL3+PPr9vboZYqyYfp9s+vyey7KI50oOy4eSxWYtejRACGhFIWi2b2fewXOHLau3I/ODLqNdc1/ai59C3p7DM72kICnBP5KUGOh3rVtja0+df2HXY31tI3T1uturUJRq/mu0pma11/fqWuT+d4YQogRM/nUiWZ+7hdX7HjNwsDR92RM37U0vKP5Nh5f+FLsraQejlysrsKApk5DEhELVvoNAMjbm0lrS2nXo69B53aSgoAICd7qtlHSAGUYAzSVHEbrgfXp4RkW46HzLwusGPgTARS1sIY5ouQYK1IujnuGv4fLeA9e1aD6XAAAAAASUVORK5CYII=",
        "title": "Fully Studios - Creative Studio and Production House",
        "labels": []
    },
    {
        "link": "https://codemyui.com/stretch-and-expand-underline-on-click-navigation/",
        "date": 1634995557,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABuElEQVQ4jS3SQWIaQRADQEk9O0BssC/5cT6Wp+QHtvECOzvdygHfSxdJ/PP3HwBKZLXGw2GBZQAADJI2y2WbJIBmG4AMEk+3bZuBiHhqghGi9JQtJJAiAdAEMMa43W7R2vl8ltrn58fSe+9d0rIs7Xg62K4q2xRtHI/HqsoqSdH6Y8yv9b60Jqn33iJgQyEXjKoqSr9eXgGSchlkSCansd+2ljVJAqYgKjMziyAhoBR4PR7WW1VlGQKbM5feC6hKKSJa7juBIAlX5fv55fJ6Avl4bLfbvfXez+fXse2S1NCiZdV6vf5+fwtqvd/HnC61fnh/u3x9fTaX58wmVRV2jLGRrJkf62qjH/u+p7TsWfu2mmzlul6vQaHKEKCCybbedhKjsI8CxrPJpbW2fn1DhA2wny4gxYiIcNqoyVC3p8mfpcNAGnAC9z0N5hwhoArEaTlAoCoEUQAaZpIMkaTTiUKmSxFt38f3eGTt9qaAzaU1OejgBBKAIUMAbJEiJcJe+nK5vPWlZWV7eX+zbdjmPptNV2XVGOPnscDj8cicc86qahW0CZpm1+EZBXA6HQEAnHNsI4wSWfZ/Zys8cZ2+26cAAAAASUVORK5CYII=",
        "title": "Stretch and Expand Underline on Click Navigation – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://codemyui.com/curtain-dropdown-list-effect/",
        "date": 1634995593,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABuElEQVQ4jS3SQWIaQRADQEk9O0BssC/5cT6Wp+QHtvECOzvdygHfSxdJ/PP3HwBKZLXGw2GBZQAADJI2y2WbJIBmG4AMEk+3bZuBiHhqghGi9JQtJJAiAdAEMMa43W7R2vl8ltrn58fSe+9d0rIs7Xg62K4q2xRtHI/HqsoqSdH6Y8yv9b60Jqn33iJgQyEXjKoqSr9eXgGSchlkSCansd+2ljVJAqYgKjMziyAhoBR4PR7WW1VlGQKbM5feC6hKKSJa7juBIAlX5fv55fJ6Avl4bLfbvfXez+fXse2S1NCiZdV6vf5+fwtqvd/HnC61fnh/u3x9fTaX58wmVRV2jLGRrJkf62qjH/u+p7TsWfu2mmzlul6vQaHKEKCCybbedhKjsI8CxrPJpbW2fn1DhA2wny4gxYiIcNqoyVC3p8mfpcNAGnAC9z0N5hwhoArEaTlAoCoEUQAaZpIMkaTTiUKmSxFt38f3eGTt9qaAzaU1OejgBBKAIUMAbJEiJcJe+nK5vPWlZWV7eX+zbdjmPptNV2XVGOPnscDj8cicc86qahW0CZpm1+EZBXA6HQEAnHNsI4wSWfZ/Zys8cZ2+26cAAAAASUVORK5CYII=",
        "title": "Curtain Dropdown List Effect – CodeMyUI",
        "labels": []
    },
    {
        "link": "https://uicookies.com/free-html-website-templates/",
        "date": 1637842160,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcUlEQVQ4jY1Ty0vUURT+zr3nN+NzUCnJ0qJN1LR0U0IwUpHRJgiDirAgCmkxrlq06ecfUOSifNBDCQqaWgQtLJCZXRG5bGxn1oyJPabMbGZ+997TYlJnyqJvdw/f+e75zoMO38rkjOgG9qoAIqwFsQaiPTSHli4X8+b+p6JKkfbIQ7DElsL1xWKQLBS/JwmkheAqskmELARh6iso1Xynp+1F5+C7k2Gl7oqjCGsOaVsIHk/0tl5Z8/tf2Df49jiFwzrmJznZ2/Zw77WZE151eJQFIiQSifnCABiA+dYyST8a21f9pNMAKfaU5FN+pwGAifNbHlx4NPuGCSAiuJRPprtbJJEgu1YFm4ayQS7QBw+NZG8aiyoHsTNfaZ7LSR92gpAA2odna5qKJgoPMI5FCSk488oB20RkDwCjFG3Oq9raCoH5aFoBQMRih2L9TGlm1oAzxuQddzydXj959JJQgsjuH569SOL6KwSQjgIA2BqiqhBbY+MAoFgPqKDgyIdDCzwA1jmnQaTVvzpfDralJYk2ggBAEZGIgAWQ1QLSAACjWZSxRjMPACULRrMAQBrpSuHyRywddSkACxpTTUW72y0PxAALIZ4q56wKiJATEYgQ+kvByXMblwC8/KsfEXJDWYEIcQ3lM4tCHSCSlO+7mC/8xyIBqM5NSv37dkmh34F8wfVsRw3lM3RkbC5e4IarZuHj6fHe1tH/aWjXYOYUR9bdDpsvfYRYkruObb/h1TX2FBc/jwvkuThxoN9OU0RIkSLQrlBdU1ewmBsbv/f6zArpwMhc3PNUXGtvaylCK9ctAiwPy9pgOgjcwJOzGwYA4CdlDSCmbRTBkgAAAABJRU5ErkJggg==",
        "title": "30+ Free HTML5 Website Templates For All Niches Of Professional Sites",
        "labels": []
    },
    {
        "link": "https://www.hellomonday.com/",
        "date": 1643197006,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACwUlEQVQ4jW1TPUhbURg9976kSePPIBmMhg7Z2qihgyBBcPGJQyiFVrsVx0wiBBy6aKcMYhzapYKtiCmIFGIFXQIBB+uigao0mCIRrJBFUVDzXnLv6fJekNKz3HuHc77vO/c7Ag5ISiGEdu4mgDfFYvFlqVTqsCwL0Wj0rr+//zuAD0KIHySFEIIuWTjnE5JfNjc3rbGxMba0tBCABqD9fr8eHx/n/v7+H5Lv8KCySx6+uLgoTU5OEgAB1B2y+9YA7I6ODuZyOZLMknzkiowdHh5avb29BGAD0FLKJlEIoQ3DoNfrJYAGADuTyZDkR5AMnZ6eliKRCAHYhmFot20ppXbmdDugz+dT8XhcZ7NZksyD5Pvp6WkCqHu9Xu3xeOiY6RLZ2trK0dFRxmIx1dbWpsvl8h3JJEk/yuXy72AwqIQQyq0MgH6/nyMjI1xcXOTx8TGVUjw7O1M+n68xPz/fIPkKALC+vt50urOzkzMzM4xEIgwEAjw5OSFJXl9fc3h4mCQ5NDRkm6ZJkp8BQN7c3GgAAgASiQRnZ2eRTqdRq9VwdHQErTVs20Y+n8fS0pIeHBwUl5eXBOADAE84HJZSSmqtcXBwgKurK5imiWKxiK6uLiilEAwGEY/HUalURLVaRSAQgPMbQKVSKYZCISWlbABgoVDQdLC3t8dYLMZMJsPz83NNkqFQqJ5KpRTJgrsDmVQqRQB2MpnUJGnbNmu1GpVSXF5eZl9fn87n81xZWdEAGo43b12Bp9Vq9efc3By7u7vrOzs7iv9BLpfTAKx0Ok2Svx5uMUg+Jrm6sLBAwzDUxMSEvb29rXZ3dxtbW1uNqampOgCdTCZJ8vr29vZ5U4CkfJCLTxsbGw3TNDkwMMBoNMqenh4mEgmura0pkt9IPsMDuEFqRpPkCwCv7+/vw5ZlaSml1d7eLgCsCiG+/hv9vy4681eHJJttAAAAAElFTkSuQmCC",
        "title": "Hello Monday",
        "labels": []
    },
    {
        "link": "http://slaveryfootprint.org/",
        "date": 1643197242,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACEElEQVQ4jWMMCQlhwAG4mJknGuhD2Klnz0EYLN++fcOlYZaJ8f/v3xkYGGLOnIULMrq4uGAqZebglC9rhnN/f3j3eFIbhM30GwP8ZWaRKG78+fcf95fPH+/e/vn33z9eAcmSxt+/f7erKLP8/v0bbhKrpLRoYAyrpPSvf/9U9m3J//x2+bPny589k63uZOLg7FZVVWBlZfqLBEQTcpkkpD5fvfj3//+j+3f9//s3QlzMR0Tk89WLPI8fKLKzMfz9y2hsbAwxXiQmnVPLgIGB4Xl3zZ/3bxkYGLrU1PR4eZD91vPgAcv9+/cZGRlFpGUkNPR+//vHwMDw880riHTx9esS7OwBoiLuwsLnPn8pPnr00+/fjGJiYgwMDObJbib8t9ecEH557AyykYJxWVyWDgwMDG9ndP+4eJqBgYFRUlLy0ZrnyIqKpwqs3s+JLMKhZ/LjEtQgxt9HGRgYGNadEt14R6vV9aiM6B8GBgalCFmB0pb/37/9//7t1+WzP04dhmtmglDtoguvGuT6VUpef8jGwMDgYc/EIi3PLCTKpmvMHRjDhAQYfx9lUI9V4u+ex8DA8PvKud9nj3XkfWn6WMHAwPB95dzfV8///46SdhhVVVUhLJ6O2cgSP1fP/332GAMGYFRXV4dzKovYNdWYGBgY4jK+YyqFABYmJqg3mhOf+et8ZGBgqJ0vxcTEj0sDAKkA2j0mt8ChAAAAAElFTkSuQmCC",
        "title": "Slavery Footprint - Made In A Free World",
        "labels": []
    },
    {
        "link": "https://wovenmagazine.com/",
        "date": 1643197251,
        "icon": null,
        "title": "Woven Magazine Home - Woven Magazine",
        "labels": []
    },
    {
        "link": "https://paperplanes.world/",
        "date": 1643197630,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACz0lEQVQ4jU2TwWtcZRTFz7nf997M60zMJEZqbag1akvpxrUogtYYbBduxYUgimtRoRSUgW7dCIob3SgozK5QbQ1VpIJ/gYIohWBtsS4mM+1kmvfe993jIo30Li/cw+Gc+yPujSSS1M8XJ2tFt/O6XC/A/YgIBdqWkZvznfmXz73y4PXhUDYc0gGA9x9f/X72fhGKs0VRLqe2hecWBBBDRAwRObe3mro9//TphU81lHFIj6ORAsn84+XZF4uD3hvTyRxNWycIRoKUkFISDR4sHhwM+p/8cnH6BM/wndFIgQBw5fLs3ZWl3kfj7Z3GoCjJjBT3LULIrTManWZpabFfjrenbz1zevA5f/j27qMs9GuwUKXUkpCRFCQahJwEAhgsR+3cTpQzd8oSbdNsY3d+0jymN7tV1W9zK94zDYkCUDdA94DhxFNdrK4VTJmiwXbrXVQHeiuqqtciLZxKLgGky0kQKQOk8NixEg8fiig6xI2tBimJFgiYwV0i8FJ0YjXlBBEkTCk5l5YDjp8oUVXEv/8kHFotcHvqoGFPWWDyDCePRDkgIwTCJRxdK3HseIm6dlz7s8XjTxbISbhzx8FISHuhigRARRj+CjEcTqkVCLtxM2E+d5QFsPJQQIjEdJKxWwtlNLmLIN1CoCdtGchLDKQAkVSboOt/Z1g0jMeOqz/N8cfvDWiEAMAoCdhb8DtubuoRt/q3GMNCbhMgDwBURDAnIGeBEmI0QSKE3ClKtm19K6b+SVtf501XPtfrxyAwi5YFsG0hAQrRFAqT71WbGcy7vcIEvvfsGW7baKTw8ou9z8bjnY8fGHTKEEIAmWR0AXKXXHCQKRZlWFioislkdv75jf7X/7/yPl2Xruy+XRTxgxjCYQnIOYMCQggIBHLOW03Tfri+Xn0lyUg693HeF7lwYXawv1S96jmdknBUEmLgNRM36/ruNxsbi+P7cf4PWUOR6smcLPgAAAAASUVORK5CYII=",
        "title": "Paper Planes",
        "labels": []
    },
    {
        "link": "https://koox.co.uk/",
        "date": 1643197721,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACQUlEQVQ4jZWSS0hUYRiGv+///3PGo4MVGuGEeanMDItm0AhE1MIksZhuTtgFF12IcDORGiGFzKoZMDAaJYkQQSqjlhUSFLmohblLBwQhRsLMcTxzzpzb/7dIQ6WN7/L93ufbvC8WNvtgIyIbSq8HEAAR1ziICPgfABEpwbShaWqSIDJKGaUEQVMXTVOXKCUrj1YA4GoqefzQ0UfBMLct27Es22AAvcHIEW+1qqmICEIsAwRFSkv5qxoP7Cp/+uZZ+GY34VyhUuhaV3Skv8ZbVV9Ro+kqpRQRsTjgTWnq6eoTewtKQoMRQlnZjt2tjS1ciOirgZm5uOPYoat3P06Mvf3ywZ3pJoaRPlPdVJK/MzQYURS34lKmf0xTpERg/NesJMkZGZl3+rsP76tsqKxLGzrJzsq+0BDoG3kiuxQAsG37VJ1/MjY5+zPurz1pWiYAyJIr+rLvStMlt5JFUqbW8fje/etdCqXccShjw++ee/cfzN+eP/z+hUuWHcfeomR1tra39bTrpkFzyj2/1URsJtZxMfh5YiyxlGipPzu/MK+n9bycbeNTE3mbcjsv33ow1DO3tMCYhEUBL4IwLbMg19N27kZsegoZ7X09ACBun29LJhN7ikvDQw/n1EVCqADAooAPQQCAYRmezVvLCktHxz/JsgsRLdM8VlH79fu3pK4iIUKAAMDCZh9BAYAA3OGcc86YBAIQBQBYls0YIwQdvtw0AwAuEFEIQRAJpX8LBSEQACiTAcS/9KrxibUTW6V1lz9xwu0LJRbhuwAAAABJRU5ErkJggg==",
        "title": "KOOX",
        "labels": []
    },
    {
        "link": "https://2019.makemepulse.com/",
        "date": 1643197810,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsElEQVQ4jYWTT2iTdxjHP8/vzZs0TU1saxp11sporeK6aop/6sENnHV1iBUEvXgQRbwI3jyMYcHDBl69KIIgyC6ym4KwQnWO4v4gQ41taZu0pmmzpK1N0iaa5H08NBUpFp/b88D3w8P3+zzw+bJQlV5V89GsFfj2c0KDqqAqlb4D+GnD9paHrQf25cRl9QO4VhGLqqqICHC6oeXLc1t2tnU2dbRboeYt5OezDD35K74aQAAVkSMbtjVfbf+hK7z56x346mpZnHtTLBdLmhyJ2jjO358CCKDAL/tOHb8c7ulGkJKKSPTfZyYRGXbtOdnDzHgc4Cnaaz4GGMCxq6tuHb504ezW/XtKs68T4vHXWJMvB0mNxvjqu29UEJMan5gGInDlg7OCqgJXuy6eP9vSubuYHItZ1Wv91uTzV6RjE+w61o3trXKyM7P6/8jYIyCDCGbJbUBkb7jnyI+tBzpLqei45Q+uk8TQsKZiExI+2i35TBbL7ZbEy0HJJNP3KukYAyiCBkINl8PHupmfSlK9NmDmJqc1/nxQdh49rPmFBRXEMZYxkb4/RoAHlc3LpneJ1Lh5V9uhKn8NjuOY4tt3DD8ZkLbvD2q5WKRUKOAPrXOGHg1I/MWrn1HNsxQxplfEAfZu3N7iK78tqu31SqTvsTbv363uai+FTE5q6mpLufSsPfDrb78Dt1nSOsvOA3yxJlivHp+3HH36jwZCQeobN5GbnSOwvqFYLpXs+9euj+bSM2cqMX+o5RirjOXSwsKCU9fUaAKhoKPqUL9po2tqaNTuv3Hnv1Q0dgLVycrquhJQsL0e46ut9dhuD/lMlvR4nMH+PxcjfY9vAldUNVs5bWfl5QF0NXW03/UH6wuLc/PzbxLJ4ZnX8QHgHhBFVfiEeCVoDeAD3MvDygub1UQA7wFeTB84r2qqcgAAAABJRU5ErkJggg==",
        "title": "Nomadic Tribe — makemepulse",
        "labels": []
    },
    {
        "link": "https://bruno-simon.com/",
        "date": 1643197842,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC6ElEQVQ4jXWTy2uUVxjGn/dcv++bZDKZKKI2rQs39R8QXRm8oq2KGiVQDESl0JouOmKruBgUxWy8IK0UlJoWC07oIiheaFftwixad7ZEQQWhEKVN44z55ruc83YxGiZSn9U5nMOP530fHuAt4hrk3LkKMe+t7U4A8HB4uZ3p6ZIh4nzF4pDp49+zN4F/ffNhtHjBovK0m6mXd4/NzAPEZ/tGlcD61EMQc6SD4E9nCj8E+388DwCz3+4ZNoGtSK3fc0JNuyQfsQOXR9oBN4IOvSWe9ROk9AMCb7cLu4tpkwZIq0ltxL00owYzjwprt6qOQm8zx6po85kJAQAeSCCFZ5ePhp/eGvRCD4HIMbvVPktXo9ThieSlYODKQS/NBVrSA63VRgBQAEDMxFIKCsIAAFTY+QSeJDF1slIensgLWg4AZKObfqoeK2PuzAGgFJEyIJlGfHtfOZlqDMFEnn3+Gxfs7byRs+0ofJBc/2zEbhr5AsD910tsxSGURNMDwp5wzxp/287wk6SRjtvJ7y+GWy89dh4VCAlTKh5Ofz5yhe8cKryOsgUg4REGICFuZcCxNOY/TLGwIVkxVOEqRLDz4rlmM/7Ipa6hy8XBVAXfAWsEA9QCKOMQWbBW4+HeayedEAeYKRI2qozd7ycACLd9fTVn2uFn8+dmQWmHW7t+LwHcsmEMAwQSuvi01h96yY8yRzGDgm2DvQM8Ua3lv1R3BetO/eSz7CtEoYeSW9pGIMAYZs5nenePxabp3lFhYFipKWH0++iK+n2ergEAR+4ecsfsudSWgtXwkoQt7EzGDy713u/Si7qVn27edeDL4tlsRWh7IPv1eB1K96EQSvxTvzvngIgS5ByzUn1SUFVouyz7N6nl0h0L1p1+5BifC2NfqO6uL1VgV7qnz2+oqcmz3PIOcG1fOYYOnXqZcTP0WcmmPZsvvACAV5+4fnN4oe1c8q42XKeVRx/8b4XnVZZB/Kor1Tfq3K7/ANmyOU5Q83chAAAAAElFTkSuQmCC",
        "title": "Bruno Simon",
        "labels": []
    },
    {
        "link": "https://matruecannabis.com/en/shop/pre-rolled",
        "date": 1643198120,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACWklEQVQ4jbVTS09TQRg987j3WhsfiSCvBFmogRATBRMTFyrRhcSYuAFXLu3CRxMiGF6FAUsoWNSFC+UPmNiVK1kYY1wSXJCoDSFiQXIhSIC22N5O595xY0nTVHee5ZlzZs73zfcB/wMaIADwIzJ6KjHxqKmYKwUte4MQBABUKnlP72wHACDW0VFWW0wSLQQFACKEBwCmq1sMrc8AQGcs5gJAQbNnKhefAPq7EPuQ3kpQRnaX2m80trW1qcJZsZ4XyLXI2DWivSzpC70HAOo4PqmUn1EDTXNzFgBFAG2Pi6tQQG1IzGiA7MWhcFfd9M4bW/SPAoB1REnGmYSGTFuWggaxh3qjXir9WkIt7/kIoDVAqnqH5jXn3dWMhlb6up9W90R/cc7XTUbsE8FgbnWg58VRzh/kDXa/IRSOiz9eUmjMJ9tmZ6en84nBhwPHLDO8Jr1bMudcJAy7lJvxOtN4ueTInuNjE9G5QMBora11iRBe2b/dHBdXZCYbcLgVIwzUzOVuuv4Dz+p7Bz+WagkALIdHrhv5bCeVskZ7oMowvqrDh941tNbMrO1WUBmfbzdTycs07zZqCs9lpq18vlcNA8NvOQAozrY9x/vGmZEFA3U1EpxwuTC7YTBfmpigubxGghqGCUJcpT2b+/dvlZ0DANiZnGzJZJJ3Ur6DXVWmyTLJzSdWZcXjirtd8bIlaA2CkUss9qVStzSfPOf33ClC1e1qEf0MABui/7QHPHckgrOLi/MdzT8JxAe3dKgAACvRyIWFcLiulLcjw/WJqcj54of/ieLt+9smAsBvgQoBRzcGd5wAAAAASUVORK5CYII=",
        "title": "Pre-Rolled Joints: Shop Online | MA True Cannabis",
        "labels": []
    },
    {
        "link": "https://pizzabillionaire.com/",
        "date": 1661511465,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsUlEQVQ4jW2TQUgbaxSFz59xnEQzGXRSmNjQMBiy8EE3Qhci1GXf4mUXEPcVLKhgF92KLnTl5qHvZdNFoGQlguAygqktOCCSl7eoNUhpJaY6G6vRRmf+00WNxOBZ/Vzud86Fe3+B+woAkAA0wzD+ymQyL1Kp1B/d3d1dJycntUKhUNze3n4H4AsAAYB4QKMzMzP/OY7DdtVqNc7NzbmKory87RWtyYhGo//m8/k7wHVdb2try3ccx/d932vWx8fHCSBNUtzBwWDwnybseZ63sLAgl5eXZS6Xk7Zty6GhIVmpVCRJf3Nz0w+FQjtNAwD4c3R0lCRZr9f9dDrNgYEB2UzMZDIEIKenp0lSFotFGYlE3GQy+ShAUmia9npsbEwCkEtLS2J9fZ3pdBoAuL+/j93dXaiqKjRNAwBRLpfRaDRkIpGQSCaTj3RdP3EcR5Lk4OCgpyiKXFlZoZSSuVyOAJhKpeTh4aEkeTM8POzruv6BpOi4uLhAZ2dnaGpqSpimKavVqqJpGkzThBAChUIB/f39zOfzwrZtLC4uyr29vY5oNPpWCPF7jZZlvent7b2KRCKMx+OboVDoeGNjgyS5uroqz87OSJLZbLZhGAYty9oB0NG6RiQSCdu27aeTk5NaMBj8sra2drfO4+Njf2JioqHrOmOx2GFfX9+T9ju4e5BUVFWtZLNZkpTz8/MyFotR13XG4/FiOxxocrcFBQCllN8rlQoBsFQq0XXdb5ZlTR0dHY1Uq9WvtxxbDZomEEJIRVE+lUolAAiMjIwEbm5uPh4cHPzdEiTvnXC7wuHwh3K5LGq12s9wOOyrqvpsdna289bg3gcSbawAQNM0HwcCgc89PT1d19fXqNfr709PT5+3TtqU8sAA4urq6odhGPuXl5cpz/P+V1X11fn5uftAIH4BVQqGMEMcKPEAAAAASUVORK5CYII=",
        "title": "Pizza Billionaire",
        "labels": []
    },
    {
        "link": "https://artisticodopeo.com/",
        "date": 1632503388,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACbUlEQVQ4jZ1RS0iUYRQ932NGnXGUHKgkyyiSMpEoNRKSosfGFKLCrAyiICroqVFEtTBcZDQt1GgRhZKlLYIEdxUkjNpQaFGhlCARiQ1OTY3/835fi14gTkVneTjn3nPuZSM35mn8gAKPmCTrC/a96UISPG3JX+2VVofkOhsAuEUSFkkYJLue+YtX/ckMACsOvuohEsWuYh9MV4INXlukNVh4MhFcX3q81xi4mjeHtFyghfu6aP9wFAD6WgoK071m7scv6T1rjw18AoBw89JqAdXO+puX6BROOTHTl/B5rXOk+WHBlFCaj5pMF8zgbuYkeUZ/JjBdT78ivWdibt7b2WND49Im8YTAy6SgJsuVWQDgggNAbiDVSjXJGzQdIX6X0KWM8/DC6MvNMTdlQDokFzuk2xX4VyjUAwCB7dCauWVHXkQBRB9eWRZ2iM9Sit0jzbMZ09Xj5HusNJS0SGYAAIN+T5qdAQDFWHcas0/83Mk0yh0STa4W3zmlP4OxTACMW0qct0j0miQnHJJn4zxrfkVtpMLHfO/uhraevnO5qnVMzQxsOhnZZTiBEptkyCbPkEWedsMJlLBk72prrHqkFNaQYlAaw7EJz/K6S22JqTo+nfn2hQ1Fhs0Dhs1tw+FG3BRRr09tnE6bNEHDod3B1CDdBwByxYG6htbn/zSgsbbGr73qFilWCQAOMQYASqHDz7B3ag0x1ZzQuO4qPuIQTpFifsvlfUaCb7c0T4vbfEtlSWHkQWTQmPYGMVdn5K80d1quCk06ojxuiRzDZutM8IvcQXeo5eZRT5o2k9X+hc7ObWIq11hb4/+r8X/wDVbqLg6Lv0REAAAAAElFTkSuQmCC",
        "title": "artisticodopeo.com",
        "labels": []
    },
    {
        "link": "https://thebearandhisscarf.com/",
        "date": 1643200131,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACwUlEQVQ4jX2SX0xScRTHv78LV0QFy4lcQExvE5EwbdkaMyN0jVKbrofW1lPLVq566LVn321rvZpPbbXmRGNljs1Sp8JMERUUg3kJ1Ckwr5q50F8Plav8cx7P+Z7P2fecAxwR0y9kV6Y70muP0jCHFSilaVt5LflbuQ/yKaVph+nIQUmHw1Hv8/kexWKL5QxDqEajmTSbzU8bGxvf/6+VHjBZ2tra2ry0tGQvLTWCUorZ2VkNIUSklPYRQnaOtDA2NnZ6Y+NbYXZ2NlQqFVQqFZRKJdY3N/mJiYmyIy10dXXVedwjzyrKinlL9WUEAnMgBCgxGDA08AGT01/mLZaqhw0NDb37AG63+1RPj6PTer7QwJ/QoX88gaGBTyCyTFyossBapsB8KIKPbsHf1NR0vbKyMgAAkj8Ao9H0JJ/LqC83atH2xofnnS6MjnowydVgZHgUa+F51NWWQ9z4rpoNLmz19vb27e1AFMVcUUzWVJh0GByPoLvfg1hwGtvVzdheERD1DsKxrMTw5CIqTDqIolhDKc3ZA4RCoRwJQ/OyMtPh94exGg4A1mYgGQO8TuDiHcS3CfyBBSiy0kGwo/b5fMf2ACzL7gJkB0w6pHIFJLa7QCIKeN8CtvtA4isYzyuwLAtGmgGA7P7q+Q0wmUwru5QRvHMi9PpC6NdmQGb6gEv3gHgEjO8d9GdtKOQNCEZ+gIJZMBqN8T0AIWSN47ieqSk/+BN6XCs5jjLrVeSkksgJOGE+Z8FN2xmcLCrC53Ev5TiumxCy/s8ZBUHQtre3v5TL5dbi4mLEE0kEg0GksVJotFrodTqsxuMQBMHV0tJyS61WL+97JI/HY3Y6nW0ymcymVColCoUCLMsikUggFoulWJZ12e32xxaLxX/gJwJAOBzmXC7X7Wg0eiOVSvGUUrAsO19QUPDaarV28Dy//Lf+J7JMGUrZ8+CSAAAAAElFTkSuQmCC",
        "title": "The Bear and his Scarf | Club Brugge",
        "labels": []
    },
    {
        "link": "https://fwa.thecoolclub.co/",
        "date": 1643198843,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABUElEQVQ4jZWSP0vDUBTF73tJlFr6LwWXGJQgrs4OpZNLNS0iZBLs4pDFDG4qWijq6uokuPgt/CSiRWzUtE3VBEqr9jgUk1hroWd6j/s7vHvuuwwATSI+EU1EYnDCR8+p1xvvXjKdVhRFIGrZddt144mkqqqSJP1wAICu83K5Zy0vzGdlWdO044P968rhytJiNpOZU1XLsprN5oAkAOj3b04rylT4miTwhCgEV8ZYtVoNDV+v7slqfnzruVzO930AnIgY46IosrEGSZI45zSYEkum8oWCNjP972REsVQqxWKxMPTnW/tq15yNxAjEOTdN0/O8SGgAQK/VuNjZliNZB3HL5bLrugEWGgB0n5/Ot4yUEP6mYRiO40SZXwYAnceHs81inDMi0nXdtu0hYNgAwL+7PdrQi+tr97Xa3yobuXydttslSmfkv6XRhjGaeFu/Acsd8+F9HDI+AAAAAElFTkSuQmCC",
        "title": "The Cool Club X FWA - 54 Coolest Websites in History",
        "labels": []
    },
    {
        "link": "https://ispy.heihei.resn.co/",
        "date": 1643198650,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADIElEQVQ4jSXSvYtcVRjA4d97zrnn3rkz7mZnP7LJJsZ8mCALmiCiKJLCQomIhaBYWFlZBizEf0BbGztBsBGbCAYRTacmKGiRwBpi4mZDkk02+zGzs3M/5t5zXov8A0/1yBufvb3ncm+1Dep6mSSJpdwp6czmaBupBiWqivUWcRYNEeutihVpiza47sKUq4ZF6qcyktwzXh8hRmirhthEECXpeIy31NsFfrqDWEFDBNHaaYzRONGk4zVMgqhGrHXUdU1d1kgLeWoRFZKeRzXiklSrohDnbXSTYiLGWYkxgoj09k+zcW+Dt06/ylMLh7i8do1rqzfIotDWLcYaUHBZImHSivG5RxBi2SJGqIua2dk+3V7OernF2ZNnOP/a+3S6Ocm+FJ97QtViRB5DLkuo2wnluCStPSKG4JQfV66wOxxxfP4wRw4eYNyWWISJU0IGZVGSZSkuhEi/O42mkTq2DIZDZpJ9MAmIzdkphgxWx4gIaZbSTToE29IkDeO6wg3KIZ+cO8/pwyd4/YuPONY5wOfvfUxgwqWV33n5xHP0e7P8dWeFcVFwdvkMW6NtimD48MtPMU0IXN/4l5ubD9gbjTl59BgqlpW7t/nh6m/c2nrEf5urPHt4mStr/3BvexOfZnx75SIoGEQIRNa3Nnj3pTd5otvj+79/5tSTz7C88DTDaofZqUN8c/kiF/74iet315jUwi83/2T//DxG9xqW507xyvHnuXD1Ett7A946cw5vI0eXlnjxyAs83H3AV79+x3yvz8G5ReZ6CxxI+tS0yDtff1DOuKmsHTW6vvlA0o5ncW6RxCasje+z1FugqSY8Gm5RVzVLiwdJvNetckcaDZUThfvjDUYPB/SyLlVdc2P9FhqUbtLh5miVyaCivzSHawO31+9gcse+uRlcrbjQBDV7UafzKcULNhoyyVBVmqqhYzw+t1TDAiPCzEKfJPMaNCCpVWcSZ1weJbYq5cNdjLeIMYgRYt0SjIA1uMSQ5B6TWtoYHjdUMW6yW7WqkWav1mSqg0ZFY8B4h3hHPpvTlA3OO0zmiE1AjNCMJxIbbf8HFLCEeYS9RfwAAAAASUVORK5CYII=",
        "title": "i-Spy",
        "labels": []
    },
    {
        "link": "https://www.alanmenken.com/",
        "date": 1643199948,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABd0lEQVQ4jZXTzUvWQRAH8M8+z+bjC4ZEiYfES2oE5SEJoqKj2KFDx/IvyP/CS9AlgohOHYNAicCLUJ49hHQJQYhOnTqkoL3o4/N0+M3js0pQDgy7Ozvfme/M7NadTK7iChr49r+gWqz38RN72MYTpM5lQj3WDqhz7thGInPCaVxEPYehjYMia6vYpwi4jSW8wDBW0MwBnsZdjEaWPXzCMjYiUBPf8b4I3pfxHON4h9f4FRmu4ZmqWcuq5tXQj4zbmE94gDf4UUTOxTqDG5jFAD6gJ/xfOgZqRPMWQkt5hKc4FwwPQTma1gyF3xiKYI04t/FRd/4JORegM5gMx/NB8aAo7TH2dcfbxH7GZTzEBWxFE6cwGE5vsRZ3x2UuhcMqXhX07mEei7gTts/4onoPfbiJnlTUCBOqkU7gVgSiGuE0xtCLXayrxotqvteDZjv0K87+hfYRyQFu4VTU3x9N2iyY1XT/RFv3+beSozKKS6pft46dfzH4A2mKVDlSIrUMAAAAAElFTkSuQmCC",
        "title": "Home",
        "labels": []
    },
    {
        "link": "https://www.eggshopnyc.com/",
        "date": 1643199664,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkElEQVQ4jX2ST2/TQBDF36x3N6FuG0FjZ4OaICG4AOIAZyQOSHwAPjhCqsS5wm1j14U22ZDY8c5ycVDwH+a2s+/99GY0hO6i2XT6noVQkrlgojHK8uJHnl/36FvmD1EUvQRAdW94bsxHAMOmOGg25sa88t6Xiyz7XrcEgJ0eDsuz09MXS2v/SSEafuWJxkmaXhz0GADyPL8WQigAR72AOI6flMw/Afiu2biqUmNM3AsYEEXe+tsuMwD47faXBsL6SS2AV6oo11nRB1gvl46lLPfyQwABgHNO+tGIuswAoI+PB8452TWCBwDNvD3R+qzx9xcow/C5tTbrAgAALtM08YGejTE+Qb39PdwY85qU8qvV6u7Q04prjIkU0TsB3PJutyB59Ji4GlWo1ldZ9q2pbx2StfZ3KGXFpB9xVZSBCGLOxNer9U3SWkpzhH1tgAeozd3N/f0lk1smSDZdaXsBWuu5FuEUALzkAIBCz3F1AQYjqT8Xzi1mk8mbwOm3AKouc1+Rr+POJ08/PZuef/mf+A+LhpbSwmUzKAAAAABJRU5ErkJggg==",
        "title": "Egg Shop - One-of-a kind egg sandwiches and bowls - New York City, NY",
        "labels": []
    },
    {
        "link": "https://weareosm.com/",
        "date": 1643199801,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABX0lEQVQ4jW2Sy07cUBBET7WvhxnBiiBYkgUfnE/gQ1hMpCySb8hDQUKgRJGYgRAZGN/Koq8tFOKVH+dWVVdb66tLJAAbQMI2SMJYFoDAIOMy086bRAGwEAI8PWCV/GRJLxwECBmndAoZQ7FN0pMweTZf5OH0QILyIr7npPNQwqZzFBtRbZfMJuFGywJXYdFV9f1uc/DwdfX4fe/5l/xccGYwcy0GU6Mv45/ju/fHtxcHw5eu/pZ3wkVSi2dL2GDXKMun67c/z4+2664OVT0Ka89QTOsuu5Zdo6yebs6u3x3ef6xajLFUa8pA5MSyMbatKPXh9Mf54d2nMZZZ91QfghDMrUtUlTfbD0fbdY0erMwJDYNIp8klFuP2ZHPRebCi7XNC8ypuXgaq+v3h2/7wuarLVf5Dp4M0LU3S6vGyjPcQyHpFA9EayDlcF7uNPFoB8isaCE8qbv9XzXL5nzzwFzxj073wVl29AAAAAElFTkSuQmCC",
        "title": "We Are OSM ☀️ Software Development Services | OSM",
        "labels": []
    },
    {
        "link": "https://www.sliderrevolution.com/templates/background-effect-hero-collection/?utm_medium=inline-ad&utm_source=css-animated-background",
        "date": 1648979064,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACTElEQVQ4jVVSPUxTYRQ993s/fbSvQFsgSAAJRAhWUUCN8Sc6OaCJDCRqoi46CIOLOrqoiYuJLBoTYxxMNNFBHFycMGqiJohKDP4UgkAVtCn0lZbX1/e+61BK653PPefcew6d2jGCsmGAAM+VuqEARIS8I4lKALWEApihqJReco6eaT90vNXNy+GL7+NTlm4ozGsLosQMCEGO7TW0mANDnfXN5vyUNfN1Wa9QJZcUxDo9wCSQW/UGhjr9pmZn3ce3JlVVgLnMEQQIYDAghMim89FdNfsONwF4/Xx29nvKH1SZy/gBwQCIicAMIhw7H1VUkUraT25Peq5czbgkqGiaAVYJzAxFoZWUs6evMbqzliXPx6y9fU2aLibe/ol9XqoIqOsyyraGE0TEAECD13pDtYZkjk+n27aEtu6u23+k2bG9ybGEbihgAkgAIAE743Z0h9uiISJ69yJ+//qnO5c/fHyzWBFQT1/qat0cyq16hTQEACJy87JjewSAlbQf3JhYmMvMxVKPhr8sJWzNp/QcqHdsr3CMQPGrlWEfgMX5zHLCNis1s9qXXnYSv7LMXBXxEa3B1GJosJI5IqprDFRFjL/xDAmqrjE2tJhElErmmNdgAgBL1g1l/NWClFwVNs5d6enojmzqCg9e7Q3X+Zl5/OWCbigsGQAVyicErVhO/9n2kxe68P88vDnx9O63QFCXktfLx1IiENSe3fsxF0sf7N/Y2BYkovh0enTk59job7+pyWKfCgoMJhBIUNZyGAgENYCyK3lmNit1Wda+f43iAvEMVN9DAAAAAElFTkSuQmCC",
        "title": "Background Effect Hero Collection - Slider Revolution WordPress Builder",
        "labels": []
    },
    {
        "link": "https://html5up.net/",
        "date": 1650457458,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABxUlEQVQ4jZWSz0uUURiFz7n3fj91xqIg0oIk0YYKpDASimihUEZgC2nTwnXUSpdt2rQJ+jva9He0aBVpERGZhTAVjTqT881373dajJXQas7qPXDe1fPw2/ISBokZaA3ASRrsgQBIGIOqAgkA0n9HBWNRVZCcSISgTod5rm4XAONYRQGJcazgITBJ1N5lksJaA+9ZqydXrokmapyNphqI4uj8dDwzy5FDbmIqapxTVSWzV1Grw3ujXmFHx+oPVqqdVjq/kM3ddKfG6w9Xs+tz5sjRbH4hv7WoEGr3V9zomHqFAY28V+lHVh9Fk42w3WI+RNJvffUbHyGp24WkX21UEmgAgYTkP7xXe4dDw+W79dazJ8nM5XzxbtXeRZrSGqSZgidhINEYWNt58dxvfjbOJRcu5Tduw7mw+al49TKaPHP48dOw9SVsbjBO2Lx3h8M1O366fLvmTpxEqMLPH8n0xfC9Wa6/AeAmJt2x472119V2i1HE5vISQlBRMMtU9gDQWu3twTmmGQAVXZQlswzWQXKUYC2HhqGKSdrnxfoIJEgAmGbI8j41kE59ogr7aPsJ4Z8MB92RHMH9QkD424A/9aBrHNzW324x0NyjMdWiAAAAAElFTkSuQmCC",
        "title": "HTML5 UP! Responsive HTML5 and CSS3 Site Templates",
        "labels": []
    },
    {
        "link": "https://colorlib.com/wp/free-html5-contact-form-templates/",
        "date": 1654952835,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB10lEQVQ4jYWST08TURTFz7nz+odO60DHAhWCENLYGHYmslPj0g9gYuLSj+HGnR/BlVtdG10JxsSIhMQYQqJijPEfxEJLYUClM9N3XcyUtrrwbd575537u8m7hzcu3UG6CCj+twwpmtoUIMC0mgCg/xAMSaZgGepAAmCvpIeBIUSpAzYmYJLp1uuVmIwIKWK7lqQIwzAmkMkaa5VCazUKYwDZXAaEtWpABu1fbikfR93j4/D0uKeqrZ2DETcHwFrrT3gAdrb3KSy4ORN14otX6pvr3/xxj4LqdLnb1VG/GIXx9tfWteuLIIQMO9Hrlx/bzYAP7j1rNQKv7DqO7O8dTc9WxJHPH36cGnPn6pO7W+2wE4/6xa0vzZJXWH36Xubr1ScP10bc7OHB71fL72oLU3PnJp8/XrfWFtz80qM31Rl/rFJcWXrbbASzF3zevnV/8er5jbVPXtktV0qbG9+NcWoLU61G0No9DNo/z9Ym1OqZGX+vcbTafMGbl+9qV1WVwnR0mv6/CE3GCTuRtSpCADnmTcHNqyoJBaF2aA6Aqs3mDMCeR42qJndAgSQmOhAKDhwUEEMKtD/7fg4SQf/WjZBDYv+RAAZTk4YPpOhJsFPsCVpSWF//A8Wc1x6zA0zMAAAAAElFTkSuQmCC",
        "title": "Top 40 Free HTML5 & CSS3 Contact Form Templates 2022 - Colorlib",
        "labels": []
    },
    {
        "link": "https://www.wallpaperflare.com/search?wallpaper=watercolor+landscape",
        "date": 1658730525,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChklEQVQ4jYWRX0hTYRjG3+9839nZpmfq5sox/6UUKCQhWkF/wYuCAqkwULqqy65Ku+tiN0FdBCJ5VzdBEEoQCV1Uw7IIyiEJkWnFdM7NzebOOW47O+c75/u6C2Mee2+f5/3xvO+DwGE274x0werSWYKLj3zj0ZyTT3ASxFBzmtv6oFHM3+bTEeLkqxBKUwNhg1ARL2iUW5YMzLikRj+OAUD8vwnyz4ZbipnkQ64mO8rfF04xTW0F4JJt255UJOXlAxN4VwDNpIb4Vu4MyrHDNLFynes6BgQpRK50wYfn9xdTca8jgHOO7HKpg1sUmb/yw0zLHwEAEIg8yzK+Qbq2eRJnFLcjACHEBcmdZUUAq6jJENQwAMojX+MU2zLruWnt13Xj9K4nWFD9jiGPQRow4M4yoDYaQ10H33OlnAZKRIWyGxO9kQZHwJvxWMvasi2KYQnENgxCT7m7gCbOQa702maEKUg8mthQB3cErD+er6qWai6kZ1ShlAHAAQzgggDNmaMrHTFJdbtimrsKJTm/ePXYPbkCICPqk0OhJtGQQHlha5y60ggBcJvVLxesa4t1rumMV+JZkTQppay/AsAkwQrvO2R65BpAWu0sJsEREASVGh5Ir+/p/CrZfNWD06YgUBdgWgGoDqr5gNH4JRQ4DpjsVYoz/VEt3vrpx+ceyKp+omNWVUK8iAia9/W2b/xtb/tDkice9PFM+amp60Qj0s9Vt9G2xLk/IREdB7xjSl47b7LSzSfzd1/t2EK47/d0QUC3sljaSiK7J865f90FjHnFt9Q2XSDCaP+B7uj2nX8SAADwSER4OVXbG7e0oQSizbSu5ps3KM0VcoVEyt8+Nzl52d7u/wMvZDGmsIWkIQAAAABJRU5ErkJggg==",
        "title": "Watercolor landscape 1080P, 2K, 4K, 5K HD wallpapers free download | Wallpaper Flare",
        "labels": []
    },
    {
        "link": "https://www.android-x86.org/changelog.html",
        "date": 1633848668,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACeUlEQVQ4jU3TS2udZRTF8f/az/OepKdN0kLBK5UKpuCgEEHsRygIomAnTgI6caYjhxb9IJ3pICkiDkq+gEXB2yAgBSWtFwrRSpPm3HLeZy8H54Du2Z4s2Iv9EwB/+godn5LewhQQYDAgsRhDAzo1xI/M+ZjndE/86k263KPEZY3BATJgU0IgaLnYLS2izwLzPGAe1xX7ueOBbuhJzgg62xSblMjewlAqVoiGkA3pORt1JWferZx4K6Skd2dbFTPv0bXz8svnhZ38PAl9c5TqqtwyUUTHP2QEW1UTFCBOG5LcG11dkz96Srx+MYUKd/7CN0d4/7jR1eK05WogVcsYyCZ6J0I5sz7cLEwnPT8dFQCms9QHz8B7f4BXjWwrWlCCqpFVMhnPrDdfKLx9Sb590OuljeDuI+NMzhTzyxP47NXOu783vjzoNRyu0GTVOElKEZzAiwNz7QJ6flB47elYtp+UUvj20FwaWt89tBmJIrCTqimEgFGi00AKwrBaYO5EEdQi1BIboheMQJGQJsoYGBmNG/cPzd0HdsWYRAokYUy1+fo3fP/QxDThJKkjURnjbI1zLt7bT33xfa+ddzry2UqzIE0lefgYtj+faTiQzwp7hAhc4ySBMK2pFLyeZvvWnPX3g8VTJnZ4+9ac9Q40tW2LCFtQNQmDTQJu6kpw9Di1/6A5wEg0m9GjposbuM+QJBNGxrrw7mwn6uBGnh7PpOhgeXPkUpIQ+LT9rxN7ru7civvZrtbeOt5cOTPYk1Yuu02WCBMTaBmGk4hYojTUIeL0YDr2dQGsvTG9slrrJ2R7xdkXEBELxs4E4j/SqDm6H8j+5t9frd77FyakdJ9yQuP6AAAAAElFTkSuQmCC",
        "title": "Android-x86 - Porting Android to x86",
        "labels": []
    },
    {
        "link": "https://beefree.io/templates/",
        "date": 1632382702,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiklEQVQ4jY2TT0hUYRTFz7nfvDc6UWgULQxcBG0qUnSU/mi0ECQhgpqhRVGUNRb0h4KgNr0gKNpWC3UWtqjF2KKoFm1Kh4qaUiL6s7BVhNCmdJgZnXnvfbeFmVouPMvL/X733I97gMXkebKkGgAuCgDQnH65kTY4QBFS9e6bY+0flgRo6n0XE04dBrEZRu8hUJ/kQVV8+zVduP319K78/P7IPI8CeNaw3AODLbmjbYl5fa/i/cPna6uXnwRwHVACVACY28u7DABQozXGjXW1prMP4+nhdmQyBgDKvnkM1RV/jOvssznA0JAAIKyWQFRJNLZbVB405uvWIpExLsMYiClACU9lIcDzBEM7AwBKaD0dl8F0qQKoY62NYjAZ0uFKgvUAFR4tVLngE+N9zzaQ7iGlugQbTfWy9rBUKAWwzRFIXIFtpFagyFdCHXjfs2Psr4N434skGUmp2idvu9vOFr6Pd4RTxVMAfkQgHiHG2ukLue72U9BI1jG82NKb3fMXQNozoLh5I6MA8NlL+Lnu7bdAXqFIg1X/40iqYxIAcse3Pi1Wwksq3A4oZwBgyVlek6oV86Ul/aIbIJDJGKt2Qhx3vRgn15rO3m/tf70GngrL0YqK/kRmUAQAlOqGUyWfjlMHtUeQSAiSyZBk2QaBVWsDcav3WvU3waMt5ssl6swNzQCAcVNV5ai1IDmBwcGwqff5KgE6KRRxnIitlP3ABhMAsLrO7KNKFMlkKAAQCE4Hhfw1KMpQrGlOZ/eLmBtqMRz45S61dlTcqOOI2dLSP3wV4IZCxb/5Xxbit5830HVSEB0rThYHPp3r/DmTj0cxkZoTJNeFod4ZSbW9wT/i4hFWmX91c1LODv8N6DQXaT4zsFwAAAAASUVORK5CYII=",
        "title": "FREE TEMPLATES",
        "labels": []
    },
    {
        "link": "https://codepen.io/meodai/pen/rNedxBa",
        "date": 1668965926,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
        "title": "css vars styling",
        "labels": []
    },
    {
        "link": "https://codepen.io/lucasyem/pen/ZEEYKdj",
        "date": 1668965933,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
        "title": "Input Text Material with Gradient",
        "labels": []
    },
    {
        "link": "https://www.softr.io/tools/svg-wave-generator",
        "date": 1682177818,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACQ0lEQVQ4jY1RPYyNQRQ9587s233vBbuxYhH/JEKhEZVSQrIqnVIj0S2RSDS2UUgUGqFAR6PRqPRC/CR0xEZsZIu3FmvX2+9n5h7Fe+sv/iY59xYz59xz57C+NXY+NHg2JTUkGAAAJH57pP6tx8iqrnSR5e2x+Ri4MiV30Oz3xF913GM0S1mfIyC5QyC5POFfDkDSXQKk75YF9Yh/Ii8L//gWiBAESoCAfvmPHZaLIsimkXT+zfqvRgAj6ULTKF1jQAkB7KOnrm8QCNF6gMFhVLBE8RoBoLi5advg9o66m4ui1UGsXq9vowQUK1WhwRXlTMYUHMtLAwag4CTesf8bmsGl0eFd8zvruTC7anby9U+WD2hkyzj2qlw0MAoWCWHp0NrnTwgAnf0nLrSscYpgM8OR5feKRnF8bGzxw9E9E6tnB9Y8jK2RrZ5KkAbAwdBA1Z2/a3P7Tk6Mhva5Iufml1znMnsajq1xFEM3eOdOfm+rd3KgvbXqfqxT2U2p/JLropuq7oJDOGwOTSx4lQVlIw2Sfai7aYA8oub2jS+H1y5C2UkzgSbABBoIAigMxHByEYBJAghml0ULxIrRkU9DrUSAkshegt+6ABqA5+0QDUDdzy8PWmDpaQGdR292fOy0vRerC4DAfocToNU5nS48vV8ZGg0jOWQxDlqgy84SWNiw9LkCaLSBaBasB7MQBw1AbeufXX+6WBcHK/ndgDAF6cGntHRs3eMrVycxafex+0Wuly7T4rQ8v3VP04Cm5f7KqTNfAVc/M9C2dIzrAAAAAElFTkSuQmCC",
        "title": "SVG Wave Generator – Create SVG waves for your designs",
        "labels": []
    },
    {
        "link": "https://getwaves.io/",
        "date": 1682177848,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACk0lEQVQ4jV2Ty0tVURTGf2uf7X1amuajNDITw2ZJo5AwiCiaFI2qgeOCXtAkmgjRIIom0SCC6E+ICIqICIQCyyQnQdqDHlq3srLjvfe89mpwjhYt2LBZj289+D5h2UYNjDoAiqe6wA6BdqUx845abQyufM2SBdClzz+OEx0UC2cQPQjaDjYLxwrMgneDauUi3Pi9VCPLxbmTA3iFW0hDPwSAOhCXIRgQAzkgmKQq++DCe0CyCY61USo/BulD6yFiLRgB93dAI4pzEVLIY8Jn/E6G4VLVpDuXzqLaB0kgtrUBFcEtgjrBGEhi8BcF1RyhH7DotlI2x9MVSufXoJUXXr6/tdi0G7xGIfE1rE6ZsDau1BeEcrOyeyf0bYQocIxNCBPjbwhXbrHo3Hbx2toKzXscUhBNaojkJN80pJ7XLfXGJ6oj+4XebqgDBo/DffDl03reTA1aoqDLlDcocegSs+AJVpXE4IdQLsOBI8JqC3MxWOtIHJSMsKrTwmSPJQ5IelYQoXjTFbTBgjpca5OGu9aJljyYd4rxhCg7qACxA0QtJG/xvxHu7fdMRxHxa6IrS+o2dgr5HCyoIiIgusybUGG+EkE8Y6E8xofXn/nhd7iB9YY4S4uA0IGIoFlX5yBnoDKnVGZnYNOkBxNVos1NBN4wnQPgx0pdITYQS/aAKIFEUu6N3TJ8nT4Hlx97ab9tE/x4uwctd9LeKyRGCDUtTFCilEmowNN7wvTDB+jgKbijGcB4QG7HXWanhljwu8i3gG0kJZQIkRPmP8Hz28LrR/cptR0iPO3/K6bUui8X+fjyJIWWEZrX9lBoyaMOat/r/Jp7RfDrOly7mh2U/wGWJQpHG+HnINgNmahmwEzCzfr/uX8AQi4cHDIUqEkAAAAASUVORK5CYII=",
        "title": "Get Waves – Create SVG waves for your next design",
        "labels": []
    },
    {
        "link": "https://btmills.github.io/geopattern/geopattern.html",
        "date": 1682178558,
        "icon": null,
        "title": "GeoPattern",
        "labels": []
    },
    {
        "link": "https://pattern.monster/",
        "date": 1682178600,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACeklEQVQ4jU1STUtUYRg9z/O+986Mozn5jfbhR4ihgaYgQYWWRFILQXIhRZsgoo0uXfgDXBStQjdua5HLclEKCVKGhEVJaaRjkZHm6DjNzJ173/dp4QQdzuJwOJvDOdTTPiJCTBJYVmwBiBCR/C+MZc3WChEJH7ieryNuzhgGQCQilE8LjOGIm/N8feAzs814Tmvj+uTYxPDgs71UhNlqZbQyzHbvT2R48Onk2ERr43rGc5itJkgQqJqKncojyd7wu83fsYmpi45jAPi+ut0/03v+vS6zNeWJhQ8nCEI9p0cEBEhn85dP8eqhwen1n+WFoSyAlBeurdx68Ki36fjmwscGgAiiBflm069a7/Q/7zi1du7MCv4hk3J640sPn1wqLU4BIkKqofoskd1PRwYvz9+99UL71nokuTwdNu2d8fSe+/ZzXdjNAcQCWMsFIa+va9FmyBowCythJcxiLWyG+roWC0KetSwAExAYVRpLlceSpGR0fGDo/nXLZJmG7t0YHR8gJeWxZGksFRhFgAYEEGNYhMjgWs9rEVIRAeHm1TkiIQMRMoYPklpAjja/EodWN6raDsfbWjYQ4OVcU2C4u2OZwxBg9VvVVuJQOJQTEBPAJH6gZhebLRF8eL5KZcKZnOsZjRyEaeZNS87XTEIgDRAAJtneK1KurH0tqzu6feXCEhTgY+N7ybH6HWOJlRUhQDQgVth1gu725cdTnb6vl1Zqt3aL0plQtCBbVrw/Pd96sv7H7GLWGGYWyr+VxdFBIhmtKEkmklFHm8BwYFRxYXp3P8psw64PkAAaICKxlrKeW1SQTaYiITcQgaNNyAmynlsYyR5sBQgR/gLiWUy2UKlfPwAAAABJRU5ErkJggg==",
        "title": "Pattern Monster - SVG Pattern Generator",
        "labels": []
    },
    {
        "link": "https://code.tutsplus.com/articles/21-ridiculously-impressive-html5-canvas-experiments--net-14210",
        "date": 1682414415,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVQ4jX1TTWhWRxQ9587M+xJFXSlCWwsVKWRhdaOLFiP9oVoMxY0LwY2IglJBt0F9SaFL3QTBre1OJKskpS6kECiFuhBLUXQREdEsamxQv5837x4X7/tsIuisLsM9595zzgzx7kMAAoDJ3748Fo2Hcte3pyEWXunI+L6bMyhh8X3gMxc/HN60/dMpGo7mSnB3B6LV8HGUmEMJ5xuIQLCZiBJWjozEsGHz9dZwOPBquaoAkKDJHSEZZNWu89/O37IVM/WmKuG2buOl1nA40P6v6gIMBAIp0lgXQ8E8h1EAsP66KH/d+3U5s+cwAE3Mjo6lIp5sL1cVyESIACABUiMvBNsxINAPv+xePxTD5ZjYBgCS5+RS06z/ZYIiyFyJNG4FYASAiZk9p1priqnOi6WNKa3ZAkt/VZ1aNK4A962SFJOZu+7fufvgMwOAkMJ+EN7rIeXMb1LLQFomCUkCSICUBNIkEZCGNm/6INnxK0jK/lFKxqJYuzOm8HETiqwBkI361V4LpuF1z2VLT0YIs0ZwsKMCttWVg3h7fYk0uUgziYYXdx7e69m18p8eDY+rjgTnwTrrq15bEhVWmNcnE0G5RYMZFuZOo2sA4Fk3LMLc6ww1ZhODd7FaAlxukfRaNwcxwq17tdepH8UUCkgZq5aXAKp/l2Oy1OvUTztV++eGQGC5749n7n4iFlZZDEmuLEkQ1VA45MgWmEJhcPeTP33/5yI00Nb/BxOzo/uLIk6B+KTqOiBA/a7UCgC10H7ZOzs5Nj89wNggm7KEXfju97lud/nznOsJBt4GtQjyXwv8O1f5x/pl+4vJsfnpsoQN8nwNrdA0+xo0MDoAAAAASUVORK5CYII=",
        "title": "25 Ridiculously Impressive HTML5 Canvas Experiments",
        "labels": []
    },
    {
        "link": "https://designerwiki.notion.site/Design-Systems-UI-Kits-1d899d1e2732498994ee0f50bbc22818",
        "date": 1682588649,
        "icon": null,
        "title": "Design Systems & UI Kits",
        "labels": []
    },
    {
        "link": "https://ui8.net/juan-williman-65f120/products/honest-ux-design-system?rel=timer",
        "date": 1683003253,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrklEQVQ4jYWSz2vcVRTFP+e+73d+JKPRRqxUYxbJIMUkBTWCIogQx66lq0ZBU3QjLtxVi7jwD3AhRtwJjUHQhYKr4NpqV1oxVMYEoVVQNI3Y6cx8v9/3rouZCYIL7+pyH+fc+845Wll5+KG8VvvQTEspJZckQJIYteDuuPuoBTeZ3NNuWZQb4b65+Z0QwvK/wWaGJAaDITFGsiwDAJlEAo9uWe24pCcyM1tKKSWNy8y83+8rxki7vYi7s7e3T61eJ3jhHqbllpPKG8mseTLz0W2SpBij/33zptqLC6yvn+WZzhpmxmeff8Hmu+9QtFZVzb/mHqaU/bql7PdPPWOMrqrKb2u19PJL5zhz5llmZ2fp9/s0m02Wlk5SUaecexVvPSCSezn3iqz3HRmgsUC6cOE8nc7TFEVBr9c7EvCXa9fpD0ryWouYHNJQbjlYXSaJqqo4duxOVlaWKcuSsiwJIWBmpJRYPnWKu+7IGXY3sfgXDmS/fYL1rmISSMJ9RCSJiQuSGA6HzN8/x/nX3+REuAzfPk99d4P8+nsgYfxPmRmDwYDTpztsbX/M229s0OIayYWUYe6jf0pOlmW4Oyn5eDYKkmT0ej3uOX43Tz61Rt64nZQS4Jj7CHhwcIMrV74nz3PyPCPGSEoJdyfGilqthiQuXfqKgz//OFoWTtw795YkpZT8628uqygKFhcXmJmZwd0xM5rNJoeHh1y8uM3m+x9QFIWHEAS4Hll9LE2yH2P0W7f6arcXeG79LJ3OGgA7O1+y9dE23e4eU1NNDyFMrHetPvq4u/uE5D9RBuh2fyKEQLPZ8JRc4/S6JMs8+Q8W7MEYYwKIMarRaACwv/8zANPT04zekkbZcg8hWIzpR6uq6kVPadfMjpgn4jUadRqN+tiZxAQsM6WUrpYpvfAPkNNwVdZI9sgAAAAASUVORK5CYII=",
        "title": "Honest UX Design System — Design Freebies on UI8",
        "labels": []
    },
    {
        "link": "https://peeke.nl/simulating-blobs-of-fluid",
        "date": 1683264622,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJklEQVQ4jY2TMY8URxSEv3o9e7tzBBwkzk78Dkt32XGJkXBiOYQAfoL5DThHQjhwalmWHBBxl4HF77AucwJ3QruzO9v9ysFMAASWS6pWlbpft14/lZggwABvVj+cRuiRzKngmGnjCvGupX893/7+9vMazYbXPDi81d/6OcTTFbGobljGQFh0KmzJfZpX62H90wNebwBk0AX3D8vh0Z93WJ1tvcsgM6AUhAFjGrRGRK9lfGR72TbX39/nYhMCqz96fofV2ZDDeGCzNN3KsLCZPUvTLW22OYx3WZ2V/ui5wHrT//jtQn67NCxIdSY6sGRpbjQBGzdLNciR8ChYb9ppV+Qnh5Ri7+sCooADKzz1DiYkEgvZWKrK7LPrdO/oSYc5aaQXUsiWMAUoBpEwvQ6CFFJCJ8Xo5sAnIThuSgWWjJGRIWyKTNGkNTOEZZQF7f+5OQ6+wjTXaXzM+r8Qhqvi+X5NizUxPXP2SKSRhaPhg29uXwXiXVGnaqfBRk6gSVQmNk2/kcYWbjiLihL+imb9MlBbKlSFG6iBq0wNaAFNpoGbmc+Ehsj26e8Pr+J8+O393n7Za1lGU6uUFSktp+U2syK1iBxN7bUszX75HX+8D4M8XD/7wPZyFf3BDrETdQeMEqPEpKk7xCr6g49sL9tw/cygEPici/WwGR7eeHxRpRZadHuFBqFBaK8QWnR7qd14fLHZDA/PuVjrszR+EecSeow5+T9x/hdEpVsKmFOCpQAAAABJRU5ErkJggg==",
        "title": "Peeke.nl",
        "labels": []
    },
    {
        "link": "https://uxdesign.cc/introducing-mercury-os-f4de45a04289",
        "date": 1684899318,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAA7UlEQVQ4jaWSQWoCAQxFX37deQAXdmWhq1kWPEbPIt5jBO/gAXoLldlVEAodEJwjiKBO4mKsQ6dWsc0qCZ/k/5/AnWGXeoYJIJyIWxOka+XlDY9PJC8Ai4z15xV2hsQwJduyDJZBtmU4QsJ+zq1ID1JWwbxkumO6Y16yCgZpDfiiZBB0e7x94AGGHgC8hEDG6zNFXsFUK0v6tIWDiQgiMOHQFkn/DGua8Iu8OhWAO8BixsYRhGOGGeEINs777AyrNgQmipzJmE4LjMOewx6MTovJmCLHBI0jnmwdfbc1bdj6n8OdRP3hNe57vltxBAKEXJQzZ3e4AAAAAElFTkSuQmCC",
        "title": "Introducing Mercury OS. A speculative vision of the operating… | by Jason Yuan | UX Collective",
        "labels": []
    },
    {
        "link": "https://www.uistore.design/items/components-free-ui-kit/",
        "date": 1684919491,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaWTsU5bQRBF7yzPJjjYToUcJXWUH0BCVDT8RZKKIhUNLTWlG4c6Eg0VX5CGjj7IEiKALBpoCBF+yDx7d04KPzvEIpGijLTSavbc2dXOHWkmgFXgM3ABFOW6KHOrs/xjYRXoAEP+HMOSqT4WBmDenS8llIAIuPt4AV7mEkDJzgNhUqRTHjyUMKWQmb2XDEBnIl4G0reT+xE4KTkxugN0j+/oHt8BEKN7SuPHjFkSsKzhMO0BbG+djHbbvemtZ6c56ytHrK8ccXaaTz9ht93z7a2TEcBwmPaCZGuSqDey0N45t4P9K132Btrc6CrvR+X9qM2Nri57Ax3sX6m9c271RhYkIdlaFkwtSSaT6s0Kn9o9W1gI+vE96tnCnCTp9makjx++ajBw1ZsVxrQsmFrZpBtphFJEMbpub1xZxVQULkmay0y3N1FZVUoRpRHTLmYyXUt63WhWePlqPjRfZHKX4BckSWamEKRaLVqjWRlXNl1nEoeg90utanrzdtGeL84Jx54ymwXjPk9aalUdyCQOs6IInVpN74oHV96PSB7cDWm2iBEClvfdiweXmVEUNvVCZ9yk0V9cPIkpMxX/ZuWUPKXkMSV3T7gnPCX3Mve0lf9rmJ6Yyn8a55/6IWQ0c0qc1AAAAABJRU5ErkJggg==",
        "title": "Components Free UI Kit - uistore.design",
        "labels": []
    },
    {
        "link": "https://fontawesome.com/v6.0/icons/house-chimney-medical",
        "date": 1633160494,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVQ4jcWSTU4CQRCFv+qZuB5PoC6BmIwnEE/gyAn0BhKBQxgI3gBPQNob4Algg7gTT+BsTaSfC9EwKD+JMb5NpztVX73qPPilDKDWfngC6DfKB1l3mLiwkxHYtyh6mZnufL00XWzKusOEtzj1zcPBB6AzEYBMA5NVl6dINiKEezPlOPaQZZgl/auSxQU7sipSDvKIZ8kSc5yakRJZOjf8dQAUACFw4pvlwZKBy+x6nEZxdKzZbBfnpkCvUFHrTPS5xjZarHfbNq3S/wPinx5rnfH5uhxsBIDr4UASTtyctR+LOdgIULhdmwMpF4xWAvqNysXC9VsOQvTqff0oX7NCUb5VGTGfuKx4bmnlJ/253gEjzXlrEj37awAAAABJRU5ErkJggg==",
        "title": "House Chimney Medical Icon | Font Awesome v6 Beta",
        "labels": []
    },
    {
        "link": "https://www.reshot.com/free-svg-icons/arrow/?page=12",
        "date": 1637846364,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB+UlEQVQ4jYWTMU8qQRSFvzu7K5HNYrVmgeZFY/gBWGghhoLSgp7eno7i/QQbLCyfvf4AQvm6bUm0INHGbKKVMTbCytxXOIuIJu8mJ5OZnHMzc+cc+Cjhs46AP8A9MHO4Ay6B1gpvVQNAGTgH5oA6LByK/RwYOu6yDBACoxXR3K0WsCKyPBMRddzQacF1VeDNkWwhLmCMsa7pm+MOi3ccAn9XbrN8WxiGUqlUKJfLurm5SRzHTKdTzbLMuibHPnAK+EBujJE4jomiiCAIJAgCjaKIJEnE9329vb3l7OxMer2evr+/B8Cp7yarxhjv4OCAPM+pVCrs7e3p9va2RFFEnud6c3NDo9EgDENU1XM3aPlAHaBUKsnz87M0m017cnJixuMxk8mEPM95fX2VNE25vr62g8HALBYLRARVrXvAb8DzPI9qtSoPDw/69PQkGxsb7OzskCQJqspsNmNra0vr9bqkaYqIAFgfyIBfnufpy8sL7XZbOp2OXlxcMBqN5PHxEUBrtRrT6VSyLFNAVVWclktAS6XSfH9/315dXdl+v19M2YqINcbo2rcWZrvEfeMcyHd3dxfdbtfGcWxFxDrTLMXGmMJUucPhj0ZaN9EKvhnpi5VFRI0x36y8Zu8frQwfARny/zCdsxYm+BrNlhvOHZ9xvucj4kfrmn9JkuavOZa69wAAAABJRU5ErkJggg==",
        "title": "Download Free Arrow Icons | Reshot",
        "labels": []
    },
    {
        "link": "https://icons8.com/icons/set/share",
        "date": 1641127786,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACUUlEQVQ4jZWTMYyUZRCGn5nv+9m93fMQIURyeKeBXGVBQoElGEgwsTAECLGyM7EwFnTUdBRU1FQ0JEIhiYmJkQQKCjrU5CBXgBFjiJHN3u6//t83r8UeZ9Sz8K2mmZm87zxjy7ePn8270mV1cQjkAIYZO0hI88qqNb5R/qiXcoYrOKtSRPJEwu2vBqiqJHMMoyosCEnh5r6W4EqW2TJtRHK3zW5q02hlwgS4Gbub1xh1Y7ooLDYD9b1nYYHaCLC3skF2M8bdlPffPKb39h6x+dbEtLZc37jFRwdP8vZwmTs/37XvR4+14H0LCwOUheSWbLNOdGL/Mfv08IVtzzUqh4YrnF/9AIBP3jnD2fuf24+jJ+p530TghpkkHLdxmdJFYVJauiiEgnMrpylRmZaWN3q7+fDAccbdxLZysXnqW6EncxrPNJ5oPDOLjl/aF2RPNN4A8HTynGwZbR3Edz7XXLOY8cXDyzz6fR3HuLZ+gy9/+oalZpGq+O8B/0c7DngFQs97XD16iXdfXyMQn619zJmDpxh1Y9LcPRnY9lMVdFHoogJGzxuG/X2UqHTRkT2xMjhAUZnnJnAhmRlBaDEv0HhmkPs0nnFzbj79muyJhdznt9lLvnr+HYvNQFWBkDJAKBimgX376wNNSmuhwM1pY8b1jVvce/HwFUj8MHoyB4nAMLOV2ycqgDu22bU7ojwuk7+jTAiZMCKDnlk/rda2xLBZYInhv55pz66lfzyT5P3ktPWZV7hIsG7mEQo6FRVViipVdTvcokoQAjBzEVovcPFP+N4/ndS59YMAAAAASUVORK5CYII=",
        "title": "Share Icons – Free Vector Download, PNG, SVG, GIF",
        "labels": []
    },
    {
        "link": "https://3dicons.co/",
        "date": 1643088447,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChUlEQVQ4jVWTS4tcVRSFv7XvraquKjqW3a1oDCQqSkDTII7y8B/oxImKE0fqwJH4KwQHQsA/EDNyIMaRThQjGtCJYHxANGISu9qYpOx63nvPWQ6qOnYWbDhnsc7msPZe2D5u+6Kds+1kOx+oFX0Pt6/5zPYx2f4aOJVzTpKCFQQYhA2SOQBJCSiBC/ISCalg+QjtK3OGCHy3qcEyNgplICmnlBShyZUvmF/9kqI1wPNKvSfOuP3oSY0unCNGjT3pqWxtuf/yGdxrS3ZGUokQtlJqMbs2dPiOYlo7hknROcLkm19o5Q1Vs6mr6Z4G40EevLotbRZytkuQMrD+5Gn6j51URLi6fUs333+P6HxPPTpE7+ln2XrzOf3+8SVf++CGeqeOu7PZE9mEJAeYnIlCViCUmP0mFjsl8/k6zbhHSFSpo0l7g1oh2SAobS+dRtjWztnz5B9u0T+2Tff5Z5hfmlItetimcpvRQtQpll4iwssxYYwkKnW5OaxZjO8n11326h7zugvA3G3+qddoUqysgzIiDLD8CT761ovaeOkOP732FfVHO/zdrHFfswYSFW1GGRYpACxB2FbOWRGBwsKZkLg+6XB7VvKvekxSG2GaVss/Xi2YzsNggVxiHBH669Mr7J674brd13iv5eLwQzr8yiYX355y+Tvxx+sz/7nb1+MvVPnhE5YtI1Oulo+5zOXruzTdQx7PWjr9xgkfeWpD69tDfv126OrnlrYeGfiddx+ITj+DIyuQ9kOCVNRu7GTAlGUhZUGYxaIhinBZioICW17Nscb258vQ5eZuApf5yzln5/Q/tWSdcnazup/H9lHbn9herAT3xDnn7ANcysvz1PaHth/8DxyW9SP+sxynAAAAAElFTkSuQmCC",
        "title": "3dicons - Open source 3D icon library",
        "labels": []
    },
    {
        "link": "https://icon-sets.iconify.design/simple-icons/codechef/",
        "date": 1647335519,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC40lEQVQ4jXVTX0jTURg93+/329bExFRyQ9OchsmgDCW1RBRCi6gIxB566Y8RVI+9TIJ6GIRhVEb0kA/5EJhohVj4EBVWzDAxi0AEzWZqrljDNue2e+/XwzY1yvN0L5xzvu9+3z2EOAgAA0B2s7tSI+NEdnpqjdVsygOAcDTmXQgEBxWL+wsdl4bWaihxwZXubvO9l1+vOrdsPt9YVWopL8hGTnoqAGA2EMT7Lwvo8XyIfJ7x3TlTl++60tQUTWrpQHu7xXGhrd/V+4b9wbDideAPhpWr9w07LrT1H2hvtyS6AHLOtl539bxmVpKZmWNCsFRKMbNiZiWVUjEh4i5KsqvnNeecbb0OAMg65S6vd3dGQhEhmFnFhEyKWSnFiSPHTSQzswpFhKh3d0ayTrnLNV03mhurS80pZl0HgL6RcT52o4uElMknQkiJYze6qG9knAEgxazrjdWlZl03mjV7empNhcPOiS3QtM9PngkvhFRrDBQ8E15M+35RcvoVDjvb01NrDKvZlGdLsybXyIfLS2ibPQsWk7FiYDEZuHvmCEpyNiO5bltaClnNprxVVgJFtkwU2TLBzABRvBwzDpVtX0sjACACa+FozPt9McwAEBVy5V8wA1IqCKnAvKqMxTk8v7jES5HYjDYfCA4OTc4RAPL+DPDNZx7+sRiCphEMXYOha9A0wu9wBLcHhnhwfJoB0NDkLM0HgoOGlKKj9+3YyeNVTr3QlklKKu3ItQe8a6udCm0ZAIBp3y+MTM3znuJcOl1XpkJRoR69HZNSig59afTF3PK2qk2LkvbuK8mlquJ8FGZn0PDULD//OIlPXh/SUiw431BB5xoqYTI0uvzEoz0fHb+10NFy3wBAO5zWloevhosBOnhxfxnXOguo1lmwErDk0PyhZW4bGKHuV8NPdzitLbMA/TdMRyt3WnY7bMjP2AgA8Pp/493Udzz2jEU+f/s7TLSmwj9x3mCKx3k5tn6c/wANN6d9R8gHHgAAAABJRU5ErkJggg==",
        "title": "codechef • Simple Icons • Iconify",
        "labels": []
    },
    {
        "link": "https://fontello.com/",
        "date": 1646800788,
        "icon": null,
        "title": "Fontello - icon fonts generator",
        "labels": []
    },
    {
        "link": "https://www.cdnfonts.com/",
        "date": 1625305243,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGElEQVQ4ja3TPU4jURAE4O8NAUgQQETEAfYKlrgM5yEjXm7BBTgDiMQZCT+WgIxZ8GsC12CLbGVaKmmmpqqnf95jFc06TvEXc/wL5uFON3SbHrCPC7yjGjUEjbLCezT7fmQ6wFVEfeADS/RgGa5HcxXPdxUX+TDGWIfUjD6jH64rWEZT8YBZyM/pr2f0G/qCWlA34aZqoh3jdZmeP2KukXqlnoLXcGdpMdqK13zKfES/pb9RD9Rz8EC9Ubf0o3UVHfMBJ8NqGO0P7Zg2YicTankecRwNWjwnw89d/m8MuO+Z8h31SO1Oq9gY/S4eo0HFcz/gGq3RX3BO28PeRoLp/Zz2smqrp7vrX1kjWx6kXznKbHGZ2OI6fwFRMr9zMsv18AAAAABJRU5ErkJggg==",
        "title": "CDN FONT",
        "labels": []
    },
    {
        "link": "https://www.picmonkey.com/fonts/minimalist",
        "date": 1659856675,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuklEQVQ4jZ1TWUiUYRQ99/t//3FmKmfKGkrKslzIyIjCJCyLoAjqqSnKkCJasM2ghzZofOglKggr6i2CqBQyK2iBEqFIKzJpxKUozSXHZRZnqfH3+24PJViJD124D/dwzz0X7rnAOMEAMUDj9YxJKndD+wcfA/uDhL/UOi7kWZv2OWa3ncmfPrrXA4jRNXkA4QHUCPDh8AJXooqcBmi9sthdMhIwDav9EyUYFX22nMvLPDcHqwug900Fb66AJABo2OeaZjb7lHXhfJshzOokhyNt4pZzsMzNxeCbSvjvlsIiY4hFY62xcKgo57ZZNyKoNxanFlpt9jJVMD9uhnwxEY+maatPm4lZK7TAy1vkXL6VhoI+GW15JVMWr8noqa180iCeHxKgiDC/P4R3b4o/8uIG81CUOy9u4YYdDhn2VrOMR1Xf40vKV3VWsTSVGQlw9HO9jH9rZd/lbRwrP8qNxakVQiM4MSVVygQbvgd6pG6dJPSkaSwMGyWv3U/Ogh0EoVO08Tn7yk+RUoqlY+YwLS2M21MyNmnFSxyG6Hy3Un5+jVBLnbBl5vGE7FXE0mRhsZOw2AEwLDMy4czfTjI8gN6qs5yk/TAC7S21Ivtqx0n/l6bVvTU3dxEwaCToGA71DnddLyESxEQEIgESGoEZg/WPFAe79K81FWWRj3UbMfr23oPpW9uOzGOzvZ7br+0ZajmRK4Nv76u474uK97VLk5lD5cfYu9vlBZgAQCsFwB6IDWHoi+75G3amm++GuxvzZ7mPO42JyRR8/5R+dDVR4pQUMvo/orvqvH+ItE1XXpf0ZLsh/vA5A4IA9SADyVnr0g5MXlHk1qbOnsuKdfNbc3+o9s4zf3CgNPdGuJUBIoD/tbUHYmQ9AKLGhTkvMpFZCTj+sv64QeyGBg//HvYr2QPxX9/5+4HGJP4EndZEbBh+5iMAAAAASUVORK5CYII=",
        "title": "Minimalist Fonts | Top fonts from PicMonkey",
        "labels": []
    },
    {
        "link": "https://medium.com/@101/the-best-free-icon-packs-26f36ddd732e",
        "date": 1657477106,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTsaoiQRBFT3e/mUFBmET8BH/ABQN/wFARFBTBSJjAVDQQzIwe7IcYjGBgZiCYGhr4ASZmBsLYrzZQm9G3y8puQdNwq2717erbAJ9AAljgC5C/rK977RX4VHeQ+654L1ytTnVWxphHM4wxTwxjzAN7kAUQdZek+DcFolMk1e/3ieOY5XLJcDgkm806RrPZZDAYAOD7vrrnFEopCYJA5vO5vMZ2u5VMJiOlUslhrVZLOp2OjMdjAeRDRGg0GtTrdZIkQamboOv1SrlcJooi8vk8IoK1lna7zfF4JAxDAD4AqtUq1lo3LKUUSimstdRqNc7ns8sVi8WnIWsAz/PcyelQSmGMQWv9hIm4x7o1WK1WaK2dTGstSZKgtWaxWLDb7VzucDhwOp24XC6uo/i+L3Ecfxvifr+XMAylUqk4rNvtSq/Xk8lk8vDPzRBBEMhoNJL1ei2bzUZms5kUCgVn4SiKZDqdiud5EgSB5HK594z0euffGckBr1ZOk/9gZf7XyhggBH6kVb9BFm5f+ucvMhDxQnv5W1IAAAAASUVORK5CYII=",
        "title": "The Best Free Icon Packs. Here is a few sets of icons in the same… | by Nick Babich | Medium",
        "labels": []
    },
    {
        "link": "https://www.cutout.pro/photo-enhancer-sharpener-upscaler/upload",
        "date": 1654755435,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMElEQVQ4jWWSzUpzMRCGZ5JJ0hyqVJBaKogo+EO1BXdH3IjX4cKr8HZcuBS8AK9AcCXFnVTUUlQ4m6qnJ3/jInyr712EMCTkyTODw+FQSumcU0qllJgZAEIIzJz3KSUistZ674UQRER1XRdFIYRwzjGztdYYo5TSWscYEZGIJpMJEUkpabFYWGtjjADQNE2v1zs5OSnLcm9vryiKlJKU8uPj4/Ly8v39PYRASilmjjF674fD4fn5+fHxcafTyZXMM5/PY4zOOWstCSEybr/fv7i4ODs7SymNx+P7+/uqqmKMzPz7+zufz40xiEgAAADGmNPT07IsU0q3t7fX19efn5/MLITw3mcfSqkYIyFi0zQrKytlWS4vLz8+Pt7c3Dw/PxOREAIRMwwA5IrIoO12e2trK8b49PQ0m83yUSEEAGiti6LIIMwsEBH+hZkRMa858F+E1loIUdf1ZDJRSh0cHPT7fWZOKeX2Oefqus5vSillt9vNV5eWlg4PD9fW1pj57e0thEBESilENMZIKZnZey+73S4zhxC+vr7W19e3t7d3d3dHo1Gv19vc3NzZ2dnf39/Y2Hh9fW2aRkpJRJQbN5vNrq6umLksy9FoNBgMvPfMTETT6fTh4aGqKmutXF1dlVJmJ9PpdDweZx6tdUppsVg456qquru7+/7+BgA8Ojr6+flpt9sAkH1rrVutllLKGBNCyBgvLy/5SxRjtNbm8c4qspYsChHzOLVaLe99COEP1xpWy9nkfZ8AAAAASUVORK5CYII=",
        "title": "Upload Image to Sharpen & Upscale it - Cutout.Pro",
        "labels": []
    },
    {
        "link": "https://imgupscaler.com/",
        "date": 1654755414,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA60lEQVQ4jaWTP4oCYQxH33yC4AksbLzCXMHSytrGzusINgtzBgtPYGEpgmBnZ6u1IIswb4sddv59LusaSJEfySMhCbTMFPwAT+Bn4adCS9v5ZWEPzMAc9InnRU4vVrz9pbDp2wbErJqwWOjxWMaHgy6XLUhWnbnW9mqlj0cZ3++6XkfHSQMwB5LqQEkteqolwDwAoz8kRzVgFIDhG4BhiKkvAAjA+Q3AOQCbpnq7QacDgwH0+9DtfmsR2xBb43isea7Xq14uqjqZxNdYgOqHBDqd6m6n+73OZtFrzCqdvH3KP5D/PlMN9NI7fwGj0w1Cn9YNfQAAAABJRU5ErkJggg==",
        "title": "AI Image Upscaler - Upscale Photo, Cartoons in Batch Free",
        "labels": []
    },
    {
        "link": "https://picsart.com/create/editor?templateSearch=wallpaper",
        "date": 1633086920,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADHUlEQVQ4jVXTP4xUZRQF8HPv97037884uzM7sLvECWuCiQVGDcEIsnELLdxaExsL0JBoJSY0VlpSAIUFcbPEHvqVyt0sIEZijEZjaACHBpjJzh/evJn33vfda4EYPf051fkRnoYAKACc2773RhXRaR/zmo+5IxHD16hLidn1gb18Lm7dAACoEoiU/hnAmQs/xJ2V5Qs+4VM8H4WlqVCGAokISANgPkaBsvJWN+7XirNXqTMFAFIoffXlz3F7qXG1tthaH/uR+gQ+tzA+YfiY4SIgrFvva2Rqi23K8uHWeOTe31henjKB9ICNz8/R3PrsUb80uag+8fblhRTvHWrjg4MLOFJP4SfOmkK1eNgr68n8+twcnQeR0uXPfjtmE7tbpUwuBuWh8om3FvXo4SY5J1AAgWVc7431Wn9EnBqRxKhEpJUUx22Yyachh9Zj5rQi7hxK9OjhJt259wRbvzyGTxjrr+7D6lKD/hjk2s0dGYKYKLXi5BMOMnlTxzMNcmUdVnRgISJVxe2f+vAjDz92uHVnAFHFwTAkyRwFM2WMCzWVrrGdaAdZSWaiZDNVUykAYF8SQvYqVHsO+8MATIQydwgKKE+VKKuIC7StzQSqBGMEgSi4FBAR1t5ZQqMZwFvg9SNtDLMSd7sTJBFDpwIDBqCwZiIPDAUrpRVl59m6p7+YjSocO7EfANDrz/DdzUeoZg5WDXk1ElgGID1rctkJ2ZwULn3ghLgAxCttb/6FygLUtOhlFYoIiBpWXQ5AvZg0tVLmNy3lxSUR+jBkQ7NC1SiYDcHMFP2HU2jTwjQMYjZaTTwZJSEy5AdTx7a8xO/eXbuNXDabWd2Epbjs94k82N2DPHYae9a4hAa5KmeebA7h3LmGaRgalZtfvP3iLaNQ+nP46/cS8Wut2vxLve4I3esD70thZoKCAFWAyBOB60nTTrLh1vD+6OOd7W/cv5iu4ErcWnn+oqb2FDeiYBJXqFKCSwlSD8CNGqaxK12Kb8e9wZnPLx6fPmP8P87XXrixyvXgozKhVZdwy9cJ7jkzKOvYcTXaOPn1Kz/+t/M3cLece4U5en4AAAAASUVORK5CYII=",
        "title": "Picsart Editor",
        "labels": []
    },
    {
        "link": "https://9elements.github.io/fancy-border-radius/full-control.html#0.0.0.10-90.100.99.100-.",
        "date": 1649587381,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTklEQVQ4jV2TO4hlRRRF167Pfe/Z3eMHBAfGTEwM1EREQUxEhEHQQOykBUM/kQgmwguNBGEYBCM/oLSYTjIIBgOCoGAiiKYmoozzfXOr6tY2uLdh6Arr1F51ah1KnFpbtmHLtgP8wVfnCn5mjZ9YwbkBrzP+8T7u+VS8tgPQaQDAZT5/co/4zhpeWqGz+0QGYMCsEBPlsvDhGd74N9wdNOgSX38YWV9Zs/fmRDq7w75Gm65Tp2u0dpVS99l/YYKP7u5Axxxn4c/u1fqoecdAr1mOg9HJ7ZmuAfqG4MhUoD6bwAL5BtPHD+jg6D9u1SxHm9wtEAZjIxM8n+8+YNh0OJ9AvsC35wnp7avetcFES0GSscGWNcdsJNRBrgRX9HjacjyM6INMcncDSbMOq8+hpUmwjCx1rBFo6EyC+HSRn7rpkSwiIM8EzBzExtbMkbBhFJpMSzXwXGKVi8tk0KJV9gxhUe2FKs3l5uCG/kkj4dGk0BuyvShb3jynZqI1F2Yz1h1BM3+mBrsRQoCOJM+92lq6WSAGpEUD6JabM+mXULq/vO1aKikWmKqCR1D1bLpIjILKvD/KNpk7+K8blJ/CRV690rrfqwRNDGnEvSi0EVwMFbk6uCyQgiaHQSNcepGjvwOgi7xyYdfbyyP+1Wyi2aRJKRSkYrmIXkwvuHVyvu7xZiN8AhBPPP/MN78/6Oe/OPDmt04Nlg8s7UVijOQQSCGSY8e3J7e3Dnn9e06GcvobA7zP8UOZ/FgK/ZFV98MDvn8V1NXrd+9y+MMyHv8PeWdN1SidKh8AAAAASUVORK5CYII=",
        "title": "Fancy Border Radius Generator",
        "labels": []
    },
    {
        "link": "http://www.javadecompilers.com/result",
        "date": 1664361993,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACG0lEQVQ4jXWRMUjVYRTFf+f7/j3KNJJIiAiCokVTaNAsQYIgowiHhlwaEoKgubHJIWhoaC9aIohWKSKoofcKouilL4ygUmqKCHzPVN7/Ow0+7Z/ZHe8995x7zhWFKncf2u+Qn8OcILAHkwEgmiTmEI+U4r0j068/ru4IoDw4uIX6wnmbC4hvSI9FmknQkKMCbE3yAdvHZXYbboeOtjtHKpVfKwr1xX7jMaFrOWk2Jh1DuijYAUkWP23eIt9AdAXrMvXF98CzDGBe+av2lMZNHA0KVxOuBXhi0lwIITlpV5CHbN2UNAn5pVIpm12zAFDu69vtxITR/WB+Wj4M7G2NP1suxzzEPHhMzXD96Ps3X/4iMKjS3d3pkF0xOimYRnxoDQ8YuoUfenlxYmhmZn51Lyuk6cmlpcb2tliLKb87MDX1TuBV8pc9PQdzYl9njEvFz61d8LynZ1+KcVdIIQcIyaGZWQBZU05BCSCFFJP9dbha/bRG8Ki3d2t70gPEsCA3aFW9aFFgQzQ8bchnT1SrjQygFMIm7J3AZkMTWDB0FC5MQN3QBmSCrlIIm/7K4I8QtyTXkjUiGGkZnST5sYJ6bcaLC2FdHvOSa3YYACotwgR6ARoETQH1YnZFAgPbkjVspSnB6RYw4HTKuGpzDGinkM96CwhGsc4AsdAdlOgHh/X4fwhaqnGD/ka9FQsdMS4b/9gI8J/63hHjMsBvbZXmvV341N4AAAAASUVORK5CYII=",
        "title": "Decompiling Java and Android applications",
        "labels": []
    },
    {
        "link": "https://passord.net/en/",
        "date": 1664951316,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACLElEQVQ4jYWTvW5dVRSEv9n73HNtI8vENoncxMhGiRVkKKBJ0kdpHCGqSBHPQIOoKFJGgoo2qfMWSUHBC0REigQNRsgWtmXk+3/uXpPinItThVXtZkbfzNpL15+dPUm5/talqcESiPeMwSAr92bRzH7W9tOzopSSXSz0XvGliS1lOSKSRLLDICXJWZA6GwG2EZdYkiwkOyyRUouEJPliFjoZB/9OjYHR3EhiUsy0GIBRE0KyQAYn0XLPS+j+do/vv1zmYKcHNne2KuZhPtvM7K1nwubuVoUj1JEpvZOLb27VDJrgq92ag52aB7s9Vip4tNfn609q1mrx8GafSQF1oaquWbLE6dg8fTXl74H5dCNzPDQ3rlQ0BcJw80rmaBTM5uaDSsTCYDFZ0M/iw76YG/4ZB19cqzifBeMG9j+qOBoFgbuGIS3anges1uLx7WXufdzj5WHD0dB8vpk5n5pxMbfWE3+cF3ISbju9JEiCiwZe/Nnw22nhr0Gwv1Gxt555cdhQJ9hdy/x+HizlzkAdgYEkUwlenRSOx8FaLQ4Hhasr4mQcDBqzsZw4Gga9BNY7BLIx4vmbKcWwlNvlzsN898uI16eFfhY//DpafKb/etP2s7MQCMnjJtTPkKT2B0oMG7NUgQ2zAis94RZABleLh2yt9JJtayG2zWotostbZyi+FAuUbEJKMrbdJlsgSp24m2i3p/aYkmwi2fxEqiaQ3N3F/1wihmRSNbH48S1s8R/QzrEzpQAAAABJRU5ErkJggg==",
        "title": "Funny passwords are easy to remember",
        "labels": []
    },
    {
        "link": "https://1337x.to/",
        "date": 1677743766,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB/klEQVQ4jcWRy2uTURDFz9x7v0ciBQVRkcYqtj5QoztR3Ii6ELtSC9adGxfq0u4qCCJd1X9AoYtacCFCXYj+ASqCYK1P0miLiY1BmvKZNI/vfnfGhQY0Qbed1TCc+XHmDLDaRe2mMLzrTNCz9pqQFgY8W4smtky9HQeA4vn9R4ONm8ZEeyGUCpPSwv3Nk7OjAGDaAG7VX8UwWqfTe4UUtBdcLgztuNe7J1cqFdOXoPRBIoLYFif15sv2nmo3fQ++fLbN2ggltqWEoT1/G4w5Pf9+4IgKU4MiAgCw1ehGZl/uYdcJACAALZ7bPUVheliUApgLUHpZr+nJKj9E0qy/i6NvJ7be/VDqcvCbJtyojrGNK8IM7YcZFaSypA241Uhaxfz4n8tdAADITBffuEbjttYGIIIyGlxdRjM3+2IhKkx26k3nQK5DLc6lMiCCq9cg5QpctAS28fpewjoA3//rYP7ZhmNuJTobF/OwhRySpTKICNrzdxqVvtKp/wswdxKBtrWrrlL2pV4Fs5sRokftDyjChbnDwfZ/AtQP/5QwjpPSEFJwzLcS60Yd84owQ4gypOSiDEF3AfKH0M9EN0FQIgIR+Qiyj/uf29fs+AmIwM6BlBrJf/UHu0Ik5We10U0RmQHEEyd3Bp7+CuwTMMHCfQLRRpswZj4AYLozj9Wpn0oI60oDJpujAAAAAElFTkSuQmCC",
        "title": "About Us | 1337x",
        "labels": []
    },
    {
        "link": "https://www.figma.com/community/file/931094174831888421",
        "date": 1678422350,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACbUlEQVQ4jW2SzWucVRTGf8+573y86TtpzAQCpWgJKuoiK0lFqqsipFn4NxSq4MIuxY3wbgVB0IVFwZ1/Qf12I0UlZFMILiVgoYjYNDOZcead9+MeF0kmjeSsLpf7e+5znnPEObW/ubx4cl5+dnN+r0+/Ovz/WwE4SOCDrdW1Vuh80uCv4A6WKLvyOkoSJzqYtonc1sdf7p0wdqLkYLL2nYWObQn1g+gn0rKClpH1kfqk6RYe73jOnLNjG/73OilwdVrG0p2minjtRI8eiR4dGoqiRLrK+I1U4HMBB63uMsW1k7atLWoCNfLaFIJhZmrqQLfbbtAO2Y9TP27fnggjLjYPbk6L4utSS1ZqidKWoJgMqGaDUTtzRsPvwh+/v62ceMIlR7AD4oPEW2sXCF3GHgxZ5f/8/OLDN3967vKHeLj2uJ3GR0Ocu5ozcwc5bs8vNJ/3u2zOPNOMTBN6rbtXXvjo4KnstUFIm+4SW5cWmi/I/WyIIF9bJ3WFjVHplSy6Ne6z1C8Gi6+GUawSouKAMpptsEYK8icEXHu7TF2+0+uoFRpzk3RhooG5trVoLUemi7QF2+wxBT8bYo5i70/dmoz5ZpqW+jedMevOqtX96q165N9KOoxD/z5K75ArHg3xeBQ4R6ns37qc/PX0Z71x54ZM5s7hwcZ7K4hq5RfvPbqm0bmrjCPItXA//MBKdr0+OKxk1vKmHpZ1+gwvvz+cE+5C8rMhCmd3nCI2GEyq0JgFt5jERKRFc/bLU/hUwBHr2TTiv5J1WkBD1rEIv/FSPjlyeH7NQ0R5LGK87ePiHkbi4+Je4c276HTrzqv/AB4OE1JJs3DjAAAAAElFTkSuQmCC",
        "title": "Empty State Illustrations Freebies ⭐ | Figma Community",
        "labels": []
    },
    {
        "link": "https://tinywow.com/",
        "date": 1681753324,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACxklEQVQ4jVWTTYiVZRzFf+d5nve9d2ZyBjMDDcs+xF3Qx8bIgaCyXEeLlhFoiyJahIGEFJSE0BeULty2LCoI3QSp7XKbFBjlmOag4fgx9973vs//tJgKO/vDWfzOTwBggQyw6dCFRRIvSdqp6O8CQ26XsE6G69GLr28+eWtH/JsDP87es3DfQdzvdcoN0zGYMCGlLMoARZ1COvL70i9v8MFjIwCBxYHTM/fO3f1FHq7bFatXqkytJichARU547BImt2QY3Tj2OryhecuHXpwNYG8bbj1YNus28XVy5PpGLoxpTgRHYxH0IToxuTpGLRyeTJo1z0zf/um90DWA29f2tGU/L1qp5sTa//ueV0fhd49fs0fPb+eMxd7Pj1xnbeeXWBuKN759ppvG8hWwzRiMQ3Q3hK5SRW3oKe3z/DEthm7g4c3N3rhkVnRw+L9rZ7aPsPAVo5wo1IGES+XEnpc0ZmqVEOuYdUKjcWoAwm3IaJCraY4Ofckamcp7yy567dgoyzRBb9e6llZDfIUSpIdVpric1fCKyOLzpRBdjiM2FxKXYNhw1xO7P/8KgLmm2QHsmGhSRz68poDmEsJVSuvIaQ0tOfDdSsRRig6SAlao1otSW4D6BEBjYSqjUpC6XxKvU+1GigHtVQxsNyGnHqYbcSwWKmKEqIJyBVSVTRqlapPpVrrZ7mPaQmlUuVcRaqisfjqh5HP/NZ7iCgVSohS5RJS7mOa+3pYAE++9tfHbbvwymS0PBG5rF1cHnWhkkRTZLCwbMe0nbtjOJlc/+S7D9e/msBa/mnpTcY3j822GwdrS/S5N/MlMSPIvUm9aq4wO9g49OqN4ytnz+4D6z+ZduxYmtnw0Pz7kvdIuYk6wY4AS8pKeYijn4by4T/P/bzv9DePrv4j0/913r1nebGoeTGZnRH9FgGk8ofhBEyPfn3kzhO3dv4GJkR3tSOGhVkAAAAASUVORK5CYII=",
        "title": "Free AI Writing, PDF, Image, and other Online Tools - TinyWow",
        "labels": []
    },
    {
        "link": "https://s3.amazonaws.com/rd-downloads-01/Freedom+From+Bad+Debt/Freedom+from+Bad+Debt-eBook.pdf",
        "date": 1642524982,
        "icon": null,
        "title": "Freedom+from+Bad+Debt-eBook.pdf",
        "labels": []
    },
    {
        "link": "https://www.gutenberg.org/ebooks/search/?query=deborah+ellis&submit_search=Go%21",
        "date": 1643267695,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACM0lEQVQ4jWO89+YTAymA5eu922dD3ZRL6z9fufBq+0YGBgYWXj6j5ds4JKWxamB6d3gvAwPD3e7GV9s3KhXVaE+Y++fzp0tpkb8/vMeqgblu2Vo+Q9N3R/YL2TkrF9VwySsyMDO/PbibU1qWV0sXiw0MDAy82vpM7OwM//9DhPiNzJhYWX88e4LdSWj8//////n0kZGFlV1aloGB4f+/f3+/f/v3+/f3R/cPGSt+f/yABa7034/v5+MC9GateLl1/d8f3wVNrV7t2HSjOh/ZuGvl2QgN747sZ2BguD+p4+2+HXKpeV/v3rxRnc/Iyma4eMOv16/uTWhj5uTSmbyA8d6bT3++fjkT4sopI//x3EkGBgal4loRR/dTPjZC1g46k+b/fP2KTUSUkZERGg8MDAyMjIx/Pn/ikJbVmbyAiZWVkZn5zb6djCwskqGxV0sz3+7bwSosyqOm+eXGVd1pi5i+3rl51Fbn3/dvPGpazBwcjMzMDAwMvz9+YGBkZObiertvBwMDAyMjw/vjh9jFJXnUtFgYWVgYGBgYmVmkwuPg/mETEmL4z/DjyWOjZVs/nj8lGRx9ys+OTViUgYGBhUtB2e7sfbTA5dUxYOHhfbRgmsnKHTzqWv///Pn3/RsDEyOWeIDaICyqVFj949GDi2mR3x7c/fPt65/Pnz5fvvD98UMWrBoYGBjEfYKYubmvlWaeCXaBxem/fz++M+JP3n+/f//24O7/37/YxCTYxSQYmZgAPbHcD0v4F/AAAAAASUVORK5CYII=",
        "title": "Books: deborah ellis (sorted by popularity) - Project Gutenberg",
        "labels": []
    },
    {
        "link": "https://www.eisenhower.me/eisenhower-matrix/",
        "date": 1643530433,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABd0lEQVQ4jW1SMY7iQBCsnrEsTcQFIJ0DB4cQEtImfAC+QOAYCMh4ARHSveIeQHIP2GTzlU6rTdkHbGAJLRLIh24P7Jm6YLwG+7ajmZ6q7uqalh/PX3ATdKLU5f0cPfy6f//7VakLoG4BkmaPNQIgcNaFx9931oUCoh5CNlNwgADiSnqjg3PFR2EAENFNuqtVLDuQJKmU2mw22+02CII8z7XWvV5vPp+LCEkRQQW11hZFQXI6nQIIwzCOYwD9ft8DnHP+gOpurSWZpqkxZrVakZzNZpPJxEP965VQpXa7XbvdjuN4sVicTqeiKHy+6lA6UHnl34wxnU4ny7LD4VBKvxpfl7Tf740x6/WaZJIk4/H4tn9tBj/0crkE0Gq1hsMhgMFg4MVUkoKrwSIARqNRFEVa6/P5nCRJt9ttSBLWPw7/fRyt/Xw1PMei3B7vhlSFPiLA2xNwXTFFQoQF/7xa5oRq4CH8+e327kil5XJ0L9+z/OiUbhL+AXgkK1F5f/6AAAAAAElFTkSuQmCC",
        "title": "The Eisenhower Matrix: Introduction & 3-Minute Video Tutorial",
        "labels": []
    },
    {
        "link": "https://books.goalkicker.com/",
        "date": 1650129947,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAALElEQVQ4jWNgGAWEASOE+v//P2GljIwMDAxMpNrAgmkGJkC2n2QbBqGGQQgA41sGENBzZJ0AAAAASUVORK5CYII=",
        "title": "Free Programming Books – GoalKicker.com",
        "labels": []
    },
    {
        "link": "https://b-ok.asia/",
        "date": 1660482100,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB7ElEQVQ4jX2TwU4TURSGv3OnTTMbwMTgprqABUu6wCCrqY2PATFs5bUkPoEJykISbCIbE0EWrCTaRqmaFChljJ3zu+jMZJDoTWZxbs75/i93cpC0IWkgKdN/jrtXyyyf2UDSeXE5Ho/V6/Xk7rc+SRoMBhoOhwVAkobkdHd3pWnqW8+2fPv5tiTpanSly8tLubu6b7vafLrpZ9/OXJKyLHNJCoAAc3cajYatra3Z3ps9RqMRQmSTDHdn9/Uui4uLNn9v3twdMzNAAcDMCCFIEkmScHFxwfHHY+r1OlEU0e/1OTk5ofOkgyTyUAACYPmlSaJ5v8nCwgL7+/t45tRqNQ7eHRDHMa1Wq5jLBbDSAMDdkUTSTjj8cMhgMCD9ldLtdll5uEIcx+T6hQmhgiSEgJmxurqKJI6Ojjj9dEq/3ydpJ+WQmZWhtQIgCTMjyzLm7syx3FpmZ+cVM7OzNJtNlpaWyuGi95ZBFdbpdJhcj/nR/0L7cZsoikr96jEVXvlg8cQGvO99J51kPHowTwjhVlBhUABUQNynii+/XvPi89U0vYDf/I2qVWBW0jVtjOREciqShUGpEfKiaiGzaVkPgUZ0Q11/9ZpJOgdmAAdCNe1n+hsX3I3rZWQO8jz8HEnrlXW+sbP/2uzKOq//AVdOth8GKPRlAAAAAElFTkSuQmCC",
        "title": "Electronic library. Download books free. Finding books",
        "labels": []
    },
    {
        "link": "https://pentadrangle.bandcamp.com/album/nuclear-blaze-original-soundtrack",
        "date": 1653828001,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACNklEQVQ4jTWSS29NYRSG33d93z57n1OntGipe9NgQoIYiIShIfEL/AMDI2MzM4mJ/2HWBBEJEZeWiYG4V0/p7bTntve39/ca7FrjtbLe58nLVvOQJIKCBKiKjSzZN9EuoJW1XpmHzJGkBBoguCQZB0AQACXRYgjdUTUdikNleWrMLVeURJIEAA8AAgyIiEAjVkk6cf7IzKPi7cdea1npYh4HGnrzgqD6gIBQ/0CsBkeP7mm4n5380yhboWAiuLNAOO/bqEcAFaGYpJ29h9fXbXL/sbDX3m90A2BEzWk7QCQoCbBE62vd1e3Ts1cnZy98Ozi1Mex7swiAAmiSSEiiaIIBVo5OLS9ebLndtM7PJTKBVEsk4BLXrhkCFA0BzKw8EMrecPPDn+8v1/7mVIRcHZlgM5uRIMUzu9xkgwLyUtMxdn3crKIlaQvYKrDQKz0J0hMAVBlvpmG64Qampi+zE+WUqz5/sXyAEN2ScYE7Ln2dzWJ0c3sKjAa9vN/EmbMzc3Pt7fkfo15WhCqU5l4NRRLw/y3Fc/cuEaudlf6Lp0ut8RtXrl97/OzO7QdT/a1y7Xm3eP41axKClwCIcrvsQ9p2KDCW2f6p+dS/GeQb714XE2NJuVUIJBRBIwUCUPK7Gu9hIg+Xj9vJdn/9x5+7t9pZp0x/DXbnOQiIBLxESBV4/+HG5Lgtr4bzs/7Jpjb7OrKPw0rbgVXBRmKxrmAzmwEkYZQDgHdAFY3wZqFS+F+1LCVAEv8AZlUzbdzBjzkAAAAASUVORK5CYII=",
        "title": "Nuclear Blaze (Original Soundtrack) | Pentadrangle",
        "labels": []
    },
    {
        "link": "https://zty.pe/",
        "date": 1660477311,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC0UlEQVQ4jYVSS2hTURA9c9997yUmNomNitGFKwWlC7VFEZEWFLoRdFFBRCguqqBQP7gQRJ67LpRWgi4E0YUgJPgFhSr6qlWxtRZUVMT/B21BLdGmyXu5946LlBRR8Sxn5sycmTOESewoDyxwQnexgdECRIACIDEFBQ3AtiSFYWkse/RaPzzPEAAsynnOmrWt/dFI3TdNpgiwRQaAABgAwIABIIhhDDSZpWoi2JStX3FfAsCy1RtsVS5Yb173b8o3bivgP9hTfHSJpZPClMYRECJOKrMo0f7WD4rSpdQ8h8aevVH5xRtDMFO1Li9AG7WwrIpAVb0AgI/PnUDY9qjrWOdiEat3lq1uyC/jFzOZ+QN7xh8fARG3TZI7PvtpUwkW6ooeqSnoa2lR89lfF/9qzwgcLdySLgnLbRBSnFXlidtgpjyR3vzyal10Wry3otWZY8nlw2Am+tuO27/emxtxnV4dlA9m06vOg5na3512k/UN18F8qyfRdADMBCIWNRZ7AgC2friTcW3psw67s+lV55vZlzh0yErObLjMMAM9iaYDHrMAEU+NZBAAtI/5yc7C0NDOscFOAOjgIRsA7f4xfGVXcfg4AHjMsi2Xs/6QvWWkN9ZZGLzbWRg8CADN7MuqZY+zeyeeHP6XpQRm6nh4QkYXLM0R6FVPXeM+j33pUYva9WPoFAOtYVDZJi1MF2A22pAzra5o1Pjt7sTK7xJE7BYeLCFLpHtiyzZ47AmPWnSz70kVhi9I0KjjymYiFgyQkDzO4NYg0HkAXRIAmGALskYBwCPPVK31VB+8rr+69OlmmWwrWfsDYdvEbFLr315IzhE2VX85gbitfjtWGEBGUzKggDIM87PWQE2E7xm6fq5b3wdBKkkgGCaIKT6BWEaYqMwVskQGBvur8Um0Pc3FE+kZMW0c4xZLZM+OcqVYquWDWJTVaIkQB5woq5OJ1u8A8AvD8D79cc9ctAAAAABJRU5ErkJggg==",
        "title": "ZType – Typing Game - Type to Shoot",
        "labels": []
    },
    {
        "link": "https://www.utomik.com/hp_edgefavourites",
        "date": 1646800788,
        "icon": null,
        "title": "Utomik Games",
        "labels": []
    },
    {
        "link": "https://hdhub4u.wiki/master-2021-hindi-dd5-1-webrip-full-movie/",
        "date": 1634628153,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACVElEQVQ4jaWST4jNURTHP+fc+3vvmffMMB6xZKPIlJKRFQtkJQslCzulrGysFEtbJckUsVGUlcRqaqLEGGmG0pQ/0SyGkffez7z35nfvPRbzXkljIWd1bt3vuZ/7PV/4z5L2+T2nnMpAwJIqogkT1SxKeFO58PzxnwIDFUj9s0/JduU/8rGSqE9V6bIEoZUGa1X3acUXfxMDeOd0dv2VmckXrLlVxp6O0Lg+yapRkcqNL+X66bluJ8uy0ljEqhmymNX87W3f568hy0AaC6sBLDnbGDK3F+Al7emOptGOar1JGO7GuLuT4sefIeSpVVydWbfhLGAXQT1iqYeWC9gsw4MLtAcT5BK0MHzJqUzvCY0jAOOhdrqWc8m21sfk3beWitlAz5yGNzvR9LxVX37tkfUui0EIIiLewAPsJ78WYvr27jP7AbTbLh72CFa3ze59D93DrRCOJayhmAMP1l/Aso8GH7pF2myG6trLryYAnIgrOd4f4Oe0kk8Y1g3m1cAQs94EAUywSiis82WKgzreQzMzi0i5d6lmiHopDAKYiEAUsAewVpAdSpxanGOD7oPYz4ikFAUsg4hZLIrl6YaFrwP1TZ9Kw9uH3dB9jLmdNCdZoKLL3wcRqYjIAEATBJEh8y4zXBmF9zEcb6c0ozASKsVJM9CA9/1kBWyGxEuADMRId5ba6UMbrLSk5xbQZ4sUn9/SeHRmkRyB2Zt0ZKW4Goj0XL9ruENNtnSnqLKP3J5QTfOUCo+FFkfkb8J+P3uRwVDnKA6RgETFxJEUXBLmVwL4p/oFF1UjWrGqBBwAAAAASUVORK5CYII=",
        "title": "Master (2021) Hindi WEB-DL Dual Audio [Hindi (ORG DD5.1) & Tamil DD5.1] 4K 1080p 720p 480p [x264/10Bit HEVC] HD | Full Movie - HDHub4u",
        "labels": []
    },
    {
        "link": "https://filmywap1.indoxxi.best/",
        "date": 1661363959,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACiElEQVQ4jX2SS0iUYRSGz3f5nRk0/0nHsZy8YWolQaVgIIkmQqVIVArVRiuiWnTZSUUgRdRCymgTkVEEJZZKigRlbRKMJNJoLLVJRzCdybk1Ojrzfd9p8Vu56uFwzuHlLF4OL5FSAgAiEkIAAACUUpxzY1mpG1BjGCoiSoWc8/6PzuZHPZQAYxSV+neOCFJKKYQwuhCI6knXK3vhYUir2Xfh7mwwrBBjQsg/UARAAFBSIRIpOj2+K645T5TG2ayOwcfiVkPE4yaEAuKyFyEEpczw2eoJ3Zz4qesJJqer7vWd4942iMbm1hVYGjssa7NRSQTCKWMLAb9n+AMqmUvNOxwFcbHI6arC7LImXyuaBrstlUd4isO4BgCyEAr1HKvPqijT0zOtybahJRnKyK1MS07QtNh8EHyzPD2PKCWlZIwhAvW5voe/ua/1vnnrC/d7gw9bmu8NTxX3uSPRRW5KjK6OBxFUSDRNoxQYlZwyhppWf+hg5ob8rKzsvXt2PRieaOh4P12SevXMuXzLQGO1DrtfPnv6YsjZu6V2ieN8WPoCVTXV1GyRUhJCkmIL8PlTyw3X+PjI2Uvnw211Y7H7zbfbrzddzHTY2QEJmaWlayp2AoCSEgB0s/ZratIU+nHq5InikrKZL75eV2B//dGK8nJdSyFe50gkFDRbrYRx2/oc+B8KAPhYZ9e818MSVkUD/sSMjMDX0aSt21jQN5azuUfPSYGoLd40HY5uT9P7Jv2XS/NofHZWXm2tbeOm1KIiGsctdjszx7medzOvZ5EyicRqMQHF9tEZgUgoAYVo1F8konvgnQiHV2g46Q8pGUNEImLCyAUaYQQAAMa5Wv4BQURCgDMmpQLA36gpa+PZugBJAAAAAElFTkSuQmCC",
        "title": "Filmywap: Filmywap 2022 Movies Download HD, Filmywap.in Bollywood, South, Punjabi, Hollywood Hindi Dubbed Movies Download | Filmywap",
        "labels": []
    },
    {
        "link": "https://0123movie.onl/",
        "date": 1662037410,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKElEQVQ4jV2TXWhdVRCF18ze55x7z43ktGqVilZtBIkvhiBok5rbIq0FBX1I+yBInwqKVqHSFlvxQmJCEBHaB0EUsQF9LKX+4E9ivG2aiqhgqSJEU9T6l9ZKbu/POXvvGR+SKrreBhZrGNZ8hCuqgVGDAMCe2Q3rynH5tpBLamP+9dylxW8mt37d/L8PAAgAoCAQdP+JajUpmadcR6psOTOW4J0UBFqA0bcvzi8eeuWRM5eu+JcDVoYDc5sPMtEIMcEXIlD9HaDLAG4gpjROGb6QsypuePSe+rcry5VB0AOzm3YnJTvicilU1ZHBkQvlpXVjU9O3G+MHFfiz9ZdzRHQHcXR878mBtQAUAPGe+sZegF7Im16IyEvQCAHbslZ33+ND1VTV7ogSzsiQLVqhaROzPubS+Mrp4JKNHit3R10i+rE1dJ8qfiGm6wx0JjO04L3uAxRs6BBR2O7z4EV0+/5T1R4QlFV0WyhE1cprIwNTcwAmbUKqgkgJ1wBQ1wnNNrVfHB+qvyde65XVUUmCbgQADh43d5qhAOWf7zren7KhTd7pcj1KAiCYmLsSSR4GgBD0iygxSoFvBABLUAVAFunha1fjFl9IL0QDiBiqBAW5jiiBJ547vfnB4HSNawcQKQGANbFZUNEeYn4g6TLoLDlwxNYVogDUWDLEBBNzaiPa0sodik4AGZwDAFaRd2zM5Nq+nTfcy6q0RVUn2ZAQE0xEPwcJO4tchou2nzUJO9+Ry0niTwAAcwiHxcmFpGKjEMJXY4NTH41umH4UwHdpZrmTh4nxwZk3589PHQ0ercqqOFLG67W7Tv7QvwsRAcCzs9WdSRq/4fIADTLmtXiLNT5WyaJbGxfzEVOyMxr0pWxNqa/xR2fu/GJjx01rs2fA+tA/r7xvZujJuGwn0u64vLSYBwlKRGAAeVKxSZQw8kZxTC2ORMYc9IKfJIQP/gvTp/f2RUn0RPC6lQhXExEkaLAJnVHQu0W7aJTK8f1s5NXn+6eP/ksjgJqCa7SM6dOf3JldVV613ntOjXW/jd5d/37vhwPXR1nS8+XpHz97f/d8XquBz/YO099gT5TSiVVhzgAAAABJRU5ErkJggg==",
        "title": "123Movies | Watch Free Movies Online on 123Movie",
        "labels": []
    },
    {
        "link": "https://michdmovies.blogspot.com/?m=1",
        "date": 1662194248,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACjUlEQVQ4jU2Pz29UVRhAz/e99+bNTH/MtLG0WoFAoFA3mkjUBXs10cQFdaMrY4WlYly4UDDRhIbIyrglbCRB6QLUlcYYjBpIY4JiJDUK04qtTEuZzszre+/e+7EgJpx/4JwjZXc+Li/SXqOzxtYGPsPnWMAMESQiqpKO0BzjoQlXeTGO8+/enT273G5ElSgYWyXVBBEtHJFarMGHvnPdkN/YO3n7w08jJeucmE++uF47s1C5+l/92afT9SI9fz2d3hVX6umZb9LlXjq1Z+Cxx0c/mm+S3Y3xBSTbqrRWw9lPBqb39tp33Uqm7x8Ov/ymp7+0C8eSoYn0s4sOYoo8JuuDtm7aqTcb07ty+uYCpTcK2eyEr+eSocGwcCV75ZgDJcsU50BGd1femolPX9giUgwxCDK1PXn+qWBlcuCwm9yhoLhCAbCf5kYXW1uvnfDUKv0SMyNJJ8aVOJG6vDc7+M+6AajeNyRTu91QTW+eq9ML78wkrb7HG/D5tzme2eeUrgH4UjEg/LtUFGWIVEBExAzi6NfF8PLxsLLqt0/a0Ver91sUCSCPvNTZOdN/9FBGIz41X+4ZjkjVoSBfXS6Jo6MzVQioxATHAxw53jl3mTu3eOOD/t+3AXl9zv/4+0YtEVCCF/v54A8LbVERMx9CpIiYmBVOVCyOMMRMEAlmB59oKN6Nj8h4k7EmB6biP5bKO92wthn275BtI7LeDWDLbXf1RjE2rASnCJmzvPS9ktqwPrkvaQzSye1ay/+5GhYW/flL5Xo3HDk0cOlaToTY9/uWVvxfqzZSpzmkkRgq3pkLprDRt3pFNnq2uOxeeCZtDAbZvPJxdOttjXeamdn/72YIgAgYIiKCcy338Ml7r3pKvurSnNAAAAAASUVORK5CYII=",
        "title": "MICHD MOVIES",
        "labels": []
    },
    {
        "link": "https://vegamovies.chat/category/web-series/mx-original/",
        "date": 1684567234,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADfUlEQVQ4jV2Re2jVZRzGn+/7vr/3d26ebefsHKYm4yhboqwdmAwdYxN1wxuWCt0IYYn4R/VX94ySiiFJUIxAXP2RBdpFEpxJc3NKsZGuzGhdFMeU3NzOzrY627n8fu+lfyZBH3j+ex54eB7CIsPDw07/0M3Ey889MV61r2ubV1vTbrlYBd8HLczfkqVS7733nzr/7rGzNc070n81rVhRAABhrWVEZBvq69eDR4+F1h0cI6/YDl8JvXQ5qJAH4wJmNvusu7vzcmtzXaoxUXEQQL+1lthiAWuE6GhI16zZ2lq/fS6XYyIz4SO/oEw0opjk/my+yLZtWL2pcW31Su2GnwRgAYARkQFQ933fpT0A8PYzDy+EpNBGG8En7nKWm+faWBGSXL3zeHMeAIYGvtsjgToiMgwWtDFY29n1SmeZp1RxTWpp+Om2tJnLZK1TyFsnM2nnprJ2//qVeu0DleGSUt5Hrx4taw7WdsKCsV3JdelopLxt9MffzMnuTzRAeOHRFlYd5FpNZ0lPZqiaSv6L7Q9xEKGn+xQt/HDbJCKJti3J+npmYFu0UW5lJGZPHPmQTWUyxWS8zHn+kUZTnBi3xfG75qWND+qqiojMTGXUlaOnURNdbqRhbkCLFqa1TcHAyoBrc3em3e4jH2gA6NjZxFdHHV0jtb+/LS0MgIvvnTSVty0PBcLWMcwCSLH7a3rKt1XlSTZw/Iz4Y+T3fCAgxWsdW80b+9q0Kx05NnLDnzw+yJIVcSopD0QEAhnGCbcsLJglCgvXJAoB+dnhLmMAu3dHk7t3+4awD4P+t06Y8rzD/uEleNYnDwqKzCgjhw9Y2IJLnEnFsKwiifGvf3Kv9F7OgxjAGH6+MOhNnbnOS+UOptW8zcFj8ygVtFCX2Nl7V0cE8XNhclkAUgkwpGTC+eb1j6GN9jzj6+E3v7ApEeejJkMzNq/+RpF50Od6J3/5VQCA5OKQ1HJTACIuNXmxaEzMXZ1yB09fyAvismoo59iqJfZO8abyYWSR/Cxx5xAA0KLsgfjmLRUIfB5HMBaEa5I6ZMdi+eIScmnn7Cr3PPuTvlTXWIjcGY/px77NXusDQPdfYN3Z/j4hZCsx3hMkpxSUAZ6ejYcbZipD5W6EZ7FQUsL0CInWxTADYAn/wQAYAPh02YEmofjmpBOpjSGMIMSNU/Z6/+Hxrwb/7/0XR+qTx6kmS+IAAAAASUVORK5CYII=",
        "title": "MX Player Archives - Vegamovies.To",
        "labels": []
    },
    {
        "link": "https://cprss.s3.amazonaws.com/javascriptweekly.com.xml",
        "date": 1664124426,
        "icon": null,
        "title": "https://cprss.s3.amazonaws.com/javascriptweekly.com.xml",
        "labels": []
    },
    {
        "link": "https://cprss.s3.amazonaws.com/nodeweekly.com.xml",
        "date": 1664124537,
        "icon": null,
        "title": "https://cprss.s3.amazonaws.com/nodeweekly.com.xml",
        "labels": []
    },
    {
        "link": "https://cprss.s3.amazonaws.com/frontendfoc.us.xml",
        "date": 1664124947,
        "icon": null,
        "title": "https://cprss.s3.amazonaws.com/frontendfoc.us.xml",
        "labels": []
    },
    {
        "link": "https://www.smashingmagazine.com/2015/06/the-making-of-in-pieces/",
        "date": 1646800788,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADK0lEQVQ4jWWTS2hcZRiG3+87/5kzk5mJM3UmaUMvKUOVLlpL0hStLSYqFC8UpDRSEUFxIQVXLgXdWVSkG6lUpMSFSiqti3oF7QiKmDbpJZUWm2qiWBMnmcllMpk5Oef/XxeKin12L7yLZ/MIAfka8PoBKwDxH0j6CMONCIK9c++f2DY79M5AVK3UEKefuGt8vIL/UwaSrFR2WPIwybecjcbpXJ0kaWPaygxXXn2Zo6XCCwBwEvDMj713FFwq9VS8ML8788C+XuZyGxVQABA1/9qoByl2IrTWGd/cB+CNQcCZMPCHC0bvbyQDFPcfgPg+6FzM1VVUho5r84fLYnJ5pHt3oW17D//48jPV9tt6yt3J5MDUVMuAsm5xNYojP6AUOjyQIqqmef0aZ44egba1gaTUPvkIZs3tQCukeqYrVzTbMIXzquDZlPE812pKNFcRAuLiGMHmkuQPHBKKiKgHL5MFm02QjDPGg3puJwCoox0NSQid1E59AIhAVCHpNDa9chSbXj+G9v4HQRvDNVcAVSgAhfYCgPfc2mwzFvOsCYJEa/IG3NISsnfvEfUMnHNIlbYgt+9RZPp2I6rOSfjTdaifkIg0x36bfdt7/PeFxfSG4sGEaIfzE255bESXL47BFAoINnRDROCsRbCuC/mH9iOu16U+NiIIgmy1mB323gXc4fWdfWmjO0JH66VSuvrLpCx8fgaNc9/By+WR3FwCowhQRbbvHiye/YK6UPNtMhhVAKBzFwgIALgwhGYy0LY0GpfGMPn8M5gdOg71fTKOIImEZPcMOD9sQdXfpQCglJFGbB1I42XbYRvLsPUlaDJJFWXt9DAYxxD1CNKZXI7NOLIO7DcAkE43rtSbqYrx/bXdb55w4c8TqH74HlZnpiFBwDWPDVoxBrTWQET05q+aT6YwT1cDAAEoF7d2fTx/5CXrSDqSzjnHVuvv9Q8unpudvvbw3jNXd2558cK9d3aZk4AOQixt57dBofiIhC2HIKkQEZsIGiQmDN33UL0C4Fzl1OmrWz/9ZuWWEi9vL3Vc6il9NfH0wXI0ffM1kk9ypbq+XC6bW85/lWsIyJ8dHJbgfm7+WQAAAABJRU5ErkJggg==",
        "title": "The Making Of “In Pieces”: Designing an Interactive Exhibition With CSS Clip Paths — Smashing Magazine",
        "labels": []
    },
    {
        "link": "https://devdocs.io/css/",
        "date": 1622817910,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC80lEQVQ4jW2TzWtcZRjFf8/zvvfOvTOZyUczbYy0ijVKtCjiwkU2iYpQI/gBIsG1q25d+Ue4ELJwo5WqCILgSkESsgmSNKKCFiLaJJhgyGRi22QmmTv3fR8XJurCs/8dOOdwZH5+/rUsy95V1YsxRkREzEz4H4mIASYieO+7SZK87Z1z81NTU2PNZjOGECTGKCKCqgIQYzyDMTM5hW1nZ2dgbW3tPZ+m6Viz2bQkSVRVSdPURES63S6qysDAAGVZEkJAVS3GKKoq4+PjFmNMvZlZWZbinDPvPXt7e7K4uMjtjU1ElUcmJpiZmaHeaNArChFVkxilV5RiYApgZiRJQrvdlhs3PqbT6fD6Ky/y6tVnOTr4gy8++4jicJ/RwYzBTGSk5m2oqiRqeOCsMFlYWGBkZIg35t7k+x046EfyK5dYWVri4KsNJh/L6ff7iKgU/ZL2cUU8gHOO4+NjNjc3mZ2dpZpnfLC0xde3ulQSj7hn4Edj8FaBCDiNmPZ54XyO/89EOOfo9QoqXhgb9Dx4LuXlJ3JqFUiTjGZjFAx+2g6s3m5TcwEFCCGQ5zkTExOsrKzQ6XQ4P1zFKQzXHBcantGa0qgaV5/yPP2QIhJI9NTgzGR6ehqAD69f517rdw5PYH2v5Lf9kl9bJRt7kfaRsXs3AhFP8XcEESGEQL1eZ25uju9ufsv6L9uIPMrkWMLj457EpwzXEx5oOu52I04iFQ14wABRVSvLUuqNOi/NzsL9d/jm8xbru30W17usbQiXRzzvv1XnpI9VfJTcm/1TopkhIlaWpZz0AkO5IsDzkxnD1ZxPVkuevJhyYcjZveMglSSSJaAiIt57k1N57805RyN3OFU+Xe2w1Q5cmxnguSuZfXmzJz9v9xmueat4FV8UxW6r1fr3TGYSFRIJPNx0rG31+WG7YKzeYyA12T/qm0lp55JDFXGFDyFcW15ePruzCYJhEk2Yqla4PF5lq1tnuzOIL+7YZK3Nfdkhl4h/ZpXsnb8AsXRKgJvajtMAAAAASUVORK5CYII=",
        "title": "",
        "labels": []
    },
    {
        "link": "https://usefulangle.com/post/156/javascript-scroll-to-element",
        "date": 1635344689,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABpklEQVQ4jYWSP2tUURDFz5l7n7u+rJttRC1khSDGiIW9YJXSRmLUDxA/gaWQT2BhKwra2wlG7EXtLIMkbu2fYt1ks+6+e+dYvCzEvIDTzTDnzJ3fHV7dfAcg0AllmUCcFIEZQFaIdT5KZfK4ECcFU1Pj4F7VFdiJB5FQ5XFj6fVKd/f5YO3r70utMJMONQSS2Ckmj5ZfFaye7a4biaywev7DnaWtC+0fMz9l8CPucoQyTO/31+/1ry3EcQQAcpxKzHrZDRCOPUkQuF89hKzSE6trRocN5w3H+hFZFSEFugnW4NGkRIImiHCeIFCjgkA3epZlNzvqykO/xkx6wBfBAEYBgARCEGDMpNvcg3STSxB69ehIQKIxAyDiqOoYkGEABVEc59ZydxBsGLJqgZLCp583bp37vHn96YP+m8gEsF4muQF2pbdTtjc+/rr5/c/Z6LAzcfJicHeUOmsX3690dzJogGCVBwKkhtPFt9urL7/dFsHLj7dAEdyrOkWYtm1W35IAlwkk5AqT3C7jQcEcY2C9Ya81BoB/QGtOOZ2O+zWF5j/8J/4CDl60GFeHweIAAAAASUVORK5CYII=",
        "title": "How to Smooth Scroll to an Element with Native Javascript",
        "labels": []
    },
    {
        "link": "https://code.google.com/archive/p/leak-finder-for-javascript/",
        "date": 1663521251,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACXUlEQVQ4jZ2TzUuUURTGf+/Mq80omDgWUrQoqDREFyUFIUyDgkS7qGhjuAqiTxe1iEyE/oBoY4s2tUkDEd1IwjgYZIFkYZmBpqb5MWiN4zjzft7TYuyNqXHTgQuXh/M85znnnquJiMY28XQ02QbQfKykY7scRETLd671bQwV3I2LfvubXO1ZHdouT8vnoPGZGR2eNsLiWIhtgGMQ3q/H4mvJ8PjsGufqytu7rtR0APjykmfdMAiI8vChyWT447KN5vPTPbLo4Z5AwnDCF16YanjWDaNcRBSIgAiitoRcG3HtnIK+3+TL/W60d9IF5SLKBtdFlAPKAVHZ+5ajpuqy9oThhAG090v2qTsD6Wh0xgHg+B6N2t0Oj9+aoBzENsExaa42+DBvMjaXQiyD+qoQj1pqIlprf0Ievc54lgZagrwcW2RvqJgDIQ1lbtI/4VAkGxwtN2nuSoFtAnDzzCF89xqKIz0Xi2Oy1d8OyRCbFhoO6jwZnKfzVYL2Bpj6vklJoQInO4PBtpPt989XRXylAT1WEvTHxEpzttJhV2GGzysmpmUTqQzSdKSIRMrmzYxBqKyY04ezc2+orugoDegx3fNuG4xNpwk0hSjVHZSTZiX+k8k1eNiXIlDoQxeL8ZkMUODRPAGx0kzF4d3XJBVBA+UGiX4xGVkCcaBun5+JmXXmzT/kXAE7A6JY+FFAW2MhD3oX+LRsIGb26a7XFzG3aP29d1kBy0gifgs2LVqfb7LTZ7Nq5m74re4E6xkXfDoFRQEP9/7Cpc5RNTyX+qdCvqitCMR6b5yI5Aj8b/wCNcNcTlrIkvkAAAAASUVORK5CYII=",
        "title": "Google Code Archive - Long-term storage for Google Code Project Hosting.",
        "labels": []
    },
    {
        "link": "https://futurestud.io/tutorials/how-to-exit-stop-or-break-an-array-foreach-loop-in-javascript-or-node-js",
        "date": 1665742446,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADA0lEQVQ4jW1TS2iUVxg93733n///5x/nqUlNmIl2xKQxRCLW0BZqWwppq+iinS4aKJJNKQ101VVJG9248LEQSnFTJNS4EApttZuCdCUlNBZRJNlIHd9VU8Z5/a97vy4yGR944MKBe7/Dxz3nAM+hgopc42Mntk+NHRuZetHdGtRTXADgszirD7w169xYXvz8ldTgjNGM7MZyZmBw7PtTf8z6AKhzDACsKRIABoCJLR/tj1qNeSnVp5mJlBsjcv2L4UTQqu0r5rbevb5ybanzltYGAQB7hz/ZVaD8N8mEs8cYBhuOlqYvy7AeYvTUTi0sYREEmmH7/AqvHDp3bX6hu8GegcmpPrvnp4zlDYFYq6bgx+W63P6+Q5t7M/RwmUT6ftJQgtkT7qDDzoH+1Nbby/9d/lsBwJv7d427dzLWvdv/tskiR7oScdvCe/44sWacaS9wulAQWmlwjHYxn3dL/Y/Hfzk594MCgOG3N7W9pTInwqpKpCSBgN6HEdLWEEeRxjYlyd1sAQwEda3emBzmW96VNk6u/jyYiUqv5ki5xAlPciIp2Fon2PZAlmsosU6wnVJseZK9guLy7h7yW5q6NkZ+RKXd69E/WqA4iklZEumXGPlSCkErRqGcJtEx3MQg1gzW/ETAxMxkE/pG82g9irh32COhACcrkcwrDL3bx/eXauTXIs4NeEj22DCh5idBMoD0JG96LcOtRxHyZZeFlNAhExHxlndy5KQVx4FB/1iGYUnzTBKbDV8SBHkFRzpZx5iYReg/IG1usaAM2fbLvHE0C5Axyo4VAaLZCGQ3B159wz9CoJTLW0PZXEME8U0dBFUYDgRzk41uGKEaxrVr6ub1q3Th58Vfz//45+Er1YUH3SQCwFeTX+z9YHLk2x2vF3c6KYV2vRaDQ7jpgvLrjEsXq3/9Nn/14JHT3517vlTEzKLDreMzX08v/v5ZNbz3MUd39/GlC19Wj88cngZgrdrO4ukadFGpVCTzbEdopHjm6Idzp49W5oBycXVwVlQqz1b6fyaFQJ74IiNmAAAAAElFTkSuQmCC",
        "title": "How to Exit, Stop, or Break an Array#forEach Loop in JavaScript or Node.js",
        "labels": []
    },
    {
        "link": "https://javascript.info/custom-elements",
        "date": 1666172522,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACNklEQVQ4jXWRz0tUcRTFP/f75ocz46jje4MyajMDVrvERcsoIQspIimEfmBBqxa1CtwKLtoE9Q+UEEEwLloYouhzsnBVu6KdoERRKT5NTGfmvfdt4YzN6Hg2X+653PO99xzYgwAy3dLRMxlPWVXcIbwzu07Pkmiu1Kr8akBTLPyOhsMvFpLp3jJXgQDYVvqJr9WZ8zh/Rv/P7qFC2InMfdvKLudJNubAmIIwwJyZeWgnM0tTtDblwKgZzkGourbNzIjdkh6s6kdsK/N03kqdrHCfIAiIAEzGU1Y0GLjdoAJdRa803ud8+zJDWyxkRvoN4dS2u/tyYOPnMsCseexBWFS24JNz1pc/7huVb+rsllDwhgsXxC+MgNGIEZgII6sF9NLf3cKtaDj4GBFTXP38vbMyMwruIadnaIsBBKzIIxG542veKGF4bXWjO5GAfsfZrJcOgOgqZ/OxZHs+mV3/2n5c22Z2rJ7hUBuFFvB1OTIdjpg+fP/luYtK6c7qwVHw6wkAMFTmNOq6QhIlT094yOU8ycbqwSMFJsADwOBiGPlsKK5ERUwvETl3cP16AgIwF+84AfRs+e6iIKsGOCg1SB3UCOQqdTA4EBMjGlVqTLT/YdP1nonItXFoOHhGjcBQeX1R3Nzx/bdFn2GlVK+h5GpISXO6NXO23hk16+db2jMLyayeTqQvVRr5eMqat7Irc1b2FYA+KkaAHZftouffKzmlfA4MDapv68ea7/p3lee/Lv+0f8Y/DVK5xDA8WfkAAAAASUVORK5CYII=",
        "title": "Custom elements",
        "labels": []
    },
    {
        "link": "https://timeago.org/",
        "date": 1679157366,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkklEQVQ4jbVRW2sTQRT+ZqZ76RrY7FJMMjmbvESRKgiKIvgXxP8tFFrBt4INTWbSEBsxMZe6OTu+JLKGpLSFfk8z53yXczjAI0Hcsba7uIaXJEkUx7EAsOx2u8u7GnjtdvtdnucLKeUKgBBC+Mz821p7DoDLZLllJonoU57nY2vtKTP7zjnZ6/VOpJRMRMfbaWUDp7V+LYToK6WeAvAGg8GZMeYrgEOl1PP5fP6TiJ7t2zlotVofAUBrHQE4AAAiSrMs+wzgEAAajcabTQ/lR5IkIYBOrVaz1toLrfWREKIjpeww8zcAebPZ/ABgkaZpNB6PJ/+tUBSFBADf928AwFr7g5mviqL4Yow5W4cthRDF3hXWCahWq9Wt3r9rEdF7AP7mr0okDsMwTNOUgiB4MZlMelrrYDqdKgAHRPQ2iqKYmX/NZrPrjah8BYxGo+/OuaPVanUJ4I9S6mWWZa8ALAEslFL+cDi82DlaGfV6/djzvCfOuZt+v38ex3FYqVSkMeZ6F38fxPqce4NuFd9X8GD8BUYOjAUSaXMuAAAAAElFTkSuQmCC",
        "title": "timeago.js: is a tiny(2kb) library used to format date with `*** time ago`. eg: '3 hours ago'. No dependency.",
        "labels": []
    },
    {
        "link": "https://github.com/flutter/gallery",
        "date": 1634058702,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "GitHub - flutter/gallery: Flutter Gallery is a resource to help developers evaluate and use Flutter",
        "labels": []
    },
    {
        "link": "https://augnitive.com/top-10-flutter-tips-tricks-and-techniques/",
        "date": 1634997807,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADL0lEQVQ4jV2TTYiVdRTGn/P/eN/7MddxZlDMjJrmFi6GMoas7EtlSE2whfSxaWhhZgwVUUG1GiKIFi1cyNDNbDENBEFEYZY5aTGKKBVN5eaW5kCD1kTOnfvxvv+Pc1pME9KzPuc5P57DQwAgABEgALC4b/OgQG9LtRkkJdbFeJZDnFxROzEPADIGhTHI8jwtL8+P3HVtV6VrjIUe1YoqWhEEAIuAReqQ+P5Cw0+smfjmAq4SAcCfT95zcyUtfZYaPdDIAwAE0BKaiIhRypZLFp3MA4IPOs6/3vfO8Z8FIHPp8VvKxaQ0brUeWMhCTgQLgl4CREyNtgDQbrtpFvkCwAKCkn+vi+kq9e0up8nWVuYAEg2QQEAi4JLVxnM8FxmvVOZ//5w+POeuxheATDuXo6D8Ra1pTzmx6/PAyAK7RFPiI3+7uNh6cM3EqT8AINu7dYCN3pho8s3QnqLx6b9p2e30juqKW2/sf4RAo6nVG/IoebvjN/YenJqRoSHbvqP35USr5wJLHykCAT81M/eYWXrd8O5CwT7vMj/515X2zrWrylu852rvwakZAGjf3rOnlJjXWj5CgcAsKCVmsJSYl6j19PBOrfVHSlFiCMhjvOiC7E9jdjhQIWUr11vStVSra5o+Xk61mssiz1ulNsUYf6T26ANfaaItncCOCMoqMkWj0XS+kxhdBFGHY5z0TIeja37f8+6piwCQP7O9nvnQMI75TgJFIlgACIy44EIoGV10Xs545/b2HDr+w3/J79u0uhHT20SkT5HMGgVKASiGeAIZQGCILEPmNLce7jp0crZeraY3bOsfjVrvWvRxg0pQtooMhGaUVXjTKvIVaywIkQWhbBWx8MfF2snZ+o5quna4f79J7VtguZ8h3ZEFXsR3vHyiige+fNUx3+cjf1pQyiSa0sAQH7kuAK26bvU6Y/VIo+O5E6JXIOkupiZyfG9lbeprJQB1jx87XThwdFeI/BBBpk1qVKLNSgLEmSuXo8QjidVIjSZr1KXM+Tfmzv/2LAFM/6/o20OwI3dvf4GZ18/9ev6pm478kl94YnNhXXdyr3OxnEf6rrd2bHY51H8AsMuYde81fHUAAAAASUVORK5CYII=",
        "title": "Top 10 Quick Flutter Tips Tricks and Techniques - Augnitive",
        "labels": []
    },
    {
        "link": "https://dev.to/shuvojit007/18-flutter-tips-and-tricks-5cjl",
        "date": 1634998181,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMklEQVQ4jZWSv09TURTHz7nvB7wX2w6gTDJISCQ0Qd9rhzJodWokkaSmdQD/AcrUvwQDCyaYyE6NRE20HZoUaEs7tYTaQmlSgoPVqukPWt579zg8Ak108U73fs/nDuecDzqcLvifwwYfRPRPaDC//sAYQ0REHORs9CokIpFzzjk3TdMwDFVVLcsiIkTgnGRZBgDTNEXxEpMkiT0Ph+OfP2Uz6ZcrK6Io6h7944f3mXR6b29X07RX6+uRSKTTaY+Njb2Nbc3NPWF3p6Y8Hs9xtbq8HIlGo/4HD/1+/9Hxcb1ebzS+jY/ffrG4QJxr2v1AIND80WQIcFgqhUOhrVhM1zVJlguFQjgUehYMfimV3m1vT05Ojt685fP5arVadn+fAYAsy4wxy7Qs0+p2u9PT07lc3v/oMQDkc3lFUbxe76xvtlAs/v7183JKnHMiIiCG2O/3T0/r5+ddUZKKBwfVk5PI0tLExJ14PA4AIhEZhgEAqqoKojCsKJXKUTAYBACH09VsNjPpzOLiQqfTyaSzTJAYMrw3M5NKpebnnyaTyV6vp+taKpXa2dl1u93ErXgiDgDlcqVcKSvKsDAyMoqIRPR6Y2N1da3VarlcLkDs9XqJRKLxvXF29lUQhDebm6XDwyFZxqFh5eLCIG4B0A2H0zCMfr9vb1VRVXtlnXZblCRFUYgIHU4XQwREu3XbDiJCRHsSiMgYIyK7KgIAJwKiK3lsc66Es9FrlwatHDTv78S+/wF72SshkV+RyAAAAABJRU5ErkJggg==",
        "title": "18+ Flutter tips and tricks - DEV Community",
        "labels": []
    },
    {
        "link": "https://github.com/ulusoyca/Flutter-ShareWhatYouKnow",
        "date": 1638971051,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "GitHub - ulusoyca/Flutter-ShareWhatYouKnow: Sample code for Flutter tutorials",
        "labels": []
    },
    {
        "link": "https://medium.com/@ashishgarg1998/how-to-create-home-screen-app-widgets-in-flutter-ce3458f3638e",
        "date": 1643029981,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTsaoiQRBFT3e/mUFBmET8BH/ABQN/wFARFBTBSJjAVDQQzIwe7IcYjGBgZiCYGhr4ASZmBsLYrzZQm9G3y8puQdNwq2717erbAJ9AAljgC5C/rK977RX4VHeQ+654L1ytTnVWxphHM4wxTwxjzAN7kAUQdZek+DcFolMk1e/3ieOY5XLJcDgkm806RrPZZDAYAOD7vrrnFEopCYJA5vO5vMZ2u5VMJiOlUslhrVZLOp2OjMdjAeRDRGg0GtTrdZIkQamboOv1SrlcJooi8vk8IoK1lna7zfF4JAxDAD4AqtUq1lo3LKUUSimstdRqNc7ns8sVi8WnIWsAz/PcyelQSmGMQWv9hIm4x7o1WK1WaK2dTGstSZKgtWaxWLDb7VzucDhwOp24XC6uo/i+L3Ecfxvifr+XMAylUqk4rNvtSq/Xk8lk8vDPzRBBEMhoNJL1ei2bzUZms5kUCgVn4SiKZDqdiud5EgSB5HK594z0euffGckBr1ZOk/9gZf7XyhggBH6kVb9BFm5f+ucvMhDxQnv5W1IAAAAASUVORK5CYII=",
        "title": "How to create Home Screen App Widgets in Flutter! | by Ashish Garg | Medium",
        "labels": []
    },
    {
        "link": "https://www.codepur.dev/30-days-of-flutter-hindi/",
        "date": 1629976198,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1klEQVQ4jW2TT4iVZRSHn3Pe73u/796r4ziGSsMwqFTSpmkRFFS4iSAwKDAijFoEgWKZlSAFXbBVkZExA9GqxoxZRVSL2kXYZoo2hURJKP5Bsz935ur97ve973ta3C5N0W97zsPvLM4jrEmXrnbpJoBje2zKCmY0Q0Kvf/HFj9ZfGW2ZgNiYkX/w0eD1vc2uMsueHob6XhGZFIGYYr/Myq9i5N2Di/L52lJZC7/1RHwV9CURqENNsgiAisM7/zeSjj/z3tHn4BUDMRnDxx4fHi29f7lfDQJgCE4QwMY1MUWTiVY7GwybhUMn/H4wEYDXHh3cUxT+y2Gog6qpGQ7DxjeG2rAEvi0Wg4R2Ufqmig8e+jD7RAHyPDsgqqKaqK6ZhnoMm9RVki2zyrY5pferiXOmZmbk9iwg0r2/N7V+c/F9rHXrYNDYrXc76V1OXD6XpFWqrfYSD7/gpf8HdubbyNkfEqoOX+pK3eRzOjU9MRMb2bDuhiCPHPFyxwMZKYBTsapKMn2LyMQmteVPA3c9lLPniGfTdMKilBNttqlziCW1zkZh+22OlatG7zcj80J13bj9vpwz30WuXkz8fsnYMeeY3OosBTAJqr3z/QtZYf1LPzqb31dZaODGm5T+n1FmbnY2s9PZ8meNzO50FC1Y2Ffx83ISV6Z6dSWeFYA39jYf+zzbfW0wCPV1y4oOxAa27BDZuFk5/XW0vIRqFfKS2Om0NYRwamUx26UAsYnzZiYuE2tPiokIeQFXfjE7fSqaL0cf0d6g5nJJCmopzXeRpGByeKn8oonh7U5R+hiJQETEMi8UHQEwQ2JKFtaVLT8M9cnnPyiWwERHYnR1dTE/WMe40PGt3OetzEzUEqRoGKh3Zdb2Ld+EdOJ85Z8af/AamUY5/qTthri/DulOFWmBkbChV/eNGO8ceD9b+h+Z/m0kwJuP2XbNmEWCDpvs3OGT8tN/ywD+AruKWr1Bk6+UAAAAAElFTkSuQmCC",
        "title": "30 Day Challenge",
        "labels": []
    },
    {
        "link": "https://www.programmerall.com/article/12321330211/",
        "date": 1632678870,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB9UlEQVQ4jWMoK61gZWNjIAKwsrGVlVYwMDLiUcPIiCrNiEc1ExMTUeqQVfDwCGhpGUAUMzIyamnpcHBwIlQwMTFBTIWotrQ0v3rt+sePXyLCw8UkJY8fP/b+/YeOjk5mBgYGJibG/zAA0S8lJXXw8OFpU6cJifFfOHe+uan16pUrz58/YmJmZmJkZPz377+MjIK7m7uTi5OUjAwDA0N+fv6TR4+FBARu3Lz1/vN3bV3NG7ceSMso1dTUMDAwMGRn575//3nnzh2/f/+cNG06AwPDqVOnnz5/fPjwIT4+gbmzF7569frkqdO6eroMDAwMHh7O////b2tt4eXl+fXrR1RMDCcH1/fv327ffSAnp8jAwHD23Jn3799bWdlAvbts5Yrnr18wMDCoqqr/+ftXRVlVz8jg////yUkJDAwMnJzc339+6+7ugyh2dHBgkZNRYWNi1dTUqSgvZ2ZiSkyKcfXwYGBgCAwMfvz8eUpyCgcbp5OTg4eHR1RU+L+/fxkSExM+fHr/9evXGTPnnjp15vHjJ95egUVFhZ8/f/nx83tvf194TPTzF89//fq1ZcsWERFBBgYGBkUlBT1dHQYGBgEBER4efojt4uJScnJyELaAgICiojJ6tMOjn4mJCUmQETmNIDQgxTFCKbI2CJuRkYGB1OQNAGNas3bSPfOIAAAAAElFTkSuQmCC",
        "title": "FLUTTER, WebView implements the function of uploading and downloading - Programmer All",
        "labels": []
    },
    {
        "link": "https://flutterappdev.com/2019/05/15/flutter-package-for-managing-files-on-android-app-development/",
        "date": 1664455468,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkklEQVQ4jaWTvW4UQRCEv5rZ2b0DRyAshGTJZMBbIAICBzwDmROeAQe8DAmZExICYgiRjsQIAoufBBvd3f5NEewKn3znc0AnM+rpqa6uqYH/DF1OPHhzdrtHu31KHUAZhpom4zIgZbz4dfrty/P7S4Di380jB46UPUmHqUwvY1MvQAGUsZWiMnbIwTne2X0CfADrAuDRyCbnSmVM1ESlMoRJBMAGCZyh+7OohqasAHzCABbZPSYmu20+d63eBShywCFnWSF3WacDgPIagyDkjEKZYr/o388OpofbRAwblRUDnSvOV6PYmBV4WWfJjx8ez19bROOssipc1x9nBzdfbQWQAPc9sdyPN4p9A+4g7kD7k7vAdgAbsAJ9N+/O298ywaJ3kybGX68fwaBqEnOzPG7a6YuYFmnZ46o5C8udW/NrAWxQEBDPT57p+8YmY1yoPPogGyPswRIRLOwwruKS/dd8IBOkYW8QyMOjyus/ZxVgZIBC4y43Y3E95OSrRljD3Hvre5O23aOAQP9j9nR6sk2Dv/1AtBo4ArsVAAAAAElFTkSuQmCC",
        "title": "Flutter package for managing files on Android App development",
        "labels": []
    },
    {
        "link": "https://www.labnol.org/internet/write-google-docs-addon/28446/",
        "date": 1653817231,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABQ0lEQVQ4jZVSy5LTQAzsljTjclIsAQpOHOBb+DL+g59bDjyKBZIsceLYVnOwWbaKhSI6qEYaqaVSN9++eYdLzC6qBhAAJJGU9Lei+Zfk0jC/Zv+g/UIEiYAgLNhK0bjEMyTvTwBAEwUsK9W2kLQwL1ZX1YpJoC3bSpQUFAAKMrfnrzbrTXvYnc7dsN60h223etx+/7jffT54sUwZGAIhTWPScNz3/WHITA//9mE3jSmh1AA09GMUFxWZ2T5qnr28Ov04E4zqpanH2z5TzapG8eOpf/H6aRT7cr0dhymU8mJRY3VlXn3sx2bdRI1oeqWadSE5nMf1k/b2a7e/6cLDut3p/fYTSTpyEAwklTJnTvJwZd5cb83Nw+KOMkkaAALCnMlJAMZhIpdbkYg7CgHgIeru8ykh/i2KPyXyWxr/2XOxWn8Cjee5N+WQeaIAAAAASUVORK5CYII=",
        "title": "How to Write an Add-on for Google Docs - Digital Inspiration",
        "labels": []
    },
    {
        "link": "https://devhints.io/jest",
        "date": 1653926462,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB7ElEQVQ4jTVSu4pVURTL2ufcOXMdRvGFhSAWgp0gFoIWgmJhq7/hN/gjFv6EIlgLFmJhIQgi2IkwguPj3r32WiuxuFonIQmJPXv8QTBJAkBRJgiGIklIkkBBEAVRcyYK/A8IQAZ7r2XdZCaKAiUBJUiae+aOKknWwuvgzHT1+slP7397Z5vEkmQSCVBqXuxJDzq16TmdsFsPz5+5tLr96GxketKTntGrPOlRzQc9qidH8NfvOH957/s3f/rk87y05VQ7Ph6jqoc85FGenHvWLg5gHuWjZLp68/DH97hy/WBa48vH7d6+VYGgiNmToiTI1JM9OC3txr1zfVvnLu4fHY0/259YTZmAVNLsUQREmaFnZbHIzbYmg3d6L0/NoSpRojB7liQS1uCjolglSSGsoCh51BRWJEsAZo9/I6DBgyNJcQQBkTaKfdSUViVyJ0hJpGCGHkzRo/ZPNDP4KFI9a5XINEn812FnYRhVm02NoaNvm3mx9bptR42kR8ukAJLNs0bWyOqjpsXevf2xt7S9tcXg6bPLm9dH89K2PT3Lo0bS7t94uduBAoDIag13H1yY5/bqxdc/W86TkSRMFAG7c+05JUISRAgq6edxkDo4XFlDUaIIibYrXbs/EoBEScL6cJIQSaYgAwAzCDD7C+WPD+374FeFAAAAAElFTkSuQmCC",
        "title": "Jest cheatsheet",
        "labels": []
    },
    {
        "link": "https://whimsical.com/object-oriented-programming-cheatsheet-by-love-babbar-YbSgLatbWQ4R5paV7EgqFw",
        "date": 1637751265,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1klEQVQ4jV2TT4iVZRjFz3ne9/tzZ9Q796qROUZBZhI10gxmDBhIBRGthNkIBSEttEVkCwuCWUWLokXgsrZhuxYRYxIMCNXMgA0hLbIio8Q/986de/XO933v954WV2P0rJ7FgcNzOD/iPi0cWJo1S14j8byAPQBA8C+Kiwj6/Mjq1I+b/bx7nMXZdOf0/g8FvJW7PCtjiRoBAODgkFqGIm5sSDpzY+XX9+YwVwIA5zFvBx87lmTN4ddN33ypF3qCUw3REDUKIEWniJpum2uyF3oLN4fu1UuXvgoEgHPP/PxpK2m9vRY6JWG+6gdzqck1DBCgKFT9QDfmIxOFCd9O16rOJy+sHHiX56cuHjTvFmXwMUZCst1Hd2hwecjuUh+WGiwzTB7drmvnexz+XUafOSkioCxnLToez1yeSbVQg77h9MT7u7n/g0m43BDWa+x6pYW97zzE9qGtqoc1xajc5VlM3JtG4nAVSwm0qEg4sOwFjD+So/3cVtCAybntUC0oRoqgRKtiKZKzHsCeoEASMJpAUVGoi4gHX24BERh7OAMMoCMMFCmGGAjgUX//DiDCZYar33bRntmC5tQ4rn7Txc4jTZgflbpZBuCKp9eo7EhFwWWG7tIAvV9uo7ErxZUvb4COkARBlChPLwB/eAKLiaX7QqxqoxEC6EhLiMuf/YvOTwPc+rOAH3cwT0EAqZgw9VWoLrhjO078I6tfp5kTBERYcb1Sd3nAW78V6K3ehiVEeS2ouzxgWI9y3iHEULHiSQLAd9MXP55I2qfWqk4J0Id+bb5hssxGj0ag7Ae6zCJT3DMkN49529J66nuz4bMTvvV4GQvYGGuaEVG8U5pcw2ozs6Zr+V5YW+gM/fEnrz+g/2FaxnKyPp1/ROJEZllexgI16jsweaSWoojFhoQz21Y2Ts9gprqHxrs69/TKIfP+DVGHMcKZBH6XcEGh/uLF1ekfNvv/A21gW83qJ4ZGAAAAAElFTkSuQmCC",
        "title": "Object Oriented Programming CheatSheet - by Love Babbar",
        "labels": []
    },
    {
        "link": "https://exercism.org/",
        "date": 1662707192,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHElEQVQ4jX3TT4iVZRQG8N/5vu/+15DuCKLTIhhLJkeyFmbkSkpc1G5qYVAtCvJPuDNwM5tW6koX2UZDLJgBXYnkwiAxW9RWqAkK1CAqUynwNnPvcXGvw1Q4Z/e+5/A8z3mf52Wpslwvx8jCIytjXD6+fKaACfna01xr8Q6qRwOoGry/iasT8tWHqLUt8q/N8vOHLCspIGNKnp+S98haMUm3RafN16OpcgUFJZFNvuywepJu0SVaZJvGcB0lWf1bSQZZTY5WblFvki2iag9hc0DAj6L3f+JILF4fndpEOSTNqqS+iqLPHTJe4l2s7XP6mrgF2+TGkj0V81+Js23+LinuUMSb8kyw/Xeee4a3b9H5k582svM47x2h/TMnv+fcE+wa4/I8X6ziW3xT1RmUFBtoPcn5o+IGHJOXjoss5eCE23tD916av3DCRPcurST73HdAjh+U+YHcB8/LGllsktvJBjwldwzDMwzQAbn/oMy9cl3VZLFkMKBNxosU34mFKfnsLl4oZO8mYz+IK7tl4yK9Ns1ggChqQxujQRK5g0WYFR+P8+s6erPmPho+pv7IRi2iTlT1kZ8L9OD6yM4YAn4Gh/5jap1/KuI+C8Uv/NHk7hpenpblzIgFpmU5LZeSOSMW4TF2N/ltK7eLT8RCjTc6jL3ChzPLojwn+nNiCXBW1k/Kwx1WV7z1+rIeMk7JNbnCZ5qRxaeyu/zuAUTVtMDi3C3eAAAAAElFTkSuQmCC",
        "title": "Exercism",
        "labels": []
    },
    {
        "link": "https://codingstark.com/",
        "date": 1662732954,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACmklEQVQ4jU2TvYucZRTFf+c+z7szO/s1ix8bNgYLo6KFIGgRIiKxkpDCQlAEm00hKNZipTbax8JCwcLCxmqLFIKogf0DbETEQiGGuBvWbDa7M/POe4/FTJa9zb1c7tfh3CNmJsAAb3N0UZFbZF5KTTfBhOs/RPmRjK++ZbDDKdOD4Dx/9C42j39m2veCWJgyApzzsqj0SXISNF/cbv/66DpPjucDHK9Bs7F49H2jweWR9zsgkULzBcbGJCj6GpbWx9u3j2++cZ3zbYDyzMr4097C4PK47I9Vg6hRVAgKoiIVRdQoqmJc9se9hcUrGyvnPgGl3hnuP1+jv5OeNAAWYIeQTwO1LUnJPBtq2sy8UGvT26pa6LfZtpIKGBQ2KSyQwRAUz8YL465Gr9/meKuWprxqtVYqpDDOQEZoxos0czOiJCJNhtW6cblUafKsnURBEkAYZiefXC/LtpRhJ1gomVJKeaxGQQZh2Z5vDiuYwxDyVJQiN8NQf7mAoD1OtYdQa2/hb2c+Y7UuvcDp6MZ2dpYII7O4Xlh6tFL74gG5RXK23KmZ93aGm6vP1vUKiZx215puYgNqFgulN/9TozTQZaeiqsgbep1fLyytLf0yfGJN6+ceQoUizcCP7018cOsuR3fu4zT91T7Lj6y4vzrIEtBO42UBvNn7/Vr18vtl/Wi8vDFsEBr9d8z9vUO6SYdiTkOndLhdWTzTy2Zy7Zvdsx8U+Dg2u5WfF/trL8Zo8NTd3X99f+8wJ4cTEag0hSiypE41NCgPN6PJwQ+/HexdvcVmdyKmK2wPhoPnPk9N3w2VZuoRJg0gh4p62F0LzZcHR7sfbvPC0Wk1nsj5rf6fLxG+KnglmZwFCBZuGn5ydl9/N3r6xqxl9qb/A+zQPVHw4D7UAAAAAElFTkSuQmCC",
        "title": "Himanshu Maurya - Full Stack Developer",
        "labels": []
    },
    {
        "link": "https://4ddig.tenorshare.com/windows-recovery-solutions/git-restore-deleted-file.html",
        "date": 1663064768,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1klEQVQ4jX2TTWicVRiFn/feb75v/juTCVYdqiJCbEEQqqAYaJVABVHqohKQphTbQYRYXIjBEplGcGETtKbWKoIdyEIitoYsSt0EUah2oSYEWyhUcdGFJmnJl5nJ/Nz7urEqOniWh8PhWZwDPaXS2/+vegRVQJSJ6zsxiWHarkyXddruPJPluR4FKlQRquKpqqEqnsnfKxBOic1mjRh806FxDM36abaUR6niQPRfBGpAPCfWXkSDk0LC6kbzGnHxAnLzAaQ9iKahcfNl3ts2fYvUMNPawSfxPhDPqbiCDaclTFpt6sXns3PDOiBXruzY8wptexZrPchBRq9GiqCzWIPXPQTRLB/H58C9Y1LpQBt6cTyaOTxTPDjJQOHEgFw6jkaf4p2Avz3d6vQJqDyHCzC0EFFsYq+k0vj1zncTydrh8XzlNKXMIDc8OM7h9EExgSKu1fhme6zzd/b7UmHY4J3gvRcRtNW9NGFrL4xnKx9SSg/iDKyuj8mi/kaqdQRRo63cnD4jCdef/8wUzbQBsWRCi+t+n14Onx1PV95ga+oxOuK5EY/Jkv4q2dWaRFFG48aPr5bn3+epu2dtNthNXToG/IrEjW91Jf10vSx3uEy0D2c89fpbsqi/mMLaGYmiUOudpZHiVwfe3vX6KQq5IVp0MdYYrmVmD/jjj/OaXG/fm9xusxaardVD6x/MB8W1MzabD/2GWxwpLuyv7X5pir7SEJvqCawhm7ACoGAEVf082ksyPEuXjYXNR598YunLUazmR3IXxmoP7Z+if+sQXqAjYwSJn0kljsrfi0T1C7Yh+R/IhSWa7muC3JtEFnTzKMXiLhBwckx2LlcBdOGe5F9LVBAB1fnCEfLhu4QhtIEggHwKvIG2HJOHl6taxQBIFd/zdXr+tgrpcFQJ7iNIIEl7lY45KY/89JEqIoL+zxv/LJnpy3PXlvsJAB9flsGV+BblP3N/AFy9KZYxE6rbAAAAAElFTkSuQmCC",
        "title": "5 Ways on How to Restore Deleted Files in Git",
        "labels": []
    },
    {
        "link": "https://www.ablebits.com/office-addins-blog/split-text-string-excel/",
        "date": 1663745877,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAA6klEQVQ4jWNkmHqdgRTARJJqKmkwFuX4n6XxP0vDWJSDKA2pWgL//jP8+8+QqiVAWAMPK1O0Gt/h599OvvwercbHw4quAJ0fqcrHw8q04MbHxbc+QjQT0JCmJfD19781dz+vuP35x9//mK5C0WAsymEixrH23ucvv/+9//l3w73PxqIcaF5nQfMuAwNDnDp/nDo/suDZgy/gXEZ4TPOwMj1PUPnPwCC14M6X3/8YGBg4mBmfJaiwMjFKwkRQnAQJk6W3PsHlfvz9v+z2JzSvIzSkaAowMDDMufYB2ZFzr32EOxXdSUQC2ic+AIz+VhDVyRRoAAAAAElFTkSuQmCC",
        "title": "Excel: Split string by delimiter or pattern, separate text and numbers",
        "labels": []
    },
    {
        "link": "https://stackoverflow.com/questions/155932/how-do-you-loop-through-each-line-in-a-text-file-using-a-windows-batch-file",
        "date": 1664917108,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVQ4jbWQsUsCYRjGn/fuSu/Sk3ALmlzNtoagKRqSaHMKGkKhEOV0KWispSXPQaglAnNobOgfaCyIcgicmxO9zFPv/N5WwTs5gt7x+5739/2eDwgw/bK67HcnBQG4Ag3L0LJ/BoBFDuDzTiGUCAywDC3bNbRtANCrwxaBziRZanAGcjADwR8AX1uGesEZyFGzXwO43VsKn07GaJa5lY/GMefUAYooEvaELDnCEW9M2I1V7GdPg04hlLAM7dYqqut67ftLNwdpMB5dgRfXdVMgHIFpx9egfbwYk0eDA2LKAWJMkK6cUOhOGdkpZmoQiy29OmwFq1AKb5CgQyakAXqQJKpELn/eJzPK1JKhPhHjk4EmMzUVmU/coVLkeXff672pk155YXUsxikCJQFeYVCSgCiAV920N311b+r37FslH413S+qaV86rggfIBbG38RRAN+2ZHzsTMKvGv80vvziHGAusG84AAAAASUVORK5CYII=",
        "title": "How do you loop through each line in a text file using a windows batch file? - Stack Overflow",
        "labels": []
    },
    {
        "link": "https://www.yankodesign.com/2020/09/17/sorry-post-it-notes-we-are-moving-onto-digital-sticky-notes/",
        "date": 1662818208,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVQ4je3PIWtCURjG8R+XCzMsuDAQVu2rKxrMNtlnWFoZ2KzGwfALGFZXpmFYtNhlrDi2ZhBE0Q3HltzKEQ6Xm5b9wwnPn+e85z0cgC1uonyCCZ5QQBfr0NviCy+4RpLiAbd4Rw+POEUdPzgLl67CAykq6ISeAkZY4h4fOI82GoSNsvQx24cipvhFNVMc4DlnQBufSQgbDLHCOKe8y3EXWKWROIrOd+QTlHAZ8jEaqKEVD5jjNXwj5g1l3EVugWbGHfgvfwp1KgIyBiUvAAAAAElFTkSuQmCC",
        "title": "Sorry Post-it notes, we are moving onto digital sticky notes! - Yanko Design",
        "labels": []
    },
    {
        "link": "https://www.yankodesign.com/2019/06/11/heres-what-the-mice-and-keyboards-of-the-future-should-be-scared-of/",
        "date": 1662823940,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVQ4je3PIWtCURjG8R+XCzMsuDAQVu2rKxrMNtlnWFoZ2KzGwfALGFZXpmFYtNhlrDi2ZhBE0Q3HltzKEQ6Xm5b9wwnPn+e85z0cgC1uonyCCZ5QQBfr0NviCy+4RpLiAbd4Rw+POEUdPzgLl67CAykq6ISeAkZY4h4fOI82GoSNsvQx24cipvhFNVMc4DlnQBufSQgbDLHCOKe8y3EXWKWROIrOd+QTlHAZ8jEaqKEVD5jjNXwj5g1l3EVugWbGHfgvfwp1KgIyBiUvAAAAAElFTkSuQmCC",
        "title": "Here’s what the mice and keyboards of the future should be scared of - Yanko Design",
        "labels": []
    },
    {
        "link": "https://macaronsandmimosas.com/how-to-add-clickable-html-links-in-canva/?amp",
        "date": 1663402829,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACkklEQVQ4jW2SS0hUARiF//+/98444x29kzPTqKOMpiWaZREo9IQWIQQVQauWLYOIdm1L2gUtWrYQKSooCKSEsKLURiwN31POqOOrGXN8znvu/7cYC4LO8nDO5pwPRRgARQREBAQBAREBBAEEAAGkYAAAiAgyC4AA/OPCbhIKpWgkmM2krEXFnqp6AhBEQMRoJBgcfr8yP4WIiCgAwiwi8Z/zrzvv5DKpbDY1Nz2kAgibHOjpCo31lfsbFc2y8GOk5eQlVbOQogCA4fH5G1utNl03XN9HPqCIzE4O9j67f/bKzZqmNgAITw4SKf6GY1vx6PLsuJnP6YYnk9yanQg0Hz+visDm2kpJmdff1AYAIlzb2Grmc+GJwGjfq7Jyf3J7Yz224KtvOXzqore6QQWQipqDkeDXbDpBpCCSompmPhce6z9z+bpNdyLi6lIondz2Vjcwm6qIeHx1VfVH+7sfxRaCeqnr3NXbuWy61FVhuCpfPLylaJYL1zoG3z52V+5zGG6ViEYHunXDtf/I6bnpIQQkIrvD6XB6YoszvrqWpdAYM9v10sTmL4fhhs149PmDGxtrK/JHzMzM+VxuKTwRGhuIxxZFZKj36epSSETUdGIrndzaiC2W7vHmcxkkIlIBRFHViprGwpWZ1E5ie91wV4oIOZyeouKSod4n67FFVbMqioaIgCiwSwCzGejp8tU2q5pVhJW7Hfc0iy04/C4S/JLPZi02u6YVkaIhYiadXA6Pf37T6XT7mtramRmR0DRNIpoZ/fTt48v12IKqWW26YbWXEFI2k7QU2Zta2+sOnWBmQCAkZGYAQaR0KhGdn4pHI6mdDUW12EucrvLavdUHiEiYAXGX3L/jEBH8T8xcwLFA+29ytVRXzqxqEAAAAABJRU5ErkJggg==",
        "title": "Canva Digital Business Card with clickable links • Macarons & Mimosas",
        "labels": []
    },
    {
        "link": "https://www.toptal.com/javascript/10-most-common-javascript-mistakes",
        "date": 1663500729,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB2klEQVQ4jV2SPWgUURSFz3lvdiez6yZLYhITEUMUImKhgo0YC0GEIFuoCCksUogxjUIKQSSVsbKwC6TI2gsWsVTshYAiiBD8BZMihARGdsfdzNxr8XZmJ3nVLe53zzv3Ho7VPgIAoApAAZAAqKquAKCqriDhIX3dPpCEpK0kSWZtXcApkIzakiRa7jEKkBDRDCBh0H1KImolk2crj2dGo7YM9HlTF6ujg8U4ER5QSKUhgqF+7+H0iF80y6+3jKG1bjiYAaogqaoK9pZtfXX7zHjp/s1h3+PC8gahBY+qziQ89zNVBWCgO2Fy+2r/9LWBT+uNO1OHSTytb8axGrc250EVAAzZbMn1S9WlR2Pv18La/PqXn9FMbejkUb+9J5nvDmDIf205dTyoL5z4sdF68PzXs7ljp8eDu4vfP39rBr4VNxWw1YlZZ9tahs2kHJgrF/oun++dPFeZf/H71bvdSsmKup0y74Ek4lieLP2JE527dWRldevlm+2RwaJI5z7Ot61OzLpKVY0xBY9vP4SBb+7dGN4N47WvjWLBqNIxeYXOZkkGvllc2dyLdedvnAYJ3WPnw+d0XKgaUWINenx7ANgXvlQHJA6VLAAR5JO3D8gYsDPUpV1zKwLwH4JA10poM/ayAAAAAElFTkSuQmCC",
        "title": "The 10 Most Common JavaScript Issues Developers Face | Toptal",
        "labels": []
    },
    {
        "link": "https://make.supercell.com/en",
        "date": 1666953681,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsElEQVQ4jU2ST2udZRDFf2feP8/NDYmBhhrRhhqIUNoS0YVK6qII2UgpFpJKs7AbV34CwaVfwFVXuqzagiB0pXZVUxTUhUQFNURaiVITTHpzk3uf9z7PuHjvQoaB4ZyZwzBzBODvXT1DXb1Kzi+7dBbxDNln8NwBQDbAtI/zp9x/wuwbYnNP73/6i/K7179GvKCqmEDAMMJwCHUgm7XzKaEmQggQanDwUTom+w+l6C4TR/iQ5DnB3LPi9IL49We0twuAz87hi2fgjy3n7x3HCkzFBFW5bLlvKcfaSR3TIaaVN8TaW9Kla/hxIR9U4vJ6i61ckQ4xpY7lYe25b6lUDOYgzNxjEjFDzvjSklh8HqoKzp1vsZhF7KAqONkl3EqPQQBuJmICVZASHPRgfQ0k2H8Mk92WiwGvgsgZBxlNoM0aYgCVEEdw80uYm4UnT8DHX0Fsxty4dzxXEgMAmCBmaGgvfX8bFr5r8Y0teLtuuRjazA7wP4HCYOBQBygLKKbgg7std/KJFqsDDDoQOpDyWKAZC4zU/nfzEf7XETwWlFMg2vrOJto7RN6FYQXuY4+sfJiTZ4HcJIomiybDZAfMAG/X7Q+gEqkqPHsGoQLz0poJmVUgE6lh4NH/tWN6B/sMcyMHOlb5VNVhxgMTo6DCKsgZcqNy9yjxfX+be73f2ezvjB4O9/VP07NeOibmkQPUVjJdTDBbTeVTYcbPdZ8qL0wv8uLkPLo4ffHaRn/rKvhrwepJudMtak6GE2m6njIBB7GXH8W94mgUccTA45HQ3ZcmF261JgJd6Cyf2kq7r7/z3PW1N+cvvzLffTo4bRjGg6Od4ScPP//2xm8f3Tqt2Tsbg/sPBK5VVovb3HYgA/ilnS71zPmR8pUmD9dBqlTeLDOf0d/+UV8s9Rk7Z5VV/Qf9rkJzZfKkQgAAAABJRU5ErkJggg==",
        "title": "Supercell Make - Explore and Create content for Brawl Stars and Clash of Clans!",
        "labels": []
    },
    {
        "link": "https://www.behance.net/gallery/115764933/Moonie-Go-to-sleep-happy-and-relaxed",
        "date": 1668843716,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJklEQVQ4jd3Sv0sCARTA8e/dmR4NNtbQUEMNh1NLQllX4BhCxUFJ9AuHtqLBpnIqWhzSFuco6g8QlyJwiGgwqskhuUmuCNGD0uS6ho7wcHJp6C0PHu8D7z2egGbTSYgddf8J8PykSQVVcUpGldM8tTp+Gb/sFF9NGlYLUBV257h6xNvF6BDRMUIJoiE2wg5YPqagtwCgaRHeBzhcZHsGQSBzyUuVwV5ui063C0gie/P4PCxNcJbHtrnYRA1QeOZggfgJyawbiALjw0gS3T5kLyMDzAZJ57gpInuJR9rA70hakPMtnnSAQD99PZQrlCttZxVFVlXWp4hNY32Rvcf8wKiRytFoUv907/BmUjLYiQDU3llJc1dCS3K0xnWCB51YxgHCP/ilb8TZWZArQpcpAAAAAElFTkSuQmCC",
        "title": "Moonie — Go to sleep happy and relaxed on Behance",
        "labels": []
    },
    {
        "link": "https://www.scaler.com/topics/javascript/oops-in-javascript/",
        "date": 1671610880,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACgUlEQVQ4jV2TzWudRRjFf+eZeW+iSUob2lRr6KaSjSgVKRTc6ULEjYKCCqW6kWDR6H9QwY2r0qoF6wcuXCm4UxBcVS9IulCpEQ1qih+tlNZGkjbJvXfmuHjvbaRnMTwD58zAOecRQ5inkviktPMLd1YmFoTmDYngveg0J7Txxp8A1nHE8QoggwRuhc/trOw6KvSiSHNVFQtSrVR6K7D2znW+eX8Hy1daPqGhcLwwfSRgQdG5B1UGZVBFr317/96aZqcT+3bhS/8su/vbm8HWh+L0unosHAriVKI5DIUBN4qwoCMf2KM4cgg9cZ/9+ZK91nN68v7E8x8z+H7525xve0V9Xv06M/5g4fpArz0mxnKwclXcu8+am0GH91MffZfSXVIg68Bs9eV1p7WSB/TPR6A90C8g+bMfk1Y3UU6uH3TlxQuqJ8+qdM8rYsKK26m//p1Y2wgoJWB3BhdwQDKLv7gs/ixTUWcKXp+lHvsUaQyqVTGhxrZlHECNNkTJGGtMNJMoZfT0A/D7KqxcBBqMEWBbIAsBENyEkDGDCiXQQ3fjL35qhWJIF6NphDyskd3mKjxAe6fhjincvYBocB3JPDo0umRQAqowCpnaRwfvgn83xeVVIKFtIcPeVcBGKYz/gk5qP1AxFc/tFn+sGvqOkLcLK1rTVaGTTL0YifJyYfPLTE5JOQuqZiaLNvpAlbebXsE1kVMi5cLWVxnPhzj1Q+LEI4WtZ+xyLtGkuLSZmBgzhFt75ESKRJPM4DvoHU2cfVicPHfrMo0Xpp6NicmX1MkHfW0dCIQwdcn4ratsfTTD6fWhKbqZyf/X+RqP79zB7Dw0x4TC1DPBjbfFmSu3cv8DYlUvEtyaUfAAAAAASUVORK5CYII=",
        "title": "OOPs in JavaScript - Scaler Topics",
        "labels": []
    },
    {
        "link": "https://macacajs.github.io/app-inspector/guide/install.html#requirements",
        "date": 1643652518,
        "icon": null,
        "title": "Install | App Inspector",
        "labels": []
    },
    {
        "link": "https://www.freecodecamp.org/news/create-a-custom-fetch-api-from-xmlhttprequest-2cad1b84f07c/",
        "date": 1671430194,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACF0lEQVQ4jZWSv0sbYRjH3/c5j0jIhQiSX0ehIRUu9HKkDgkUUoRiF8GhFKSBDMFaUuogQvCfEPcIcSo0i0IXR7dOGTwhN1QxJeelR66NZwdLcrl7nw6XBkE6+EwP3+/n4YHv89BgME0eUvAgejKAiDw/EwgEpioi3oVmZwM8z/siIKIghGq1D4qS8TzmE9Ho/JTwPJbNSrVaVRBCiAiU0kplbTx2VVXjuMnCarW8vv6WUkoI4ThQVc1xxpXKGqUUZFlSlEyj8Xk0cnx6bi6yvPxie/u9JD1hjBFCRqPxwUFTUTKyLEGxmNe0c8saAFBCCGNsZeVlNptJJmO53FPX9QghANSyBpp2XiwWQBTjut4jBH06nX68tfXu6qqnqlo8Hk2lHv0LAHW9J4ox8JdOIgPY2CgtLKR2d+uqqm1uVnZ2PnIcNwUYY2CalijGCaGIGA4LS0vPT06+Hh0dh0LBRCK6uJj1wyGEimLcNC1otc5kWYpEBETiuu5gYB8eHtv2Tb3+qdFoXl52h8MhISQSEWRZarXOONv28vlcMhk/PW07jnN7+8cwTMMwu13DMH602986nS6ltFx+EwjwzeYXjtLwxcX3Uul1v//TMMxOR7ft367rAsBo5HQ6uud5hcKz1dVXe3v719c3NBhMM8YSiRhjzLJ+UUoR0T+Z3yBiNDoPAKbZBwDqf6ufnc/dr7vujC/9D73v/gW7jgQGV7BuqgAAAABJRU5ErkJggg==",
        "title": "How to create a custom fetch API from XMLHttpRequest",
        "labels": []
    },
    {
        "link": "https://github.com/tofsjonas/sortable",
        "date": 1671701600,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "GitHub - tofsjonas/sortable: Vanilla JavaScript table sort",
        "labels": []
    },
    {
        "link": "https://www.crio.do/projects/category/javascript-projects/",
        "date": 1678563496,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsklEQVQ4jU2TvUtzaRDFfzP3SbyJYmGCiLgSbIy773aiYgo7KxtLESGlCNtoaWlhYbv1KmipFlu6jSCIy5b+BdFmtTDcRHPzcZ9nttjk3T1wmjkwzJk5IysrK8v5fP43M/sJ8IAMSRRFhBAwM0QEMzPAAGdmf4UQ6lGlUvlDVb+ZWQAiQAExM0nTVFRVRGTUVIf0zrkfgB8VWDIzPxTIsgzvPeVyme3tbcbGxgghoKpkWcYQ6r0PwDcdje29x8yYnZ2l0+lIHMccHx/L0dERzWYT773MzMwQQrAQgoiIApkTEUII4pyzzc1NsizT1dVVW1hYEDNja2tLkiTh9fXV0jQVgLu7OzMzAXCA9Ho9lpaWBKBYLNrh4aHkcjlCCIQQ2N3dpdVqydnZmcVxzNzcnDQaDeI4FiciqCr9fp+DgwNKpZKkaYr3nlwuB0Cn0yGOY05OTuTl5cUeHx9R1X+XISL0+32q1SqlUkm895yenvLw8EAURURRxNXVFZeXl4QQmJ+fl0qlwmAwQERwAKpKs9kEMFWV/f19yuUyt7e3FItFdnZ2SNMUESHLMkuS5L8JzAxV5ePj4/uZpqenaTQaqCqDwYC3tzempqYASNOUVquFqmJmODPDOUeSJACIiI0WO6p1u93vaex2u7TbbZxzmBkKmHOO9/d3u76+NkCccywuLlIoFCgUClSrVXK5HGbGzc0N7XbboigCMKnVaoORlV6vJ8vLy9TrddbW1oT/4f7+3i4uLnh+frZCoTDS/pZarRaGaVQRka+vL1NV2djYYG9vj36/z/n5OU9PT6iqjY+P470fWf2Q9fX1P51zK957ExFRVUIIfH5+ks/nCSHgvWdiYgIAM8PMQhRFmmXZ7y6EUPfe/wr8bGaZ914AmZyctBACIoKIMKyP3jnKsuxJRH75B+DNbWyzEXhFAAAAAElFTkSuQmCC",
        "title": "18 Real-World JavaScript Projects You Need In Your Resume | Crio.Do: Project-based learning platform for developers",
        "labels": []
    },
    {
        "link": "https://uibakery.io/regex-library",
        "date": 1680197661,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACDUlEQVQ4jWWSTUiUURiFz7n3fvPNaNKQRbnRMKMMtNnVJqGsVX+bwkUGQW2iddBS2kW7oI2rItoVEi2DijbmSqGQoEhIMMnIcsbx+5l7T4sZx37e7XvOfXjvOey9swoAgCSShqhlKlg4Qwkk/hnTVhuSwMq6P33AnR+Mqkkw/6lbBgkkM69aFm4cLT64sO3gLpt6meZSfxkcAFI+YHuRE6MdY8MxgOVqAADBkAFqvrhFIJh73T5ZGhuOq2m4+6b+/EPeV7ap169EBEm2QQ5AkAyxb4f5+N2/+JTt3+leXYst+f6bfzSbTs3nJbdFsNtP3RIQOyYN1XNcqsSHe1xHgaXI9JXN2cGYwOuFPLatUw0AS9QyzH3145VCV0xAy9WwtOYB+KCbI8Xj/VE1hSU3byBTr8uVuBQZCc/ms5HJtWOTa49nU0NIuDhUAASoZQhBnY69ZSPJB91/m6xuqJ7h3nSSNARgb9l0FtgI2iLkQRu5BBhyoNtWU6wmYaDbRoYC6rkaQYZs54DMY/pL49yh2EsTox27O00WdP1IEYQhZxb9eobuEj3AZpdCUOwwNd41tMcBApqfKIALP/yZh9WfiZwFwFY1rGEtxdWn6zOL+aYaAOaW8itPait1RZYS0SY0y5c0FFmc6HeVHkfi3bJ/+TmvZyhFDFIzO/5Zb0MGoZYp9xIQWXYVaA18UDvp35e8C2xOyVWBAAAAAElFTkSuQmCC",
        "title": "RegEx Library",
        "labels": []
    },
    {
        "link": "https://www.mongodb.com/resources/webinars",
        "date": 1664256624,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHUlEQVQ4jWWSzUtUURjGf++5R0dzHAwatEmlaOPHKjTRJAL3RRt3Qi2E9m37H5SW07aWQZto0cJapGQgEqS2iKD8QiKzGcevufe8Ld7rzGgPvNxzn/Oc5/04RziPK/2jeD+FhnGgJ2XXETdPkjxnY3WxUS61VWHoAv54BpFHiAMCHCa21xoBDjSAapE485itpYO6QfdYK5Re0+QnCAmgUElgIGsGq/vQFpncRVCN5wgtd9laOnAAuPIsTX6CJAZVOAmQ8/C0zyLnjVOFJIYmP4GvzABE9AzexLmiZU5RSeDJdbiXh64MeAdvf0PG8qEK4obJ5d84lGnrOcVRgP4sTHaCWjdMdlo7RyEVKYgDZdrhGEdD3eA4wJ2LkG+uc/lmuN1he6dQBSe3HHDZ0jTcSyFj3+8nFgJ0ZhrvLC1NC47zUCBWc9rBAjFO/1PjgO0z1gJ8Ltv6WxoAX/bPVSCAbHkC83g3WJtDWwTvdmH5L6ztGLfcBe9307dwel4gCQtC98AIUbRYMxCgnNjQXt0w7v4yfNiD9ihtQ0wXdCSi9GuT9nwB74dqJhkHKxXoy8LXCsz+gA5fn0HkIWiR9ZVnVlO2dw49GcP7a2iqisSe8MIeHCT2L2KHq/EcmntAaSM2g/J2lWzvS6R6CZFhXARe4E8MpQQyEUjafwhFkpaHbH46PO34LK72j6J+CtVx0N50MD8RmSeOX7C59rFR/g9XJMcXmM6rnQAAAABJRU5ErkJggg==",
        "title": "Resources | MongoDB",
        "labels": []
    },
    {
        "link": "https://stackoverflow.com/questions/3593420/is-there-a-way-to-get-the-source-code-from-an-apk-file#:~:text=May%20be%20the%20easy%20one,will%20see%20it%27s%20source%20code.",
        "date": 1664355197,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVQ4jbWQsUsCYRjGn/fuSu/Sk3ALmlzNtoagKRqSaHMKGkKhEOV0KWispSXPQaglAnNobOgfaCyIcgicmxO9zFPv/N5WwTs5gt7x+5739/2eDwgw/bK67HcnBQG4Ag3L0LJ/BoBFDuDzTiGUCAywDC3bNbRtANCrwxaBziRZanAGcjADwR8AX1uGesEZyFGzXwO43VsKn07GaJa5lY/GMefUAYooEvaELDnCEW9M2I1V7GdPg04hlLAM7dYqqut67ftLNwdpMB5dgRfXdVMgHIFpx9egfbwYk0eDA2LKAWJMkK6cUOhOGdkpZmoQiy29OmwFq1AKb5CgQyakAXqQJKpELn/eJzPK1JKhPhHjk4EmMzUVmU/coVLkeXff672pk155YXUsxikCJQFeYVCSgCiAV920N311b+r37FslH413S+qaV86rggfIBbG38RRAN+2ZHzsTMKvGv80vvziHGAusG84AAAAASUVORK5CYII=",
        "title": "android - Is there a way to get the source code from an APK file? - Stack Overflow",
        "labels": []
    },
    {
        "link": "https://httptoolkit.tech/blog/android-reverse-engineering/",
        "date": 1664372716,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACwUlEQVQ4jV1Sz4uVVRh+nvec77v3zs+8k85gxUwQiUG0qAgJHFpYEGULwZWrXLURXEcg/QWhtGgVES0DoVUF0pQ6SIhGRIppY1LOeJnpOj9uc7/vnPdpceeqdRaH874853neHw9vvrhrshgt5yFZv0rnvri0tnl8fvcbRBjzlC5AuR1j89kET6QFeVYgXWJuVdUPsdWMzyfySxjZCHnfKWD9XcbPxwKntsCjGeXhqYYd61RCdjnMrAxE7UCvKF+LiJECnFKMofHMXwemiloIklTLzIgf7yefdmBvGbi/zur1HBchVVDViSklIAYBZG38CkUhwq2WwVzl7Pl7pwGcvj0/fWI8ho/Wcl7pbNx956XL6AGAJYEABtf/TkB4GAgUBACYjO24k6U1CQcgQYmut72uXyB5PxpczHpA4BB2sI+KGBli09hsBhbB/1maW1y9AXFkPFhIZsVAHAFkcyxYADgR+27DumK32vp5JIwcBqHZCxvXAWBJ/tZKP0/Ganthp718F/h0eTvdAnjv6avd7rAC3jkw0UY58godJvpjZLAM70aHZbc/4/bmko+Ovkmo7/R1uZUx+Ore7zrnAYC3X91zqN2K3xRGrNeOLKAViMlGwJ2t6qwyPh5vhG9rF9oFIRBrtaPvOjO7sHyCSwen9geL78vZEnGoYWxVrp9aht+23c+582YM/DoJDuEDQoUZP3QhW51fjnPfr/4K4Ngvz6Ecf3zm2liwub9T+mz3wsoZAPjj4J7XXTQDKGoaYIMgh8uIACgAt1q7WoOJCw4bOOsBZLDpiRhOZgmV0Hfxkycvdq7GnSnrRqRAkgRAaCiRgxg1QK1X6T1kuxxVbzy1uHptSD8AdteEmRkARvhDA4WUwRDoEELSpScWl6/8x0jDx77r2HTpeLfKR5Oqs8N8mXtXkuMIso6MNOrfBdipR/79C8+iXkX1leqsAAAAAElFTkSuQmCC",
        "title": "Reverse engineering & modifying Android apps with JADX & Frida | HTTP Toolkit",
        "labels": []
    },
    {
        "link": "https://scaleyourapp.com/what-database-does-facebook-use-a-1000-feet-deep-dive/#:~:text=MySQL%20is%20the%20primary%20database,as%20the%20MySQL%20Database%20engine.",
        "date": 1664457326,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADfUlEQVQ4jW2TS2xUZRzFz//7vpm5905n5vY1nb5sGcqjFUdSKS0tSEkTQvGtmbBTxIVhYdTEhSZVFyZ2UVkYTHwENUZZUIkQdk2IQSOhEpJCQaf2SYVOO21nypR53Nfcz4Vp7MLf6mzOOZtzCP/BALgA0LDv5b1MBF8VCuvVFBkVnLiqaqlgwP/tyFfvD2zygG/SUm/u1aPtR4Y0TTvt0zxdikpVRiHHhBBQFCVo2faSHt3tbdgSo8UQZbC46NJGc2jXsa0tLbXn/aHG3bb1AMzNOcQ5Y+QlyYhMo1gqmiUumYZSLvlF4vJ3JwGAWvuOP28UWX91ZdUhrrBty5k1W1Uk55bJzKKUedsh5uOyPKSDC4/kEFnXkT/bRvbPW4m1QeGAjasB39eKplVsjXDn3RNHRLi6muZm5mWuaFCBfHI8MU0z09PSMPOAywOC4amCk/sL9380hWU7XVpZMKj5fc7Ae2+waI2fDMOSdWGdHmmsAwAySi6u/35dluvl5PdXFPoP93VOTt6eAABWpmr7QnoFT95PyrGxm6zkutKyDPL5BOZm5pF/mINbMPD49laKBHU3HGLB11+JdwGgeDzOmWA8L4SgB+kMcduRnDFKraRw7vw5pNIpLGfS+G10FKdOf4p7K0nXdCG3t3f0AJDDw8Ngt278cebOzbHUnsfaxJPd7RJSIuTXMTn/N8amEiivqAK5wN2pWVqaT5IerIQaCDQDAK5cIRr67PMXJlbXB48ePNryYu8ubphFmRufwmq5IEfz4tFIM2bvJCCERwpXuGLN5LPZ1Hj3M33tUkpXdMZiP+30abh6bRL7O1pkmIiyC3kZjcakG1RpPW9h3eGor61BuFLnq6OTknPONtYnFuYWv9eb2p4t2gHv2Ytj6nMHYqXlmnp29sKvlDXycjm9ArNgYc8TnXRwf8zZ1r1DTF26uwSgBIAIAHp6TgQaD/fv1Xw04kWAw87b2fQ9YWVT1BqtRSYnpckibjCyxdaqvMr89I0PfvjwtY8Qj3OSUhIRSQB4c/BMPM0bhsqY0uTJpqAW1uQO1YfbyRTlIk3gdc0oZBYmwlrlgVPvHFoFANr0JQJIHn/rgr5up07ubKsbKPNAsYsOW39oW4b0TDncM1KpWp98/PZLi/g/4vFhLuW/oV9evPSN5ZTkL4lEpuPp+LH6+voGAAoAHUDVhucfCF9/bdNcFscAAAAASUVORK5CYII=",
        "title": "Facebook Database [Updated] – A Thorough Insight Into The Databases Used @Facebook - Scaleyourapp",
        "labels": []
    },
    {
        "link": "https://kinsta.com/blog/open-source-database/",
        "date": 1664457523,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACe0lEQVQ4jXWTv4tcdRTFP+f7vm9mZyazmzBohKRYBG2DQZAgFiJbipA0QjohgkhEsUkgbmO2UfwB6eKPfyCllbFIJZIiChIUDBZRWERX19mZnZmd9949FjNZA+KtbnHP4Z5zODp3evSl7Q0zd1EkCRw4RWMkAWCbohBCYaGow9CSpK909qmh7ToATSemaSBna6W7AAMowWRsopYNdLqQsww5ZZZgY57daDE4ntj+peb72xVFKZJgfxw8/Vybx04m3MCdryv+/MMqcx2ZJEUTaq/Aa5sdBo9mfrpb8fbLQ9pZ7O40PP9im0sf9klJGg0bvv1mDjZKItlGlkE+mMkR+GBmcgl7u8GpZ0re2jpCSmZ/FN68MPb2fbvVliMgSciyJJQSklCZxWRsTj6euPxRn04PmgY+vjLW3Ttz9Y+iCAusBKCl07aRzGxmeqviyrU+g+MJEJ+9N+HWFwccHSSaWoAByIdOS8vYRKsl3rm2yvoTmQhz45MpNz6dcmyQaBqW4MV94n8m4sEh1LUerP+ZQwKzkACmqszVi3v8/GNDSuL86x3OvdLhr52gKA5FY3tBYEBevGSLVltM983ViyN+3w7AXLjc5YWX2vy9ExTZSxJINpZlC0dgB64r0+mJ334Ntt4YMRqaooA3t4741JmW93ZxKhbRJ0lYi0i6PZQK1OmJuoL+WuKH7yo+uDSmqqDbk9693tf6k0kH01ASZGxLYj4zn78/5ZETifv3KknQNGbtmLh9a87mqyNOrBemgbpmKRfr7OmhiToCNNk30ZicF188XKbp2NS1DLDSgbJclkmkm1a5IeZeXVvU2VjNw3UO0+0nEvK/dS5l6eY/kYlLgxtebbgAAAAASUVORK5CYII=",
        "title": "The Best in Open Source Database Software: Top 10 Picks",
        "labels": []
    },
    {
        "link": "https://xosnitc.github.io/roadmap.html",
        "date": 1664648705,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADGklEQVQ4jX2TT0gjBxjF3ySTmJjR7NJEIVPzT3QIWjTiIRYs8SLYoyZ6iBGNJyN0S+hVvbQXQbAnvXkQKyJ4kOJND7EgFSRoDVYjaIqKaV3FBjVxknl72O12WbZ9x8fjx+Pje3r8h4LBoKmysvILh8Pxqra2Vs7lcr8B4Mc54WOjp6enIpfLTaqqOjIwMGD3+/1iOp3G0tLScXV1def29vZfH+b1ADA8PGwSRfFrWZZ/8Hg8P4VCoc7BwcGq29tb3cbGBtra2hiJRGzpdPobURT/yOVy+x82MNTV1f3ucDg8pVJJ2NzcRDabRSwWgyAIEIS3JU0mE5LJJEZHR7m/v//L3t7eVwCgkyTpZT6f/yyVSqFYLGJkZAT5fB4rKyvw+Xyw2WyIxWKYnp7G6uoqrq6uIAhCZ2tr6zkAnQDAHo1GTwKBwIvx8XG4XC7YbDZEIhHE43E8Pj5iZmYGa2trMJvNKBQK0DQNAF6T9AgA7LIsnxwdHb2wWq0gCYvFAq/Xi4qKCjw/P0NVVaiqCk3T0Nvbi0gkglAo9FoURY9OkiRcXl4imUwiHo8DAJqbm3FxcYGnpyeUy2XIsoxEIoGTkxNMTk7i+vr6nxaAJEl2AHfBYJAPDw9cXFwkSYbDYTqdTq6vr5MkT09POTQ0xKamJk5MTNDv998oilL1HtDQ0EBVVamqKmdnZ2kwGOhyubi7u8utrS0Gg0HOzc2xWCySJBVFeQsAYO/u7r4rlUosFArMZDJ893F0uVxMpVIslUokyeXlZQYCAZ6dnbGxsfFGUZQqHYBHTdP0CwsLsFqtJIn+/n4AgMFgwM7ODhKJBJxOJ+bn5xGNRuF2u/+9AQDIsvy5Xq+/AcCxsTHe3d1Rp9NRURQqisK+vj4eHx+TpJbJZBgOh7X6+vrrjo4O83uI2+02mUym7w0GA+/v77X29nbN5/MxnU4zm81qU1NT7OrqosPhOPR6vd+2tLTInxyT2Wz+UhCEny0Wy8uamhpYrVacn5//LUnSr0aj8bvDw8OD/13jO1WLojihKEpTuVz+0Wg0pg4ODv78VPANuZZvjW445UYAAAAASUVORK5CYII=",
        "title": "Roadmap // eXperimental Operating System",
        "labels": []
    },
    {
        "link": "https://docs.oracle.com/en/java/javase/19/index.html",
        "date": 1665073571,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACH0lEQVQ4jaVTz0tUURT+zpn75j1nyooWiaNo24ooXBQlpYugNkbgE4r0HygKhSBazc6NLvqxbtEQRCNCLZuN0RgRGLTIVUIuRiOjH5rvzbyZe04L56WDOpsOXLhwzved893zXUJj0HPfZzSJoXxeAOi2hPpINAPuVkvYoCMC9MXAwN6ug3vOgCilIopEvc5aEDMhocGi/fP28uOXazGGYqbvV/pHTJJusZvscRIG0HoJUL8DkVVUarW5SIL7Hc+KuX8TLPgXJrtT7thaNUJgozeksqzgBkkEsQC3txinN+UZrKyGE5mpmTu05PdfS6dbngaR/SJluZ6ZLsw207/o9/WmjZPzkqb7azW8ygQzyjXVGuRGZrowmwVYAdrpZAHuys8Uy5XaTbICTxKjBgk98TOqlDoXfhcUYAIk22QBCjAWV18tHd5XYgcnmVAFQ2k+DOMHpd3xG7n5MCRlIhIFU8370Op6meTxAxcJkGb66wySOtJ5qdVz2wWYYxdmwjLgOc6jlcHevu0W2zI/gM9DPf37HXrIyvjlBpMEACX/3PihVPpuWFWsR9F7srKsDIbq5uCiQsxtLZ455TkOfqwG423Tr+9R7Khvg+d9MunbhuVsyhBENswDAhQEAlC2Fiq2GFQrDzqminnEVotJngwPp4+xnHYMeUrSoIZYSCzKHyPn3Ugutx5jNvX9z2fa2kizoPwnf8dV+kfzSlkotnT+Cwzd59/lr6IsAAAAAElFTkSuQmCC",
        "title": "JDK 19 Documentation - Home",
        "labels": []
    },
    {
        "link": "https://docs.npmjs.com/cli/v8/configuring-npm/package-json",
        "date": 1665602711,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABXklEQVQ4jX2SwU3DQBBF/5/dCBJySQOROKSDFJAUwJFDyqCUHFNEKohSABIUgISQfIq4REggsGPvfg7rNY5AjHzZv7Mzf56Hj4AAkjDDPxGjJAJeAIAgKQQB/JWZRAIGCPAgo3Q5m42XS1UV+32kVI7ev+92VVEY6WkWQxgvFtebzT+Onm9vv4rCmfnkTFWlEBQCzQSApHOQIKlp6Fw8nQhIsta0WffRuXA8vqxWTzc3r+s1B4OOB9MMACiRVKphFsvybbst63owGvHuLrUEADKPmJ6RJCXRzE0m3syurvLkbfzBvi3WNIoRIbTHHL4j2MPYHrtESchX1qaeZyub7HTlK/9jsCuTaJ53ax+TPsGh90xYAQJuOEy6JR0w55hgPpBRuphOR/O5mib9E5Xlx34f6vpiOh3O54jx8/6+PhwI8AEAELNLAhGwvHCdbpmBJyDA9dbbpbljRF/P6/0N72fAJesyORwAAAAASUVORK5CYII=",
        "title": "package.json | npm Docs",
        "labels": []
    },
    {
        "link": "https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win/",
        "date": 1665772875,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACnElEQVQ4jU2TP4hcZRTFf/d+78/szmw2oLtKNqYUTGVhIXamiYXYWQmCjaVF1mwakYmK6Aop7CxVrGwEAxFBwUqI2NikTOEugv8wszPOvPe+7x6LycoeONU9597L5Vzjf8jA9MrHurgyJmFE87DSAy58JOZfvGFHp1oAe2h2sHjhsH+9pPqj0ochudm6LAnMIjWuFHHwzfX0yanH1t3gxVtcWPX5Hl5tRc6YO2ehCLyqoOS5N9Xlb/c5AnCmGJj6rn8n1dWWhn5wFETWWToKDf2QmmqibvUumJiy3vGlW/0zXU4/llIsIjw55nZmutYsQu4enpymiuduX2vuuiRb9eVQbpVUlFwsutDvDzKn/HteWA6Su1Bk4Z76VTlkKrerH8xflY8+LUNf3PHFKtuVy4lnn2woAcngz5Pgl/tL7t53Nka1IhSpbpOX5WtVBIdSDlMYAjfTfCX77Y8TSsmYGRHQLVeUDtGeN8MsSh+SPnQ3yRBmgSFAmBnmFWaOe6LLRpaj0lFWM0FgGIbwpDhwT671qVCEjVuxuyV2z9fsnEtc2qnZ3nACN5WBvJrJHffkBybJrr7/z3dWTZ4v/SK7kxYrMZs9MJUeMweDzca10TqCkuqNitL98H164oqbmTbb5rppyOZYiWDcyvYeO8fjj7TsbMPutrM5kkUEhozIZVxznamFM5V/9eb4Z5V/P0vNJBnKkiKHRD1RUCnnrJCFUXJqx4my/Pzrty/9xFR+Jsp/XRiWdg9vtiJ3gHH6C7k/IXKPVy1EP2+3Rk/dubF3vI4yJrhpt689elxb7BvMTHEixVwxLKS8SPXG3D3NDM0aY//OjYtHcNPAdCawGKCX3/t1j8loQjSlzp11gI9bMfSJ+fH8y7eePj7VAvwHlyWQF5s8SOcAAAAASUVORK5CYII=",
        "title": "https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win/",
        "labels": []
    },
    {
        "link": "https://www.chromium.org/getting-involved/download-chromium/",
        "date": 1665772954,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jaWTS0hUcRjFf//rdW7OWGONzmQPzVeW9jCCIApCTJKWZVDLaGeLoHLVJgiCqFaR2za16YG0iV7SxhbRQ4uEwLKS1HHGUa8zc2fm3vv//1tMGBnVorP8zvkOfIfzwT/Q80yX/40XSwfnH+u21NTYlfEPLzr0D7oEWNO6c2BVrKn3QqcY+qPB8ZuTd+LDj7qtgEk4HEboIq20wl6wyeddGrpO9PUdECd/M2i/Nn4987a/Z3U0imkaGEKABolCS40vFa4vmU6mMOv23Htzflc3gAFw9aXeEcuO9JQElmE7ORKzab7EZwmHAtRWrcBaZhEKlrGyIkRLYw2RhXeHbw3pNgATQLpcbmmuJ5lMkc5kaVy/ipvnupmyJUpr1lWYvPuWxfEUQcuk4KSpjHIF2C8ATt14pWvWVvN1Ik7//UeM3u7lUv9nrFIDIQS5vEfvoQY+JnKABmB2zqZ9W40wALQGqXxq1q3m6MG9DH1aYHbOwXFcHKfAfLrA4PsZgoESlCrqtVL8PEFppFQoLdm8qQHbKZC0c/hSIQTMOy5Z1wfUYvK+gpGELjcBXE/i+hrL0kwseOzbFGEqnSORzf8Qa7bWV+C4RUMFFKSkNSoyAuDcgH6aHh/qiFWtxDAMIqFS9jWHePg6jtaajrYYZolJwVMgIDVnE6xaP7C7WuwvZmBwNpPNk8v7+FIxk/G483qeSCSMFQwxGs/jy2IvPR/mMh6ZAr2LPbjYLoYjTbvvTUzPkMt7FFwfLSUfpx1sx6V5TQhPKhxPMzaRJBCr7+vcUKz0L1U+80RfT4w87wmWWYTDK/B8Rdf2SpYHTaZn5kmlXUJrN949tlkc+eMznX6gd2jB5cmRwY5ouJQttRWkXUl1XcuAC2ePt4rhpTv/he8rV0G9Qp5RkwAAAABJRU5ErkJggg==",
        "title": "Download Chromium",
        "labels": []
    },
    {
        "link": "https://omahaproxy.appspot.com/",
        "date": 1665773184,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACW0lEQVQ4ja2STUgUYRjHfzPvzs7s9mEUfoBpFnYQzXSD6EPS0KjoYFEegqBL2E0CDxlBnQL35N2gmxBIl1Ao2oMJXgILipRCXbGixMqV2d2Zna+3w8jIFp3qOT7P+/89f/7PC/9Yyu+N1d7uHpE0+tXtyT5VEwDYeQ/VNMdlsTRa/Xwq81fAlxNHh0VF4rYS1xBJPeoHtktglwgsF9+00nWzb4b+AGSbmodFQrut6hqqrgGgJjQCyw0hjoe0HTzbBUl6//z7oQhwYeJsT2oq9+L6k3VEQiNmhAA91U7gmNhr7yI3qvQAEE3umdqRlUws7Ir+16d30z6To/WbS/zAQb7eecC83InjQ3uVSd33AYQzh9AtdCNAEV4/I2RCB5PnJUDtyzVujK3hjk3yaEFixEO+7XjcPBmQco9FTnxfRW8vKLGyEDsreVtqZO4zrG1Y6JtXcL2Ax7MJjhw/hSxMl10tBiBLEkUP8/zQuQdz3eFHvkRMqAB4fkD1Lq1MKP3YFsAvBsT0cNucvsTVQyrT87kywZU2rWx74IXvVYDAV8ZlSUbDV+5D7l6qpqVK0FIluNdbSSo+GM09J06pYIxHDtyCNwqiL77pYjG3xCL3OdzVimcHbPx8SkXFSiQubmzDMo1RAAGwPJldajjXkJAuHapQUGJhHqvFVeLFBQb3LiAAzzawzCSWaaRrLy5tAQCyE9lMTde+hLRlhxKAoirgw8COZWqQ2Pkk+VySQl5P119ejL5yBAD49Cybqeyon3GtIOGYQXObm6dbWuTXDYqmPu6Y8VuN1z6O8j/rFx6O/GvpiIvbAAAAAElFTkSuQmCC",
        "title": "OmahaProxy - Google Chrome",
        "labels": []
    },
    {
        "link": "https://www.blog.duomly.com/types-of-applications-you-can-build-with-node-js/#",
        "date": 1665847559,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACh0lEQVQ4jY2TP2hdZRjGf897zrk3jSZp0hSu0iSlVBEHhWqbSckg4lKdBMHFqUiLSTsIjsVBhE5S0E2cdNC2k4hgNA7drIIo9CKCsbUmJSjpbZrce873PQ43WlEH3+mdHn48fzQ78cpTijgvopVSPnnt1lufAgLM/7gg4h0pHpLiUBGcP8CZKQCep8AIABO7ov8WCOlwzill1zVF9UCxvzkJmA9JaJdCZMCcJThL/F1Ac5OLGYEhR1OE+1pP41tPFstXp7XWOiFxv0u9P7g9+PjG8ZWNfxLo4NRidiPRD9MZwHxPem5jlc7gvqjKlm2wcZN/lLiU6/zB6jOff32XYHzJ7KutF9fF0R5MNlZTiAFYpD/tVKFCbZHdbNFoud7XnPrl0ZXrgYwayestc7MF/cDtlF1lC0KJgsLhPU1Od1KK1bF7uN5+Nl4/1AEoVYA3S3ivI1/cDw9vSfM9Mb+JOwMosH8v0ZdT0meTW6ntrpau5e3v6AKUtlBp2Nvg2wUUhl8rODeLH7wDEw18M540k0svbH7CE703GU1vbFx9dwdBOUzK2MJJxOFt9PIN3B1FlyfwbxV6ac060ier7q8e+eL7gytPn+Hxx4ArlEhg321JFmwHnq6JF24iQe5H4R2sb8cX5o69evyndO7CX0WybSRsm8L45za+VaKRPKTKksocrg1fjc1oJH00N720fGDv6YVhjFOLGQthGUwjMbsDx3popj80ca1CV8bk7mh2mFAVONdJ6TXNTS4ZyMPGWhYwENQxNFRAEoShndndRoNUApsBuiyVAQ4jiZDaSGNZ2mNpxNK9u79CICFVoVIyP5Su0wkq3gY9YpMgC//n8ICMLUuUdupm+9QfHEU3pB+d5UIAAAAASUVORK5CYII=",
        "title": "28 Types of Applications You Can Build With Node.js - 2022 Guide for Business Owners",
        "labels": []
    },
    {
        "link": "https://kinsta.com/blog/javascript-libraries/",
        "date": 1666158928,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACe0lEQVQ4jXWTv4tcdRTFP+f7vm9mZyazmzBohKRYBG2DQZAgFiJbipA0QjohgkhEsUkgbmO2UfwB6eKPfyCllbFIJZIiChIUDBZRWERX19mZnZmd9949FjNZA+KtbnHP4Z5zODp3evSl7Q0zd1EkCRw4RWMkAWCbohBCYaGow9CSpK909qmh7ToATSemaSBna6W7AAMowWRsopYNdLqQsww5ZZZgY57daDE4ntj+peb72xVFKZJgfxw8/Vybx04m3MCdryv+/MMqcx2ZJEUTaq/Aa5sdBo9mfrpb8fbLQ9pZ7O40PP9im0sf9klJGg0bvv1mDjZKItlGlkE+mMkR+GBmcgl7u8GpZ0re2jpCSmZ/FN68MPb2fbvVliMgSciyJJQSklCZxWRsTj6euPxRn04PmgY+vjLW3Ttz9Y+iCAusBKCl07aRzGxmeqviyrU+g+MJEJ+9N+HWFwccHSSaWoAByIdOS8vYRKsl3rm2yvoTmQhz45MpNz6dcmyQaBqW4MV94n8m4sEh1LUerP+ZQwKzkACmqszVi3v8/GNDSuL86x3OvdLhr52gKA5FY3tBYEBevGSLVltM983ViyN+3w7AXLjc5YWX2vy9ExTZSxJINpZlC0dgB64r0+mJ334Ntt4YMRqaooA3t4741JmW93ZxKhbRJ0lYi0i6PZQK1OmJuoL+WuKH7yo+uDSmqqDbk9693tf6k0kH01ASZGxLYj4zn78/5ZETifv3KknQNGbtmLh9a87mqyNOrBemgbpmKRfr7OmhiToCNNk30ZicF188XKbp2NS1DLDSgbJclkmkm1a5IeZeXVvU2VjNw3UO0+0nEvK/dS5l6eY/kYlLgxtebbgAAAAASUVORK5CYII=",
        "title": "The 40 Best JavaScript Libraries and Frameworks for 2022",
        "labels": []
    },
    {
        "link": "https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848",
        "date": 1670092307,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTsaoiQRBFT3e/mUFBmET8BH/ABQN/wFARFBTBSJjAVDQQzIwe7IcYjGBgZiCYGhr4ASZmBsLYrzZQm9G3y8puQdNwq2717erbAJ9AAljgC5C/rK977RX4VHeQ+654L1ytTnVWxphHM4wxTwxjzAN7kAUQdZek+DcFolMk1e/3ieOY5XLJcDgkm806RrPZZDAYAOD7vrrnFEopCYJA5vO5vMZ2u5VMJiOlUslhrVZLOp2OjMdjAeRDRGg0GtTrdZIkQamboOv1SrlcJooi8vk8IoK1lna7zfF4JAxDAD4AqtUq1lo3LKUUSimstdRqNc7ns8sVi8WnIWsAz/PcyelQSmGMQWv9hIm4x7o1WK1WaK2dTGstSZKgtWaxWLDb7VzucDhwOp24XC6uo/i+L3Ecfxvifr+XMAylUqk4rNvtSq/Xk8lk8vDPzRBBEMhoNJL1ei2bzUZms5kUCgVn4SiKZDqdiud5EgSB5HK594z0euffGckBr1ZOk/9gZf7XyhggBH6kVb9BFm5f+ucvMhDxQnv5W1IAAAAASUVORK5CYII=",
        "title": "Array intersection, difference, and union in ES6 | by Alvaro Saburido | Medium",
        "labels": []
    },
    {
        "link": "https://stackoverflow.com/questions/20778072/sniffing-an-android-app-to-find-api-url",
        "date": 1672504212,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVQ4jbWQsUsCYRjGn/fuSu/Sk3ALmlzNtoagKRqSaHMKGkKhEOV0KWispSXPQaglAnNobOgfaCyIcgicmxO9zFPv/N5WwTs5gt7x+5739/2eDwgw/bK67HcnBQG4Ag3L0LJ/BoBFDuDzTiGUCAywDC3bNbRtANCrwxaBziRZanAGcjADwR8AX1uGesEZyFGzXwO43VsKn07GaJa5lY/GMefUAYooEvaELDnCEW9M2I1V7GdPg04hlLAM7dYqqut67ftLNwdpMB5dgRfXdVMgHIFpx9egfbwYk0eDA2LKAWJMkK6cUOhOGdkpZmoQiy29OmwFq1AKb5CgQyakAXqQJKpELn/eJzPK1JKhPhHjk4EmMzUVmU/coVLkeXff672pk155YXUsxikCJQFeYVCSgCiAV920N311b+r37FslH413S+qaV86rggfIBbG38RRAN+2ZHzsTMKvGv80vvziHGAusG84AAAAASUVORK5CYII=",
        "title": "wireshark - Sniffing an Android app to find API URL - Stack Overflow",
        "labels": []
    },
    {
        "link": "https://pytorch.org/tutorials/intermediate/mario_rl_tutorial.html",
        "date": 1672587074,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaUlEQVQ4jXVTPU8UURQ9982bHWAWhGUj4UPEuAEZiGJYC43FiuFLrVQoRBOjhYWVv0AojaV/gViIhWhcIkaksTEx0Si4LiRABIKRrwDrMsvMuxbMkAHX29zk5t7z7rnnPCBP9AMCAJbb6quXOhqOAQB7tYMhDxYYIALUYqI+WlRsvGDH6QcwQ4DKByDyDPP8xerycIkxoguKu8xTUzEYK51WEwPEAP0XgACeO19bVlJU9sqUIr5pu30lyVS64oR1o9jUv823N8YI4CAdEXx9JlFXGokcGg6H5NnVbbsvkpx4CgCu4rGs496a3vk+8+Xc8cP/0PHX2rzSNMTXWnj5snUTAJ4BWrBv5VJTl321ZW6po7HZnxMMaATwarfVHS4IXV/NbvdHX08OMiB7AddXgAGNnZ1ZoVR5oUGPghQYAHQhbmdzzrr9a+Oxd0wncBs1BCA6mk5lcu4TQ2hdP9tqqglg4fORGppB/Lnq0+If8kCD0bN7PNJBHwxBFDbCsf0qEBEpcg8O+jHgZYdcBkDSc5DwXaeUSrvgU2xZoXyue5iAIIAVRGtOsVrPqGkAEJanwI6DQbNARteP4h4BigHtfQKSe3YzjcNZS9SVmrq4n2P19shYesG71a4c4wlo8eLm0ZAUF7Lbdk/pyI/nwQ1mOxsrIyFtqFCKuG3nzoSTqa/7AAjg3+0NVYVF+ktTl60Z233nKh4mUltE4rQkuqMJ0jM5p7csOTnsz+z52i8snawwzdroA10Td5lRRwQo5i2ARrK2O1D+ZnKCgT319n0MHwQAJiyEIpWxmJJ6Aa9tzNV8XFjxekTQyn8B1iL28idBXqcAAAAASUVORK5CYII=",
        "title": "Train a Mario-playing RL Agent — PyTorch Tutorials 1.13.1+cu117 documentation",
        "labels": []
    },
    {
        "link": "https://github.com/ardamavi/Game-Bot",
        "date": 1672587318,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "GitHub - ardamavi/Game-Bot: Artificial intelligence learn playing any game with watching you.",
        "labels": []
    },
    {
        "link": "https://towardsdatascience.com/how-to-train-an-ai-to-play-any-game-f1489f3bc5c",
        "date": 1672587330,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACE0lEQVQ4jaWTzUtVURTFf/vcz/c0MsTSFAnEBgohkRFRRBBNHDYR+xj0B2Q0MQgahaNGOWvUqEE4iAZBTmqUQREIhSRmkilq5Mfz+d6999x7TgN9+gwVoTU5m73PWpuz9zrS3TugEVxrrRUR4QCouhupgxD2w64C1tod5165HQL/FioQEfZ7l6qQlQjGmK1YBFzHoVSOiXWKUgqlBMdROxoqay0iQqxTwsBHgCjRxEnKwp8VBvv76Ll4muVCkcJamaXVImaTY63FrQSB5/L43k1W1ko8ejpM87F62lsbudzdyezCEjVhwLUr50izjJHRMRKdoZRsCJTjhK6TJzh76iQT03O0tzYx2H+dQrGEMZbFpVUG7/Rx6UwHwyMfcB2HWKeAoIw1BL7H16kZ1ksRQ89fMzkzT1PDEW49GGLy5zx1h/K8ePOeH7OLNDbUoZTA5syVsD3l9XLE3Rs9dLa1sFwo8uT+bTraWnAdh6P1h5n7vczV810cb6gnSVNEBKe588JDpUTpNGN86pdkmeHjl++Mjn0jTjSv3n1ibGKaMPCoyQU8e/mWz+NTBL4nQCrdvQPaYl3ARomWKE6ozYekmSFONK6j8D0PnWYkWuN7LvkwsCKItURuxSzGGPJhQG0uJDMG3xNqcsHWzgPfQ0kOay2ZMVi7wXOrHWeMwezizI1Vb9cqOWBboDq5l6UrqBb/79/4F8oL91tUVF3QAAAAAElFTkSuQmCC",
        "title": "How to train an AI to play any game | by Dávid Guszejnov | Towards Data Science",
        "labels": []
    },
    {
        "link": "https://towardsdatascience.com/easily-create-an-ai-app-for-your-phone-zero-coding-experience-2d38afd4db14",
        "date": 1672587753,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACE0lEQVQ4jaWTTUiUURSGn3O/n/kxJSyzlFAocTNUi0YIgkJoE7QJJCNa1Coigla2MpBW7dpI+zaBbYI21qagP4hIWmhFaZRmhDkxjTPfz3z3tJBvGsVC6IXLfbnnnPdw7n2vFIdHYgRXVVVEhE0gzVWwZjMF/8KGAqq6Zk95ujYUWB9IISJIM183pUmLjQjW2gYXAddxqAYhYVzHGIMxgjGypqFRVUSEMK6Ty/iICLUoJozqLC6VGLt4ipODA5TKFcq/aiz/rGCtRURQVdyUZDyXG1fOshKEjN2aYOf2rfT3djFYLFCu1MhlfIaOHQKByadTVMMIY8yqQBBGFPb2MLCvjw+fF9mzu5Prl05TqQYg8O1HiWsXhjhx5CATD57huR4ahKsjWGvJ+B4zc1+orNQYvzPJzNwC3Z3bOD86zvTHedrbWrn78Dkzcwt07WjHcQQUBDDNt1qpBlw+c5wDfT0slcrcvHqO/f29GANdHe18/b7M0WKBnl0dhHGMCDjdhcOjRsTE9YTp2XmJ6wmvpmd58votQRRz79FLpt59wnEc2lry3L7/mBdv3pPxPVEVleLwSKyoC2gYxVILI7bksySJEkQRruPgey71JCGMYjzXJZ/11RgjVtW6qUGsteSyGVpyWRJr8T0hn/Mbb57BozWfQ1GSZNUvIoLb7DhrLfavztRGLM1X+COQHm4GzeL//Rt/A4mo94I+rX/aAAAAAElFTkSuQmCC",
        "title": "Easily create an AI app for your phone — zero coding experience | by Fabin Rasheed | Towards Data Science",
        "labels": []
    },
    {
        "link": "https://www.c-sharpcorner.com/article/creating-watermark-while-taking-screenshot-of-a-screen-in-an/",
        "date": 1673067697,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADD0lEQVQ4jX2RTWgcdRjGn/c/szvNuBt20+5WXBsVktR+CbYIWhBr8SLkIJWgglQ8tejBkwqeogcPOQiiIJbm1FI0EQXBg1ZFC9UIbVqMmxiTJptuNsluNrPZ7M7uzOzM//HQD1tBf/De3uf3wPsCd8D19QGXfHT2evm51vUrlTJ5mL/9yODyL6OMmm+yUb4KABwbM25lzBtJih/h2GwLn1zbQEYjix1qE1ngorPnMfTYiS+0M/+86E4EAOND/5QqAIAIqz5OT24iM10hbLf4Vff0ZzMV4ms59xHP/zp1RKXTO0UZbQAYGh//lwBAyUVxezf0Q7ZcPbpypm0Wvrwv66ztTZ/9QA6kzLfal88N4vz7BABMr8tdAifgyWwGB2wNlbGwgu5d03j67W5cudDXCSLc+8f3COobKOWeOrxY46sy/FNIUt0WhBHyno+tVAxMmNh9rX+wir6XBDt6Cxx8oaTTuZnkI8emJqwnGBoYoVfvEwFJCoaHb5iWtpifa5H5GkmSEcPTRY/94YVvCv5K9WHWFl+JSG5FJEN/iKSQvPUEWhWPfy147MzXtRtQByTfoe8PcXFmg6OjSQAot3m8xYgd8tvbV2z43Lfc4FyxTRY9sknS0/zhu5nKh5MOWfejJhk+y83Cwc8XwpfzAfWSy6JHDgCAkCQAOD6bhsif8Rj2dwnCUxeXJpb9rmcSCTt6cm/CsAyg1gbcBvWDaVG9XUDq91Nxs+TieG5bx+qxYrOtVms+0PaekOEhKGtkfw/oaKqzk36YsuNIxyC7kqKVBdkKMJI6dCI070/IGdzN6tRy/ejuXMpnGBh+k8a+NIxQUTIWYCpgtSGS7sLjeHfYUCTNm2N8eulSjKRRdf1ctWNZcdMI+npiMEVLMxCueYorLUhKgWtt9OOBgmmKSHhHuz4BkBtzb+Sj5LbZhv3izpgX9d6jkNbaMAyFnC267EMN2NiOmiuC/4FB8PrEunzs0ES50aEyYnRCSH8S9SNZnEzEZey/w6QBANwsHSy3+V7B1frnVbYW2uRqg6/d3FF/A82rzLc0OlYdAAAAAElFTkSuQmCC",
        "title": "Creating Watermark While Taking Screenshot Of A Screen In Android Application",
        "labels": []
    },
    {
        "link": "https://flexbox.webflow.com/#stickyfooter",
        "date": 1674919207,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVQ4jc2SPUvDUBSGn5aODXRtnBMCnZI2Q5dSOhZFN3FwchD8Cy4u/gQLFkSKYBGKVIIOgiVkDWnXNJlN3AzUXYe2oR+miHHwbOfc+z7vew83U9Kq70CB31WUTSEGKGRTiAH4W4AiSwhCnk0zvawlA06Oj3g27tkSiwBcty/odTsosowg5Ol1O5yfnS4BcouN6/k06jV2d5oEQYheVqeuFRW9oqLIEq321QbA2I9jN+q1pYt7200AHoyn5CdMJh8xQJElBqYFwOHBPqJYZGBavAZhMsB2hgCIsx20Lqdx50vsr7ivAQCCmYPtjHA9H9sZxf080WLlVgcvpkUQvtE3HgFwxx62M+Tm9m5NDJApadXPb09+WP/jK0cp9NEXqb1U2AP0Y7YAAAAASUVORK5CYII=",
        "title": "Visual CSS flexbox builder | Webflow",
        "labels": []
    },
    {
        "link": "https://xd.adobe.com/ideas/principles/web-design/web-page-design/",
        "date": 1675702784,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACy0lEQVQ4jY2T32vVdRjHX+/P97uds639cJuOSdOtGuOEtCVrJpmsiC2iQBgFITFdPyEEL7qofyEIghCEovAmUAKDmSFISD/YlSxBZoiIKZU26zjaztn58f28uzibV1303D03rwfer+etSca6cuQ+C/BShMQ4SBL/MbYtFAPKIp6vUHkjbabpeKpkpu56REEC2UYSQhizuSMkFGwrVTJjN9U1xUQMkiuuCqxm5cwGpEaVQEKqdBPikksScqtaHG0FSdSdqb+tXwPtg7Yt07g40DnEltwWMmckISES9d6T7/vgrlmtuaSgQBCBMmWN9T3uE6+d1uTQs/zu3zhQmOGLV07S09pLRsZ6LHPXyzy9c7/Gtz/hKjVJIthRbWrj7PUzuvHHFebG32Fn8yCHx9/m/NI8l4qLGDPSXeDgyGFImliprChB2FZqTCBQp86xhY/58IVP+Gj6GGvVVT69eBwRmH1sjkN7j7Beukdzvp3oDABJBElER9rVwcLtH7l4a4GRR0b57to5rq1fpdDxKIf2HuHs5a94/stJ/izeJJ+24A21ASAoUHKJkc4ChW27+PvObZ4ZnqYv7ae3bStZiMxfOc29rLj5Dxt6IdgNVoV13t1zlFJ1lQ++PUpP53ZeH32TWyu/koTAcw9P0ZF0smlICGRCUMKq/+HFwQPsLuzjxOLn/FT8gQtLZ3j5qTm6W3r5ZvEkMxOznHv1Av1bH6KW1Qg0IJrWnlhzTWN9u93V2q2FG99ToUpPrpfRHePcXL7OL8Ul9j24nx1dQyyvLXP5zs/+q3RXiRJriokoibLLyqi7jQcUFKi7Tpk1msmRU55Vr5JRJxCcJ69UTTYm3UylRa0ESdHR0VGJEjrUdT+w9tAOyGBFx0ZBQAF8KlUacHQWMzf0NsoYHfGGsOhIdKYsZsZ2qjSATyUDbDsfCMMBDYNkrP9T5wx/XaX61r8s+1s5F3FvGQAAAABJRU5ErkJggg==",
        "title": "Web Page Design: A Comprehensive Guide | Adobe XD Ideas",
        "labels": []
    },
    {
        "link": "https://sabe.io/blog/javascript-convert-milliseconds-seconds-minutes-hours#:~:text=Convert%20to%20Seconds,-Let's%20say%20you&text=const%20milliseconds%20%3D%2076329456%3B,divide%20the%20milliseconds%20by%201000.",
        "date": 1675964320,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuklEQVQ4jYWTvaoiQRCFv+oekw3EXPwBH0EwWhARTMRH2MDMcGMT91kUbiAIoomZCKIm4gOYiZtcNDASHabrBs7MVdfFgoZuqurU6apTAL+ATyAIjwPUWqvWWjXGxPfQF8V9hrmcAL1PfnMiEAVOcucAEECNMdJsNqlWqySTSY7HI5PJhMFgoNfrVZ7iv6uKiEskEjoajfSVlctlBZwxJmbjhUgYY9Q5J/V6nUajge/7DIdDptMpuVyOTCbDer0GEOecRtWJqnuep4C22231fV+v16um0+l3/VATo+jtW/v9Hs/zUFX6/T61Wg1jTMSSV/aAmEqldLvdPvx9Pp9rtVqN+vTM4vsROfP5vIYdj0GCINBKpaLhlF4DPDuLxaL2ej09n8+qqjoej98DvKK5Wq00CAKdz+f/xHrhRaIxNhoNOp0OHx8fbDYbCoUC2WwWYwy73Q4Aa60GQRALKtY+4Lrd7ksRXS4XLZVKCrg7hs4Cf25TVACZzWZ6Op1ERPB9n8PhwGKxoNVqsVwuVUQkCo7E9N9l8jwvFthdbx6WyQJ/gZ/ADwARwVp7WxLncM5hjEFEIppR9QPw+wsx5mmRVd96BAAAAABJRU5ErkJggg==",
        "title": "Convert Milliseconds to Seconds, Minutes, and Hours in JavaScript - Sabe.io",
        "labels": []
    },
    {
        "link": "https://www.typora.io/",
        "date": 1676389374,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACWUlEQVQ4jaVTPU8bQRSc9+5jD6MYUUZOGjeQBhAFyq+gtAu3UX4Af4NI1FSICIkoRRoqSuMKUSCoKKxwEYpJZJ9jG13uvLe7L43vJIpIkTLSaldvNLuzb/SA/wSVh8PDw6DT6bSUUk1mfsY75yqBMebr2dnZ51arpaviyclJXWvdk3+EMaZ7d3f3otR74/H404LTi/U3VHyapu8AwO/3+2+VUm0A1jnnFUXBp6enMh6PEUURACDPc6yurqLT6fi+7xfM7Jj5JQDw0tLSa8/zRESYmWk2m8nR0RE1Gg3q9Xp0cXFBjUaDjo+PaTKZgJkJAC12+FrriTFGwjAk55wwM+/v72NnZwdxHMM5h3a7jWazCWYmay08z6OysZym6SOAOQAqioKWl5extbUFay2yLEOe57DWYnNzE/V6XYwxz2Lk6XT6KCI5EYGIxDmHLMtQRikiYGZkWQZrbSWsHFxeXj6JSCIiEBFxzkFEQESIoghRFIGI4JyDtbayXl2wt7eXW2t/lEURkSAIMBwOcXNzg9vbW4xGI4RhiEWUACDVFwCI1vonEcnCAQVBgIeHB6yvr2NtbU3iOBallCxeFQBVL3wASNN0AIA8z3NEJMYYbGxsYHt7mwCQMcZqrUUp5YgIADhJkrh0gCRJurPZDPP5PHTOgZnJGEN5nsMYA9/3vVqt5kdRFCqlwvv7++75+fkXAFQOk3d1dfVhZWXlPTOHAIyI5AB+ichQREYAHpl5OJ1Ov+3u7n4cDAa/n00jAHS73Te1Wu1VURSjfr///fr6+ung4EADsPgL/gCc7K9iTt5DIwAAAABJRU5ErkJggg==",
        "title": "Typora — a markdown editor, markdown reader.",
        "labels": []
    },
    {
        "link": "http://127.0.0.1:9222/json/version",
        "date": 1663402151,
        "icon": null,
        "title": "127.0.0.1",
        "labels": []
    },
    {
        "link": "https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209",
        "date": 1663504448,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVQ4jX1TTWhWRxQ9587M+xJFXSlCWwsVKWRhdaOLFiP9oVoMxY0LwY2IglJBt0F9SaFL3QTBre1OJKskpS6kECiFuhBLUXQREdEsamxQv5837x4X7/tsIuisLsM9595zzgzx7kMAAoDJ3748Fo2Hcte3pyEWXunI+L6bMyhh8X3gMxc/HN60/dMpGo7mSnB3B6LV8HGUmEMJ5xuIQLCZiBJWjozEsGHz9dZwOPBquaoAkKDJHSEZZNWu89/O37IVM/WmKuG2buOl1nA40P6v6gIMBAIp0lgXQ8E8h1EAsP66KH/d+3U5s+cwAE3Mjo6lIp5sL1cVyESIACABUiMvBNsxINAPv+xePxTD5ZjYBgCS5+RS06z/ZYIiyFyJNG4FYASAiZk9p1priqnOi6WNKa3ZAkt/VZ1aNK4A962SFJOZu+7fufvgMwOAkMJ+EN7rIeXMb1LLQFomCUkCSICUBNIkEZCGNm/6INnxK0jK/lFKxqJYuzOm8HETiqwBkI361V4LpuF1z2VLT0YIs0ZwsKMCttWVg3h7fYk0uUgziYYXdx7e69m18p8eDY+rjgTnwTrrq15bEhVWmNcnE0G5RYMZFuZOo2sA4Fk3LMLc6ww1ZhODd7FaAlxukfRaNwcxwq17tdepH8UUCkgZq5aXAKp/l2Oy1OvUTztV++eGQGC5749n7n4iFlZZDEmuLEkQ1VA45MgWmEJhcPeTP33/5yI00Nb/BxOzo/uLIk6B+KTqOiBA/a7UCgC10H7ZOzs5Nj89wNggm7KEXfju97lud/nznOsJBt4GtQjyXwv8O1f5x/pl+4vJsfnpsoQN8nwNrdA0+xo0MDoAAAAASUVORK5CYII=",
        "title": "How to Use Map, Filter, and Reduce in JavaScript",
        "labels": []
    },
    {
        "link": "https://mindee.github.io/doctr/",
        "date": 1668341555,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVQ4jaWTrXLCUBCFv00YIjAIFBo8yaAZ1OUpqtD0ESp4hFaj+hBMUQyaATxoFAKDgOHercgPNCQtMz0q9+7u3XP2bMRGRinGzl/N2gA2MlugVZTklRQ/jUr2JfqmTpbp0YdT1kUZWqhlqZ52URn/eECdLCvr2bSoi6xni/vzNTSI5BnkoJ1+3Un1JWZw+ZTN/Pi7hDy8oAH6HlMIpkDpAzu4adZOv44XNFBtInEM1aZGA3Dng2zmRx9OLql7gA3NyEZGE+viu8hsbWTUhmb0QLRUwpOopJ08ZSjr2cLTyycSTFFt3scQ2aPnA4CGpueESTqDFkDqczLto0YDQOPtE9nL6ivTbKEmSV25C+58QKqvAGnnQgllgYTJx58zyAo87V5DkwV8OKUbqKHpFaxyjoHKOF1PgMTnNoATJnL/N+ot8d82fgPBHoIWBgUJAwAAAABJRU5ErkJggg==",
        "title": "docTR documentation",
        "labels": []
    },
    {
        "link": "https://demo-doctr-tensorflowjs.mindee.com/",
        "date": 1668341908,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVQ4jaWTrXLCUBCFv00YIjAIFBo8yaAZ1OUpqtD0ESp4hFaj+hBMUQyaATxoFAKDgOHercgPNCQtMz0q9+7u3XP2bMRGRinGzl/N2gA2MlugVZTklRQ/jUr2JfqmTpbp0YdT1kUZWqhlqZ52URn/eECdLCvr2bSoi6xni/vzNTSI5BnkoJ1+3Un1JWZw+ZTN/Pi7hDy8oAH6HlMIpkDpAzu4adZOv44XNFBtInEM1aZGA3Dng2zmRx9OLql7gA3NyEZGE+viu8hsbWTUhmb0QLRUwpOopJ08ZSjr2cLTyycSTFFt3scQ2aPnA4CGpueESTqDFkDqczLto0YDQOPtE9nL6ivTbKEmSV25C+58QKqvAGnnQgllgYTJx58zyAo87V5DkwV8OKUbqKHpFaxyjoHKOF1PgMTnNoATJnL/N+ot8d82fgPBHoIWBgUJAwAAAABJRU5ErkJggg==",
        "title": "docTR - TFJS demo",
        "labels": []
    },
    {
        "link": "https://data-flair.training/blogs/machine-learning-project-ideas/amp/",
        "date": 1679758149,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADWklEQVQ4jW2TW2iWdRzHv//D+5ze8/buoCW6LiJa2GLNaYbOaEjUCIJFBNLdYAWpW7aobb3qkDnT1lhCdhcdLsxCOgxckbouTJyIRFnbxdLh1tzew97neU/P8/x/3fgOoz63v9/397v5fBn+CwNAbw0cag5wdlERfJByhRCLnPELmbR9anT0yLXKHv93llhz10cSIKZUSRi6bpmGFjYMo0pK+XAwHOyOx8JTfX1DgwAIABNr2WSS4/wuWpj+VgEH8UjTEwmu6c1lz5+VWmAsZBgzS8t3EAqaDbql79rcsk279PP5H1nlM8DI2Pf1JujhlwXUDvh+PRGkYmQX38NOWmnd81eONYyPH78vVhV5Je96lHWy7QxIciCp9J7JbqnLwyIYqS65HuC74ESAWyJazT1Q6LbuLK1rmSkUC5+Njo1vX7++fms2nZ7gQFKZvd/t5WbkJIRVvbp067cNev7DINwPlK8UKeQSiWCAPbrbcUrLn8YSob0NmzbesG0bmgxs4Xjny8cRKI14UsBZTH/1zb6mMzOvhW5oC6XPhdQ5GGMlL0AA4Hp0VWoiUFebSBTzDhGjiDTKZo8MxbXC3zev/TCw89fGkP4qMqsPLnLZbEEoIu7rkjMAEDIQdsslWkmlCpZlMkUqx0vSerJQALXfH5/eEjF7/ZXUGbZxczpSxzXFwcFUGF6B2traZCwUfSabTn0xN/vnhkgoDK/sXZaWz2qcYoo1NUarwzoFl6lwBQAUVi1O/ooS5Tfmh5+dvUVUNTc3/8vHpz5pSkTC23J2kUqueF+CeAaGXnfd5oW8MsiXZgAAon7oei6b2rp68sXZ/v7DTw8cOtHq5e3nw5FoCzQN+Yx99PjIu5NM7714FlGjo3R7/tIfyeduxoQy62r2vEA4TQxQnfv3mw9F6+di8fpaeEVk7Zxbdv3h4aG+QSJi3CdnTDg2C8ZrW1uPTpZdn12mn15axwAFEIs7jldU/u/ZTPbKciZzYmkh2zo81DcIAIwxAgDoPZPHQgevknz7AonXJ6bq+ycOBHq+f6xieUdXl3W3PHetT651iFU0tt48d4QJ0eMHanQmGMi5PVUc2b2jMgeAzs5OcbqxkZBMqnuru4Z54Nx2Eno3E/Ipv5yfLh9r77j3wP/xDwFKhtFntMTbAAAAAElFTkSuQmCC",
        "title": "Top 310+ Machine Learning Projects for 2023 [Source Code Included] - DataFlair",
        "labels": []
    },
    {
        "link": "https://www.npmjs.com/package/react-use-localstorage",
        "date": 1679157663,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJElEQVQ4jYWSPW4CQQyFP3uGREqEFIlQcgY6Wg6wl4BTcBLOQ4nE3oA6VehAiPCzdopZZtkkEHd+Y/vZb56U4CBACDyIqkplERBwsKp6UK9paGoweOr3X0cjNwNEpK5ydwBEdb9anTYbBUrVJayLwt3N3bwVGVkXxRJK1ZgGutWVACKZR8DMEHGzhEZq2lbY4fAxm513u7fxuDeZNA/uMc+rVzcTVT+fP+fzL3c5Ht+nU0Cu5Ppz+LU/9noxhNDt3u6Z5LorPFWFWSPaPw13oj4664h7TjJO/hJ3pc3Y3PI3KjH1iqqIcNVeOh0XaXAQ1UQk5W9rqPrptF0s7HJ5HgxehkPM9mWZrCElkMzXJtdsypuUZL7k23Brb3fMHEQkqEJj7285nLmISMvnnQAAAABJRU5ErkJggg==",
        "title": "react-use-localstorage - npm",
        "labels": []
    },
    {
        "link": "https://chrome.google.com/webstore/detail/download-statusbar/kfjkodkjnmdeookccjmcdbhhpbgkoche/related?hl=en",
        "date": 1679202143,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACr0lEQVQ4jaWTzWtcZRTGf+e97507dybz0Y5xI1aIYLOwUg3Z+AWKG6FUaiHg/+BWkYKtdKEtbkREXLgQwYKbbuxC8KOhUpVC0GasWJQ0IZo2TmammcnczNx73/e4mDhZCCJ4Fmf543me8xz4nyMAqmoAs7S0JCsrK/7I/JH7b17/9ZVRNgKgEIbMHj78drPZXJ+ZmTFzc3MKeBHxFkBEPOD/pq6u/X4hCIJvBp3BADzF6elyVCxdWFhYeBxw/1CwsbHx9IFG45l2q+VUtYKYl0vl4ikk2AVwzsXJTvKmev+eivQbjUbQ7rYvzxw6dMXuWXi+WCi8VqlWMSag2+1SjErviBFQxTtPsjOgfuDgq3meU50qsdXZKgITQH84GmW9Xi/zTkNB7VannXudhIR6Z+9227mKZIUoDEW1D2AZmw9UNfTOI2EYamDR3naIdyCgYmCqBlkakqUAIZ5gH+DBe0XjGO10cJ9dxPxyHVMwiIJLc/zsUeTYCbRexzuH38vcjpenEIZEK6vsnDuL+WMN7m3gAsAJkjr44RPc4lXs6Tewjz2C7YyvYABqcYU8NNz88C3i734kMBHh+ia17YTqqI/tbxIUYoLmMpw9QzFT4kplX8GUrZrF3ve8P7fGmctlausthidf5MazJyjUHA+5Tyne/QgTl4jyLwgGF9lxL9kJYEjufrp9TdceLutXjw70hewp3j3+One2BkQjwwMHz3Pq6Drx8NK4O8HnGvmT2QSQ+MTuMpIoFXvtWF3iO09y5TdPPR0Shp6fN8scn36O+egSOsIIiQSS7CsQNa10N+vboebt+wrBaj0Rf2ObWy7FimLtkIrcHpdYyBk6641pTQBffl39oBfd+jjFkebw4GyTyrfzLO/1/YlGwGx5UdhE5R6g/ydXl6vJf/3Yf52/AJBcPOgWlbzgAAAAAElFTkSuQmCC",
        "title": "Download Statusbar - Chrome Web Store",
        "labels": []
    },
    {
        "link": "javascript:(()=>{alert(\"wow\");})();",
        "date": 1679484547,
        "icon": null,
        "title": "wow",
        "labels": []
    },
    {
        "link": "https://www.youtube.com/results?search_query=how+to+find+startup+repo",
        "date": 1680159245,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVQ4jZ2TQWtTQRDHfzO7yUsNKSG0heJJ0YKnCvVSkHrV7+BBeu7Vk9+lH8CLN6EXk4Lo1V48lGClFBELGmmSmr73djy8fS8vll4c+LO7s7OzM///LhQmBmrg+uDtZrgIBQQAKyf/YQbiBexFt9t9niSP7ji3umrW7og0UfWL0ZaOzGYjmBxn2c/BdPpJxuNz+vDwFxxnqmaqZs4V8L5AuS6haqmqXcDpO3jCEN4YmEFmkMcxrSCSGqSh8GcGIY52Am91Ce5HJ5EYBRwbG45222HmUHVS+DX2DhASuKu3oAeolGSqCiDs7gqHh8L2thCCxOQSbxFAO9BToClzNQSJokwmsLUFgwHs78P6eklnlQho6c0axUKbTVhZgUYjHpeqCwE8kMWFxYNF9uVlGA5hbw8ODuqJzajqnPENPtfYDxU2N4OtrRVzkVDfC0V8/h2G/g98AR7ESkJF8tFRcYdzkOf15iRW6y/hlD48voCz+BbmELFrvhrG8OMjPBOAV3D7qXM791R73Var00qSJRoNTyifB5Dn+eVsNv19dTX+mmWj93n+4SWciM1LKkmqy7RoImFBqPqPfH39K7t/4A18f74nAH8Bjm35s3ZkOjEAAAAASUVORK5CYII=",
        "title": "how to find startup repo - YouTube",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"J1NpbXBsZSUyMGJ1dCUyMGVmZmVjdGl2ZSUyMG1hY3JvJTIwdG8lMjBzYXZlJTIwdGhlJTIwY3VycmVudCUyMHBhZ2UlMEQlMEEnQXNrJTIwZm9yJTIwYSUyMG5hbWUlMEQlMEFQUk9NUFQlMjBFbnRlciUzQ1NQJTNFYSUzQ1NQJTNFUGFnZSUzQ1NQJTNFTmFtZSUyMCFWQVIxJTIwTm9OYW1lX1RpbWVfJTdCJTdCIU5PVyUzQXl5eXltbWRkX2hobm5zcyU3RCU3RCUyMCUwRCUwQSUwRCUwQSdTYXZlJTIwdGhlJTIwcGFnZSUyMCUyMCUyMCUyMCUwRCUwQVNBVkVBUyUyMFRZUEUlM0RNSFQlMjBGT0xERVIlM0QqJTIwRklMRSUzRCU3QiU3QiFWQVIxJTdEJTdEJTIw\", n64 = \"QXJjaGl2ZVBhZ2UuaWlt\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "ArchivePage.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRkV2YWwlMEQlMEEnV2FpdCUyMGElMjByYW5kb20lMjBudW1iZXIlMjAoMSUyMHRvJTIwNSklMjBvZiUyMHNlY29uZHMlMEQlMEFTRVQlMjAhVkFSMSUyMEVWQUwoJTIyTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjUlMjAlMkIlMjAxKSUzQiUyMiklMEQlMEFXQUlUJTIwU0VDT05EUyUzRCU3QiU3QiFWQVIxJTdEJTdEJTBEJTBBU0VUJTIwIUVYVFJBQ1RfVEVTVF9QT1BVUCUyME5PJTBEJTBBJ0V4dHJhY3QlMjB0aGUlMjBkYXRlJTBEJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RCJTIwQVRUUiUzRFRYVCUzQSolMjBFWFRSQUNUJTNEVFhUJTBEJTBBJ0NoZWNrJTIwaWYlMjB0aW1lJTIwZGV2aWF0ZXMlMjBtb3JlJTIwdGhhbiUyMDIwJTIwaG91cnMuJTIwSWYlMjB5ZXMlMkMlMjBzdG9wJTIwbWFjcm8lMjB3aXRoJTIwYW4lMjBlcnJvciUwRCUwQVNFVCUyMCFWQVIyJTIwRVZBTCglMjJ2YXIlMjBuX2hvdXJzJTIwJTNEJTIwMjAlMkMlMjBtc19pbl9ob3VyJTIwJTNEJTIwNjAqNjAqMTAwMCUyQyUyMHMlM0QlNUMlMjIlN0IlN0IhRVhUUkFDVCU3RCU3RCU1QyUyMiUzQiUyMHZhciUyMG5vdyUyMCUzRCUyMG5ldyUyMERhdGUoKSUzQiUyMHZhciUyMGRldmlhdGlvbiUyMCUzRCUyMG5vdy5nZXRUaW1lKCktRGF0ZS5wYXJzZShzKSUzQiUyMCUyMGlmKGRldmlhdGlvbiUyMCUzRSUyMG5faG91cnMqbXNfaW5faG91ciUyMCklMjBNYWNyb0Vycm9yKCU1QyUyMlRpbWUlMjBkZXZpYXRlcyUyMG1vcmUlMjB0aGFuJTIwMjAlMjBob3VycyU1QyUyMiklMjIpJTBEJTBBJ0NsZWFuJTIwdGhlJTIwIUVYVFJBQ1QlMjB2YXJpYWJsZSUyMGZvciUyMHRoZSUyMG5leHQlMjB0YXNrJTBEJTBBU0VUJTIwIUVYVFJBQ1QlMjBOVUxMJTBEJTBBJ0NvdW50JTIwaG93JTIwbWFueSUyMHRpbWVzJTIwdGhlJTIwd29yZCUyMCUyMm1hY3JvJTIyJTIwYXBwZWFycyUyMG9uJTIwdGhlJTIwcGFnZSUwRCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNERElWJTIwQVRUUiUzRElEJTNBbWFpbiUyMEVYVFJBQ1QlM0RUWFQlMEQlMEFTRVQlMjAhVkFSMSUyMEVWQUwoJTIydmFyJTIwbSUyMCUzRCUyMCclN0IlN0IhRVhUUkFDVCU3RCU3RCcubWF0Y2goJTJGJTVDJTVDYk1hY3JvJTVDJTVDYiUyRmlnKSUzQiUyMGlmJTIwKCFtKSUyMCdObyUyMHdvcmQlMjAlNUMlMjJtYWNybyU1QyUyMiUyMGZvdW5kLiclM0IlMjBlbHNlJTIwJ1RoZXJlJTIwYXJlJTIwJyUyQm0ubGVuZ3RoJTJCJyUyMG9jY3VycmVuY2VzJTIwb2YlMjB0aGUlMjB3b3JkJTIwJTVDJTIybWFjcm8lNUMlMjIlMjBvbiUyMHRoaXMlMjBwYWdlLiclM0IlMjIpJTBEJTBBUFJPTVBUJTIwJTdCJTdCIVZBUjElN0QlN0QlMEQlMEEnQ2xlYW4lMjB0aGUlMjAhRVhUUkFDVCUyMHZhcmlhYmxlJTIwZm9yJTIwdGhlJTIwbmV4dCUyMHRhc2slMEQlMEFTRVQlMjAhRVhUUkFDVCUyME5VTEwlMEQlMEEnRXh0cmFjdCUyMHRoZSUyMG51bWJlciUyMGluJTIwdGhlJTIwaW5wdXQlMjBib3glMEQlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0RJRCUzQWZvcm0xJTIwQVRUUiUzRE5BTUUlM0F0ZXh0ZmllbGQlMjBFWFRSQUNUJTNEVFhUJTBEJTBBJ0NoZWNrJTIwaWYlMjBleHRyYWN0ZWQlMjBudW1iZXIlMjAoc3RpbGwlMjBhJTIwc3RyaW5nJTJDJTIwaGFzJTIwdG8lMjBiZSUyMHBhcnNlZCUyMGludG8lMjBhJTIwZmxvYXQhKSUyMGxpZXMlMjBiZXR3ZWVuJTIwOTklMjBhbmQlMjAxMDEuJTIwJTBEJTBBJ1N0b3AlMjBtYWNybyUyMHdpdGglMjBhbiUyMGVycm9yJTIwaWYlMjBub3QuJTBEJTBBU0VUJTIwIVZBUjIlMjBFVkFMKCUyMnZhciUyMHMlM0QlNUMlMjIlN0IlN0IhRVhUUkFDVCU3RCU3RCU1QyUyMiUyQyUyMGQlMjAlM0QlMjBwYXJzZUZsb2F0KHMpJTNCJTIwaWYoZCUyMCUzRSUyMDk5JTIwJTI2JTI2JTIwZCUyMCUzQyUyMDEwMSklMjBkJTNCJTIwZWxzZSUyME1hY3JvRXJyb3IoJTVDJTIyVmFsdWUlMjBpcyUyMG5vdCUyMGluJTIwdGhlJTIwc2V0JTIwcmFuZ2UlNUMlMjIpJTNCJTIyKSUwRCUwQQ==\", n64 = \"RXZhbC5paW0=\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "Eval.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRkV4dHJhY3QyJTBBJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RURCUyMEFUVFIlM0RDTEFTUyUzQWJkeXR4dCUyNiUyNlRYVCUzQSolMjBFWFRSQUNUJTNEVFhUJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RBJTIwQVRUUiUzRFRYVCUzQUgqbGlua3MqJTIwRVhUUkFDVCUzRFRJVExFJTIwJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RTUEFOJTIwQVRUUiUzRENMQVNTJTNBYmR5dHh0JTI2JTI2VFhUJTNBKiUyMEVYVFJBQ1QlM0RIVE0lMjAlMjAlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzREElMjBBVFRSJTNEVFhUJTNBSFJFRiUzQ1NQJTNFZXh0cmFjdHMlM0NTUCUzRWxpbmtzJTIwRVhUUkFDVCUzREhSRUYlMjAlMjAlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElNRyUyMEFUVFIlM0RTUkMlM0Eqc2hhcmtfdGh1bWJuYWlsLmpwZyUyMEVYVFJBQ1QlM0RBTFQlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0ROQU1FJTNBZm9ybTElMjBBVFRSJTNETkFNRSUzQWFiYyUyMEVYVFJBQ1QlM0RUWFQlMjAlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0ROQU1FJTNBZm9ybTElMjBBVFRSJTNESUQlM0FURjIlMjBFWFRSQUNUJTNEVFhUJTIwJTBBVEFHJTIwUE9TJTNEMiUyMFRZUEUlM0RUQUJMRSUyMEFUVFIlM0RUWFQlM0EqTXkqJTIwRVhUUkFDVCUzRFRYVCUyMCUyMCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNEVEQlMjBBVFRSJTNEQ0xBU1MlM0FiZHl0eHQlMjYlMjZUWFQlM0EqJTIwRVhUUkFDVCUzRFRYVCUyMCUwQSclMEEnUmVsYXRpdmUlMjBleHRyYWN0aW9uJTBBJyUwQScxLiUyME1hcmslMjByZWZlcmVuY2UlMjAoYW5jaG9yKSUyMGVsZW1lbnQlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRFRIJTIwQVRUUiUzRFRYVCUzQU15VGFibGUlMEEnMi4lMjBQT1MlMjB2YWx1ZSUyMGlzJTIwUkVMQVRJVkUlMjB0byUyMHRoZSUyMGFuY2hvciUyMGVsZW1lbnQlMjAlMjAlMjAlMEFUQUclMjBQT1MlM0RSMyUyMFRZUEUlM0RURCUyMEFUVFIlM0RUWFQlM0EqJTIwRVhUUkFDVCUzRFRYVCUyMCUwQSdUaGUlMjBleHRyYWN0ZWQlMjB2YWx1ZXMlMjB3aWxsJTIwYmUlMjBzdG9yZWQlMjBpbiUyMHRoZSUyMGNzdiUyMGZpbGUlMjB1bmRlciUyMHRoZSUyMGlNYWNyb3MlMjBEb3dubG9hZCUyMGZvbGRlciUwQVNBVkVBUyUyMFRZUEUlM0RFWFRSQUNUJTIwRk9MREVSJTNEKiUyMEZJTEUlM0QlMkJfJTdCJTdCIU5PVyUzQXl5eXltbWRkX2hobm5zcyU3RCU3RCUwQSUwQSUwQQ==\", n64 = \"RXh0cmFjdC5paW0=\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "Extract.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRkV4dHJhY3REZW1vJTBBVEFHJTIwUE9TJTNEMzklMjBUWVBFJTNEVEQlMjBBVFRSJTNEVFhUJTNBKiUyMEVYVFJBQ1QlM0RUWFQlMEFTRVQlMjAhVkFSMSUyMCU3QiU3QiFFWFRSQUNUJTdEJTdEJTBBU0VUJTIwIUVYVFJBQ1QlMjBOVUxMJTBBJTBBVEFHJTIwUE9TJTNENDAlMjBUWVBFJTNEVEQlMjBBVFRSJTNEVFhUJTNBKiUyMEVYVFJBQ1QlM0RUWFQlMEFTRVQlMjAhVkFSMiUyMCU3QiU3QiFFWFRSQUNUJTdEJTdEJTBBU0VUJTIwIUVYVFJBQ1QlMjBOVUxMJTBBJTBBVEFHJTIwUE9TJTNENDElMjBUWVBFJTNEVEQlMjBBVFRSJTNEVFhUJTNBKiUyMEVYVFJBQ1QlM0RUWFQlMEFTRVQlMjAhVkFSMyUyMCU3QiU3QiFFWFRSQUNUJTdEJTdEJTBBU0VUJTIwIUVYVFJBQ1QlMjBOVUxMJTBBVEFCJTIwT1BFTiUwQVRBQiUyMFQlM0QyJTBBJ05vdyUyMGZpbGwlMjB0aGVtJTIwaW4lMjBhJTIwZm9ybS4lMjBUaGlzJTIwaXMlMjBvbmx5JTIwb25lJTIwZXhhbXBsZS4lMjBZb3UlMjBjb3VsZCUyMHVzZSUyMGl0JTIwYWxzbyUyMGFzJTIwcGFydCUyMG9mJTIwbGluayUyMCUyMCUwQVVSTCUyMEdPVE8lM0RodHRwJTNBJTJGJTJGZGVtby5pbWFjcm9zLm5ldCUyRkF1dG9tYXRlJTJGVGVzdEZvcm0xJTIwJTIwJTIwJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQVRFWFQlMjBGT1JNJTNESUQlM0FkZW1vJTIwQVRUUiUzRE5BTUUlM0FuYW1lJTIwQ09OVEVOVCUzRCoqKkV4dHJhY3QlM0NTUCUzRWFuZCUzQ1NQJTNFRmlsbCUzQ1NQJTNFRGVtbyoqKiUyMCUwQSclMEEnVGhlJTIwdmFyaWFibGVzJTIwYXJlJTIwcGFydCUyMG9mJTIwdGhlJTIwQ09OVEVOVCUyMHRhZy4lMjBZb3UlMjBjb3VsZCUyMHVzZSUyMHRoZW0lMjBhcyUyMHBhcnQlMjBvZiUyMGxpbmslMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRFRFWFRBUkVBJTIwRk9STSUzRElEJTNBZGVtbyUyMEFUVFIlM0ROQU1FJTNBUmVtYXJrcyUyMENPTlRFTlQlM0RFeHRyYWN0aW9uJTNDU1AlM0VyZXN1bHRzJTNBJTNDQlIlM0UlM0NCUiUzRU9uZSUzQ1NQJTNFZG9sbGFyJTNDU1AlM0Vjb3N0cyUzQ1NQJTNFJTdCJTdCIVZBUjElN0QlN0QlM0NTUCUzRUVVUk8lMkMlM0NTUCUzRSU3QiU3QiFWQVIyJTdEJTdEJTNDU1AlM0VQb3VuZHMlM0NTUCUzRW9yJTNDU1AlM0UlN0IlN0IhVkFSMyU3RCU3RCUzQ1NQJTNFWWVuLiUyMA==\", n64 = \"RXh0cmFjdEFuZEZpbGwuaWlt\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "ExtractAndFill.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRkV4dHJhY3QyJTBEJTBBJ0NsYXNzaWMlMjBleHRyYWN0aW9uJTIwd2lsbCUyMGNvdW50JTIwdGhlJTIwbnVtYmVyJTIwb2YlMjBjZWxscyUyMGZyb20lMjB0aGUlMjBUT1AlMjBvZiUyMHRoZSUyMHBhZ2UlMEQlMEEnZXh0cmFjdCUyMDIlMjAlMEQlMEFUQUclMjBQT1MlM0QxMyUyMFRZUEUlM0RURCUyMEFUVFIlM0RUWFQlM0EqJTIwRVhUUkFDVCUzRFRYVCUwRCUwQSclMEQlMEEnQmV0dGVyJTIwdG8lMjB1c2UlMjBwb3NpdGlvbmluZyUyMHJlbGF0aXZlJTIwdG8lMjB0aGUlMjBUQUclMjBjb21tYW5kJTIwdGhhdCUwRCUwQSdhcHBlYXJzJTIwanVzdCUyMGJlZm9yZSUyMHRoZSUyMFRBRyUyRkVYVFJBQ1QlMjBjb21tYW5kJTBEJTBBJyUwRCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNEVEglMjBBVFRSJTNEVFhUJTNBTXlUYWJsZSUwRCUwQSdQb3N0aW9uJTIwaXMlMjBub3clMjBSMyUyQyUyMHRoZSUyMDNyZCUyMGNlbGwlMjBhZnRlciUyMHRoZSUyMHRleHQlMjAlMjJNeXRhYmxlJTIyJTIwJTIwJTIwJTBEJTBBVEFHJTIwUE9TJTNEUjMlMjBUWVBFJTNEVEQlMjBBVFRSJTNEVFhUJTNBKiUyMEVYVFJBQ1QlM0RUWFQlMjAlMEQlMEEnQWxzbyUyMGV4dHJhY3QlMjB0aGUlMjBmb2xsb3dpbmclMjBudW1iZXJzJTIwNCUyMGFuZCUyMDUlMjAlMEQlMEFUQUclMjBQT1MlM0RSMSUyMFRZUEUlM0RURCUyMEFUVFIlM0RUWFQlM0EqJTIwRVhUUkFDVCUzRFRYVCUyMCUwRCUwQVRBRyUyMFBPUyUzRFIxJTIwVFlQRSUzRFREJTIwQVRUUiUzRFRYVCUzQSolMjBFWFRSQUNUJTNEVFhUJTIwJTBEJTBBJTBEJTBBJyUwRCUwQSdBbHRlcm5hdGl2ZSUyMHNvbHV0aW9uJTBEJTBBJyUwRCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNEVEglMjBBVFRSJTNEVFhUJTNBTXlUYWJsZSUwRCUwQVRBRyUyMFBPUyUzRFIzJTIwVFlQRSUzRFREJTIwQVRUUiUzRFRYVCUzQSolMjBFWFRSQUNUJTNEVFhUJTIwJTBEJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RUSCUyMEFUVFIlM0RUWFQlM0FNeVRhYmxlJTBEJTBBVEFHJTIwUE9TJTNEUjQlMjBUWVBFJTNEVEQlMjBBVFRSJTNEVFhUJTNBKiUyMEVYVFJBQ1QlM0RUWFQlMEQlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRFRIJTIwQVRUUiUzRFRYVCUzQU15VGFibGUlMjAlMEQlMEFUQUclMjBQT1MlM0RSNSUyMFRZUEUlM0RURCUyMEFUVFIlM0RUWFQlM0EqJTIwRVhUUkFDVCUzRFRYVCUyMCUwRCUwQSUwRCUwQSclMEQlMEEnTmVnYXRpdmUlMjBwb3NpdGlvbmluZyUyMCUzRCUzRSUyMG1vdmUlMjB0byUyMHRoZSUyMExFRlQlMjBhbmQlMkZvciUyMFRPUCUyMG9mJTIwdGhlJTIwYW5jaG9yJTBEJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RURCUyMEFUVFIlM0RUWFQlM0EzJTIwJTIwJTIwJTBEJTBBJ01vdmUlMjB0d28lMjBjZWxscyUyMGxlZnQlMjAlM0QlM0UlMjBleHRyYWN0JTIwdGhlJTIwbnVtYmVyJTIwJTIyMSUyMiUwRCUwQVRBRyUyMFBPUyUzRFItMiUyMFRZUEUlM0RURCUyMEFUVFIlM0RUWFQlM0EqJTIwRVhUUkFDVCUzRFRYVCUyMCUyMA==\", n64 = \"RXh0cmFjdFJlbGF0aXZlLmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "ExtractRelative.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMjAlMjAlMjAlMjAlMEEnVGhlJTIwbmFtZSUyMG9mJTIwZmlsZSUyMHRvJTIwc3RvcmUlMjB0aGUlMjBleHRyYWN0ZWQlMjBpbmZvcm1hdGlvbiUyMGlzJTIwc3BlY2lmaWVkJTIwd2l0aCUyMHRoZSUyMEZJTEUlM0QlMjBhdHRyaWJ1dGUlMjBvZiUyMHRoZSUyMFNBVkVBUyUyMGNvbW1hbmQlMEEnVGhlJTIwRk9MREVSJTNEKiUyMGF0dHJpYnV0ZSUyMGluZGljYXRlcyUyMHRoYXQlMjB0aGUlMjBkZWZhdWx0JTIwZm9sZGVyJTIwaXMlMjB1c2VkLiUyMFlvdSUyMGNhbiUyMHNwZWNpZnklMjBhbm90aGVyJTIwZm9sZGVyJTIwd2l0aCUyMEZPTERFUiUzRGMlM0ElNUN5b3VyZm9sZGVyJTBBJTBBVVJMJTIwR09UTyUzRGh0dHAlM0ElMkYlMkZkZW1vLmltYWNyb3MubmV0JTJGQXV0b21hdGUlMkZFeHRyYWN0RGVtbyUwQSUwQSclMEEnTm90ZSUzQSUyMFRoaXMlMjBtYWNybyUyMGNhbiUyMHJ1biUyMHRoZSUyMGlNYWNyb3MlMjBCcm93c2VyJTJDJTIwRmlyZWZveCUyMGFuZCUyMHRoZSUyMElFLVBsdWdpbiUyMCUwQSdCdXQlMjB0aGUlMjBFWFRSQUNUJTIwYnV0dG9uJTIwdG8lMjBzdGFydCUyMHRoZSUyMGV4dHJhY3Rpb24lMjB3aXphcmQlMjBpcyUyMG9ubHklMjBpbiUyMHRoZSUyMElNJTIwQnJvd3NlciUwQSclMEEnJTBBJTBBJ1RoZSUyMGZpcnN0JTIwdGFibGUlMjBpcyUyMHRoZSUyMGxpc3QlMjBvZiUyMGN1cnJlbmNpZXMlMEEnJTNEJTNFJTIwRXh0cmFjdCUyMGRhdGElMjBvZiUyMCoqMm5kKiolMjB0YWJsZSUyMChQT1MlM0QyKSUyMG9uJTIwcGFnZSUyMCUyMCUwQSUwQVRBRyUyMFBPUyUzRDIlMjBUWVBFJTNEVEFCTEUlMjBBVFRSJTNEVFhUJTNBKiUyMEVYVFJBQ1QlM0RUWFQlMEElMEEnVGhlJTIwU0FWRUFTJTIwc3RhdGVtZW50JTIwd2FzJTIwYWRkZWQlMjBtYW51YWxseSUyMHRvJTIwd3JpdGUlMjB0aGUlMjBleHRyYWN0ZWQlMjB0YWJsZSUyMHRvJTIwYSUyMGZpbGUlMEEnKFRoZSUyMGFsdGVybmF0aXZlJTIwd2F5JTIwdG8lMjBnZXQlMjB0aGUlMjBleHRyYWN0ZWQlMjBkYXRhJTIwaXMlMjB0aGUlMjBTY3JpcHRpbmclMjBJbnRlcmZhY2UpJTBBU0FWRUFTJTIwVFlQRSUzREVYVFJBQ1QlMjBGT0xERVIlM0QqJTIwRklMRSUzRG15dGFibGVfJTdCJTdCIU5PVyUzQXl5bW1kZF9oaG5uc3MlN0QlN0QuY3N2JTBBV0FJVCUyMFNFQ09ORFMlM0QzJTBBVVJMJTIwR09UTyUzRGh0dHAlM0ElMkYlMkZkZW1vLmltYWNyb3MubmV0JTJGQXV0b21hdGUlMkZPSyUyMCUwQQ==\", n64 = \"RXh0cmFjdFRhYmxlLmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "ExtractTable.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRkV4dHJhY3QyJTBEJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RBJTIwQVRUUiUzRFRYVCUzQUgqbGlua3MqJTIwRVhUUkFDVCUzREhSRUYlMjAlMEQlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzREElMjBBVFRSJTNEVFhUJTNBSCpsaW5rcyolMjBFWFRSQUNUJTNEVElUTEUlMjAlMEQlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzREElMjBBVFRSJTNEVFhUJTNBSCpsaW5rcyolMjBFWFRSQUNUJTNEVFhUJTIwJTBEJTBB\", n64 = \"RXh0cmFjdFVSTC5paW0=\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "ExtractURL.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRlRlc3RGb3JtMSUwQVRBRyUyMFhQQVRIJTNEJTIyJTJGJTJGZm9ybSU1QiU0MGlkJTNEJ2RlbW8nJTVEJTJGZmllbGRzZXQlNUIxJTVEJTJGb2wlMkZsaSU1QjElNUQlMkZpbnB1dCU1QjElNUQlMjIlMjBDT05URU5UJTNEJTIyVG9tJTIwVGVzdGVyJTIyJTBBVEFHJTIwWFBBVEglM0QlMjIlMkYlMkZmb3JtJTVCJTQwaWQlM0QnZGVtbyclNUQlMkZmaWVsZHNldCU1QjElNUQlMkZvbCUyRmxpJTVCMiU1RCUyRnNlbGVjdCUyMiUyMENPTlRFTlQlM0QlMjVQaXp6YSUwQVRBRyUyMFhQQVRIJTNEJTIyJTJGJTJGZm9ybSU1QiU0MGlkJTNEJ2RlbW8nJTVEJTJGZmllbGRzZXQlNUIxJTVEJTJGb2wlMkZsaSU1QjMlNUQlMkZzZWxlY3QlMjIlMjBDT05URU5UJTNEJTI1Q29rZSUwQVRBRyUyMFhQQVRIJTNEJTIyJTJGJTJGZm9ybSU1QiU0MGlkJTNEJ2RlbW8nJTVEJTJGZmllbGRzZXQlNUIxJTVEJTJGb2wlMkZsaSU1QjQlNUQlMkZpbnB1dCU1QjIlNUQlMjIlMjBDT05URU5UJTNEWUVTJTBBVEFHJTIwWFBBVEglM0QlMjIlMkYlMkZmb3JtJTVCJTQwaWQlM0QnZGVtbyclNUQlMkZmaWVsZHNldCU1QjElNUQlMkZvbCUyRmxpJTVCNSU1RCUyRnNlbGVjdCUyMiUyMENPTlRFTlQlM0QlMjRBcHBsZSUzQ1NQJTNFUGllJTNBJTI0RnJ1aXRzJTBBVEFHJTIwWFBBVEglM0QlMjIlMkYlMkZmb3JtJTVCJTQwaWQlM0QnZGVtbyclNUQlMkZmaWVsZHNldCU1QjElNUQlMkZvbCUyRmxpJTVCNiU1RCUyRmlucHV0JTVCMSU1RCUyMiUyMENPTlRFTlQlM0RZRVMlMEFTRVQlMjAhRU5DUllQVElPTiUyME5PJTBBVEFHJTIwWFBBVEglM0QlMjIlMkYlMkZmb3JtJTVCJTQwaWQlM0QnZGVtbyclNUQlMkZmaWVsZHNldCU1QjElNUQlMkZvbCUyRmxpJTVCNiU1RCUyRmlucHV0JTVCMiU1RCUyMiUyMENPTlRFTlQlM0R0ZXN0ZXIlMEFUQUclMjBYUEFUSCUzRCUyMiUyRiUyRmZvcm0lNUIlNDBpZCUzRCdkZW1vJyU1RCUyRmZpZWxkc2V0JTVCMSU1RCUyRm9sJTJGbGklNUI3JTVEJTJGdGV4dGFyZWElMjIlMjBDT05URU5UJTNEJTIySGkhJTVDbiU1Q24lMjAlNUN0JTIwaU1hY3JvcyUyMGNhbiUyMGZpbGwlMjAlMjBmb3JtcyUzQi0pJTVDbiU1Q25Ub20lMjIlMEFUQUclMjBYUEFUSCUzRCUyMiUyRiUyRmZvcm0lNUIlNDBpZCUzRCdkZW1vJyU1RCUyRmZpZWxkc2V0JTVCMiU1RCUyRmJ1dHRvbiUyMiUwQVdBSVQlMjBTRUNPTkRTJTNENSUwQVVSTCUyMEdPVE8lM0RodHRwJTNBJTJGJTJGZGVtby5pbWFjcm9zLm5ldCUyRkF1dG9tYXRlJTJGT0slMEE=\", n64 = \"RmlsbEZvcm0tWFBhdGguaWlt\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "FillForm-XPath.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEFUQUIlMjBDTE9TRUFMTE9USEVSUyUwQVVSTCUyMEdPVE8lM0RodHRwJTNBJTJGJTJGZGVtby5pbWFjcm9zLm5ldCUyRkF1dG9tYXRlJTJGVGVzdEZvcm0xJTBBJ01hY3JvJTIwdGhhdCUyMHVzZXMlMjBFdmVudHMlMjBtb2RlJTIwd2hpbGUlMjByZWNvcmRpbmclMEFFVkVOVCUyMFRZUEUlM0RDTElDSyUyMFNFTEVDVE9SJTNEJTIyJTIzbmFtZSUyMiUyMEJVVFRPTiUzRDAlMEFFVkVOVFMlMjBUWVBFJTNES0VZUFJFU1MlMjBTRUxFQ1RPUiUzRCUyMiUyM25hbWUlMjIlMjBDSEFSUyUzRCUyMmlNYWNyb3MlMjB1c2VyJTIyJTBBRVZFTlQlMjBUWVBFJTNEQ0xJQ0slMjBTRUxFQ1RPUiUzRCUyMiUyM2Zvb2QlMjIlMjBCVVRUT04lM0QwJTBBRVZFTlQlMjBUWVBFJTNEQ0xJQ0slMjBTRUxFQ1RPUiUzRCUyMiUyM2Zvb2QlM0VPUFRJT04lM0FudGgtb2YtdHlwZSgzKSUyMiUyMEJVVFRPTiUzRDAlMEFFVkVOVCUyMFRZUEUlM0RDTElDSyUyMFNFTEVDVE9SJTNEJTIyJTIzZHJpbmslMjIlMjBCVVRUT04lM0QwJTBBRVZFTlQlMjBUWVBFJTNEQ0xJQ0slMjBTRUxFQ1RPUiUzRCUyMiUyM2RyaW5rJTNFT1BUSU9OJTNBbnRoLW9mLXR5cGUoMiklMjIlMjBCVVRUT04lM0QwJTBBRVZFTlQlMjBUWVBFJTNEQ0xJQ0slMjBTRUxFQ1RPUiUzRCUyMiUyM21lZGl1bSUyMiUyMEJVVFRPTiUzRDAlMEFFVkVOVCUyMFRZUEUlM0RDTElDSyUyMFNFTEVDVE9SJTNEJTIyJTIzZGVzc2VydCUzRU9QVElPTiUzQW50aC1vZi10eXBlKDIpJTIyJTIwQlVUVE9OJTNEMCUwQUVWRU5UJTIwVFlQRSUzRENMSUNLJTIwU0VMRUNUT1IlM0QlMjIlMjNkZW1vJTNFRklFTERTRVQlM0VPTCUzRUxJJTNBbnRoLW9mLXR5cGUoNiklM0VJTlBVVCUyMiUyMEJVVFRPTiUzRDAlMEFTRVQlMjAhRU5DUllQVElPTiUyME5PJTBBRVZFTlQlMjBUWVBFJTNEQ0xJQ0slMjBTRUxFQ1RPUiUzRCUyMiUyM2RlbW8lM0VGSUVMRFNFVCUzRU9MJTNFTEklM0FudGgtb2YtdHlwZSg2KSUzRUlOUFVUJTNBbnRoLW9mLXR5cGUoMiklMjIlMjBCVVRUT04lM0QwJTBBRVZFTlRTJTIwVFlQRSUzREtFWVBSRVNTJTIwU0VMRUNUT1IlM0QlMjIlMjNkZW1vJTNFRklFTERTRVQlM0VPTCUzRUxJJTNBbnRoLW9mLXR5cGUoNiklM0VJTlBVVCUzQW50aC1vZi10eXBlKDIpJTIyJTIwQ0hBUlMlM0QlMjJUZXN0JTIyJTBBRVZFTlQlMjBUWVBFJTNEQ0xJQ0slMjBTRUxFQ1RPUiUzRCUyMiUyM2RlbW8lM0VGSUVMRFNFVCUzRU9MJTNFTEklM0FudGgtb2YtdHlwZSg3KSUzRVRFWFRBUkVBJTIyJTIwQlVUVE9OJTNEMCUwQUVWRU5UUyUyMFRZUEUlM0RLRVlQUkVTUyUyMFNFTEVDVE9SJTNEJTIyJTIzZGVtbyUzRUZJRUxEU0VUJTNFT0wlM0VMSSUzQW50aC1vZi10eXBlKDcpJTNFVEVYVEFSRUElMjIlMjBDSEFSUyUzRCUyMk9yZGVyJTIwcGxhY2VkJTIyJTBBRVZFTlQlMjBUWVBFJTNEQ0xJQ0slMjBTRUxFQ1RPUiUzRCUyMiUyM2RlbW8lM0VGSUVMRFNFVCUzQW50aC1vZi10eXBlKDIpJTNFQlVUVE9OJTIyJTIwQlVUVE9OJTNEMA==\", n64 = \"RmlsbEZvcm0tRXZlbnRzLmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "FillForm-Events.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEFUQUIlMjBDTE9TRUFMTE9USEVSUyUwQVVSTCUyMEdPVE8lM0RodHRwJTNBJTJGJTJGZGVtby5pbWFjcm9zLm5ldCUyRkF1dG9tYXRlJTJGVGVzdEZvcm0xJTBBJ01hY3JvJTIwdGhhdCUyMG1ha2VzJTIwdXNlJTIwb2YlMjBDc3MlMjBTZWxlY3RvciUyMHdoaWxlJTIwcmVjb3JkaW5nJTBBVEFHJTIwU0VMRUNUT1IlM0QlMjIlMjNuYW1lJTIyJTIwQ09OVEVOVCUzRGlNYWNyb3MlM0NTUCUzRXVzZXIlMEEnRHJvcCUyMGRvd24lMEFUQUclMjBTRUxFQ1RPUiUzRCUyMiUyM2Zvb2QlMjIlMjBDT05URU5UJTNEJTI1QnJlYWQlM0NTUCUzRWFuZCUzQ1NQJTNFQnV0dGVyJTBBVEFHJTIwU0VMRUNUT1IlM0QlMjIlMjNkcmluayUyMiUyMENPTlRFTlQlM0QlMjVDb2tlJTBBJ1JhZGlvJTIwYnV0dG9uJTBBVEFHJTIwU0VMRUNUT1IlM0QlMjIlMjNsYXJnZSUyMiUwQVRBRyUyMFNFTEVDVE9SJTNEJTIyJTIzZGVzc2VydCUyMiUyMENPTlRFTlQlM0QlMjVjcmFuYmVycnklMEFUQUclMjBTRUxFQ1RPUiUzRCUyMiUyM2RlbW8lM0VGSUVMRFNFVCUzRU9MJTNFTEklM0FudGgtb2YtdHlwZSg2KSUzRUlOUFVUJTIyJTBBU0VUJTIwIUVOQ1JZUFRJT04lMjBOTyUwQVRBRyUyMFNFTEVDVE9SJTNEJTIyJTIzZGVtbyUzRUZJRUxEU0VUJTNFT0wlM0VMSSUzQW50aC1vZi10eXBlKDYpJTNFSU5QVVQlM0FudGgtb2YtdHlwZSgyKSUyMiUyMENPTlRFTlQlM0R0cmlhbCUwQVRBRyUyMFNFTEVDVE9SJTNEJTIyJTIzZGVtbyUzRUZJRUxEU0VUJTNFT0wlM0VMSSUzQW50aC1vZi10eXBlKDcpJTNFVEVYVEFSRUElMjIlMjBDT05URU5UJTNET3JkZXIlM0NTUCUzRXBsYWNlZCUwQSclMEFUQUclMjBTRUxFQ1RPUiUzRCUyMiUyM2RlbW8lM0VGSUVMRFNFVCUzQW50aC1vZi10eXBlKDIpJTNFQlVUVE9OJTIy\", n64 = \"RmlsbEZvcm0tQ3NzU2VsZWN0b3JzLmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "FillForm-CssSelectors.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VVJMJTIwR09UTyUzRGh0dHAlM0ElMkYlMkZkZW1vLmltYWNyb3MubmV0JTJGQXV0b21hdGUlMkZUZXN0Rm9ybTElMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0RJRCUzQWRlbW8lMjBBVFRSJTNESUQlM0FuYW1lJTIwQ09OVEVOVCUzRFRvbSUzQ1NQJTNFVGVzdGVyJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RTRUxFQ1QlMjBGT1JNJTNESUQlM0FkZW1vJTIwQVRUUiUzRElEJTNBZm9vZCUyMENPTlRFTlQlM0QlMjVQaXp6YSUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNEU0VMRUNUJTIwRk9STSUzRElEJTNBZGVtbyUyMEFUVFIlM0RJRCUzQWRyaW5rJTIwQ09OVEVOVCUzRCUyNUNva2UlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBUkFESU8lMjBGT1JNJTNESUQlM0FkZW1vJTIwQVRUUiUzRElEJTNBbWVkaXVtJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RTRUxFQ1QlMjBGT1JNJTNESUQlM0FkZW1vJTIwQVRUUiUzRElEJTNBZGVzc2VydCUyMENPTlRFTlQlM0QlMjVpY2UlM0NTUCUzRWNyZWFtJTNBJTI1Y2hvY29sYXRlJTNDU1AlM0VjYWtlJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQVJBRElPJTIwRk9STSUzRElEJTNBZGVtbyUyMEFUVFIlM0ROQU1FJTNBQ3VzdG9tZXIlMjYlMjZWQUxVRSUzQVllcyUwQVNFVCUyMCFFTkNSWVBUSU9OJTIwTk8lMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBUEFTU1dPUkQlMjBGT1JNJTNESUQlM0FkZW1vJTIwQVRUUiUzRE5BTUUlM0FSZWdfY29kZSUyMENPTlRFTlQlM0R0ZXN0ZXIlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRFRFWFRBUkVBJTIwRk9STSUzRElEJTNBZGVtbyUyMEFUVFIlM0ROQU1FJTNBUmVtYXJrcyUyMENPTlRFTlQlM0RIaSUyQyUzQ1NQJTNFJTNDQlIlM0UlM0NTUCUzRSUzQ1NQJTNFaU1hY3JvcyUzQ1NQJTNFY2FuJTNDU1AlM0VmaWxsJTNDU1AlM0V1cCUzQ1NQJTNFZm9ybXMlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzREJVVFRPTiUyMEFUVFIlM0RUWFQlM0FDbGljayUzQ1NQJTNFdG8lM0NTUCUzRW9yZGVyJTNDU1AlM0Vub3c=\", n64 = \"RmlsbEZvcm0uaWlt\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "FillForm.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VVJMJTIwR09UTyUzRGh0dHAlM0ElMkYlMkZkZW1vLmltYWNyb3MubmV0JTJGQXV0b21hdGUlMkZGcmFtZXMlMEFGUkFNRSUyMEYlM0QyJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQVRFWFQlMjBGT1JNJTNETkFNRSUzQTIlMjBBVFRSJTNEKiUyMENPTlRFTlQlM0RGMiUwQUZSQU1FJTIwRiUzRDMlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0ROQU1FJTNBMyUyMEFUVFIlM0QqJTIwQ09OVEVOVCUzREYzJTBBRlJBTUUlMjBGJTNENCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNESU5QVVQlM0FURVhUJTIwRk9STSUzRE5BTUUlM0E0JTIwQVRUUiUzRColMjBDT05URU5UJTNERjQlMEFGUkFNRSUyMEYlM0Q1JTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQVRFWFQlMjBGT1JNJTNETkFNRSUzQTUlMjBBVFRSJTNEKiUyMENPTlRFTlQlM0RGNSUwQUZSQU1FJTIwRiUzRDYlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0ROQU1FJTNBNiUyMEFUVFIlM0QqJTIwQ09OVEVOVCUzREY2JTBBRlJBTUUlMjBGJTNENyUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNESU5QVVQlM0FURVhUJTIwRk9STSUzRE5BTUUlM0E3JTIwQVRUUiUzRColMjBDT05URU5UJTNERjclMEFGUkFNRSUyMEYlM0Q4JTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQVRFWFQlMjBGT1JNJTNETkFNRSUzQTglMjBBVFRSJTNEKiUyMENPTlRFTlQlM0RGOCUwQUZSQU1FJTIwRiUzRDclMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzREElMjBBVFRSJTNEVFhUJTNBTmF2aWdhdGUlM0NTUCUzRXRvJTNDU1AlM0Vhbm90aGVyJTNDU1AlM0VmcmFtZSUzQ1NQJTNFcGFnZSUwQUZSQU1FJTIwRiUzRDglMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0ROQU1FJTNBU3ViRnJhbWUxJTIwQVRUUiUzRColMjBDT05URU5UJTNEU3ViJTNDU1AlM0VGcmFtZSUzQ1NQJTNFMSUwQUZSQU1FJTIwRiUzRDklMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0ROQU1FJTNBU3ViRnJhbWUyJTIwQVRUUiUzRColMjBDT05URU5UJTNEU3ViJTNDU1AlM0VGcmFtZSUzQ1NQJTNFMiUwQUZSQU1FJTIwRiUzRDEwJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQVRFWFQlMjBGT1JNJTNETkFNRSUzQVN1YkZyYW1lMyUyMEFUVFIlM0QqJTIwQ09OVEVOVCUzRFN1YiUzQ1NQJTNFRnJhbWUlM0NTUCUzRTMlMEFGUkFNRSUyME5BTUUlM0RtYWluMiUwQVRBRyUyMFNFTEVDVE9SJTNEJTIyJTIzZnJhbWU2JTNFQVJUSUNMRSUzRUElMjI=\", n64 = \"RnJhbWUuaWlt\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "Frame.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"U0VUJTIwIVZBUjElMjAxJTBEJTBBJ1N0YXJ0JTIwYXQlMjBUQUIlMjBUJTNEMiUyQyUyMGFzJTIwd2UlMjBkbyUyMG5vdCUyMHdhbnQlMjB0byUyMGNoYW5nZSUyMCUyMnN0YXJ0JTIyJTIwdGFiJTIwb2YlMjB1c2VyJTBEJTBBJ09wZW4lMjBUQUIlMkMlMjBzZWxlY3QlMjBpdCUyQyUyMGxvYWQlMjB3ZWJzaXRlJTBEJTBBVEFCJTIwT1BFTiUyME5FVyUwRCUwQUFERCUyMCFWQVIxJTIwMSUwRCUwQVRBQiUyMFQlM0QlN0IlN0IhVkFSMSU3RCU3RCUwRCUwQVVSTCUyMEdPVE8lM0RodHRwJTNBJTJGJTJGd3d3LmltYWNyb3MubmV0JTBEJTBBJ09wZW4lMjBUQUIlMkMlMjBzZWxlY3QlMjBpdCUyQyUyMGxvYWQlMjB3ZWJzaXRlJTBEJTBBVEFCJTIwT1BFTiUyME5FVyUwRCUwQUFERCUyMCFWQVIxJTIwMSUwRCUwQVRBQiUyMFQlM0QlN0IlN0IhVkFSMSU3RCU3RCUwRCUwQVVSTCUyMEdPVE8lM0RodHRwJTNBJTJGJTJGZGVtby5pbWFjcm9zLm5ldCUyRiUwRCUwQSdPcGVuJTIwVEFCJTJDJTIwc2VsZWN0JTIwaXQlMkMlMjBsb2FkJTIwd2Vic2l0ZSUwRCUwQVRBQiUyME9QRU4lMjBORVclMEQlMEFBREQlMjAhVkFSMSUyMDElMEQlMEFUQUIlMjBUJTNEJTdCJTdCIVZBUjElN0QlN0QlMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRndpa2kuaW1hY3Jvcy5uZXQlMEQlMEEnT3BlbiUyMFRBQiUyQyUyMHNlbGVjdCUyMGl0JTJDJTIwbG9hZCUyMHdlYnNpdGUlMEQlMEFUQUIlMjBPUEVOJTIwTkVXJTBEJTBBQUREJTIwIVZBUjElMjAxJTBEJTBBVEFCJTIwVCUzRCU3QiU3QiFWQVIxJTdEJTdEJTBEJTBBVVJMJTIwR09UTyUzRGh0dHBzJTNBJTJGJTJGd3d3LnByb2dyZXNzLmNvbSUyRnByb2R1Y3RzJTBEJTBBJ09wZW4lMjBUQUIlMkMlMjBzZWxlY3QlMjBpdCUyQyUyMGxvYWQlMjB3ZWJzaXRlJTBEJTBBVEFCJTIwT1BFTiUyME5FVyUwRCUwQUFERCUyMCFWQVIxJTIwMSUwRCUwQVRBQiUyMFQlM0QlN0IlN0IhVkFSMSU3RCU3RCUwRCUwQVVSTCUyMEdPVE8lM0RodHRwcyUzQSUyRiUyRmdvb2dsZS5jb20lMkYlMEQlMEEnT3BlbiUyMFRBQiUyQyUyMHNlbGVjdCUyMGl0JTJDJTIwbG9hZCUyMHdlYnNpdGUlMEQlMEFUQUIlMjBPUEVOJTIwTkVXJTBEJTBBQUREJTIwIVZBUjElMjAxJTBEJTBBVEFCJTIwVCUzRCU3QiU3QiFWQVIxJTdEJTdEJTBEJTBBVVJMJTIwR09UTyUzRGh0dHAlM0ElMkYlMkZ3aWtpcGVkaWEuY29tJTBEJTBB\", n64 = \"T3BlbjZUYWJzLmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "Open6Tabs.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMjAlMjAlMjAlMjAlMjAlMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRlNhdmVBcyUwRCUwQVdBSVQlMjBTRUNPTkRTJTNEMyUwRCUwQVVSTCUyMEdPVE8lM0RodHRwJTNBJTJGJTJGaW1hY3Jvcy5uZXQlMEQlMEEnU2F2ZSUyMHRoZSUyMHBhZ2UlMjBpbiUyMGRpZmZlcmVudCUyMGZvcm1hdHMlMjAlMjAlMjAlMjAlMjAlMEQlMEFTQVZFQVMlMjBUWVBFJTNETUhUJTIwRk9MREVSJTNEKiUyMEZJTEUlM0QlMkJfJTdCJTdCIU5PVyUzQXl5eXltbWRkX2hobm5zcyU3RCU3RC5taHQlMEQlMEFTQVZFQVMlMjBUWVBFJTNESFRNJTIwRk9MREVSJTNEKiUyMEZJTEUlM0QlMkJfJTdCJTdCIU5PVyUzQXl5eXltbWRkX2hobm5zcyU3RCU3RC5odG0lMEQlMEFTQVZFQVMlMjBUWVBFJTNEVFhUJTIwRk9MREVSJTNEKiUyMEZJTEUlM0QlMkJfJTdCJTdCIU5PVyUzQXl5eXltbWRkX2hobm5zcyU3RCU3RC50eHQlMjAlMjAlMEQlMEFTQVZFQVMlMjBUWVBFJTNEUE5HJTIwRk9MREVSJTNEKiUyMEZJTEUlM0RUaW1lXyU3QiU3QiFOT1clM0F5eXl5bW1kZF9oaG5uc3MlN0QlN0QucG5nJTIwJTIwJTIwJTBEJTBBJ1dhaXQlMjBhJTIwZmV3JTIwc2Vjb25kcyUyMCUwRCUwQVdBSVQlMjBTRUNPTkRTJTNEMyUwRCUwQVVSTCUyMEdPVE8lM0RodHRwJTNBJTJGJTJGZGVtby5pbWFjcm9zLm5ldCUyRkF1dG9tYXRlJTJGU2F2ZUFz\", n64 = \"U2F2ZUFzLmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "SaveAs.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"JyUwRCUwQSdQcmVzcyUyMExPT1AlMjB0byUyMHN0YXJ0JTIwdGhpcyUyMG1hY3JvJTBEJTBBJyUwRCUwQSdSZW1vdmUlMjB0aGUlMjBVUkwlMjBjb21tYW5kJTIwdG8lMjBtYWtlJTIwdGhpcyUwRCUwQSclMjBhbiUyMFVOSVZFUlNBTCUyMFNsaWRlJTIwU2hvdyUyME1hY3JvISUyMCUwRCUwQVRBQiUyMFQlM0QxJTIwJTIwJTIwJTIwJTIwJTBEJTBBVVJMJTIwR09UTyUzRGh0dHAlM0ElMkYlMkZkZW1vLmltYWNyb3MubmV0JTJGQXV0b21hdGUlMkZJbWFnZXMlMEQlMEEnWW91JTIwY2FuJTIwKnN0YXJ0KiUyMHRoZSUyMGxvb3AlMjBhdCUyMGFub3RoZXIlMjB2YWx1ZSUyMHdpdGglMjBTRVQlMjAhTE9PUC4lMjBUaGUlMjBkZWZhdWx0JTIwc3RhcnQlMjB2YWx1ZSUyMGlzJTIwMS4lMEQlMEEnU2luY2UlMjB0aGUlMjBTRVQlMjAhTE9PUCUyMGNvbW1hbmQlMjBzZXRzJTIwYSUyMFNUQVJUJTIwdmFsdWUlMkMlMjBpdCUyMHdvcmtzJTIwb25seSUyMGF0JTIwdGhlJTIwZmlyc3QlMjBsb29wLiUwRCUwQSdTRVQlMjAhTE9PUCUyMDIlMEQlMEFUQUclMjBQT1MlM0QlN0IlN0IhbG9vcCU3RCU3RCUyMFRZUEUlM0RBJTIwQVRUUiUzREhSRUYlM0FodHRwJTNBJTJGJTJGKi5qcGclMjAlMjAlMEQlMEEnVXNlJTIwdGhlJTIwU0FWRUFTJTIwY29tbWFuZCUyMGlmJTIweW91JTIwd2FudCUyMHRvJTIwc2F2ZSUyMHRoZSUyMHBpY3R1cmVzJTBEJTBBJyUwRCUwQSdHaXZlJTIwdGhlJTIwdXNlciUyMHRpbWUlMjB0byUyMHByZXNzJTIwUEFVU0UlMjAlMEQlMEFXQUlUJTIwU0VDT05EUyUzRDMlMEQlMEE=\", n64 = \"U2xpZGVTaG93LmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "SlideShow.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMEQlMEFUQUIlMjBDTE9TRUFMTE9USEVSUyUwRCUwQSclMEQlMEEnQnklMjBkZWZhdWx0JTIwdGhlJTIwU1RPUFdBVENIJTIwY29tbWFuZCUyMHN0b3JlcyUyMHRoZSUyMHBlcmZvcm1hbmNlJTIwbG9nJTIwZmlsZSUyMHVuZGVyJTIwaU1hY3JvcyU1Q0Rvd25sb2FkcyUyMGZvbGRlciUwRCUwQSdUaGlzJTIwY2FuJTIwYmUlMjBjaGFuZ2VkJTIwYnklMjBzZXR0aW5nJTIwdGhlJTIwIUZPTERFUl9TVE9QV0FUQ0guJTIwJTBEJTBBJ1NFVCUyMCFGT0xERVJfU1RPUFdBVENIJTIwYyUzQSU1Q1RlbXAlMjAlMjAlMEQlMEEnTm90ZSUzQSUyMFVzZSUyMFNFVCUyMCFGT0xERVJfU1RPUFdBVENIJTIwTk8lMjBpZiUyMHlvdSUyMGRvJTIwTk9UJTIwbmVlZCUyMGElMjByZXNwb25zZSUyMHRpbWUlMjBsb2clMjBmaWxlJTIwJTBEJTBBJyhmb3IlMjBleGFtcGxlJTJDJTIwaWYlMjB5b3UlMjByZXRyaWV2ZSUyMHRoZSUyMHZhbHVlcyUyMHdpdGglMjB0aGUlMjBTY3JpcHRpbmclMjBJbnRlcmZhY2UlMjB2aWElMjBpaW1HZXRTdG9wd2F0Y2gpJTBEJTBBJ1NFVCUyMCFGT0xERVJfU1RPUFdBVENIJTIwTk8lMEQlMEEnU0VUJTIwIUZJTEVTVE9QV0FUQ0glMjBDJTNBJTVDVGVtcCU1Q2RlbW8tc3RvcHdhdGNoLmNzdiUyMCUyMCUwRCUwQSUwRCUwQSclMEQlMEEnU3RhcnQlMjByZXBvbnNlJTIwdGltZSUyMG1lYXN1cmVtZW50JTIwJTIwJTBEJTBBJ01lYXN1cmUlMjB0b3RhbCUyMG1hY3JvJTIwcnVudGltZSUwRCUwQVNUT1BXQVRDSCUyMElEJTNEVG90YWwlMEQlMEEnTWVhc3VyZSUyMGxvYWQlMjB0aW1lJTIwZm9yJTIwZmlyc3QlMjBwYWdlJTBEJTBBU1RPUFdBVENIJTIwSUQlM0RGaXJzdHBhZ2UlMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRlN0b3BXYXRjaERlbW8lMEQlMEFTVE9QV0FUQ0glMjBJRCUzREZpcnN0cGFnZSUyMCUwRCUwQSUwRCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNEQSUyMEFUVFIlM0RIUkVGJTNBaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRkF1dG9EYXRhRW50cnklMjAlMjAlMjAlMEQlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEFUVFIlM0ROQU1FJTNBZm5hbWUlMjBDT05URU5UJTNEVG9tJTBEJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQVRFWFQlMjBBVFRSJTNETkFNRSUzQWxuYW1lJTIwQ09OVEVOVCUzRFRlc3RlciUwRCUwQSdNZWFzdXJlJTIwc2VydmVyJTIwcmVhY3Rpb24lMjBvbiUyMHN1Ym1pdCUwRCUwQVNUT1BXQVRDSCUyMElEJTNEU3VibWl0RGF0YSUwRCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNEQlVUVE9OJTNBU1VCTUlUJTIwQVRUUiUzRFRYVCUzQVN1Ym1pdCUwRCUwQVNUT1BXQVRDSCUyMElEJTNEU3VibWl0RGF0YSUyMCUwRCUwQSUwRCUwQVNUT1BXQVRDSCUyMElEJTNEU3RvcmUxJTBEJTBBJ01lYXN1cmUlMjB0aW1lJTIwZm9yJTIwc2VjdXJlJTIwT25saW5lJTIwc3RvcmUlMjB0byUyMG9wZW4lMEQlMEEnZ28lMjB0byUyMHN0b3JlJTBEJTBBVVJMJTIwR09UTyUzRGh0dHAlM0ElMkYlMkZpbWFjcm9zLm5ldCUyRm92ZXJ2aWV3JTBEJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RBJTIwQVRUUiUzRFRYVCUzQSpCdXkqJTBEJTBBJ29wZW4lMjBzdG9yZSUyMCUzRCUzRSUyMCUyMHN0YXJ0JTIwdGltZXIlMEQlMEFUQUclMjBTRUxFQ1RPUiUzRCUyMiUyM2NvbnRlbnQlM0VESVYlM0VESVYlM0VESVYlM0VESVYlM0VESVYlM0VESVYlM0FudGgtb2YtdHlwZSgyKSUzRURJViUzRURJViUzQW50aC1vZi10eXBlKDIpJTNFUCUzQW50aC1vZi10eXBlKDMpJTNFQSUyMiUwRCUwQVNUT1BXQVRDSCUyMElEJTNEU3RvcmUxJTBEJTBBJTBEJTBBJ01lYXN1cmUlMjB0aW1lJTIwZm9yJTIwc2Vjb25kJTIwcGFnZSUyMCUyMCUwRCUwQVNUT1BXQVRDSCUyMElEJTNEVG90YWwlMEQlMEElMEQlMEFXQUlUJTIwU0VDT05EUyUzRDIlMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRlN0b3BXYXRjaFJlcG9ydCUwRCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNESU5QVVQlM0FURVhUJTIwRk9STSUzRElEJTNBZm9ybTElMjBBVFRSJTNESUQlM0FwYXRoJTIwQ09OVEVOVCUzRCUyMkluJTIwaU1hY3JvcyUyMERvd25sb2FkcyUyMGZvbGRlciUyMg==\", n64 = \"U3RvcHdhdGNoLmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "Stopwatch.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMjAlMjAlMjAlMjAlMjAlMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRlRhZ1Bvc2l0aW9uJTBEJTBBJyUwRCUwQSdBbGwlMjBsaW5rcyUyMGhhdmUlMjB0aGUlMjBzYW1lJTIwbmFtZSUyQyUyMHNvJTIwd2UlMjB1c2UlMjB0aGUlMjBQT1MlM0QlMjBwYXJhbWV0ZXIlMjB0byUyMGRpc3Rpbmd1aXNoJTBEJTBBJ2JldHdlZW4lMjB0aGUlMjAxc3QlMkMlMjAybmQlMjBhbmQlMjAzcmQlMjBsaW5rLiUwRCUwQSclMEQlMEFUQUclMjBQT1MlM0QlN0IlN0IhTE9PUCU3RCU3RCUyMFRZUEUlM0RBJTIwQVRUUiUzRFRYVCUzQUNsaWNrJTNDU1AlM0V0byUzQ1NQJTNFb3BlbiUzQ1NQJTNFdGhpcyUzQ1NQJTNFcGFnZSUyMCUyMCUyMCUwRCUwQVdBSVQlMjBTRUNPTkRTJTNEMSUwRCUwQUJBQ0slMjAlMjA=\", n64 = \"VGFnUG9zaXRpb24uaWlt\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "TagPosition.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VEFCJTIwVCUzRDElMjAlMjAlMjAlMjAlMjAlMEQlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmRlbW8uaW1hY3Jvcy5uZXQlMkZBdXRvbWF0ZSUyRkZpbGVVcGxvYWREZW1vJTBEJTBBJyUwRCUwQSclMjBJZiUyMHRoZSUyMEZpbGUlMjBBY2Nlc3MlMjBtb2R1bGUlMjBpcyUyMGluc3RhbGxlZCUyQyUyMHlvdSUyMGNhbiUyMHVzZSUyMCU3QiU3QiFGT0xERVJfREFUQVNPVVJDRSU3RCU3RCUyMHRvJTIwcmV0cmlldmUlMjB0aGUlMjBwYXRoJTBEJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQUZJTEUlMjBGT1JNJTNESUQlM0FkZW1vJTIwQVRUUiUzRE5BTUUlM0F1cGxvYWRlZF9maWxlJTIwQ09OVEVOVCUzREMlM0ElNUNmYWtlcGF0aCU1Q0FkZHJlc3MuY3N2JTBEJTBBJ0Rpc3BsYXklMjBzb21lJTIwaW5mb3JtYXRpb24lMjBmb3IlMjB0aGUlMjB1c2VyJTBEJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RURVhUQVJFQSUyMEZPUk0lM0RJRCUzQWRlbW8lMjBBVFRSJTNETkFNRSUzQVMxJTIwQ09OVEVOVCUzRCUyMkRvbmUhJTIwVGhlJTIwZmlsZW5hbWUlMjBpcyUyMGluJTIwdGhlJTIwdXBsb2FkJTIwYm94LiU1Q25XZSUyMGNvdWxkJTIwbm93JTIwY2xpY2slMjBvbiUyMHRoZSUyMCU1QyUyMlNVQk1JVCU1QyUyMiUyMGJ1dHRvbiUyMG9yJTIwY29udGludWUlMjB0byUyMGZpbGwlMjBpbiUyMHRoZSUyMHJlc3QlMjBvZiUyMHRoZSUyMGZvcm0uJTIyJTIwJTBEJTBBJyUwRCUwQVdBSVQlMjBTRUNPTkRTJTNEMSUwRCUwQQ==\", n64 = \"VXBsb2FkLmlpbQ==\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543429,
        "icon": null,
        "title": "Upload.iim",
        "labels": []
    },
    {
        "link": "javascript:(function() {try{var e_m64 = \"VkVSU0lPTiUyMEJVSUxEJTNEMTAxMSUyMFJFQ09SREVSJTNEQ1IlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRmxvY2FsaG9zdCUzQTMwMDAlMkYlM0YlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRERJViUyMEFUVFIlM0RJRCUzQWRldGFpbHMtZm9ybS13cmFwcGVyJTBBVEFHJTIwUE9TJTNEMSUyMFRZUEUlM0RJTlBVVCUzQVRFWFQlMjBGT1JNJTNESUQlM0FkZXRhaWxzLWZvcm0lMjBBVFRSJTNESUQlM0FmdWxsbmFtZSUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNERElWJTIwQVRUUiUzRElEJTNBZGV0YWlscy1mb3JtLXdyYXBwZXIlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBVEVYVCUyMEZPUk0lM0RJRCUzQWRldGFpbHMtZm9ybSUyMEFUVFIlM0RJRCUzQWZ1bGxuYW1lJTIwQ09OVEVOVCUzRE9kZXR0ZSUzQ1NQJTNFRW5nbGFuZCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNEQlVUVE9OJTIwRk9STSUzRElEJTNBZGV0YWlscy1mb3JtJTIwQVRUUiUzRFRYVCUzQU5FWFQlMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzREJVVFRPTiUyMEFUVFIlM0RUWFQlM0FTVEFSVCUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNETEFCRUwlMjBGT1JNJTNESUQlM0F0ZXN0JTIwQVRUUiUzRFRYVCUzQUklM0NTUCUzRUJFTElFVkUlM0NTUCUzRVRIQVQlM0NTUCUzRVRFQU1TJTNDU1AlM0VBUkUlM0NTUCUzRU1PUkUlM0NTUCUzRUVGRkVDVElWRSolMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzRElOUFVUJTNBUkFESU8lMjBGT1JNJTNESUQlM0F0ZXN0JTIwQVRUUiUzRElEJTNBMyUwQVRBRyUyMFBPUyUzRDElMjBUWVBFJTNETUFJTiUyMEFUVFIlM0RJRCUzQWJvZHklMEFUQUclMjBQT1MlM0QxJTIwVFlQRSUzREJVVFRPTiUyMEZPUk0lM0RJRCUzQXRlc3QlMjBBVFRSJTNESUQlM0FzdWJtaXQtYnRu\", n64 = \"JTIzQ3VycmVudC5paW0=\";if(!/^(?:chrome|https?|file)/.test(location)){alert(%27iMacros:%20Open%20webpage%20to%20run%20a%20macro.%27);return;}var%20macro%20=%20{};macro.source%20=%20decodeURIComponent(atob(e_m64));macro.name%20=%20decodeURIComponent(atob(n64));var%20evt%20=%20document.createEvent(%22CustomEvent%22);evt.initCustomEvent(%22iMacrosRunMacro%22,%20true,%20true,%20macro);window.dispatchEvent(evt);}catch(e){alert(%27iMacros%20Bookmarklet%20error:%20%27+e.toString());}})%20();",
        "date": 1681543582,
        "icon": null,
        "title": "#Current.iim",
        "labels": []
    },
    {
        "link": "https://www.jetbrains.com/lp/python-developers-survey-2020/#Methodology",
        "date": 1636283650,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABf0lEQVQ4jZVSu6oCMRCdSdYHrAF/QBsLQQikECu/QOzsRbCztPIHxD/wA2wsBRs7OxEEbWwsBLGx2MLHLuIa2Mwtcp/ivVxPEcLMnEeYAPwDiIiI7/fvjVgslkwmr9crALiua4whImNMGIaPGpxzAGg2m77vFwoFKaXv+1prIoqiaDQaZTIZa+V8mgJAIpEQQnDOEVEIMRwOp9NpLpfrdDq73a7dbjPG2Hcfm8HGIKLVajUYDCaTSRAEm83mx5vi8ThjrNVqGWOklEopy4yiiIg8z8tms3aSAQARaa2NMff73crbuX6/X61Wa7Wa53nj8ZhzTkQMAJRSvV5PSlmpVBhjh8PBcRxE3O/3s9lssVhcLpd8Pv+Vv16v0we63S4AlMtlm+d2u2mtT6dTo9F4X4jlKKVKpdJ6vZ7P5wAghJBSIiLnPAzD7XZ7PB5/Xerf9edti8/QNu0PQjqdftAmovP5/MQKAFzXXS6XqVSKiBDRnkEQFItF+68eCS85vIw3GN3cFvFSSoIAAAAASUVORK5CYII=",
        "title": "Python Developers Survey 2020 Results | JetBrains: Developer Tools for Professionals and Teams",
        "labels": []
    },
    {
        "link": "https://saucelabs.com/resources/articles/selenium-tips-css-selectors",
        "date": 1636291976,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADHElEQVQ4jVWTSWidZRiFz3m/78739ybpvRlM25C40IKCuhAMoouIJSsRUasgXbiwWmmRC0WcSsWiXUQUbBwKgi4ELQQKUkUR6aIuHCiihbowbebYhGa8yf2H731dOFCf9eHwLM4hABhAAgYAk4N99+aI5w14oCosb5lBDFMZcL64sfB09xI2cR0CAATsUr0ezQ71jkeO50jcTcNEK9OjZvZF5GTA1H7Xck9jfrDv+GIPKv8VGMClm+tRdENuoubcM23VY2mwfUr8TGGfAXuuhXBs4Mria7HjgZ68ezGp9n56sYEq/jYHpoZ63+ty7sBymj1hkKjgeLxM1itCzKfZq874ozEo6D4RoKMsLGwGe2v35YUmrwx0D1e9P7+p4XUHTEfef9gKCk9iK2TPekrVxDqgrn9nTvavqMKDWFNLkOo9nB7qmxBg2DR9TMWfyVMiABKbHhSFGXnYJfH9IZ8/VBB2xqoApeSJhzPlZwJgbzB8o5K7o9O5mgOkbXrUGSo7C35ciLLm8y+QqMaqWwKu+hDGg+E70EZ9JFLayHQGtNsc2N5WPVRbjT/f6Cy8OZdkJ9XgQKkTViBpO7w8tJyiQeCXknBUFEYQKkQ5MS06cGSjo/gxIbVgEAcYgdldkwuPwvATwQTEFmBiAHxLbdOIW0Ia3t72tpABOVJygAZxfKRLXGM5SZ+aGbzxjYpjs60KNVwEOdJWWxKYnc0Ro3DuudTYVRIXwWzdWjYG4+pymu4zh56SQzMx03W1qwL+mgPvg9mXnBvoHjbvzlVIHwB0imA2Sz8AuAblJGC1ipMTsRnKQqwHe9Jgt5dEmlmW3in9U1e/V7X3DUSiFs9lYQYZTiOzr0VscFfenxACjpxfCbpfabmGd81t1bH+qaULYgDjteSllurZHu8KSjs1MP3nt+K4l8YH59Ls3VaGw1tJ+niB3NPt/Eeramfc5cVX7N8pA8Clej2qRrkjcdw+5YuFgzucO7KidlqD/iaUW0EbKZBdGTAW/zH/8iDQ/ueI/2dqd62TvnzSk3cRuKlIYlP1GoCv0sTeGZpd/OH6/F8Nl4ITtSKuEAAAAABJRU5ErkJggg==",
        "title": "Selenium Tips: CSS Selectors | Sauce Labs",
        "labels": []
    },
    {
        "link": "https://www.slidescarnival.com/ophelia-free-presentation-template/361",
        "date": 1638714201,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACbElEQVQ4jVWTS4sUSRSFz7kRmVnVlq0yBeKjqlvczu/wVYq7/jHCzKZLd/6R3gmCCupKEAQXgtCbqbKyBNGZsR/V1jMz4rjIbEovXIJ7F1+cc28E/3n9+PlW/veNYjaVHEkIAggBJCDUUdUCAAnyCTif4gXfvPuoK7NncXv8wBQK0QhJJAAQawJrjOougWIFWlxO4qe0x8HVRyJSxiBIhCKqVJ2x6gGQVIGLEtFIow8HzLM7HHb7MEupKMiI30OoTRCVQAKggQSZKI1Hyps9DbceyrkUCqdq10FIMAhWayBgp/5EYxKOMEpvc9DZhXMJFNcQAojVcNcKBBorUyRNojGLx8obPQw6fTiXADVEAlifv+wGBlJmJgE0cxIdM02UN+5i0O3DTpVUN9WrXVszSVaWZYwhqihLhBhVBDHVkfKsh2GnD+dSIALiqZK1An/+3OY379OLy9WidOYcCEjSwcEhM5to1OhRXeH6+C/EUFTbqSgV4Np252aI9kTA1mKxKAG4NPX497/vOvmx4B8XTKPsLtEBrn+uIDCCEiDAWq3Wh+lqdpvE2HvvV6tViCFCAL58/abZvGAT1UyG3b7MJaAkGAWDTJK73G7vF5jd8s6NmxsbPkqBJKKA/w8ONV+WbGiiUdbjsLMLWsIYRIAwkmFvb8+1z7b3y2J+y5sbb2yc8UUoA636TZOTqZYhItWx8uY9Dbu7MvNAkAwAdnZ2Kki7vT+fHd9MnBs0ssxLigBIEtPZjGUkfDhk3ryPfLsf0+bm7w9ekpGMWi7/fPX2/dPBKL96vtUqsiyh946Jd2g0m6IimG76SyfPX/4EsM9wtZiwqQcAAAAASUVORK5CYII=",
        "title": "Beautiful Pink Patterns. Free PowerPoint Template & Google Slides Theme",
        "labels": []
    },
    {
        "link": "https://www.mohfw.gov.in/pdf/4SoPstobefollowedinShoppingMalls.pdf",
        "date": 1638789849,
        "icon": null,
        "title": "4SoPstobefollowedinShoppingMalls.pdf",
        "labels": []
    },
    {
        "link": "https://www.worldtimebuddy.com/utc-to-ist-converter",
        "date": 1638957064,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1klEQVQ4jW2Sy2tdZRTFf2t/3zn3FdJ4UklJRKs2AfEBjbaCWGmxE19QUcGZjgRHVWfFf8CR0ImgYGciUgeCAxEd+KBgBUEhVrERg8F6Cc2JxOa+zjnfdnA1I3+w2bAGe6+12eJfDp98sb2wtJpD+Z/E8eUjrG+XXC1L5vfVgnp3rf7u43cGAAJ46IU3noit+KanukgpSUIO7N4Y0W3nZDHiJMzlmFwWh01dnbt04dx7uuW5Vzt3zh1aj63OYj0ZIRnuiSxGnjxxH9+ubfB7/zpZFvHkOE7MWtTVqP/rTv8OW8oPZCFYR02VgikF4Sklv2mm7Weff5Tjd9/m43HlQXKTPIikVKUgy5fyA1mMrY4HC8lMZokEIpgpmNGkRHJXDEY0UeOYgiMzqfHY6nic7XXk3sjMSI4kFM0wM0wiSAQzYgyoEe5IwfDkmu3limVZcnB+DjNDDhIkc2IwJGFmIGiahqpJpOSoMVJqGOztEouiIBpghgATpJSYVDXuzmA0ZlzVdD2naRJCYCAJ2MZKmFo0Q4LGE3ujCYs3zyGJlVsPkQVjMqnp5Dl5FslCIIsGzBOL6XKalKjrhAyyOM1f7u5x5tRRbl86yLsffcXa+jWyLNLOI00DRVEQlh98rBXEK5g6AsykVhbZ2vmbz775kd/+uM6J1RWePf0AC8UsG9e2uTEYq5XF4db17fNh4Z6T+exM+2wMsWvCg0kmEaPRJGd9c4vPL/9E3SSePrXqjz98r2/8ua3Nfrl3bPmu83G211FmQTJLCQeXTx98SjvLqFPi/U8uc+n7qzxz+n48ecpCiH953+JMv67iSmeStTpWT8ZMT+z7AwRkgl67xc7uiLc++ELd3gwz3fbO5pc/jMKVK5/WRx85049ZPCaoJIYmRjbtQxNDMa0YwqDbbg2CWd9T8/KHF17/Zd/sUy+93T282IslJVDw/5QUxRH6X/9cXbz42hDgH/JSLZpdNlCYAAAAAElFTkSuQmCC",
        "title": "UTC to IST Converter - Convert Universal Time to India Time - World Time Buddy",
        "labels": []
    },
    {
        "link": "https://en.wikipedia.org/wiki/Bootstrapping_(compilers",
        "date": 1639474225,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVQ4jaWTMaoCMRCG/wnvDtELmHaxdAmIXcheZA9hYeMNxNZqsc81lu0X+2VLTzBj8V5C8uQ9UAcG5k+YP5kvhPATzCx4IZRSBAD0TnNuQu82J5NPmgFADcMAay2UUjifzwAA733S8zzDWgtrLeZ5xvV6xXK5hPcet9vte/5pmoSIJIQgURtj5HQ6CTOLc06maRJmFmaWuq5TjVg454qNrutEay0hBDkej8V6NC4M+r4XANL3fdo0xogxJul4UK4TxPV6Decc9vt9ArTb7XC/35MehgFVVZUUc7cQghCRjOOYTtNaS9d1wszStm3BgpnlKzfz3mO1WuFyuWCz2aBpGlhrcTgcsN1uAQCLxeLvG0RIRJRmjS9U13XB5wlinlrrgnTbtk/w/jWIDPL8PXvMzz9TzuLVZgB4AExRsO8ga8hoAAAAAElFTkSuQmCC",
        "title": "Bootstrapping (compilers - Wikipedia",
        "labels": []
    },
    {
        "link": "https://codotvu.co/mydomains",
        "date": 1641304194,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC2ElEQVQ4jV2SPWidZQCFn/N+P/fLvTcxNSaptdAmjRZpKVLQxUG7KtKpIoggFtoSdXDIVlCw4NLJ0IIdBcFNBREXa4s62Cr2x0CJVaEl/iRBbZKb+/N933scakQ82xme4TwccWQhb01Up6T0mF0PY0sAQrbR3QbGAJYsJet2da6znJ5MWxPVKeXtOQ86xkZCAFtwIohAbQsgAaAeIW/PtSY2UGv2SoeQFMSIRMDYQBAyZqMbSRLRbiQ2sNatJCm2h1JiXfdSSU3HaGHZMlhBoqxNtDn+5BiH9raZmcgFcG2p73MXV8PXP3fdboSmWrNXo4R8dykCqjrSzAPvHt3F0wfu4f+JhsNvL/LJ9U2n2gLvSpJkBpU5fWTyH9icv3SDj768SbuZceLwQVb/WPPij7eV5dtJ/2NbAnqVmbov48XHx6ijufDtTZ46vcAgux+qAR9e/YI7ZaoldjFcVEq3bAuoo6lq2Lc9ocgCQea9y+sMhh9ibCSlNtzsjxEaYjhAjJEgiWjTqyLbmgFX0FBJwEiw6YIQInVVEuuKIoU8GNuACGDK2rzxzCQLbz7M/As7+eG3LlUdiRaH9o0RezXd0qz3agaV6ZWRqo5IkOjgidfH20EfvDJDkQUem2ryzvlf2DNa8eAD97JvR0HIArf/LNk9lnP2+Z08OtXy5zc2BZj2y9di89glv//ZNZe9ji98c8NDR7/ygdc+9crqsrfSLe2q/rf62fnvzUvfRbVnr7iynK7f0v7RNS+utdRtTTMoB+xNfuKt5/bwxCPTjLQLos3S73/57MfXdfZy5jg0LrVmr3QUkiIS6PfL0MgzB1coSJuDCHdusT1fY3q8cIyRxZVKK+yIQ9smCLHfS5HOkDXnNNhwM5dNKSRijDRzweQMq7X5da0vBPlo4ZEExaQhD8ozSbn71YtZ0SukdL9xztankWxDrElV08hSZ2kgUNtm3XV/vrOcnvwbyzyLyJ7YecEAAAAASUVORK5CYII=",
        "title": "co.vu | Get a Free Domain for your crazy idea",
        "labels": []
    },
    {
        "link": "https://fireship.io/snippets/firestore-rules-recipes/",
        "date": 1641977000,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpklEQVQ4jY1TTUhUYRQ9937fe2/GsRBLIysioh+oVbtCaMqiDDEVjYhIKDAIrFVBu4EWEbVs00KIWoktpLCwHzKsRZAEIhFEiyiiMGcYZ5z35r3v+26LUrQMOst77zn3cDkXWAbS2hp872vdDAAC8HIz81i2WWqYqfW94Emhr6ODACc9UP8lIAABQJJZs8VjvSlgPTjd295OQ7D/crK0mPslwJ464it2oXGq1k/dnTvZtYsAN79gMZYUBKDiieY6NDZMkqF1cSRJjWjfxZiKil/3rL7/qvybJH85kByYAKG1q66ktVofW2eJ4IXGxDVa70ylm84TIIvJCw4EYALczMX202mlByoVa8godrEQG3KeVWRjfDNfqtsNJ6nx8Uf5Y4AFABKACJDZy227tfKfRZHzXCyghJVLADYEF8OtgK+SxLZwEUUo7s08GjwvADEBUshl6yTQtxNxaetEKyLtREC/LiTM7DwmZ6zsyDwemgDzidmW7jYChAGAVaY/7autzsF6ij4QaDLwtIiQACCIgAQMklkAsM7VKlJnAIBzOTCzPhIl1vmKFCQ5p0herAgUi0gMQBRIz1nzPV8sDs+2dV/KeF4A0MbngOa9Y2ArEqS1RmzdRN2NkaeRie9EsZ3OeColIsbXTFbkVePK+ius1LXEWkdEpSxged8YDDkZ1zUeC7nXAlDDzYdvwrlwv0DeprT252ITB0p1pbTqr1gXBaw5ETu8cINqqXQ1KkcffdbNBIjkwPUDI1OFmfIBJnm/OpP2q8aMlpL4c0MqnSqb6suVhfCWAMQCUOP1sW8/8sW9DLwrXDx6inJw0tOjNgyN5sXJp8iYwUo5PKuZg9DG9yQMO2niQWUhVIszPn3h8Lb575NsVk8fP9gEAMVDh+rznZ3Nf4bwJ9YNRQ982aYfAAAAAElFTkSuQmCC",
        "title": "Firestore Security Rules Cookbook",
        "labels": []
    },
    {
        "link": "https://www.16personalities.com/infp-careers",
        "date": 1647090559,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADFUlEQVQ4jX1TWWhUZxT+zn/vnd0YtWGqhkatllhCKQwxViomBTfcwM64lFKDSyq4JTFaKBEGfXG3EVs1YMQIUWNbAyGh4IN5Ueo0eQiuODVqRG1iillmbubeuf9/fJARm6rn6XA2znfO9wEjjZn+F3tPjkb4DADz6uv9bp+vFsAeJeV4oWmrmsPh799Wq78ZWNR4KSSE3C6VqgRTr2kmnuuGX9MJzxc3Nn4kSBz513RVXF2ztDvTIzIjK76IjNUGB5ViPDGTyf7myNcV3lGjlhqkClpWhKtVMmlL4NGsrE5j4FrW2P9AKAst8WV9OO4a2faPBy43tEYB0XHx132GP1DFUkJZicqm8MoaAlTfX3mbbHaFJ8yIlwCAAIDajmaTFG/iQFY7AEQBBUI+EaC5dKTZNZUABQAJ5Wl1WO7IbKCXhULG6GDBOVZ86OClE71Vi9dW6tLqvzM0vN/R9RzHVmaB9/aZs7Ep2xLsSuUV3T35LDa18Mn1TzZOLLq3niKAlrewdIsi1SqA1V63N8rMsM2hnbFZz460Ra/IvuuTjvqyfZtlmjGYcNZpTLccgc9zi+InxUVAOsq5cLi1/m9BIh8AhCBIw53fFm1zAGKL3NNZAoZBAMS04ON4u+FzmgCASicVe3IK8tqVlNWkU6cGrU5JpFS2Xa3NtIuHTSOxeWbH7XGjabdtc1IhuUbA/x2Il02YES8mANg695tpaddA3/GWlheIQiAKVVWz4oDH465iZgwMqvJjOxtqMr/v+XNyEJr0Bwu7uwQAHL3cEA/gg992zP92AaKvrs0OvYKjCXgNe3qGzP/EPt6QFvrPwcLurtdMLAuFDAbXqaDo2f7TysJD5RfabWmVkwUDihOWltxVerrYM+ZFzme95o2bOV6nnxlEhNfiIABc8UtkjkhRrZ0a+tJw+3KZxN2UZXr8emBiihzHLfQ/HvT6v/p9b13XSCpzBBENccSsdKpE9wQkkXZeKnzq83hLWOdT9r2H94c5NXv+5M7HzBAZMb1Tulv2Lc+17j/q8edP0dNpbcyxH84/fVvdS4RmX/Q4Q9pDAAAAAElFTkSuQmCC",
        "title": "Career Paths | Mediator (INFP) Personality | 16Personalities",
        "labels": []
    },
    {
        "link": "https://www.lenstore.co.uk/vc/colour-is-in-the-eye-of-the-beholder/#/results",
        "date": 1647091350,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC3klEQVQ4jU3Tz2tcZRjF8e/zvO+dmcyvTJLmh05M6Q/TNDZZCIIF0YUILroQF+3WRXWnoH+AW3HTjYg7FRduhUpBF24ktCJSbEVtMIEQbWfShqZJJvdO7r3v+7hIEM/iLA9n85G9rLzKcRxQFKAO6vUokdQfErXAmQ+NnEHEJUpQ/ovkwQzAgBih5oEIvT48ehDRg8hUWzlxTgl1sAACxwU+z0MEiGa0EuHX+/DlzcCfawH3sGSyX3Jyq+AlJ1x8q4G7UiUGkHg04g3EDJqJcH0DPrkeafVh2nu2pjx/PV2SbSrZLyny/mNe7tWxd9uYCGLgLZrUPNx+BD9/Efloo+B0NSJB2B44vhnzfHfKaCzXuPPkgHOf7/LU/CHZpSk0M7xiZF7pfxt5b3PIxHKKTBQMC5jeH+GDtQbN1YQbM4HuCcfDrcjsSh99sY512nhNhL0tY+luQWt5gJ7P+L30rDbGeeX5KkkVrnyv3Flx7I0IMVEkz3C9LcLEKBo9jPSEpuZUujn3cHy4M8OZ5SZjbSX3yuibxtKSYgcw2QnY6BApHkM01ARcaThnmDc+7Y+RjyTMtUuG0ZDccAKhaiwcwuyplDC9izaHYKASjdgRfOG4v11ltajhk0hvBZKoaNvxxwa0fhhyeXYfOb+Nzm0zbDUwE7zlgnYNKlV21wPhWaFow631gudupORdpbo65HK5Q+2FbfyFDXozwr6bZ46IJwANI7zqaV2r0+xCSI2fLlaYrOzw+t0Nzs7twewATj5hre24Za9xqTVKtALZT8sIYBXwHyuf3Ta+fiOw8IxQ7yrz+Q4LBw+o6IB7ZYPN4RneXmzI6dHShkGQQVYeaVBQNbKvlGvrxo9njc6k4TqeoKJawGIN3pknzrVK0lJQ+R8mIkQFr2B/w81/4DcgVGGqAYvjcGECRCAPoMciZS8rrxKPHrgIRYDQKnU8po5UIakFQuogsX1GykgkUSUcc/4X7kFQGTebvFwAAAAASUVORK5CYII=",
        "title": "Colour is in the Eye of the Beholder | Lenstore.co.uk",
        "labels": []
    },
    {
        "link": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes",
        "date": 1648122564,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACM0lEQVQ4jU2S30tUQRTHz5m5P+e6udAGrWjha/WWtGLZklIumwjVQ/W3BELQfyO95gqBmvkrfDFRelgtie3B8Mr+uPdy78yd08O4m/Mw8IXvfM+Zcz54ozRCRIg4uAEAEQEAAK5KY7CMHrg554iotdZaI6JlcQDM83xgsExGPwzb7Y6UUgjf8zytdbvdJiIhhOM4xsmD4Jp5gIh5LhcW5ufn60mctFotz/PevH09/ehhGIbn5+eWZQP0KyBimmblkZsfPrz3fN+2ra2dL5XKg8XFd1EUnf09Ozr6IYQvJVkmnjEWRb2ZmSfN5nGr9YdbHADqz2tbm9tSSc454uWnGfSPJpqbe7q9vZMkCWMcAKvV6tr6GuecIQMgAgQAZvrJsmykXJ6YuL/caIjAT+J4bHR8fPz2ysrnIBCa9GDUrN9PPDU1mWXZ3t7eUDDU7fZqtWfHzZOTk6bn+VrToJF+BZnW67Xd3W9KpZZtMc5nZ2dWV9eJFGfM7NPMnwGAlLI4XKxMVpY/LQNAHMW3xkbv3rvTaKwg2koprQkREAgAGOe814seV6dLpdLGxiaALaV8+erFRXixv//ddXzf9x3b0bqPQiAKWufF4vDXjc2Dg0PHcTudzq+fp0tLH09PfzuOHYbh4eFRt9vjnAMAlq6XETFJEqVUoVAgoCRO0jR1XVcIQURR1HNs13Ev0UBDK2MMEfM8N0NjjBHpPNcAwDknIsMiEf2n1SzSUKiUQkQjtdZXif4H9y5AmuLgRAoAAAAASUVORK5CYII=",
        "title": "Express Tutorial Part 4: Routes and controllers - Learn web development | MDN",
        "labels": []
    },
    {
        "link": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose",
        "date": 1648122811,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACM0lEQVQ4jU2S30tUQRTHz5m5P+e6udAGrWjha/WWtGLZklIumwjVQ/W3BELQfyO95gqBmvkrfDFRelgtie3B8Mr+uPdy78yd08O4m/Mw8IXvfM+Zcz54ozRCRIg4uAEAEQEAAK5KY7CMHrg554iotdZaI6JlcQDM83xgsExGPwzb7Y6UUgjf8zytdbvdJiIhhOM4xsmD4Jp5gIh5LhcW5ufn60mctFotz/PevH09/ehhGIbn5+eWZQP0KyBimmblkZsfPrz3fN+2ra2dL5XKg8XFd1EUnf09Ozr6IYQvJVkmnjEWRb2ZmSfN5nGr9YdbHADqz2tbm9tSSc454uWnGfSPJpqbe7q9vZMkCWMcAKvV6tr6GuecIQMgAgQAZvrJsmykXJ6YuL/caIjAT+J4bHR8fPz2ysrnIBCa9GDUrN9PPDU1mWXZ3t7eUDDU7fZqtWfHzZOTk6bn+VrToJF+BZnW67Xd3W9KpZZtMc5nZ2dWV9eJFGfM7NPMnwGAlLI4XKxMVpY/LQNAHMW3xkbv3rvTaKwg2koprQkREAgAGOe814seV6dLpdLGxiaALaV8+erFRXixv//ddXzf9x3b0bqPQiAKWufF4vDXjc2Dg0PHcTudzq+fp0tLH09PfzuOHYbh4eFRt9vjnAMAlq6XETFJEqVUoVAgoCRO0jR1XVcIQURR1HNs13Ev0UBDK2MMEfM8N0NjjBHpPNcAwDknIsMiEf2n1SzSUKiUQkQjtdZXif4H9y5AmuLgRAoAAAAASUVORK5CYII=",
        "title": "Express Tutorial Part 3: Using a Database (with Mongoose) - Learn web development | MDN",
        "labels": []
    },
    {
        "link": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website",
        "date": 1648122978,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACM0lEQVQ4jU2S30tUQRTHz5m5P+e6udAGrWjha/WWtGLZklIumwjVQ/W3BELQfyO95gqBmvkrfDFRelgtie3B8Mr+uPdy78yd08O4m/Mw8IXvfM+Zcz54ozRCRIg4uAEAEQEAAK5KY7CMHrg554iotdZaI6JlcQDM83xgsExGPwzb7Y6UUgjf8zytdbvdJiIhhOM4xsmD4Jp5gIh5LhcW5ufn60mctFotz/PevH09/ehhGIbn5+eWZQP0KyBimmblkZsfPrz3fN+2ra2dL5XKg8XFd1EUnf09Ozr6IYQvJVkmnjEWRb2ZmSfN5nGr9YdbHADqz2tbm9tSSc454uWnGfSPJpqbe7q9vZMkCWMcAKvV6tr6GuecIQMgAgQAZvrJsmykXJ6YuL/caIjAT+J4bHR8fPz2ysrnIBCa9GDUrN9PPDU1mWXZ3t7eUDDU7fZqtWfHzZOTk6bn+VrToJF+BZnW67Xd3W9KpZZtMc5nZ2dWV9eJFGfM7NPMnwGAlLI4XKxMVpY/LQNAHMW3xkbv3rvTaKwg2koprQkREAgAGOe814seV6dLpdLGxiaALaV8+erFRXixv//ddXzf9x3b0bqPQiAKWufF4vDXjc2Dg0PHcTudzq+fp0tLH09PfzuOHYbh4eFRt9vjnAMAlq6XETFJEqVUoVAgoCRO0jR1XVcIQURR1HNs13Ev0UBDK2MMEfM8N0NjjBHpPNcAwDknIsMiEf2n1SzSUKiUQkQjtdZXif4H9y5AmuLgRAoAAAAASUVORK5CYII=",
        "title": "Express Tutorial Part 2: Creating a skeleton website - Learn web development | MDN",
        "labels": []
    },
    {
        "link": "https://github.com/obadakhalili/Sprightly",
        "date": 1648730963,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "obadakhalili/Sprightly: 💡 A very light-weight JS template engine made for ExpressJS",
        "labels": []
    },
    {
        "link": "https://jsbench.me/t4k9lk7h7j/1",
        "date": 1648737239,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB/UlEQVQ4jVWSv4sTURDHZ152zSauIT/uXAsJIjZxT7lsCiEn14kgJ5xil0YiCPbW/hFeYWlhfTaWVxwqiAgplOQIWBwBdz0x8QLZ7LK7b2csXm6Xm+IV782872e+M8hnIYTwPM/zPNM0q9WqYRjlclnXdQBARABgZkQEZpZSEtF4PO73+5PJJI6TlIiZU6KUyPf9xWJBRETEzAIA1B9RFAVB0Gw2dV1DAGIWAAJRZSMiMwOAUNnMbNv2BV07+DJw/ZSZBKJk+PHr9N/p3DTNFQ+ApgqIqFAoPHn86M3bd56jiWixZhb/BNC9NH+1c0sIoURyBXX14OHu1vXGteXPr7/jD9//lqLZs856bf2Kys4LFBwAFIR4+vzFdunkjqXfuFx8uSFutlrEnGHnSOpMU2o01nbu33MPj8pWudu2USsyrzrOFVQwMyIAQCL03Xaze7XkTefqJuPJkVQgYhiGk+Pjlr3hdDqfP32cTqfKEpWQN53pDEejdnvzaBp9O4m372693tvLns41na2GedGs1RsaEMvEvr0ZBMH+/nvl4cobZlZjl1KORqMkjjOAlGgwGPR6vfQsVquh6JfLZb1e13SdmYk4TUkgOo7j+/5wOBRCnLNVIVUqFVWMiMyQJInrurVazTCMbFaY+ZNNUEoZhmEQBLPZTK2jZVnZsP8DB4tcZTozinsAAAAASUVORK5CYII=",
        "title": "Array includes VS Object address VS Set has (version 1) - JavaScript benchmark at JSBench.me",
        "labels": []
    },
    {
        "link": "https://csp-evaluator.withgoogle.com/",
        "date": 1649914151,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKElEQVQ4jV2TW2xUdRDGv5lz21vpbrduoWBBjGCaCqbGhPBggDSNeIVgjT4YiWEVEh5EY9BUk31RLiGmEF5MjVgVEmqsig9WLrVKQjSbFoK02KbVFnDLpdBdd/fsnj2X8aF2t+n3NpNvfsnM//8BFRG625R5Nao/eaE1cnjbU/N7/3uoMrRAbd17/L/m7myx2IszaKMAEMc97/e4syVT3/PlO4fy8/1lQKzj5bppzXzFIycOv75KZw0lsyAA4A8GyRIHXt4aR8n99H5L/eL63lOpMmDl/rbqqbB3uWHpsob2xq1I57Pu8dGfsavpab5VSOPk2Hlvz5rnUCRPOTbZj8GRP24uHzQfG/nsTEoFgMVK1PjLnojue+QlJ2cVcOZaUmmMLse6utW4OnMdq8PLeNPStQhpPjdbzMuFoWRtWDOCAMAAYJHnAWynzBmlLhCm9UuaoJNKQ/cmqbn2QVobXUG6ouLApW/o8JUflJAeslNF0wMAFQBGc1MILQpSInmC4g+3Im3l6dyNS4j4Qui9Nojfbo/i8t0JOjHcK/5QhHyKSlaxiDIgqztUzUyWa2PfwEkAjIBmYP9ANxRFg2vl0Fy7Egef2EXtya8g0EnXdCqvgIxdEojNCku1sYhq/FWis4ZYoAaua2PHmufx+aY3cSM/LcIQBhzXLNmzAAHhwNkMuzLiKSwqsVewSyQiuJ2fxo7GJ9G5YTe293XgyMVvvVAgBCk64/U9F1KzgBfbGAAMl7/OugU+uG67HG95WzLmtOxsegadG3bj1b4O6frztNQEoyIMUtLW9wOAjQS4/JFWJLaE7yxWrjTE6ut7Wz5wp8x76uOxVfJa/xF0Df9E0UDEtVUQ5+x05OxY8989FycB0OwNBDSR+C5dleU3Rmf+ofWn3uUqLeDEfzmKruFeRP0Rp8QCArFvPPPW3DAAqWQhAUYC3pKPt+3MhJWjpKuKYxbFrxriGQpzyYUxlm6/9eGPH815AaCSvn4IEuDce1eT9z36QJ9n8EOaqjUIwOq/pd99Q3fjNw+dPgYBYSNkYQgrSsw+rQAUe39za93ezc++Dmhzqy60/we5tFLCDr8sHAAAAABJRU5ErkJggg==",
        "title": "CSP Evaluator",
        "labels": []
    },
    {
        "link": "https://medium.com/@marceloboeira/why-you-should-build-your-own-nosql-database-9bbba42039f5",
        "date": 1650021178,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTsaoiQRBFT3e/mUFBmET8BH/ABQN/wFARFBTBSJjAVDQQzIwe7IcYjGBgZiCYGhr4ASZmBsLYrzZQm9G3y8puQdNwq2717erbAJ9AAljgC5C/rK977RX4VHeQ+654L1ytTnVWxphHM4wxTwxjzAN7kAUQdZek+DcFolMk1e/3ieOY5XLJcDgkm806RrPZZDAYAOD7vrrnFEopCYJA5vO5vMZ2u5VMJiOlUslhrVZLOp2OjMdjAeRDRGg0GtTrdZIkQamboOv1SrlcJooi8vk8IoK1lna7zfF4JAxDAD4AqtUq1lo3LKUUSimstdRqNc7ns8sVi8WnIWsAz/PcyelQSmGMQWv9hIm4x7o1WK1WaK2dTGstSZKgtWaxWLDb7VzucDhwOp24XC6uo/i+L3Ecfxvifr+XMAylUqk4rNvtSq/Xk8lk8vDPzRBBEMhoNJL1ei2bzUZms5kUCgVn4SiKZDqdiud5EgSB5HK594z0euffGckBr1ZOk/9gZf7XyhggBH6kVb9BFm5f+ucvMhDxQnv5W1IAAAAASUVORK5CYII=",
        "title": "Why you should build your own NoSQL database | by Marcelo Boeira | Medium",
        "labels": []
    },
    {
        "link": "https://kdmc.gov.in/kdmc/CitizenHome.html",
        "date": 1656516177,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADMUlEQVQ4jWWTe0xbdRTHv+d3H2W3vW3pOhoUujJA2MA5xnDNgrqYTWN8YGYMGrYYF4MmU2fiCzVZ/ENN1MS4GJfwz6LxPfyHDZaR+AeICURgo3NbOlCxCEhJ6YPb0vb23vvzr5nWnv9Ocs7nnO95EP5nHCBw4K2eTndXm6vXJpDjp4no528MTK1ygAjgxfGs2Dn3JAQCOBH4oWb102qn3OtRpWMH9lefbm8/6CWAc4CKc0ocAPjq1Qd6W26TW+YKsi0qOOd8sajDLyYFwV1Zt5Cky0+9P/wZALMMwAH69vXDz5iMParUKmOZb/5yBdbo9u6eD5TkZuzmuPjh5hJVtURz4uKDrvxHde+O5kokvNyzX900qHfdoB8db/7G7meeI8EO//NOu3hsW6DxuQ73OXcioQ1UkPnQ2ZuF+rIZbGSEbaKMiHVxZaGjyfNxzd4de/KNDSb0rOmxUWCL33fqhHRcVbg+KtikxjLA8aDnkWavONHpd77kObpPNHY6zYTgYsF6L0tu6tau6KRhd1f1Kapy+eFW5d7z7xwKAoB4CxDYKr0dWc2doO07docPBrktbrLrNVXotlZor4toMTRLV6RAXUJRtTa3/rQkCpUAJv8DTEeyP8iM+U7WHMnQCFBb34SjuRmktRS60+ug7DJiy7+kZ/0VnitL1njBoMESCYm0frXVxx/rci5fO3Wgnhy6Rl9ELN5wYRAVw8Pw/fkHCeva1dbt4j0A4n+vZqdLABajny0wdrc29fX3C/q00+UzNKESO9vustTO+8z5RDr8K2ynK2Tm0A1rKP776CoACLcAFyYW4o93NgT2VWf3jM6vpYLujfaG/Bzt3rpBdi/YjJ4Yu7PLK20kC0p/KHnmzMUlvWSIAHhG51Z1pf2V9zyT4RvzsyG7jfniuZwUTefX5DsczR5uPhEz+PmBgYls2RoBQJVZJPxPZibFlCaV80knWZouKSnN7g45iWrWkvmwKLLx4gsu+4VnuzpqXztce1KW+K6YljfyeSPlVbdUGRzXL93IfdnXPxIqji/pgAN0dnBqaSisfaLa+MqlOf3FoTG8UOB89tpi+ru+/pEQ56VF/wWnvUuXjMj4+QAAAABJRU5ErkJggg==",
        "title": "Kalyan Dombivli Municipal Corporation",
        "labels": []
    },
    {
        "link": "https://www.goodreads.com/quotes/tag/mantra",
        "date": 1661365449,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACYUlEQVQ4jT2STUhUYRSG3/PdO3dmnFH8qZBAamGLCQsSXCiGBIpQQSThIiSSttEPFLiQVkEF0qalQdBCigraRIZUBIUQWFoQ0SLyB7Wf0XFGxzv33u+8Le7UWT/wPuecV9bz3wGQBCAiVCXpJDyANgoBAWkc5z/gAgAgAERUNeElXS9VzK+KSLZhl0aBcZzKdllEYtIFiJi21kul/ywvTN69WdlcE6Al1763vefrzLtjw5dsGAAiApcEAFKdRKK0nh8fOdN+5Gj3wHWSn14+eXr7arJxt4iJlQAxIhKrp7N1rx+NN+9pHbhwK5mpTWXres+OtLTmErDGOMIYFEOqqhVhGFQWvnw40N3v+8Uo8KPA97dLuc4+15C0hJJKqku1JCGwYWAMUpmM2ijejxp56ZpEIqHWkhYUiLiEBaBWHc9NJpOFn4vGdWxUAWBcp/h7yYY+haSFCCCGGmdZaLS/q/fj8wm/tJZt2JFt3Lm5/mv2xUPXS9GGpFKVqi6o8R/KxcKh3hNLn6fvXxk82HdK1c7PTTe3thWLRbURqIAAYpSRMgJUNXRdMzh6p+Pk8PrKj8LqYvfp8/u6+ksbBRGqRmSkjKoJVjWVyc6+mSrmfx0/d3lrc4NkbW3TxI2Lqbom1/Mq5ZI4DkiXVACkVRtm6usnxq55SS/X0S1GZiYfv596NjQ6FlbKhJICQFYWp+MjqrXpTPbb3MyrB/cMI2MkCMLDA0NtnT1+ecsYAxEAsjz/FtUCCtUm0xmIlNbypGbrGx3H8ctbIqZaOaCqBACEiPjlEiCpTI1Awko50LjbFv/mL5qSYgBeA0k5AAAAAElFTkSuQmCC",
        "title": "Mantra Quotes (161 quotes)",
        "labels": []
    },
    {
        "link": "https://github.com/alphaanywhere",
        "date": 1535042888,
        "icon": null,
        "title": "alphaanywhere · GitHub",
        "labels": []
    },
    {
        "link": "https://forum.xda-developers.com/s7582/development/rom-hexagon-rom-nougat-kyleproxx-t3659550",
        "date": 1534869550,
        "icon": null,
        "title": "[ROM][7.1.2][FAKE-OFFICIAL][KYLEPROXX] Hexag… | Samsung Galaxy S Duos 2",
        "labels": []
    },
    {
        "link": "https://www.google.com/search?source=hp&ei=Pjx8W93NO4zIvgTuqYrwAg&q=stable+nougut+rom+4+gt-s7582&oq=stable+nougut+rom+4+gt-s7582&gs_l=mobile-gws-wiz-hp.3..33i160l2.158.17861..19279...0.0..0.4027.26841.4-1j0j2j2j2j6......0....1.........0i13j0i22i30j0i8i13i30j33i22i10i29i30j33i10i160j30i10.guU0I7TwP60",
        "date": 1534868654,
        "icon": null,
        "title": "stable nougut rom 4 gt-s7582 - Google Search",
        "labels": []
    },
    {
        "link": "https://googleweblight.com/i?u=https://sourceforge.net/projects/digitalspork/&hl=en-IN&tg=1349&pt=134",
        "date": 1535468287,
        "icon": null,
        "title": "Digital Spork Game Engine download | SourceForge.net",
        "labels": []
    },
    {
        "link": "https://androidfilehost.com/?fid=313042859668276631",
        "date": 1535560935,
        "icon": null,
        "title": "Open-GApps_7.1_20161202-unofficial.zip | Tool by ishant for Generic Device/Other",
        "labels": []
    },
    {
        "link": "http://links.snahp.it/329bakemono",
        "date": 1535732796,
        "icon": null,
        "title": "Snahp.it's Link Protector - Protecting your links!",
        "labels": []
    },
    {
        "link": "https://emulator.games/roms/playstation/megaman-x6-slus-01395/",
        "date": 1536686038,
        "icon": null,
        "title": "Megaman X6 [SLUS-01395] ROM - Playstation (PS1) | Emulator.Games",
        "labels": []
    },
    {
        "link": "http://www.mediafire.com/file/h4amx4mub0v6dzj/",
        "date": 1536901271,
        "icon": null,
        "title": "File sharing and storage made simple",
        "labels": []
    },
    {
        "link": "http://hdmoviesfair.com/",
        "date": 1537109136,
        "icon": null,
        "title": "HDMoviesFair.com - Full HD Movies Free Download |1080p |720p | 480p",
        "labels": []
    },
    {
        "link": "http://hdmoviesmaza.mobi/#",
        "date": 1537109437,
        "icon": null,
        "title": "Download Latest HD Mobile Pc Movies In HD Avi HD Mp4 And 3Gp High Quility Movies | HDMoviesMaza.Com",
        "labels": []
    },
    {
        "link": "http://www2.hollymoviehd.com/the-anthem-of-the-heart-2015-720p-eng-sub/",
        "date": 1537110263,
        "icon": null,
        "title": "Watch The Anthem of the Heart (2015) Full Movie Free On HollyMovieHD.Com",
        "labels": []
    },
    {
        "link": "https://androidfilehost.com/?fid=385035244224393610",
        "date": 1537547418,
        "icon": null,
        "title": "Galaxy-S-Duos-2-GT-S7582-Full-Factory-rom-4.2.2.zip | ROM by AndroidTipsMags for Galaxy S",
        "labels": []
    },
    {
        "link": "https://scholarships.gov.in/",
        "date": 1538297145,
        "icon": null,
        "title": "Home - National Scholarship Portal",
        "labels": []
    },
    {
        "link": "https://www.presearch.org/",
        "date": 1538301905,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACx0lEQVQ4jV1TPYicZRiced73+3a/Xb3bNedPRDDGQJSQKgEJWEQLCzuL2KldwIPYpEijEiSHjbFSIU1ASOWVNikEBVOKSAqRBHNBCLloNrt7u9/P+/tYHHjmphzmeZiBGa5++eMPNPaQpkRqNiD2oABIxT4omGmMagz3rMRwhJQXNfqWqnxMSBCgAJqp0D2eSvYqTaGyDC4xdG1q03FaTLRryP5AAcBWkh5euNasfv7BijpLdQ/IXqWCYkVsdxPKbBm8kIp5t7U9OnjiG649e0y7LkKYo7FpfHn9+vT8GxuPZTh7pVt7/gAAFTG+o3jP1XpYimtOmpROWOhrZVmdMjm/bnr9S+ON778FAJy+aAFwNChLBk8JUYUxKIMDW6fSNgtT7yTOJ7fz339tcLp9g5P70Qb//viTa8fx08UIQNk8UIYO9B2FwZHBAyPAdDVMDEa6+vfJZ+9+jOXyU+O9McFl27pX9zKMQe/B4GEZPKgAaoArjQgJuOboc+e+Pg/fvkmkRFUbg7/z3/10CimHIAChd2BwwGwO0zbCxQziu1dKW3xREm+XWa3U8+sPvzr3K86cMbsGpmDwSu9gJfrd7oxmEAeV3IMGv5Pr5X01hU/Cn7cXKxcAZGxu7hqoKx32OhJUK9ErAMx2RhiVTTSUHLv2xin985314e3B6au/ObwH+Wf96ScAIMYiH7vTUg5SQaWl9wSBERqwjVVpC1k2Ln331Oahenz4l9lHhw2puQfNlRWJKf3xwjM7b82jAVVhGZyC1GLmo+l1t7jkAK3bQkYukCeGqoAChBYCsTk/OhAYFuqUICxTyFCF6ee1NsQPIUsprKSX3dn00t3u5P8LmGJgrz/It+YY96tAQLMV3xlKUQ0l32SvUgDoGxBLcIuDvH+JrIHKRjLxSU1hYRnCXZGErNkQNHtDVliQ+x8AQIYmYXqUc773L80ag1fmN4GBAAAAAElFTkSuQmCC",
        "title": "Presearch",
        "labels": []
    },
    {
        "link": "https://www.rstudio.com/products/rstudio/download/",
        "date": 1538461107,
        "icon": null,
        "title": "Download RStudio - RStudio",
        "labels": []
    },
    {
        "link": "https://www.microsoft.com/en-in/software-download/windows10ISO",
        "date": 1538462655,
        "icon": null,
        "title": "Download Windows 10 Disc Image (ISO File)",
        "labels": []
    },
    {
        "link": "https://read.worldreader.org/?guest=true",
        "date": 1538480990,
        "icon": null,
        "title": "Worldreader",
        "labels": []
    },
    {
        "link": "https://www.bloopanimation.com/books/",
        "date": 1538583614,
        "icon": null,
        "title": "Books | Bloop Animation",
        "labels": []
    },
    {
        "link": "https://www.pdfdrive.com/animation-books.html",
        "date": 1538584562,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIElEQVQ4jaWRPWtUQRSGn3P3JrsxyWJCEESxMwiaRtDCInamSmGzpEjlD0gTCIilqQQlpBILuyBapLHQIiJCCkEUUdEmEKIJrIgG88HeuTN3Xou9my9sxAPDnDkfD+/LwH+GLQ8OnvfQn5oJQDG20qJYv7K19UuSzc7ODltRDMQkEUAlRq80/T48PNxsNBqFvRgYeA1cAGIJ9Ugrkm4tz80t2+rqInAVKMp+gfRD8JhK5W6aQz/Qe1iXXUaaPrm4+H5jZKRX0rEjyo8DMzGEn4mTcBIuxucBJnN44iSc2Zlkba0/914+BHwIT2NRTIYYb/oQvvkQugvvx9IMQALp88Tm5sKjej0xswZgXrLce0xC0qd78/MLANNTU2cxuyE40QYAKu8MsBLqAB8CxIiVZdq1TO2dJG3F2PFdn+/pOd2SzpWTCnku7xyS9rcB5xxYu5K2Ok2poa6usUIaKi1tNPv6trM8NwMk7QF8Uey9U1cmgjpSHZDBegIPvo6O7labTQMOKcid28vTVglIzF4lsChp08zexZ2dL9nKSo1qtbO8J8HnualjocOS9PbO7u78wc++5pylSdIZODU+Pn6pAgPe+4slYDvNOt7MDqrc9+t9J51Auh7MuoBaWXuTZjHKzECKR5er1apclsWS3F0eAbuJ2cuKdD8tkmSGGIesUvlwFFCr1Vy2s3M7wkNLkggQIZjZeiF9fLa09Ptvqv8p/gApWDV+pDGdiAAAAABJRU5ErkJggg==",
        "title": "Download Animation Books - PDF Drive",
        "labels": []
    },
    {
        "link": "http://booksee.org/s/?q=Elemental+magic&t=0",
        "date": 1538588281,
        "icon": null,
        "title": "\"Elemental magic\" скачать бесплатно. Электронная библиотека. Поиск книг BookFi",
        "labels": []
    },
    {
        "link": "http://booksee.org/s/?q=The+illusion+of+life&t=0",
        "date": 1538588889,
        "icon": null,
        "title": "\"The illusion of life\" скачать бесплатно. Электронная библиотека. Поиск книг BookFi",
        "labels": []
    },
    {
        "link": "https://www.apponic.com/s/mysql-lite-command/android/",
        "date": 1539185156,
        "icon": null,
        "title": "Download Mysql Lite Command for Android",
        "labels": []
    },
    {
        "link": "http://nevonprojects.com/project-ideas/android-project-ideas/",
        "date": 1539186277,
        "icon": null,
        "title": "Latest Android Project Ideas for Students with Source Code | NevonProjects",
        "labels": []
    },
    {
        "link": "https://apkdl.in/app/details?id=com.bugtraqapps.gnulinuxpro",
        "date": 1539274149,
        "icon": null,
        "title": "Download Droidbug GNU/Linux PRO 1.7(8).apk Android Application - apkdl.in",
        "labels": []
    },
    {
        "link": "https://www.microsoft.com/en-in/software-download/windows8ISO",
        "date": 1539595366,
        "icon": null,
        "title": "Download Windows 8.1 Disc Image (ISO File)",
        "labels": []
    },
    {
        "link": "https://www.google.com/amp/jerkgeek.com/android-apps-on-learning-digital-logic-design/amp/",
        "date": 1539609876,
        "icon": null,
        "title": "Top 5 Android Apps which Helps you on learning digital logic design - JerkGeek",
        "labels": []
    },
    {
        "link": "https://hdmoviemart.com/tag/venom-hindi-dubbed-full-movie-download-tamilrockers/",
        "date": 1539800012,
        "icon": null,
        "title": "Venom Hindi Dubbed full movie download Tamilrockers Archives - Latest Full HD Movie Download Filmywap torrent filmyhit Download",
        "labels": []
    },
    {
        "link": "https://www.ventilogan.com/",
        "date": 1539874543,
        "icon": null,
        "title": "Ventilogan",
        "labels": []
    },
    {
        "link": "https://www.google.co.in/amp/s/www.theandroidsoul.com/root-samsung-galaxy-s-duos-2-gt-s7582-using-pre-rooted-firmware/amp/",
        "date": 1540841401,
        "icon": null,
        "title": "Root Samsung Galaxy S Duos 2 GT-S7582 Using Pre-Rooted Firmware",
        "labels": []
    },
    {
        "link": "https://www.google.co.in/amp/s/forum.xda-developers.com/s7582/development/miui-8-t3529450/amp/",
        "date": 1541064427,
        "icon": null,
        "title": "[ROM][7.1.1][OFFICIAL][3.4.x KERNEL] | Android Development and Hacking",
        "labels": []
    },
    {
        "link": "https://www.muquestionpapers.in/",
        "date": 1541083671,
        "icon": null,
        "title": "MUQuestionPapers.in - MU Mumbai University Question Papers",
        "labels": []
    },
    {
        "link": "https://www.crunchyroll.com/fullmetal-alchemist-brotherhood",
        "date": 1541792230,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC9ElEQVQ4jV2TTWhcdRTFz7nvzXvz3kwkfqKxnczQihvdGFRcWGIX3QguLNkKKkiLtKkkU9QgDG5cGDql1RajdCUKihsRpArRTV0JhuLHRpykyYRCwWCYNzPv639cxJTiWd3FOXfzO4f4n/5ZbD7tgy+JOALpEAmDuAlqNS/s48nuXz/f6ef+8dscglar9R6hE9WqF0PCcKTcQQkgP65YHSBypw/DqHeaHTgAoADi1OFgGJVfxSGfhwNGmVsroU8qhb4Nuzd6BDQ89fABi/wX6HlvFbnW/9jtHZ1ZQUEAGLSnl2tVfyHNHACd/3snW5pa2R4CQPr2wcdcyUnlxUZ8bntz+7WpeOKu4DMDbtaW108wWWjMwLxrccAwSd2F+vL6PAAM2415z7zXnUPLSV7Fp7LCtevLG+cAIDnbvOIyfWogX4kjC4eZu15L/bM/zMIfLDavRNXKeQKPlBKrgTEv9U1td+PiF4AHAMyLd7zAZkywIxAEp4948c/0mScbJ2uRvTwcl1laupKUCMkJn3MF+f2zYAewuLvVd9R1A3RoOHalZ+6q5uDlsDNFLuckj6AJAEl60NQ+sQ72CFhW/GogPEmDsLbZGzzYeNSE6bQQCRoAQGSaSzTOD9448PhzP6IAgNHi9NEcGPkUbwB6iB240QLucYRBe1GQBsgrnFzgs1H6lWvDdus7M00UJZ8ok93DBmq1WmGspamDcq4nsCTvKJkokJaVckZMVH0cD0M7Bqh/987OwARcJslRGhyPu1t9Cr9EPgGgAARAgCSCdJJLco3gCBBX+SVKq7+/vpZkugTju5qDZ3BviqQRPoAMhEBIkiDkccWiJHW3rCguAIAJsPpu7wyAtaTZ/Dpa3lhNxuWrnsHVqhaEHq1itKpPq0Ve6IS+c+WLcXerL4C3x6RZ+MOnWpchBTHzpUSV+3zyZCE9C2GShpsUvh8l2Qf3Xtre/C+s2w/2NWi3joGaCYWfxuPx7/WkGKNK4YFbY3b2EKoD21/jv5bzfZcgCZxkAAAAAElFTkSuQmCC",
        "title": "Crunchyroll - Fullmetal Alchemist: Brotherhood - Watch on Crunchyroll",
        "labels": []
    },
    {
        "link": "https://www.google.co.in/amp/s/fossbytes.com/google-search-change-country/amp/",
        "date": 1541792907,
        "icon": null,
        "title": "How To Change Your Country Service On Google Search?",
        "labels": []
    },
    {
        "link": "https://www.google.co.in/amp/s/www.musixmatch.com/lyrics/Neffex/Grateful/amp",
        "date": 1542362748,
        "icon": null,
        "title": "Neffex - Grateful Lyrics | Musixmatch",
        "labels": []
    },
    {
        "link": "http://b-ok.cc/",
        "date": 1542363845,
        "icon": null,
        "title": "Electronic library. Download books free. Finding books",
        "labels": []
    },
    {
        "link": "https://android-1.com/en/",
        "date": 1542393570,
        "icon": null,
        "title": "News, free games and program for Android",
        "labels": []
    },
    {
        "link": "https://www.google.co.in/amp/s/forum.xda-developers.com/s7582/development/rom-ressurrection-remix-5-5-9-s7580-t3325110/amp/",
        "date": 1542398046,
        "icon": null,
        "title": "[ROM][5.1.1][UNOFFICIAL][FINAL]Ressurrection-Remix 5.5.9 S7580/S7582 | Android Development and Hacking",
        "labels": []
    },
    {
        "link": "https://www.programiz.com/python-programming/examples/fibonacci-sequence",
        "date": 1542968326,
        "icon": null,
        "title": "Python Program to Print the Fibonacci sequence",
        "labels": []
    },
    {
        "link": "https://docs.python-guide.org/",
        "date": 1550198654,
        "icon": null,
        "title": "The Hitchhiker’s Guide to Python! — The Hitchhiker's Guide to Python",
        "labels": []
    },
    {
        "link": "https://sharer.pw/file/L77nN7vxXDr",
        "date": 1550202011,
        "icon": null,
        "title": "Spider Man: Into The Spider Verse (2018) (Hindi-English) 720p HDCaM [MoviesFlix.in].mkv | Sharer.pw",
        "labels": []
    },
    {
        "link": "https://docs.flutter.dev/cookbook",
        "date": 1641989859,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYUlEQVQ4jX2RzUtUURjGn/ec8d7rjF8QRaH5AQkhlIWSQdGiDLXSjV+4cZUQBK3atXHVH9BGcuHCUOpKWyGGHIMig4SE1KYm0UUTVtiHzcw9995z3hZqajk++9/znPN7CXnDBBDXzbNVLs09A6o1Ch7ZFGNjUsmsuJVupGxkX9hlq4LMqLBFr1kHCooBrbBqhLidbqQswET7LVdIjEkbXf6a8ahQOCywpDNomW6gFJgJRCzywZWCxyIWuvzvxpMx4ZDAslG4Mt1AKbgsQcQAIP6DXbYqJY9JmzbgqHBAWA4VWhP1lITrSvSQ3qIiey1Lm7rUmvFEbAPWoX81UW8n69x5awF1euv5ALDtIMGR1sMYFza61Y/t5cDbXM4TApjOPUdRtIwfSYfagl8bMBNWQkZL4jglLy7wHRhUhUr7olDahrGaWsLddPuOMzIRswGEIxwmXmGf2hInKNm8qIdFFAM6B9jFEkGOA6OpI92O3O4zJjhy+ZB+TI48rddV89NTzvtjL/Rw+UExIDNaaUmWtMXnjAo6Xp20Zre87fpP0wyXXJjjGoCp+pkeqnrJXB0P1fk5Di994E9Ns/5ZAIDLMp8TAMDRhL5Z84a58kmYK4+zrpryuXbkbR8AYHDe+kfizjDBhSgpQWmpZYYoJnrMt5z/czIe8b58TZJjdfoP+hfR3S0xMaH3KNiRQbaOnPk9no3PdHqpBZ/KDlhG80c/UK2YuJ7aZDlPwV9BltU7MkqF0V7jZYCCKIxWq9qIa3jY/xoAib0LiDfLfd8U9YeBus8UmTIqMwkW7wT0DTQMRgHwHwnHOo8uTiuFAAAAAElFTkSuQmCC",
        "title": "Cookbook | Flutter",
        "labels": []
    },
    {
        "link": "https://docstore.mik.ua/orelly/webprog/pcook/index.htm",
        "date": 1642005693,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB0ElEQVQ4jY2ST0jTYRzGP2/7ibmtMrUto5iUizzETKIO0RCioLzUISjPoaUJmQh1zGvQKRrZQaJD0BjTg0IUFZHBovXDukgKRX/I1bChNUNmTwfpx9zQ7YH38D483+d9vrwPlEAi7FMpzZr4MD0teyurmphC4nadR53p3wbgTl+/qn7NsZDNsv/RPfbNFOvXFRL1Szm+DVzQ/S3VOvvwOmdqvnKkbpH1hw8yn/pSep3zgQbFjFFy5wZ9akGSNK9llGUA0IFLN7CU3LhsAAhQ9srRIpOiFQC6k6+YRMxlYeHqMeJdbWSa4fvoawDiXW2lk3Tg0k0qFTNGmWZkh/zKHy7b5P8BiODV5INe5ZtYibBPNT2DmJRN48VrzjcNBTw6VFHB5qBFwt1I059tOjH7lDfP3tPUups46NStUcNUdFiJsE+zqRkVvn6XKtkhvz621iqC10mSD8ukbILRt4wc2MVUdFjB0yedFOMsMj6RdsSDLBUVaQUxFPDocybn3HdUWwT+ugi3VGKN/CgaXhWXN9VqABQzRmN9nYoZo3d73eWXyA759fxcu/K5sT0NSrYf1+NLPWsXqT8aIzKRxpP9yZMXLx1xvdtHzrudYHfvCv0/62jZnqZcWEwAAAAASUVORK5CYII=",
        "title": "PHP Cookbook",
        "labels": []
    },
    {
        "link": "https://support.google.com/chrome/answer/157179?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Ctab-and-window-shortcuts%2Cgoogle-chrome-feature-shortcuts%2Cmouse-shortcuts",
        "date": 1642062110,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4jYWSS0iUURTHf/fe8RvHooE2VlT2FNqUGWmNEYUR9lhEEVJhUIsoXOQuap1Rq6KHNQt3LaPAIOxhlNTChUwLMU3NR1CklUzg6xvPd1ro2KhTHjjcA/e8/uf/hzmmqsUiEheRLhHxp/2TiDxQ1aK5+ZmFeSJSrwuYiMRVNZKuMxnFz51zu9T3GX/6iPGmRqS/F5WAUMEawuUVRI5UYjwPEWl2zlUYY8YMgIjUW2vPBkPfSV6uYbKvJ+uW3rZSojfuABAEQdw5d96oajHQqr7P8IUqpL8X43lEjp3EK4mBtfgt75l4+4po7U3cytWZPbcyjUlTidv642ipDu7foX7bh2zgs92jDhHpUlWdbNmuEw15OvqweqE7ZjboCAEFADrSjs1LkRM7NAt3+bWRebfYudFx9XguwFqbwePs9z/mT/6NLdAHMBpex28W0/C1Y1Zy05VFM75nUwiAZVGT/v5sgdcA3UurOPUrxvXOFhJD7fOmdn4LeNc5NbpkfWimv5mWZ8KXFKdfXqInOYBnc6gsPEjZ8mKssbQOtvEkMczYl0oK8z3un4lgppbYkhZS3Fp7bnD0Jxeba+lODmTFviFcxq29NeRHDUEQ1DnnqtNSjohIo3Nutx+keNz9gmf9zfQkB0ChYMkK9q2KcaLwMJFQGFV9Y4w5YIwZzyBBI2lRLcD9PVXN/SdFqlokInUi0iEiE9P+UUTuqurmufl/AKTzsFGmvUNUAAAAAElFTkSuQmCC",
        "title": "Chrome keyboard shortcuts - Computer - Google Chrome Help",
        "labels": []
    },
    {
        "link": "https://wifimouse.necta.us/#download",
        "date": 1642070188,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaklEQVQ4jaWTy4pcZRSFv73PqVOXbrtiEzugggYswcYbAc3EodADdSCimKlv4AP4BJk6UATnOhElE4eCCiEYBUUlEAeRUhMxZbqqq85/2Xs7MHbjOOsBvnWBBfcoAeD1j5sn/j440Mingqg6cLFsrFYbQSy2txqwXoqHi9dWollc++qpz0FcAGYv/vnSqNu55HYEYfR9pWud6Q64Vf5a9LhXhp3jtSDasFn98cqNqweXWgCt/SkTIuoil2LN42db9meNqAaEk3Nw5btVzG+uadVNZNgRm10ABQiSSRRKyc3OfaHPPd3o7jR02FXdGrueOa36/LMTbaVqWG7cEx69AbQA4UndVVSSLA+Djz495JGHYHZ2hLnz/Y93mP++BnEiiiguWOEYQEnh2hCeQ8T1cJl44fzD8sbLe6TqXHz3Z65dv832BNyrhwtYL8cVjLWEb4BeVss1z+yPeeftGV9enrNaJd6/eI7ptpFzT3gv7j12N8G/AMuEZcILOfc8uNfgHjy5v8uZB8Z0nbI7dUrqEc+E9cDmpIJ4DbcEkYj/6ALnz+0BwnLV3zVIuHkEzv82iLqWUJAo4ZZCpYiKcLTO0Q0aRl1LRCE8RTgSBOY1jgHFa4jlCE90beWHn27FncOe6c5IAL759teYz2/HoBHcaohEuOWTBBobDSO8rm04CK7/cosLb33Gm6/N5Gjd896HVyKlzHAohFsNQSNMjwGel0sdDRR06GZsTQZcvnqTL76+AV6YTFrG4w6zSoS04BBHy5Mz8djw9KMXXlWV+93NlCpNo6gCFEpxSingNVBtiLxY/PbBJ0C6xzPDP5vZjDpT91VYAAAAAElFTkSuQmCC",
        "title": "WiFi Mouse",
        "labels": []
    },
    {
        "link": "https://paiza.io/en/projects/new",
        "date": 1642081934,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADMUlEQVQ4jW2TbUzUBRzHP/+7P3egHQ/3IOd5BHcqDxIb3BQoIF3BPLHGxrDEWlu1ab1orfmmsTaptbXWkiKda40Xjazc1FGaTtB4GOQJsgEyG3IiwnmAx3XgPd//7v69aFFGn5e/ffd59fkJ/A/fXB2Ur9x14wmEQYCcjCd4Id/MwZoK4b/bxw6dfQ752zEnI64lUlNE1Eol0XgcbzCMShSpL8zl4FMWmqp2CesEH3b1yF9dn0SKJ2iyFbF3h5Xn8nPxR2IMOufpmrjD+bEptmRqOFpdwnv79ghrgrbL/XLrtRH0G9K48k4zjtkFTnT/Rk2hhY9f3I0qRQTgzOhtDn9/mY1qFZ/Zy3l1d6UgDI1PyofO9eMLhpk+9hbBqETDyR9ZCIRYfhREn76Rr1/ZT2NpAQADznlq209TbDLwXeOzKE21Da0Xbt2l8/UGynNNmFvaCUgSW7N1mHWZBGISHd0ODNoMyvNM5Goz8IWjdI1PUbApC4XD9ZDtRh0Hygo5OTBKKBQh36gnIsUJxyRMmRoseZt592wPncOTAByuKkWjVjPiWkZx3+fHos8C4J53FVQpxBNJVEoFUjzBxAMPD/0hEjGJ1z7p4KNfBijM1lFiMjC3EkBUKgQSchKAIqMOJAlRqcAXDKNOEfmyqRbdhjTueP6gd3qOY129VFvMmLXpLHpXEa3adCYWvTyKRHnJVkTrxQGml7wgCNh3WHm7xrbWyQf2KpyLXsYeLDHonKNuaw6KypxNuLyrHP91GI1axU9HDhCKxkgkZRz33NyYdT9W3jajDsf8Im6fnwqzHsX+7WYKNhv4tPs6N2bd2J40Mvz+mwiAJxBi74kfONU/uiY4Pz5F21UHlZYt7LEY/wqp49qQ3NJzk0hM4lSzneadxdycW+D59tOkp6bi8vh4o6aMp61mWn7uI1UUaauvpKlql7CW8vFLffLnQ7dwr/hpLC3g0M5ivugdxr0aJD1NxcyyD39EYpshk6PPlHCkrvqflP/m3NCIfPb2fS78PkM8IVOUrSeJTFKWUQgCpUYtLxfnUV9hW/9M/+aiY1TumVlgdiWAQgBrloY6qwl7edm6/Z9vaUNuHj0CQgAAAABJRU5ErkJggg==",
        "title": "Online PHP Editor | Online editor and compiler",
        "labels": []
    },
    {
        "link": "https://paiza.io/projects/Z6M-QAYin-TKy_eciN04_w",
        "date": 1642082034,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADMUlEQVQ4jW2TbUzUBRzHP/+7P3egHQ/3IOd5BHcqDxIb3BQoIF3BPLHGxrDEWlu1ab1orfmmsTaptbXWkiKda40Xjazc1FGaTtB4GOQJsgEyG3IiwnmAx3XgPd//7v69aFFGn5e/ffd59fkJ/A/fXB2Ur9x14wmEQYCcjCd4Id/MwZoK4b/bxw6dfQ752zEnI64lUlNE1Eol0XgcbzCMShSpL8zl4FMWmqp2CesEH3b1yF9dn0SKJ2iyFbF3h5Xn8nPxR2IMOufpmrjD+bEptmRqOFpdwnv79ghrgrbL/XLrtRH0G9K48k4zjtkFTnT/Rk2hhY9f3I0qRQTgzOhtDn9/mY1qFZ/Zy3l1d6UgDI1PyofO9eMLhpk+9hbBqETDyR9ZCIRYfhREn76Rr1/ZT2NpAQADznlq209TbDLwXeOzKE21Da0Xbt2l8/UGynNNmFvaCUgSW7N1mHWZBGISHd0ODNoMyvNM5Goz8IWjdI1PUbApC4XD9ZDtRh0Hygo5OTBKKBQh36gnIsUJxyRMmRoseZt592wPncOTAByuKkWjVjPiWkZx3+fHos8C4J53FVQpxBNJVEoFUjzBxAMPD/0hEjGJ1z7p4KNfBijM1lFiMjC3EkBUKgQSchKAIqMOJAlRqcAXDKNOEfmyqRbdhjTueP6gd3qOY129VFvMmLXpLHpXEa3adCYWvTyKRHnJVkTrxQGml7wgCNh3WHm7xrbWyQf2KpyLXsYeLDHonKNuaw6KypxNuLyrHP91GI1axU9HDhCKxkgkZRz33NyYdT9W3jajDsf8Im6fnwqzHsX+7WYKNhv4tPs6N2bd2J40Mvz+mwiAJxBi74kfONU/uiY4Pz5F21UHlZYt7LEY/wqp49qQ3NJzk0hM4lSzneadxdycW+D59tOkp6bi8vh4o6aMp61mWn7uI1UUaauvpKlql7CW8vFLffLnQ7dwr/hpLC3g0M5ivugdxr0aJD1NxcyyD39EYpshk6PPlHCkrvqflP/m3NCIfPb2fS78PkM8IVOUrSeJTFKWUQgCpUYtLxfnUV9hW/9M/+aiY1TumVlgdiWAQgBrloY6qwl7edm6/Z9vaUNuHj0CQgAAAABJRU5ErkJggg==",
        "title": "(PHP) | Online editor and compiler",
        "labels": []
    },
    {
        "link": "https://mothereff.in/byte-counter",
        "date": 1642156699,
        "icon": null,
        "title": "UTF-8 string length & byte counter",
        "labels": []
    },
    {
        "link": "https://www.cs.rice.edu/~nakhleh/COMP182/WeightedGraphsAndGreedyAlgorithms.pdf",
        "date": 1642168189,
        "icon": null,
        "title": "WeightedGraphsAndGreedyAlgorithms",
        "labels": []
    },
    {
        "link": "https://www.typeform.com/explore/?utm_campaign=Do49ICvJ&utm_source=typeform.com-11620765-pro&utm_medium=typeform&utm_content=typeform-thankyoubutton&utm_term=EN",
        "date": 1642505617,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACjklEQVQ4jX1Tv2tTURQ+5+bmvUaSNMnjvSaSFiymoWBNcbFVJOsbLBGhUxdByOQf8aYu/gGZokVwELc0LS0IbUq1ZLDCq9ClHXQzQ0kyFEzuu59DkxCl9YPDWc53fnz3u0xEBICZGQDiRPR8b2/P9X3/SbfbTQshglwu961UKr0zTfM9M7c9zxOe52kakgf5Yb1e/7yysoLZ2VkkEglIKWEYhp6amoLruqjVal8APBrUCxoCwP1qtfornU5DSqni8XjfsiztOI62bRvJZFJJKfuZTAaVSqUFoDgaDiB8eHj4YW5uDhMTE78dxwksy4JlWXosYNu2jkaj/UQigY2NjZ8A8kREgoju1et19/z8XMfjcamUYiICEfFYIAgCjkQioV6v119fX58+ODh4DSAiOp3Og5OTk5iUElprZuYhaRzMzAiCgKLRqDw7Owuq1epTInomOp3O9MXFBQkhNAAMpl8HZmZWSlEsFqP9/X3a2tp6KUKhkFRK0dXgq8IbGhARgZkpHA6LVqtFvu8/FgC6sViMB16g/2wwenZmJq01BUEgRTab/Z7NZvtKqdDY/TeeQURQSmnLsiifz38VRHS8vLz8wzAMABjqcN0ZAAApJdrtNorFIq+urlaIiOjy8vJVqVSCEKLnOE6QSqX0Pz7QqVQKjuNo0zR7hUIBR0dHNQC3yPM8ASDaaDQ+zc/PwzCMcTONwnEcHQ6He7lcDjs7O8cA7oxEGeS729vbxwsLC2DmfjKZVLZta9u29eTkpCKiYGlpCbu7u82hC4fcv5o0m83a2toaMpkMTNPUkUhEz8zMoFwu4/T09C2A2+McHlNo+KUlEb3Y3Nws+75fCIVCweLiYsN13TfM/HG8lojoDwNdZwiVCkv+AAAAAElFTkSuQmCC",
        "title": "Discover Typeform, where forms = fun",
        "labels": []
    },
    {
        "link": "https://www.ideasgrab.com/",
        "date": 1642692462,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiklEQVQ4jXWTTUhUURTH//fe9+bNmw+dAR1NJEeTINGgWjir2kRQVJvxo0CEFhEaFYgQLYIHrcQsiJA2QrXowwFJI9q1iAizXJVYmjlGiTpRzowzb77ePS10ZJyp/+py7v/8OPecc4EiRQYq3PFBl48IPHGv4URqpO44EXh8sMoXGahwF/t5ccBh6m6yGrsZgxQrmTltWc4xBimoqtsBvQTA8oc1o8ll04Tqufbxz7rR0uAIuE6rbncrhJ1kxpqKf1qb8PS+/7Y0vNurk5n1XYxs7ADQ7YA/ysXZjLUeqmz23kCl9wxIAzgHmICMxZ9kw8vXfydku06px96ez+EdgLxiY4f63Y2Vg5TUMywnGBiBGIiVKzb8MvvZkYmhQr8CAGSAp5z+w0inF5lDCYCYlAAXjCtgBEIuxyRJUm0B82Z9nSKoXomGXzMDUsk3U1WEx7ScLhUAbCoysSxW5xeIKQK+2hroZXaAEeNcuBSQZ2sAmwBmIAcsPAOA2LhrSsulg4qwW+W1dSDOYbMrBAFO2dw7re/rDICZkinQQGNtQnd3bujJMa/fdcdW4z8Je5NExgKsRU7J5PPozOplNZ4OOs21p+zqzx8790BmEiIZDVWf/7L4fXa6DesbQ+BOhrJqjpx2a9Y53+Y9NxkWMhqKSpEobv62RkfbBQB0DT/qu/8qRA/fvqTuB+N9hXclUygQ6+gIWQSwA0ta89xyljQ1jhhRMwB0dISsrWdTPqF4lQkAZwAdmx0ZPrrygoLmNF1JfLgLAAYMXpj8rwryENTv3ZXas6+FeT1VMCOR1BaAis0lm7hNGSXxpnpyymFz0MHW/a2MMet/3n+JA8Cpzgu9wa5LPZsho+TnAsBfq7sDFvghqY8AAAAASUVORK5CYII=",
        "title": "Ideasgrab - list of ideas for you to grab.",
        "labels": []
    },
    {
        "link": "https://tomotoes.com/scrcpy-gui/",
        "date": 1642873347,
        "icon": null,
        "title": "scrcpy-gui | 👻 A simple & beautiful GUI application for scrcpy. QQ群:734330215",
        "labels": []
    },
    {
        "link": "https://docs.microsoft.com/en-us/previous-versions/ms536495(v=vs.85)",
        "date": 1642874745,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQklEQVQ4jWP87if3nwEH4Nz0iLF+FwNO+UY3BkYmXJLEglEDqGAAxYCRYcl7nPHMECPI+H8n7nTA6D6aDgaHARQDAKgRDRsLiHU6AAAAAElFTkSuQmCC",
        "title": "HTA:APPLICATION Object | Microsoft Docs",
        "labels": []
    },
    {
        "link": "https://buy.iciciprulife.com/buy/EBI.htm?execution=e1s1#/LAEBI/T43",
        "date": 1643206460,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACeElEQVQ4jV2STWhUZxSGz3vuvfNnaibTjIPa1GhpKVETiYFkJTRRSy0uurAi/iDFLgq2iEpdKC5ctghdBIorBRca1FopKlYtLbZdCA00QYhp1fzQEBIniWQyzsy933ld3NhK39X5ec85H3wPSEoskiIASNJMPU9eEc2gKiJYHPjXbSYCKGpzz0b6Ls0NDWeWF5o+/KB+bQvNBNDY/NLtRBUqw2fOXG/vGvv+GhQPe7+9vWXbxI93oErnhC9lLnJGm5+4v3/H+VT23q59cf3mpp6+Fc23ut+PajUz03g9zVE8rUz+eXD36N2BoP619JtvVIvF/mPHS4+fJHO5hfHxaL4EwI/fTVK9yvjXn/51ewSJRLpQCHK5/pOnxq5cTeXzrlpLNyz1UgkR0fguPD/86auhy/fDqqzs3tRz/Vrrl0dW79wRpDNQROVKbt1qL5M2o0+aqOLZ8OR352aK2fYTB9899LmI0Lmp336PqpXAy8JVmje3gkoLVWgAOHBxanhOlzSE5dKv+w9E5TIpEzduJeoy5blwVVuqsP1jCqHqQ32GoXt4t8YsGD04/c2SplVeMjk7+OD5P2NR8Ho++6Tti09Yt4bOQVUBsFqS6UcaJAgks0tzHRvheZM//1KatXzj0869zcmtx2kGAIBSBBAzWflW6PmyMBM2drSTnP5j4O21M10fJTJ7ztKvg1BUSfpCIkhFXkNjYbZza2l0IGjavk2A9e8M1m1Y5u+5LPkWMSfqQSiAOBcaWb3XO384eH5E3A+fxb9uxaGoVFyMjaSZGUmYmQgBDfsv2NTfwXtHkUiJUKD4D1KSAmCR1hjYOI9ZBECaiAD6v+4LLn9tut2NPW0AAAAASUVORK5CYII=",
        "title": "ICICI Prudential Life Insurance",
        "labels": []
    },
    {
        "link": "https://www.w3.org/TR/1999/REC-xpath-19991116/",
        "date": 1643792206,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGElEQVQ4ja2STUhUARSFv/l59prJrJ6WE2P5F4K2cCgLNS0IrIUtRAaFqKAIcRvRqkWBLgqJhAgiFCsywUUtQgIFUyE0LbSU/qa0afAndbB0tDczzm0x+CaXTZ3dhXMO99x7EJF6EdHl76GLSL1JRMKAhfgQNImIxCkGwAyQVdtGXftrAF5++k7KmfuMTMwbpMutg9irm9FO3yO95hH26mYutvTHDFwZGg97PAAc2LMds8lE+4svAKxGhLud7znmcjLa6Map2dmgWKgszIgZVJdk451bYu7nLwDsqpXut5MADHpmWVoJcbvmEImqwuhXP3dqSyjM2REzOJ7vBKBnbIplPczMwgrD49EIXSM+HNtspG6xUXa1Ay1RxV2Uuf4GmzYq7MtKpv/DDK29HnLTtuLKTKat7zO9Y1O4C6OCQDDM9MIyp25241/UAbCuObmLs7j+eBhbgpW6kwVM+gNcaOlHVcxcqsgHYORGJU+HvFQ1dJFkT+DW+eLoBgAVB9PxL+r45gOcKNjN4byd/AjoRCLCkb0OY+Xy/btQrGb63k3HIgA4NTvZjiRSNquoioX8DA2AMlca/iXdOGpEhFA4gqpY1kdYe+eyHjbm0jwHpbmpfJsLUF7/jMZzRQx4ZgE4ezQnSvqz3J3DPul45TXmJwPj8mZiXkRErrQNia2qSWxVTfLg+UeD81+qvPoP+qAZuAYE4xCHgIbfmi4eI+Dew2kAAAAASUVORK5CYII=",
        "title": "XML Path Language (XPath)",
        "labels": []
    },
    {
        "link": "https://llamalab.com/automate/doc/block/index.html",
        "date": 1644070007,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACPElEQVQ4jX2RT2iScRzGH9PNyYstQt/cq0vaCHxLEGeiRKH55mqQTdZhecjA1yA82h+C1WVd1qFtXToGHWxrHdblNQihSxAtD2lrrHVZA3WvmzLS+bpmvp0Mp+/2HH/P9/vheb4/OaR18prf/5RhmLeyep3M5HLxfeYk1e1xu9+n02lxanIyKweGGgZN02az2Xz3wG0dSd5/Mze383p2VjxuMHxr9gKBQPTS4OAKAHnjTdEKsA4M9HsYpjMwOlrbLBQ+NHs8z986YTQSADoBCABwqBVA6fVbyWQSf+v1yq4gvPgf32SaUXV1mXoNhs+NZTRHaUir1XpkwHmVSvXHYDTWvAyjL5fL7PDwcKi/r2/n2fT0I6FaXd63Qi6T0RzT6cCyrHpx8Xu0IlRwIxjEGbsdj8fH1zs7OtwdwOou8FUywSma9oRCISfHcUgkEiBJEld8PgCAy+U6csHjcep7ex2FYnGF5/nVthsUi8VMPp/H4e5uBINBhMPhPX4sFsP8/LyV6ul50LoLADhN08/fxePiQbrq84lWi+VH2y8ogHMURZ29PDTUBuZ5HrMzM1haWsKg1wtBEHraADqKuu0fGbFIJUulUiAIArlsFhzHQahWf+4ByIGQ0+G4GIlEJKsplUq8isVyYr2e0FPUy19ra9ebfZXDZvv4ZWFBsnOpVBIfjo2tqwniJgAKwNE9dK1GM3UnGq3td7QnExNbaoK4J5VMAQA2q9UeYlk5gN8AZC0z6s2NjTVhe/uTFOAfxkoJrvRD2QwAAAAASUVORK5CYII=",
        "title": "Blocks ⋅ Automate ⋅ LlamaLab",
        "labels": []
    },
    {
        "link": "https://shapeshiftjm.itch.io/square-fall",
        "date": 1644225686,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB/UlEQVQ4jUVSuW5TURA95977np3YTqIsSggSEk0kkICGBolPSQ9lviB1KgSpEKkj/oACQUEHiBIKhEQUEYRxFsdr/JY7h+IZZ6aZ/cwcDbPBKXEtkiRBAGFlrC0uvNp5LuDp/k7WGzrvmPc7AmAG5yD4xDvvZSai0mw8AZ33DiYQQZJINpu6uvIO3b8Xo8tRWk9lVhQxpGFlc9V5yowkgAASsSw/vOfd+7W1laOvxx/ffE7qtaveYHTeW799Y3t3Wz6QlOScCwhB3fPJi7367l5c39xouQc3U+eQbt1KlhYFwntKAEFKCioKt7zaOHjNWi1asXZ6tLGWW/uPxmfh3mMY1Ghq0If3BEgGkjJjo6Uid2CZZVkWbZwxK8N5F6a0OvI/jWFqW6RzKnK/dcfX56zTtt+/cNkFqEEPSUrJJJLM+p2qlYBJSBLGGObnBJZ5TlJZNgMg6aYOKYAk88IBJ99+9k7arigwmVxXA5JctWHlABDga+mzJ3vvDt8mrZbZNMhqPsl8cFqVzsQ5to/b9eb80uqiGeCIGGdZZv2OJDPDDFsI9URlLKMxz1HkaC7IonMOQAAQYxyNx9fsSRoCMWJ5xR3s48snvTxUNknTtNFoTBGKsoSEGd0SIKQ1/PjOizN7+Ihl4bwPIUxprV6lMqYgACXU5xCCRsPZDf8AE5MpYU9/xpUAAAAASUVORK5CYII=",
        "title": "Square Fall by ShapeShift",
        "labels": []
    },
    {
        "link": "https://www.alphabetagamer.com/the-resistance-game-jam-build/",
        "date": 1644301248,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACgklEQVQ4jU2Sy0vrQBjFv/kyeU5pC2mLoNUWBYNKoUv3V0SxoAv/PbfuxbULRXQjSsGqYH2hpcXG1KZ5mGRm7qJcuWd5OHAOnB+RUgohOOdCCERERM65lBIRFUUBACnl/w4FACHEcDj0fb9QKJim6bpumqa6rpdKJdM0wzB0XTdJEmZZ5UqFAkAcxxcXF4+PjysrK/Pz8+fn55PJxDCM9fX11dXVm5ubq6urJElqCwt/NjaIEKLb7b6+vi4uLna73e/v77W1NVVVPc+7vb11HOfh4aHZbDLG+v2+bdsUAL6+vsrlcq1W+/z8vLu729nZ0TStXq8LIU5PT7e3tx3HAYAsy4IgQEJIFEW5XE4IwRgbj8dZln18fLy9vdXr9TAMZ2dnAcDzvMFgIKXELMviOM7n84hYLBbjOFZVtd1uX15eEkKSJMnlcicnJ/v7+4eHh7qu0yiK0jTVNG04HDLGhBC+729tbQHA8/Mz5xwAzs7OWq3W5uZmGIYYBIFhGEKIo6Mj0zRN0+Sc+77ved7c3JzjOIQQSimldDobx+OxruuGYRSLRVVVGWO6rh8fHx8cHFBKkyT5+flptVqO40RRhIh0MplQSjVN29vbk1JWKpXRaLS7u5umKSGk1+u5rttoNACg3W4jIgohqtUqIhJCELHZbE7/zufz/X4/TdOnpycAAADLshCRdDqdwWCgKArnXFGU0WikaZplWUmSvLy81Gq19/f3UqlUKBTiOF5aWqK2bd/f37uuqyjKlDAppZSSELK8vNxoNGZmZq6vr3u9XrVatW2bxHEcBIEQAgAIIVLKKaGIaBiGYRhpmoZhyDnXNI0xRqZgT9PwT9OGX+c3QAj5C+r8ZpPOIgaQAAAAAElFTkSuQmCC",
        "title": "The Resistance – Game Jam Build | Alpha Beta Gamer",
        "labels": []
    },
    {
        "link": "https://greensock.com/forums/topic/11979-drag-reorder-div-elements/",
        "date": 1644493910,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACc0lEQVQ4jX2TS0jUcRDHP/+/q7ibhnRRkkwKuggmUZCgVkRI4KVLQR2MDkmpmY+lsIsQaFAKFsSeioRKewp5kDWVVNSsNCih7OFzU7Jy10XX9dG3w+qmtjQw/IaZ+c5vngAJgBPwA1rPycnJqq+vV1JS0mq9fxmTANAUCrjCjx4/lCTVPagLZW81gQz+Q83P3gHwuLY5lDndBCJCWYxwiNwNX3y3+fxhgF+LbaHcwlifVso+VHXtulwT7+X0IKcHXbl5WE4PuvEoS2bUP2Wg2C2Grt5FBU/R5epsrdCcK/AuzUs9bWNBfVpaRjCAUdMbprjtSwBUnIJbJSJxL7xo7iAn7yT2kgt43D5mfV6s1g1ERUazZPjJzc0NFOH0oLI7gWjlF5skSc6WJ7KYW1R0ulLfJr5qdnZWkjQ9Pa3S0lINDg4GM7CcTTOYmhTxGRAROQWAzRJLxMFR7rcXc2mhCKs18Fl3dzdWq5XExMS/bUzLMlRRa6qmD524gvLyb0iLktODLPFof0qBJn9+l9frVWZmpgBJUmFhoQCZO1MN9hyAuG2QfQbm0vM5cn4zhzaKe5UdzNt66HvTS39/P9HR0TgcDgCqq6sDGTSOm2oYNYMja/2Oqj6i4vJUNdZ+lM/vDXbf4XBIkux2+98emLbfazbJsxiOZXyBlzNdxPS/JfPYDsbGxnC73eTk5GAYxppNMgc6TeQ38f00mRiFkYEFAIaegP3cUQA6uzpxuVyhNnHJfNup55/ewPDIb9w/YPyzQUsDWBYs+PwBr9evXjMzMxOYkM22OkA7BE6yieVzjtmEjpeh2F0Eawc0NDwUlIH5ZczWP+uCgGdA1sl7AAAAAElFTkSuQmCC",
        "title": "Drag Reorder Div Elements - GSAP - GreenSock",
        "labels": []
    },
    {
        "link": "https://dev.to/ruppysuppy/7-killer-one-liners-in-javascript-one",
        "date": 1644775608,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABDklEQVQ4jc1RsYqDQBDdzYraCGIj+hWita0/YRP9DpsFaz/CPxBShKRKI9gJqxZGe0EQtxPF9QpzCeG6Cxz3qpmB92beGwD+HdCrQgihR8txHPzGtm3P+WcbPM9zXXcYBgBAEAS2bfM8b5pmVVW+78/z3Pc9hBA+CXmeF0WhaRohxDCMOI7HcQzD0LKspmkcxynLEkJ4eBLGccQYd10nSdKyLFmWJUlCKT0ej/f7vSxLAMC2bQfwjt0oY4wxtq4rISQIgjRN91QAAC+CLMsYY1VVKaWCIDiOI4ri5XLRdf16ve7yb6anaeJ5Poqi8/ms67qiKLfbra7rtm1PpxNjbCd8EOvPxz1uQOiX2n+FL+rrfZxuq3c7AAAAAElFTkSuQmCC",
        "title": "7 Killer One-Liners in JavaScript - DEV Community",
        "labels": []
    },
    {
        "link": "https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/",
        "date": 1644775804,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcElEQVQ4jZVTz0tUURg9b97Mu/fO+yU1YwNlBIVGm0CLwAKjZW0issDWTTsJWjQZyqBgPygIN2V/QRgNLmrVIoRwUVbaqohwMaOpmL43Mzrvvvve3BYzWkYz0Flezvd95zvnu0ATyHRXTKa7Ys04kYbFmdQBX1/7UZTh4mLvyf3/3SCsRjsFZ7sFpwlU9c5GvGhNKmJIps5Dqt+U0YVZAPB9shxwAsEJfK4tbxU8u3zz6EKypb2U4C+y2Ww1CgBIpDKQGAbCUA6kRqEtDXuLJC98isCnEGUt/+Z0NrphFYcKJhtYN6lasFpvAbhbW0FKUR+gAhj01tqn/JBqASeh4CTwIiaJaCtTrkkGXZ2qjk7h6Kz624M7y/cAeQXA58AnCHzSzT06IzgNA05DwWMfXJ11OzqDY7A5R2d9k9f67gOA8rcplf72U17Z7q+UzAte2VIrJRMrhh3mk3ZusdUcyzzMvG2YggQUzjXmVygRdQM3VYqaZKKt6QaDlDuGKgAge6Hi4N6rlZJ5vbJhdXglE17Zcitliy3Zlswnba+QtO180kYhYX1ZtcxH7y6efQpFkTUFh1K3fU4eC5901KKj01WhdZU1qjoGU9d1/Zijs2lXZ3CM+GEo8smJ3MvM9gpVGeWBTyA4DQWnI/PljR4viPt1x6ObVOOmstrjmHQkUCNhLTglsn1Ike+FB6Klcz7k8a/7cq/nAGD6zJE2x6BwDYoVi7aNZW/kAQwdn3iVi6jVQ2yXMbndQHmOEPg48ac5rkn21PNG0Yi3br2/v3RuFsDsjlP+FxxGPrkG++kYNCjasZlGvKZIp8dj6fHxpt/5F3FiEAQkJRrxAAAAAElFTkSuQmCC",
        "title": "Replace JavaScript Dialogs With New HTML Dialog | CSS-Tricks - CSS-Tricks",
        "labels": []
    },
    {
        "link": "https://swayam.gov.in/",
        "date": 1644846815,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuklEQVQ4jXWSUWhURxSG/zN37tx79ybuJrhiCLbQmqwIghgEUR9EKDEPClKSUigpBUWIFJpCSxXUfTIKEkQihIj6UkQMEl98UJA2IPhUWhAb0oS2FqE1FRo1u3vv3ZlzfEg2Jimep5mB8//nfP8QVhcBkMalVDrf7FyNZmefVIBxt/gqBJCsbFhTvd7WnfuPE0kvmDeTiAfy/mLC3czOj8z+fPLftY7L59Keq00wGNde1O04AwggUhBnobwAjmu/cZb1zDwc+L0xrVo5etKqT7vWlu5qmKVJrDjN0VwSylTa7KMa2qrN5zvrLbnr2PeDbrg2BKS15/t1WWz6K4FzSVNk0tjUXtqs648o2pbk9FC9uDFXjQRpLuzcUHj+/hIrUo01ZL0pUBTkKdCKIsMU54KwvfjZVvzq/X3z05PWLgyyMYdSva4056s/G8ZvGfQOR4ViaYY8v01cnYmUB22IbTZtFV2vBDSCC92VtchpVTSD9wYpLgwjrQDs6gCIPF+TZyD12isGXcbTF2WM92XvjvHEg6/ID8+QHxbEpoCtWwACUj5FzZDK/IS8mP4EY8fs6hVEaFGOBAO3mkzbe18qhX7S4RbYDMLWgYhhYp/ThcPZqd13UBallgWIBCDB2V86zQebD2andg0lUfsOS+4Yh+Y5RzniwGeJY4bxty82/agUymUFAOHFJ3tzozP3o1j9pFuKN6JLj7/B15tq9W+7xpSm2zpfUF7gsxf4UIFZZqBRXhrAkJXA/0iUsNhKHUafC0anOphkAUJ9LBnDGC1kFfzg0WLXJK9KQV2Z/o6aW4ckWQCcZQpjRaQgyWuIQCi/nvi/uQk50vlxg9cSAxJAiI+Wzrna/HH29TMOjHIeYJXAhSHY+ImrvrwiSj5f5vX/GJf+w7WZIrQ5AHIdEKVA/A+sTOKLDx+vTf0NvWAnrNMy/W4AAAAASUVORK5CYII=",
        "title": "Swayam Central",
        "labels": []
    },
    {
        "link": "https://halfpricebooks.in/products/true-blue-by-deborah-ellis",
        "date": 1644847941,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACJ0lEQVQ4jUWRy2uUdxhGn+f9vXO/JBnEpAZLWpXQoIJb3QguXPlHi4sW8UJFkVCv2DYYx5kvmdv3zXy/93GhpWd/OIvDS9cfbOp6MZ8Z8T8ERIgARBA1oWZ/6Aiv8nrU7d+7fSRlUYAgggIMIiABhkylP/58Oy9XvipXvxxd3b04evL0r2avFdoQBPFDoIi0PD+/e+fGyWT57NWxkwDz6zcffn/5Yru/pcgCCcOPFmg+nY1/2u8JALNDANRpd3rtQbs7UK5FUgaGEESCoZ+3u62dQjPCXSAk5YC4qUoT6qgJi5xhoiw1G4AUIJEAN5EkzTab6tbNK8W0GAw7bq2ULId63fa7j/98+Pu8zutQnSOcFCWaVdXq8v7OlYO95NVsXu3vHxST4ueDveT5zftP7gkQJBckCopEGG06Xm4POdzqPHz0dDTs7Ix2tgcdd5qRFI1OgFREbnd7T56/X1d1yxtssTibTaazk6/V+bRIqR2RAQLmggQAAtP0rEzCHOs4CwJ13syXY7iJpgAIAE4IolmSMOh3RlvdKrS7u1XOq0W1NtfJ6WQ5Bw3fx7sEC1uXZbman46/nH6pQzorRsoxLgqjwEa5XKzLFYKSXGaBdPPw17Jct4e9iBxSzlnSYeNSRBh9s6h+u3b14eNjMKXB3uFisUiOZrNFT+ZmZp6Se/Lk7u7mrWbr8+nk+OO/wcQLR/dDVpUzislMgv7DkhkhMCQiNbp9R3wDZzdILySvlgkAAAAASUVORK5CYII=",
        "title": "True Blue by Deborah Ellis",
        "labels": []
    },
    {
        "link": "https://fjolt.com/article/css-animating-transitions-gradients",
        "date": 1645014340,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB30lEQVQ4jW2Sz2pTURDGv5lz/+ZPQUNDQclGS/onkOAmLkQfQATfwL2ID2CDD6BP4gtYEbELu3EjFZUEkzaaSjemRdJGy7n3zrg48aZWZzvfzHd+Zz4qlJcBAFBVIiKCKuZFIEB11lVV70wTqpokKUD61xAA+P5MmQ8oEdkk6Tx6eL19zdqEmWa2IDbcefx0Z+dTHEfknqQKEYnj8P27l7XapXPr0zRbbdwaDr+FYTBzYMbpqV1bvbpYrWRZBsDaxNpEVYPAf7P9djQ6CAJ/zkDEmtrGej2OIlW1Nrl9596Hj904iokpTVJmJqKzDADQaq073PH4yFpbq132jMlEer2B+yIi8hyZiPhRodlcA5BlUq1WXr96pgpm3huObty8OzmeesbMHIgoSdJK5cLqyjIREZHn+bltv783/n5ULBWd+Z8Ba1fqV5aWFlXVGN58sbW/f2CMMYafb26FUZhfxgPATJCk0ag7rJOT6f0HG192P4MjiJrALxTiNE3n0CIK8lrNhtsy2P16ePijUL7IzI4wVwNgd5fiQqndbjETM/V6/ePJhIhERETyFM2fRAQCbXSehGFgDHe7A9/3z8Upd8ijob+mP11QTRCEYeAW45+a3YGISgtlJxBREfmvGsBvpCDv3Y+umtsAAAAASUVORK5CYII=",
        "title": "Smooth CSS Gradient Transitions",
        "labels": []
    },
    {
        "link": "https://www.codecademy.com/",
        "date": 1645206883,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVQ4jaWQsUrDUBSGv5NEfAwjLk6uOoiNDgUFQaEGN50EN6vu+gSNcyc3oXXwDRrBVfQR4uTaVWnu71CEFtI0of92uP/9zncvLBhb2W11kLXLW0q+Bs/XRUcBsraD1Jd1iwrO1LTxghkAwJd1s9feU1EhjFrfws5nyXml6hWyMCCYHFb34h3nuASdCj492AdVN5DTrdA6xo1gCLZVy0Bw6GHH2aD3AnQAwqgVVTYYxw3nbZ1pgHh3ZmdhdDIEO4Lfh1oAM94Q2zI+QBhLGSgrA0w9IUv7V8Hy6CB3bMjP17K0/1jJIDddhI0YgPwHAgNGAWEj3nSoaRMXwii+nwaYEk/Wlqnwtw3AlPzPQnfzrGrlD8cwXPlzd3LVAAAAAElFTkSuQmCC",
        "title": "Learn to Code - for Free | Codecademy",
        "labels": []
    },
    {
        "link": "https://www.codecademy.com/resources/cheatsheets/language/c-plus-plus",
        "date": 1645206893,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVQ4jaWQsUrDUBSGv5NEfAwjLk6uOoiNDgUFQaEGN50EN6vu+gSNcyc3oXXwDRrBVfQR4uTaVWnu71CEFtI0of92uP/9zncvLBhb2W11kLXLW0q+Bs/XRUcBsraD1Jd1iwrO1LTxghkAwJd1s9feU1EhjFrfws5nyXml6hWyMCCYHFb34h3nuASdCj492AdVN5DTrdA6xo1gCLZVy0Bw6GHH2aD3AnQAwqgVVTYYxw3nbZ1pgHh3ZmdhdDIEO4Lfh1oAM94Q2zI+QBhLGSgrA0w9IUv7V8Hy6CB3bMjP17K0/1jJIDddhI0YgPwHAgNGAWEj3nSoaRMXwii+nwaYEk/Wlqnwtw3AlPzPQnfzrGrlD8cwXPlzd3LVAAAAAElFTkSuQmCC",
        "title": "C++ Cheatsheets | Codecademy",
        "labels": []
    },
    {
        "link": "http://192.168.1.254/",
        "date": 1645622248,
        "icon": null,
        "title": "GPON Home Gateway",
        "labels": []
    },
    {
        "link": "https://www-bitdegree-org.cdn.ampproject.org/v/s/www.bitdegree.org/learn/css-code/amp?amp_js_v=a6&_gsa=1&usqp=mq331AQKKAFQArABIIACAw%3D%3D#aoh=16457050627467&referrer=https%3A%2F%2Fwww.google.com&_tf=From%20%251%24s&ampshare=https%3A%2F%2Fwww.bitdegree.org%2Flearn%2Fcss-code",
        "date": 1645705093,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jXVRz09cZRQ993vjRzoMG4LYSZEKQmrSqfwBbSJR2TsYrdjYlLiy6brRRcu0jbGNEGJV4q/hl/gjKMFN487ozkQTVuq0sxjjgEk7uGLIe++b993jgnk0GLyrc2/uOTnnXvHeXzHGXI6iKBtFEYwYISg4pARCpdJai2w2G6rqu5IkSRwEgS1/+pnOTE9LrrNTWq0WSD4kisAYgyAI0Gw2eWFykpffetN471sZkhYAG42G9PT0yDu3bhKAWGshIoAIojBEGEbo7Mzy7Rs3ZOvvLQAggEcybSCqinw+z9NnzkitVsNmvQ4RA1JxslBAd3c3AMgTAwMk9yMyI7KHjTGM41iccyhdncL3d+5gcHAQOzs78N5j7uOP8MzoKKIwklxXjgAEAEyqpqpirYW1FkYEr50/j59//QW/3a1gaHgYSwuLCIKgTUPqQDLpoTo6OlD543dcmyrhbqWCI9kjuDZVQhzHqNfreGVi4rDHYF/AGIGLW9huNOBaLXCX2NqsI4piRGGI5m4zfeUBAZOCMIxwauRpvD/3IQqFAp4fG8Mn5TKWv1jBC8Uivv7yK5BEerNDHBgkSQLnHGIX45vVVWz/s40wDPHTDz/ijUsXoaog9YBIhiRIouUcjBFYa/Hy2bPo7+9HEGTQlXO4er2EV8+dQxAECDIZOOeQ8pAkiZLkyvLnmn+0l+/NzvL/anF+nn1H85ydnlGS9N4rVFW99/Tec+3bNX1qaJhjzz7HjY2NfWL13j2+WCxy4PHjXCjPq3OO3nvqXiaSpKqqkuSD+w/09QuTPNb7GD+4fZuL8ws8fqyPL42P889aTf+7D5Jxe+jTOCT53fo6RwqneOLJIS4vLe27ae/4dutAcopksz303ntNkoQkWf+rzmq1ynZeeu9Tsie5S/L6vy0Z+Mw0jGz0AAAAAElFTkSuQmCC",
        "title": "CSS Code Examples: Comprehensive List Of Various CSS Examples",
        "labels": []
    },
    {
        "link": "https://github.com/eihli/image-table-ocr#org67b1fc2",
        "date": 1646035203,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC",
        "title": "GitHub - eihli/image-table-ocr: Turn images of tables into CSV data. Detect tables from images and run OCR on the cells.",
        "labels": []
    },
    {
        "link": "https://levelup.gitconnected.com/5-modern-bash-scripting-techniques-that-only-a-few-programmers-know-4abb58ddadad",
        "date": 1646366153,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACxElEQVQ4jU2TO2wcZRSFz/lndnZmPFlwltjECpItHnEgcgQx4mVBg4QQuCJNQCJKoE+waGjooCMWS4eAFhCIAlIhEIVFFSFh3hhIEBA7JvEja4/HOztzD8V4sG93j/77n+Kcj5OnOyVBSAIIQABAgAJE1ENUK7Wz7IwPQZJ2FQGoP4P2qpUiCAJrMx+C4GoXwjmSAMwEk0RX6SQBASbBIDlVPj4JyiDnyKIo1c1ymYSg4SMKG3QgNrf71sv78EjEcVMNzzkziQR9qTpOs1yDrYhPPDyOW1oRvvnlChb+uqbNLMexw4d4/PBBrnS3MDf/J1bXUw1ETZpJvnPkVpZr4s4RdGammUQBulu5Zp591Dvz2kflIxOjeGH6fm9pZcP2t2JsZj2enb1g87/+ozgMyOPPv1nQgy68cYbr3Qwvvv6xtnsFj95xK+4ZG8LLzz3mvfr258UnX/3AA/sTvfPKM2wlIZ6aeU9Wii7rFXb36DCHBxNv9oOvdXVlA0HD6cuLv9uDR0fxx5XV8sMvvlMSN/X31TWef39OB24e8I6MDXMrL8wBIlgF63aiMRPjoMGD7QRL17vIen14jiSJ0rQbrIkuajbw8+VlXVtPy5dOTnFkqIUbaa4Tj0/g9kNt79uFRTz50DizvK/hdqJzJ6fw71pa/nRpWXHYAB84/VaRZj0dG78NnZlpxs0GVzcyjbT3ee9+erH88dKyzp972l9a2ShvSkKmWY6zs5/Z978tIg4DcvJUp1/H2G7FnLpvDO19VYzzC4sKw4BHRod0710jvH4jxdz8Za11MwyEAc0kTp7qFEDVhX6/VLqdwySEDR9xGNAgZL2+9fKC/xfJOWfaKVLVYVal8D0OtiLUcJkECEiiJpKoSQAwQWZW0SDCJ1GTSEAorSKm0iuCShlhNZIgAFZ4Cf5e8GrktOdYAGB73jiAtgvvf+/WdhKwXIezAAAAAElFTkSuQmCC",
        "title": "5 Modern Bash Scripting Techniques That Only A Few Programmers Know | by Shalitha Suranga | Mar, 2022 | Level Up Coding",
        "labels": []
    },
    {
        "link": "https://blog.bitsrc.io/common-javascript-interview-question-write-your-own-bind-function-fbdabbbea3da",
        "date": 1647339963,
        "icon": null,
        "title": "JavaScript Interview Question: Write Your Own Bind Function | Bits and Pieces",
        "labels": []
    },
    {
        "link": "https://www.deviantart.com/wlop/art/dawn2-678661963",
        "date": 1647531225,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABzklEQVQ4jXWSPYtTQRSGn3Nm7k28SUwUTBYVEVdWEC1EQQQLERFsrNZSe2sLf4CFv8DfoJ1gYylaKIQttBN1IyyIa9wg+3U3H3fmWNxkdwX35RQzzHnmPcM7cmbhAgACgKoggKBOKWWMxxOwcueLYICKAUg0RAAkFPhhgcVJooHITB4LQCx5ERU1ABNn/VvzVqtk3e/Jz3XTqaG3GHYnkgCl4Sis3jmfP7lLqvnjl3O9Qcz8FIjl5SoabNSub54+KsEQ8vtXcUo+0e0hYrMZ8EYEJMLWpH/vkj26zXCCCqnHjM+rR5ZWQirMnqEYGGZYDJY6Whm1ConHjCLK867+ySMSjbJc1mwZJYVU/Xhjh2DMHcYpH751nr6m6szJrMVcvdGarp0mvbXs7Zd88TKdJmasDLbPHtP1PP21gQpmmCkWp0XUIvx+cI2LJykCIXL9HA9vbs23ZRRmBvjdRChsfKLF4pUycWKkCGCEvdRgH6A7k8GNBebbAEs9fdHFCdD89CNWk/8AFEajSq3C2mb27E3z3VdSB8RqUpKlXL3RnP4xL35YjJb7/tXH1vtlyxJLnaUO3esGpHP81D6ToMNgTu2Q5wD9e+BdrLuDWkv9BYV01UqnLr2CAAAAAElFTkSuQmCC",
        "title": "dawn2 by wlop on DeviantArt",
        "labels": []
    },
    {
        "link": "https://www.deviantart.com/wlop/art/CHILDREN-S-CORES-693641948",
        "date": 1647531240,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACWUlEQVQ4jXWTvY5cRRCFv9Nz7531znrGDFgrICABWwiQCEggAAkhkTiCB4AnQDwCBPwEpDwAL4ADAgckZISIBJCRkLAWxI+ZNXhmd+Z2dx2CHhYSSiqdVqvq6HRVHz39wkt/gJZgC4GQAGzYowW2cQ1qzs45Y1sRseqQlhgktUaEGrSQSNsMuVD7RLGVJMImScvOYUvIllu9ZYm9GjQWNk88SJ1P6b/7FVY7k0TrwV1E7DW3S1WTcoUk0nnm7NpDfP/RDVgc8Ohbn3L5p5ViNthhbNNFra1dkmzisKc8dgUwk/PMz288BwcdnGXYZWoErlWOwA51pZSmICW6zcjmmWNOPrwBuwJd2g8S+tu/MXx1hzwItyHiMF0tub13IpRHKoblDO6dwXlu2ziasvjkS3x6n3L5AEo0Aszk6IGr79iBoyWY/off0WYkP34Vpj3D59+yePcz8tFARBC17LGSasnU3LIo0I93WXz8BTFMYJKgBsqFe2+/zO7hOXVzTq6FkjO1ZFI7FGrJlKj4zw2nrz3L9pUnYb2DsbB79SnWH7zO7pE5ZX1GKY2g5EwXtWCEklAp5FnPX28+D9sM0w7CsNlBiNiO5JJx6VANDHRRKwJEIq23jC9ep147hm5CuvU1w/s38aVp28bJKXVIMI5gGkHNo4VEyGk3qhAwvwR37zN57yZx+w5oAAe173BKEDYgjDWbL6P9I0wNuDLTeP2Y8ssp6ZsTPPQXxpINxv+4BLAODhe+8I6AGuTtGiPop/+68n+ii4gVsGyVwg55etgIw+yN8t+4UGCz+htImHibfz70SgAAAABJRU5ErkJggg==",
        "title": "CHILDREN'S CORES by wlop on DeviantArt",
        "labels": []
    },
    {
        "link": "https://www.geeksforgeeks.org/set-the-focus-to-html-form-element-using-javascript/",
        "date": 1647761427,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVQ4je2PMU4CYRSEv/cv1sIJ4ALgHmEt3FjKDTjCEoitHAAC3oAbSEnYBm/wZ0msd29AT/YfCwMajAWxM37VezPJZAb++TV2PLrT9MGZJmA3oEpiXozz5y/eAqwNqoIs2403K4DGZ5SaQssQ5M1Zx8GiN0tbEt6hZYBMIZTOEWM0vzU4pzu7GziYA5WwVTHaTH6c0JulE4OnS7YLvRajPGmcC8f/I1QDYR6pLMZ5dvKm6RLYnxrE8/uO6trLbAt44NogC6JfB5VXji3Gi7DKUBvRtyiK/XBdOgA/XJcWRTFiD0oQrTqE2914s3p7zP0hkEhmoEQyOwQSP1yXl0z+y7wDOll6dr4VpWEAAAAASUVORK5CYII=",
        "title": "Set the focus to HTML form element using JavaScript - GeeksforGeeks",
        "labels": []
    },
    {
        "link": "https://dev.to/cassiolacerda/automatically-refresh-the-browser-on-node-express-server-changes-x1f680-1k0o",
        "date": 1647934672,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMklEQVQ4jZWSv09TURTHz7nvB7wX2w6gTDJISCQ0Qd9rhzJodWokkaSmdQD/AcrUvwQDCyaYyE6NRE20HZoUaEs7tYTaQmlSgoPVqukPWt579zg8Ak108U73fs/nDuecDzqcLvifwwYfRPRPaDC//sAYQ0REHORs9CokIpFzzjk3TdMwDFVVLcsiIkTgnGRZBgDTNEXxEpMkiT0Ph+OfP2Uz6ZcrK6Io6h7944f3mXR6b29X07RX6+uRSKTTaY+Njb2Nbc3NPWF3p6Y8Hs9xtbq8HIlGo/4HD/1+/9Hxcb1ebzS+jY/ffrG4QJxr2v1AIND80WQIcFgqhUOhrVhM1zVJlguFQjgUehYMfimV3m1vT05Ojt685fP5arVadn+fAYAsy4wxy7Qs0+p2u9PT07lc3v/oMQDkc3lFUbxe76xvtlAs/v7183JKnHMiIiCG2O/3T0/r5+ddUZKKBwfVk5PI0tLExJ14PA4AIhEZhgEAqqoKojCsKJXKUTAYBACH09VsNjPpzOLiQqfTyaSzTJAYMrw3M5NKpebnnyaTyV6vp+taKpXa2dl1u93ErXgiDgDlcqVcKSvKsDAyMoqIRPR6Y2N1da3VarlcLkDs9XqJRKLxvXF29lUQhDebm6XDwyFZxqFh5eLCIG4B0A2H0zCMfr9vb1VRVXtlnXZblCRFUYgIHU4XQwREu3XbDiJCRHsSiMgYIyK7KgIAJwKiK3lsc66Es9FrlwatHDTv78S+/wF72SshkV+RyAAAAABJRU5ErkJggg==",
        "title": "Automatically refresh the browser on Node / Express server changes &#x1F680; - DEV Community",
        "labels": []
    },
    {
        "link": "https://blog.bitsrc.io/23-insanely-useful-nodejs-libraries-you-should-know-in-2020-5a9b570d5416",
        "date": 1647936045,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADg0lEQVQ4jW2TXUybdRTGn/N/35aWTUpBykYZ1Iwvs4WtsiHOMCs6cBeii96gc3PJjAko0Qud0UVq9GIx0QtmnDEYExIyE4xKyJZsWYZMO1kkzIxPHUwqXx2FlrLyfv/fvxeAu/G5OjfPc05+Tw5hXQRAbMx1oXJfa47H3WhZXBNE5GDk1HQ+ePHWXBjANQgoIBAAmwAwADaA+l25GY1P1hS/erBmp3NXeb5tmACIyCEJzMyncOXahBgcif3Qfzt5AUDX5mZ4JTzb0rS/sypYlt3YdEJdXl6BqqiI3+4DN1XKK32CXJlee7s/ny73fO8aGhxC1483W0fi6lmpwO1ser625Kvjrx3LCh05oV26cMNxtfc6FmNpqghWIntbgP0+cJcG+m+xaDSB546+ohXu8NvK4nR9NJo0pId9npuVxaWOb7v7RFlFhfzFx2dEjEuShwGHj78heQKPOiI9PfZILEG9351HZeVu6YMP28ljO4lb1iGZCLAhGLO5bRk6iv0FND07KQqfqsb777SJtMrNx/cUkRL5RQR8ecQFhMQE2XwdgLyQSr80Hp05yy0z74Ecr3Gq/YwcX4jZ23b4xbmGF8Xc3CI1N/fQvseCwp3hIscWN+eGKU0lVsRMPPGu/E/a6DbHpu55tro7vV5Pju+hIuly33XdHv2LqurrUDQ/LybG/7QXZuZFy1uvA5bF7ikaGxr9uyUJfI2NGhHYIjd8dvrNZZ4c143UhPbMnjLlo5LStfZHglptnkddmIqoQpkyu778RN9fGmgFBG22CCEEAcCB8kBk8c5vNl+d0AYudurv1R3U3q6uNno7PjfVpVFNTYzxlw+HZgE8GBaC/RcAgMIizPJzcmpONx9VhHrHNpaGteFfv9GGrp7TV2dvGEKbFh2fnrJzs7OOhcJhefNythEggDbcTSSWkiurAgAZmiJynRZ8LgtcXxNgEtKKScsrqyuhtjYb/yPnoWDF+T8iP5l2akLT4sOalZrUrNVJ3UxN6unoz1p/x0n+Qk1RJBPYvmmSNxkQkcFtFqwo3ylzbuuAYJa+BgIjbS2OyYFu4fNYFmMsqNz3gK2/C4lABhoO7CvMJiZxWwgHEWNEjMkuN1sY62Pm2rJkcpmqdvvF3oKsI0QkANwnmeGST4b2evOVxVEDxEgIDsnhRHJ2GGoqBsnhItOy+NO1JZnZW52tACQhQP8CrY24ksd415cAAAAASUVORK5CYII=",
        "title": "23 Insanely Useful NodeJs Libraries You Should Know in 2020 | by Lokender Singh | Bits and Pieces",
        "labels": []
    },
    {
        "link": "https://www.merixstudio.com/blog/real-time-communication-websockets-nodejs/",
        "date": 1647951598,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACs0lEQVQ4jWWST2hcVRTGf+e8OyERiiKtRZpFKpa0xoT821hQkq1d1E3AuLFo7B+K1IGqRDe3aC1US4YWW0oLtbgQdSNYVKSYrApSMk5TM6VGDKJCV1UJJpn33r3HxbwZBj1w4S7O+c73ne8TijKQEx7xngjwS2XoZVSmRSUJga//6q7NjR8iAzBDRDAAATCPSmvwg8FnxCWHTbivGs80GptrJfdA2bDdktlHj72+9CWA96j3RGkxWJ0b7rPAcVPZniTxfN+xW/N01Mrc0KiE5DUVs5BaZdfsrR/aDH46NTKtyotgnzz+Zu1qS1LRYJ0MV94f3i+RVyxwfddbtYqs+KFeSsl5V2oc3PlG/Z6BcHHMcX0xfl5snwIWBpBJTw5wo9zbs+2RbR/HEE+7VOXBUsYfO9+u32tvOrSY8d8q0OY9bq//feOu33o3SZKHnYsxmKkzEPHEX2dHnlh39ixGSU0aJhYMfUiJN/vfrX014QlNJ5KumIWgNLqwvBAM/KMyKKavimkQdErQaYzMTE/dmR15SmjaR958ChAzK+4Gttm4TUN+3n2yetrS8E5MbXXPyep75PEby2xfOzc5kDscaQrqMBAB21hbXtmyZfjcjXJvT1zf/D7r7u6yKZL6enZVVLe2bxKaKE5Tp7nTvMOuDGpfFG0bQPFfrgPMT+AmF8hjsFTQRKOLf5PLjvrBPY+2vDY/4dpUfVPmZ1Mk5tHJBfLfyr09BO0Pud4XgB+Pjj8v2IEQ7dOhC9Ur/wsSqNAEXzoy9lwizCB8O/Dh4tl2lO8cHu4LpsdBtkuwCwOXq991xmBpZnQsUY6ZSsxCqIxcqtXaUfagvtiwPDP6dECPSLQ/jfRMbm6tpFoG6UfjlcFL1WudM20GBnICpAV0+8D4SwYvAE5Erj25erMiC80otxwD+BeQzURQsz51bAAAAABJRU5ErkJggg==",
        "title": "Real-time communication with WebSocket and Node.js",
        "labels": []
    },
    {
        "link": "https://regexlearn.com/playground",
        "date": 1647957710,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABtklEQVQ4jaWTPWgUURSFv/ve23V3ZoeQZbcwphBEUMTKSgL2FlpYWMZOC2uxUHARLGzsFyvrLQTtUkl6W2vJogYS/zLJ7M7Pe9diWX9wRgKe5hXn3PMO93CFY+Dax3E0POkswN6nyr9eu5MtOfnX4G0dt/LMPMKaW/iQAGBNig8vsvcfHk8ujApXO6kIgmZHPEni1XtZ/h3Qxa+q61HUfxBOA/CwMcHl6bPu2X5vx7XbSVnMb8wjvw3QyewV1+q+9FXxedZNz9QnAIbrpSMjrvKimsa7W29kVC0SjLY2j9ZKhDjZX3GmyeCAWQkSEGHIsIMu9nX1Sz9CpAVYAHdJx61z5N10P9bB4JfBt+ygJyCIUFI4BAXw/dxL1v2qUKU6V9k8fP7OtMwpLb3qb62IGBSNbdsZX1RvZ9HKxkRuFgDX954mJwY9ncjdQ2c77rxWAXH2r07Vq4bKC6oX2+x2gALg1fB+utS4kJdBkYY2VMVY1IdZgQ11CgdimrpUBFQFMAmdWlljC8fF/xsoi3qW75/Qn1zKvIYHY6wRVUVqD0sWnIhr3IH6MDXONiYwzoLqTkqS1xn8AKt1uWNHsaX3AAAAAElFTkSuQmCC",
        "title": "Regex Learn - Playground",
        "labels": []
    },
    {
        "link": "https://www.fonearena.com/blog/292648/how-to-uninstall-apps-realme-without-root.html",
        "date": 1648724213,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACW0lEQVQ4jYWTzUtUURjGf+ecOzM6muMHQqIhhilBSggRWESrooIggqA2FbTpL2jRtoV/Qq3atAlaRJsCKSlbtDErrTA00/Lb0Zm8XWfuvee8LcaP0aKe5XtenvN7zvse5fv+AHAyiiKccyil+JdEhDiOcc4BjKuFhUV5+PwdM8t5pFT8Qy7erltrCcMYldBcPXUYb2B0lltDzUihBnbdLih0bDnb3Uh9dQInpZbYOh4P52mdTeMt+Q4prhEHeWwISimUgURSExUs1483ce9GG0brHdZdzTP8WovxFIK1mvbGFOcPVuEcfJgPeTGxDgL7m6oxWhPGjsHPq/R21lGZ1HQ01TJSWEUL4Kxwoq2SIBBejwdMZKOtNM4KAF8WAq7dHWF4+icAsRMUsMVVtMLkYpGpuYjlvEWVEwNP3y9z50on/R9XcE4AhUiZgbXCxd4MN8/UcbS9snTzBoVftIwvFTjX3cBcPiQXxFtn3qaBMYoHr3IMThYgpTAJjQ0dSsH3bIGviwFDU2vMrBQYmw/QGCiPkPIUiZRBUgrtadgAqEgYXo7lOH2ogUza40JPI/0jWTxPbRPohOLJqE/RlkjKFVnHsQMZ9tVXUJv26Gqp5tOMz8K6bBMYBdl1ix+6HcskgHVCV0s1telS2qqk4UhbhjgutXql3Re0Kr0sIlsGCiEoxvxNxSjCiuClkxpJ7gEbsXt2JiHcf5OjozVH4+YqC8Ri6Xu2zOWeCtS36R/S9+gtc6s+zu76TArEgYR2e1wb0SoyNdy+1I3K5/Nzzrm9URQhZfj/kzEGY8z6bxfsIHIy52XnAAAAAElFTkSuQmCC",
        "title": "How to uninstall apps on realme devices without root",
        "labels": []
    },
    {
        "link": "https://playcode.io/new/",
        "date": 1648795710,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACNklEQVQ4ja2Tv4tUdxTFP+e+Nzu7Oy+uCAvioiQYQtzGYrFIwMImYBtsAoJgbWFh2iQ2NnYhpAxC/oX0SbAQEYNF/FHZbDRuBkTwzazZed97UryZWf+A3O77vfd7vueee644jKZpmjXb0TSNJ5MJ6+vrAphOpx6NRrRtK0lu23YKtAAC2NzcvBoR39peBWJxL/XI9vITAynpXWbeHI/HPy0AnkTEGb9XiSA7IKEagvO9lERmPh2Px9sBhKRiO213gBGZM3LtGNmcJA9aJyIB2+5sp6QCRAAVMJAUkkIBeUAgYvtKxOffVXHqQsSsJQAUfR0wAKqYoy64ezZFzRbUqzDcEO0LOHM52L4iygFyh1H/iLlgEOA0s6n16VfBx18G3b6pVuD1M3P/VuHUhWDnelANUXbuuYN7xRNhOHejojkBj35IYiBmE/PhF2LzrPj9RmHjtNi5HkiQiQDFQnEj2ldmMILmBLiAKjh4C5O/YXRcVCv92V4Mum/BCEeYx3fSf901n1zqcetVsftb4oTPvgle3jOPfkxLEMKAa+hnTYjhBuz+avYe9v13+2brfPDRRXj8c/L8F1OvgUJk9rrXh2R6LoN1XN4hG8q/UA3gj+8Lew/MyhHZ2ecWnqqBTlI3N1FmcaVKeGb+vNPb7+2uWTmydGMBx9xIXT33wX5d13VmovkCVAOx/0/v/uEHwrncjSoi6LpuutQgM6+VUr4GjtoeLJep6nmW7rBJSbNSypvMvM3/Ef8BVE8X0FYF0scAAAAASUVORK5CYII=",
        "title": "js | PLAYCODE",
        "labels": []
    },
    {
        "link": "https://regexr.com/",
        "date": 1639476065,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABh0lEQVQ4jYWRT0sCURDA5+1u5r+1rVY0LRMLAtFQCCIPFXToUIfo0qVTXcJbnyDo2JfoGh36AkUQBAWdDIKKLhphZrHlam7re286bKz90ZzTMMzvzfzmkfh4GtoEIgJyIojfi0K7bgBwyr2+YFR0OBGxAyA6nMjZUHp2JrvjCw4DgD3nN4CIrh51YmUzlMjUXopmvWpW3+Lzq8nFdYsR/YGBnwSXg8OxzMJQaho5AwA1lohOzlPTKN/lGkaN/JUmguhwy32RsbG5FSU8Urw6vz05qDzmmWm0dkDOqGl4+gekbtfN8b4ciHjVEKeNttLIWTiZSS1tPFyeXh/t6aVCajmrDI5at2o6NG9HyIf+Wn97zl8cNurVSqmgFW7KdzkABIAvByKITrlXECXOqKFrnFEAIITYD1k5AEhWyaP4p9a2XIqql+7PdrcNXbM77KQJAIAgdXnVkFtRkVJBlP6K/QY4bbxrT4yaNa1k7dMumg5uxQ8AloP1Zf9NQM6qL8WWS7cGOvbZ8QncNKbGE36VbAAAAABJRU5ErkJggg==",
        "title": "RegExr",
        "labels": []
    },
    {
        "link": "https://mangalogy.com/manga/battle-through-the-heavens/",
        "date": 1648799359,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaElEQVQ4jXWTvUprURCFvz1HkQRsAgaCiiCIgSSKIBcrK30Gi4BvIVhZWXiUKwgWVla+gYWNZWyEQMBGi5ggIvh3UALR/Jy9bmGSqxfuwMCsYe01M3sYgB0zawEx4AH13Tkn55y+58zM97gtYIceEOC/k7/HZqZ/hPuFYgDl8/l+4kcH2WxWY2NjA5xMJpXL5X5yp6amfKPR0Pn5uU+n04O2Jycn9fr6qlqtpuXlZQFaW1tTu91WGIY+CIIvkWKxKO+9JGl7e3tQ7ejoSH07OTkRoMPDQ0lSs9lUKpX6Gm9ubg6AOI5ZXV0FYGZmhvX1dbrdLt57KpUKAIVCAUlcXFwQRREAlsvlvgIz8vk8yWSSjY0NEokE3nvMjKurK8yM2dlZAEqlEgBBEEC9Xle73Va5XFar1VIYhmq1WiqVSnp7e1Mcx0qn08pms+p2u5KklZWVv9vx3uvz81NhGCqKInnv9fj4qP39fcVxrNvbWwEqFouSpJeXF6VSKZmZhoaGZM45vPecnZ0B4Jzj+Ph4MNb19TUACwsLSKJSqRBFEd57ut0uQ9572u025XKZra0tMpkMe3t7nJ6eIol6vQ7A4uIiAJeXlyQSCebn51laWgJJurm5UW+vAjQ6OqqPjw9J0ubmpoABrlarur+/H6zYoihStVoljmMFQcDw8DDNZpODgwM6nQ61Wg2A3d1d4jhmenqa8fFxOp0OT09PchMTExoZGVG1WnW9Dhw9KxQK3N3d8f7+PviHTCajRqPhnp+f9fDw4FzvIOzfx845JPEf3Of6wMySwK+eCN9FzOyHiJlhZv1L7ZjZ7z8H1qIZ3Qj/XQAAAABJRU5ErkJggg==",
        "title": "Read Battle Through the Heavens Manga Online – MangaLogy",
        "labels": []
    },
    {
        "link": "https://drive.google.com/drive/folders/1GO86DXXONNvZIDvuKXTbsQ3mkqhyoG50",
        "date": 1648890166,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtklEQVQ4jZ1TTWhUVxT+zjn33TczeTNm8rMwMgzUhVWKjotutAGlVhRKKW0tgnEhrtwKapGALy76Q7sRXNlNq4tKbAvRnSB1U6EtSKWlUGml2FaCzSKZZJz33n33HhdJNNCsPMtzvj84fMD/h9bZAQB0nZtZh6zbvjjwei93h0PmCACqFdaLAw+u0sTDW6uY9dwIALZNv9lKotov891uwy32sQCLt+vzuDR0t/u467dvPIKHK2AFAH5GT5eVqxSfJ+HGANuszHyRZEVx1vyeifGN4SqmCNAVLJ4LpGCkCJ1v3tktRibKXuFja2KXNOyJxiO7Oe5WskV4I5jQGeymFEHTZe7zBAqKAn8EQAAEFdGkWZs9PvTPLASBgEAEKQM+Vl2bYMV959fvHeVYxn1elgDIVIW7Uj81utifQg1MBHIZSmPxmp/B0dUUBIBemt7XGOLBe0TUCoX3bCWC6s8//frKq/oopfIgfmRGp8zhTAQB8Dc77MD76DIAbfLwSYltOxQ+ACwkjCA4gzQt6RKcIXwAYSggrkDgGG0YnCRAafv0W1ti0TvqaRBBPVclKotw9e6hmSNIp8whANfSc0G/3XAFlaXDRR/OsAoM5jnoLmp9+MM4u+S74BwRASxE7UrrvuXGgkcQA0WPbNhcPKhf+O3dLcF5VQJiYTW2v1e6tz7/N+4MdIg2bs2WYt+kUW5Wk5EAbGLQWICMVdVt+iMaGRmc7aPz1+3AbkzcnF5v3Lj3KQPkOZ6bBHp5xXoeTdS7su98/qT0rl+GolfmRVY28yfuy5eP+f+GWmx4Ic/rOgmQCqC89P3g43jXmag9OrwnsZYhViSKmSPLHFmmqMIxk8zVahxV2jT+5+XP6rfvf6VYfiMAJYB0/yfuDaehCYVnXtsTjxBEQYXknMzfOU03FSBaU6oXnqcPZiRKuF2x1gAAAABJRU5ErkJggg==",
        "title": "Alpine - Public- Download - Google Drive",
        "labels": []
    },
    {
        "link": "https://gist.github.com/oofnikj/e79aef095cd08756f7f26ed244355d62",
        "date": 1648890667,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC",
        "title": "Install Docker on Termux",
        "labels": []
    },
    {
        "link": "https://eightcolors.net/",
        "date": 1648900886,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC60lEQVQ4jV2TPWhedRjFz/P8//fevEloCUlp0iSgqAgRBweHCNJBHBR1cxRBsCBFXOJSEN6pg12UgpVsDi7WUQziVBAFPyc7FRepUUzy5v269/6/nuPQCtrf9BvOds4RPMC1ved2uaqX/HK4uNK0mxu+xYb0d1cSbtmR7j905c53/83Lv/LZqzt1d2b7/dNVeSutWa0LPVYWWq67Vi5owLlCpOMmzf5a+hi/t3tP3LwdAUCHgP66s1MP0ubnA+/eyWYaYsnFjCQJkLmQ88Ccirll37z9N7e/+PLRF5ohoDoE7OTC1nuVuJen0aaEgBBHCEgRUgACZvBmwHEXwqIOnp+unbk2BEx/3H3xSWP9Rgt/auKrAo9Cx2wqhYJsImYCM6Dc82oUQ46pufzB9ptP+74++1pQLPbO2ItJQEEgROiZikOmIlGRCyhFGIpqbyiZlSapL/tJtf5MV5U8c7GeIcqcSYIpSjEspYigHn1RaSLMgkqflF12Mi6FE/PP+lG9tdXVUcaucxPXY8I5kjmmWHQJkS09evOse0Puncyis3FyclJcPsluzZ80203ru3rs526kU51IJTFDFl3kUoics5e2JLo2S+k9p8FhHB1Piy9H8NmfVuvjrupXR27MsVYyBZAsCXOwGVppi0eXnfieyMFxHjynyduoeDeiO/SzeuXbVNnjrZcwlyIzi1JsTs2V9KwkFI+QHOpI5KDSJoe2qE2LW5hTvtGeizc6aUrUJQ0yQECNyAbRPFJxTFmRsyJnQTJhvteERErXG/b1w08f+SFAPqoG56sMl4o4FooYFUaBUWkU3t8ACpFEBw1gN346uvqzAkM9PNR32378db14rjEIKJqNAlJAAqCQlEIAA7+wkNl/xd/uXAGgCgzt4OCxcPv4zkshTq6r1kXrxqtzArmPihvU6py4EnK4fn7+yysHOAgATPAAT+19suv90aVl+ePiRv5z8+F8jO00vXu2y7fihPuv3/z+f3f+B1kK5DsUZGQbAAAAAElFTkSuQmCC",
        "title": "Eight Colors",
        "labels": []
    },
    {
        "link": "https://jarvisstaraq.blogspot.com/2021/02/your-java-2021-java-developer-roadmap.html?m=1",
        "date": 1649092247,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAnUlEQVQ4jWNgGIGAEc5azsDwtaGE5dfff3//MP7/z/D/H/N/hn8M//5yc/E29oVhajVgYDi+d8t/DHDl1uV4XNY1MTDcef8CWfXz398m4Xfiiiifn0gaNtUXE/CTEwPDwd0bIapPnD4USUA5AwMDA0M3A8P9L++e//o2EZssM6bQbgYGx79fX5w6Frf/KDEWMDAwMCQyMKQRq3bgAQCgtmOIBEic0QAAAABJRU5ErkJggg==",
        "title": "Your Java | The 2022 Java Developer RoadMap [UPDATED]",
        "labels": []
    },
    {
        "link": "https://expressjs.com/en/guide/writing-middleware.html",
        "date": 1649082702,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB8ElEQVQ4jZVSS2sTURi9350IFuza/IEKlizrVoX6wJrHyhR1YdT+gCRVaB5rx7aLUO2mhqQw2dhNG5cxTcjSLgLZ2wRirZMHQ6BDCMnMvcfF1aDiJt/i8h2+c78H5xAANkvwmdiMMQ8AIgIghFC5pmlE5Lou55xzrlYQQihIAKSUnP81Sv2cJlMCAA6Acy6EyOXz0Wgsl8tLKYnIMIyvp6dEpHp/PDio1+tExAGYpnn33v3j8vHlubnP5fJDv9+2bY/nUiwaG48nmqbVarVMJnPV65VSMgDRWDyVTuN3pNLpre1tABuJhK6/tSzr5q3bjUYDgOu6rN/vLy/fabfblmWZpmlZ1peTk/DqquM4Fxf2y7W1Bysr+f19AI7jSCk9tm3/MM1AIKh5NMaIMTYej68tLEwmk/n5KzeWljaSqU/FohCCiIiIdTodfyDQ6/Usy+p2u+qtVKpCiGaz+SgcXn/1OplKTScwAM8ikWw2O70hkUi+0XUAwWDoqFgEEAyFDg+P1A0kpWy1Wo+fPF1cvO71es++nQ2HQ6Ng6LouhNja3HRd9/z8e+T5i3c7Oz6fj0kpAQwGg/e7u/H4ulEoKLj3YW80GkkpXdcFUKlWS6USgP8r/Y/kfypNUkpV++UlzjXOFVSmUl5SNE3TaFZ7/wS6Om5XlLakwAAAAABJRU5ErkJggg==",
        "title": "Writing middleware for use in Express apps",
        "labels": []
    },
    {
        "link": "https://bitcoinvictory.org/anime/attack-on-titan-season-1-4-dual-audio/",
        "date": 1654930917,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADTUlEQVQ4jVXTb0hddRzH8c/n9zvneK7Xq2np1elME1fWJNpwsqggGJNR0Ggs2xpEgxixnlUPpKDbHxq1YNCgf1D4wLVVrD2JCNooGEwrsGwwQwc606nozXu993rPPef8ft+ezKjP48/74Yu4NRGQhBROppuqOnc8ReUMiKCTAEg7ayW+6C6Nn+PxlaXNLwAQAAQgAQlHHj2qm7tfY1zo5MYarAGEgKYAiVpYp2bOLP75jvfs6CebjZIMFAEpf/P4Cbdv8LO4uq0zzOfjIDAmjEIbBaEtB6EJcmtx7G9pd3cd/jj4es9JAnKrBcLh/ufcHQc+D0wq5NUvNIKsQnMfpOUBMAohxRtQf12GdWus6Tloku6GF42fP+YdHf9UFzJo0r1Pf2Vb+pP21w9Jx1fS9RhUaz/Y3E803kdqHyY7CcZlqpVrlO4nAYn632z75YzSbdsPeem7tkTzE5ZxSQkV2NgLfc9BOqkW4fqc6PZHWLX/S0j93UCYVfH8hHWbtqUrd3YdUaq2Y69NNAvyMyQVGBUQ/TREKS5KvPw7K+cGGF55W5i4nWzqgcRloHAdxk8LUlv3OnT8DisaUl4jxIqIofLrREyFqrEX7hNn4bQ/TBMWxM6NwqEn8UZOGQB0/A5FhxZxETQBIAawESAhSA1UcrDLv8HMXIKmA3fXi7AAJCoTUQlQWikJC3M6kYBU3SZiYsIa2I0i6fhi/56CGXsf0dgJMeE6VXonLElW1VrXqwejYFaZoPSDzd+g1HcLTAjRLrx9pwXJNHXbbvEOfS/+4HfUybSEV4eBYA3S2CNSmqYpr1/UQzvnZqSx9xm3vS9lillRxUXCBDBBHpYOWdVAuzAqlR9fgpr+FmzdbZ3ufcosTazKzxeOq5pXsRwVVl93TU5h+6CB0hZ/DANTF2CnzotMjoi9dgbuwhjoN1jce8R4zCpTuPlG9XuY15LJKP/YqfFXDpxNJTcmHwrLBWXqtxkbrUPWpmFzMxBQbF2HpVJOwsnpUmn1g5qB4bckQ/V/TKfqXtC1DUOKaqt1Eqg0PwiC8G5egTIlWBssmHz2Xe/lyunNhv9yzkAxA7v60f2tdbJ8GMk79sQGXRQjmjJrSyuXjF8/Uv389fn/cv4Ha7q4xpFrb4UAAAAASUVORK5CYII=",
        "title": "Attack On Titan Season 1-4 (Dual Audio) – Bitcoin Victory",
        "labels": []
    }
]

export default data;

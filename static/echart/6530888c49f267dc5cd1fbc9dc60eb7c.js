(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('秀洲区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330411","properties":{"name":"秀洲区","cp":[120.710082,30.765188],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BO@A@@@A@B@@@@A@BAA@@@@@@@ACC@@AAAAA@B@@AAAAA@ACA@A@A@G@EBC@A@@@EBA@CAADB@@@I@A@A@AAA@@DA@@A@@@@A@@B@A@AC@A@E@@@IAEA@BA@@B@@AA@@@@@@@A@@@@C@@A@@@@@BA@@C@@@BA@BAA@@@AB@@@@@@A@C@C@C@@@@@@BC@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@A@@@@@@BA@@@@A@@@@@@@@@@@D@@@@A@@@@@@@@@@@@@@D@@@@@@@@A@@AABCA@@@DAAA@@B@@@@@@@@B@@@A@@B@@@@AB@@@@A@@@@@@@@@AA@@@A@B@@B@BAA@@@A@B@A@@A@@B@@ACCCAECA@@@A@@B@@@@A@@@ADAD@@A@AAAB@@@@@@AB@@@A@@@@@@@A@@@@@@AB@@@@@A@@@@@@@C@@@B@@@B@@@@A@@A@@@DA@@@@@@@A@@@AB@@@@@@A@B@@@A@@@@@@@@A@@A@AB@@AA@AA@C@ABA@@@A@@BA@@@C@@AAB@AA@A@@DAB@B@BAB@FAB@@@D@@AAA@@@@B@@@B@B@BB@@@@@@BAA@B@@@@@@@B@@@@@B@@@@A@@A@@CDADABAD@@AB@B@@@DBDAB@@@@A@@A@@@BA@@A@@@BB@@@A@@BD@@@@@AD@@D@@AB@@B@@@@@@@A@@@@@ABB@AB@@@@AA@@@B@@@@@@@C@@AD@@@@@@@B@B@B@B@@B@@@@B@@A@@@@F@@@C@@B@@B@ABB@@@AB@@B@@@B@@B@@@@A@@A@@@D@@@@@@@@@@@B@B@@@@@@@@A@@@@@A@@@@@@@@BB@@@B@@A@@@BBBAD@@@B@@@BDAJA@@A@@AD@@@@@@@@BDA@A@@@AD@BB@BA@B@A@@@@BB@@@A@@@@@@@B@@@A@@BB@@@@@@@B@@@@@A@@@A@@B@@@@A@@@@@@@@B@A@B@@@@A@@@@B@@B@@@@B@@@@@@@B@@@@@@@@@@@A@@B@@@@@AB@@@@@B@@@@@@@@BA@@ABBBBA@@B@@B@A@BA@@@@BB@A@B@@@BBB@@@@@@B@@@@ABD@B@@@B@@@B@@BADAB@BB@@BA@@@@DBA@@B@@B@@@@@@@@A@@B@A@B@@@@A@@@@@@BA@@@A@@@A@@@@@@AA@A@@@@B@@B@@@@@@@@@@BD@@@@@@@B@@@B@@B@@@A@B@@@BA@@AA@@B@@@@@@@B@@@@@@@@@@@@@@@B@@@B@@@@A@@@@BBB@B@@BBHDCD@B@@@BB@@@BABB@DAD@B@BB@@@B@@B@@@@B@@B@@BA@@@B@@@A@@BBB@@@B@@BA@A@@@A@@D@BB@@BB@AB@@A@B@B@BB@@FB@BAB@BB@@@@@@@@@@B@@@@@@@@@@@BAA@@@@@@@@@@AB@AAB@@B@@@@@@@@D@@@A@@@@A@@@@@@@@@@BA@A@@@@@@@@@A@@@C@@@@@@@@@A@E@A@@@@B@BE@@@@BA@ABCDCDADABAB@@@@ADAB@@EHAB@B@@ECA@CACAECCA@@@@@B@@B@@@BBU`GJGFECIHBBA@@B@@DB@@@@CDCBADA@@B@@@@@B@@@@@B@@B@AB@@@@@@@@@BC@@@@B@B@BA@A@C@IA@D@@@F@B@B@B@F@D@H@F@F@@AD@B@D@B@D@B@B@B@B@BAD@B@@AB@B@D@BA@@B@BAB@@A@E@EA@DEAABA@@B@@C@@AA@@A@@E@@@@B@@AB@@@@A@@A@@@BA@@AA@@B@@@A@@@BA@@@@@@@@B@@@BABABA@@@BDDDBDDDBFB@DFBDDFBDBDDBDF@@BDBBFFBBBB@B@DFFDBFDFBDFF@@@BBHFB@BDBDBBFDBBBBB@@@@@BABAD@B@BADAD@B@DAB@B@@@B@B@B@BA@@B@DBF@D@BBB@BB@@BBB@BBBBDBBBB@@@B@B@B@BAD@@@D@BAB@B@B@FBB@D@@@@@B@@@AEB@@AFADCD@@@@AB@B@@@B@@@@@B@@@@B@@AB@B@B@@@B@B@D@@@B@@B@@@B@B@@B@@@@@B@D@B@@@@@B@@@@@B@@@@BB@@@B@@@B@@@@B@@@@@@@@@BA@@@@@@@@@@B@@@@A@@BC@@BA@@BDBB@@DDFHFJ@BDBB@B@FBBB@BBDBBBBB@@ABA@A@A@ABAHAFCAA@C@ADABBBABABAB@DB@@DDBDAFAB@BABAD@DBBBBH@D@JB@BAD@FAF@BAH@HAF@DBBBD@DBD@B@D@D@B@BAF@DAF@DADCHCHCBADCDCD@@AFA@@@GBIDGD@@BDFFDBBBBBDD@DB@BBDD@BDA@@DCBADAB@BBBB@BBB@BBBB@BAFAD@DBF@D@F@D@DCDABADCBCDAF@D@F@BBB@F@@@AC@AA@FC@@@@BDBD@B@@DAB@BB@@BAD@BAD@@@B@@@B@@@@@@B@A@@@@@@B@@AAB@C@@@@A@@@A@@ABANA@@DC@AA@@@BAA@@@@@BACA@@@@AA@@A@@@@@@@@@@A@@DC@AB@B@BA@AB@@BB@@@@AB@@@@C@C@@DA@@BABA@AA@@@CCECA@AAC@AAA@AACCC@@@@@AA@@BA@@A@@AA@@@@A@@A@BA@ABABA@@DAD@@@BA@@C@@@@ADB@ABA@ABA@@@CB@@ABA@ACCAA@A@A@@@A@@@@B@B@@@@A@ABC@@@@HB@EH@@@@B@D@D@D@@B@DBB@BED@@BH@@@@@BC@@B@B@B@@B@@@@@@@B@@BBD@@C@AB@BHB@BA@A@A@@A@@@A@@@@C@@@AMC@@@ABC@A@ABE@@@E@ABC@A@@@@@@A@C@@C@@@AB@@AA@@A@C@A@CB@@AB@@A@@@A@@@@AA@C@@@I@@@@A@@AA@@@@@AA@A@AB@@C@@@@B@B@@A@A@@@@@@@BB@@BFA@CB@@@@A@@E@@AA@@ACA@@@@@@@@BAB@@@BB@A@A@A@AAA@@@@@C@A@@AA@@@A@AB@CA@A@AB@@@@@@B@B@@A@@@B@@@B@A@B@@A@@BC@@@@BAA@@A@@@A@@@GB@@@B@@ABB@AFB@B@@@BB@@B@@@B@A@@B@@ABAA@@@AA@@@@BGBBB@AD@@@@DBBC@@@@D@@@DD@@DBABBB@@B@ABD@AB@B@@@BA@@BA@AA@@BAC@AJBBB@@@B@@AB@@B@@@@@AB@@AB@@FL@AC@@@C@C@ABGBAAA@@C@@A@@BA@@DACC@@ACCAGECC@@CCEE@B@@A@C@@@B@@AA@@A@AA@BCEEAB@B@BA@@C@BCABAAA@@C@@AH@EEBA@@BANIBADE@@WIECUI@@GAADAB@DAB@BGFAAAAA@ACAAAACA@@ABEPGAC@G@A@I@@@IAEAG@AA@@A@EE@@@@B@BB@@B@BABABAB@B@@AAAAC@CA@@A@@@@AA@A@A@@ACBA@@@A@@BC@A@AA@A@@@@@@BC@@A@@@@CAA@@A@C@AI@E@A@C@A@IAKAAA@@AAAAGCICA@@@@B@@CCA@@@@@@@@@@AAAOGOGSIKE@@@ABA@@@@@A@@@@@@@@@@BAA@@A@@@@A@@A@@@@@@@@@C@@A@@@@B@A@@@@@@A@@@@@@AB@@@@@AAB@A@BAA@DAA@@@@A@@@@@@@AAB@A@BAABA@@BB@@@@@@B@@@B@@@@@@A@@@@B@@@A@@ABA@@B@@@@@@@@@B@A@@AB@@@@@@@@@B@B@@@BB@A@@B@B@@@B@ADB@BB@@@@B@ABB@@@A@@@@@@@@BB@BBDB@CB@@BB@@ABB@@DB@@BCJDB@BA@ABEDE@ACC@BA@@AA@A@@A@@@CII@@CCBADCB@@@BA@@BB@A@@@@@@D@@BB@@@@@@B@@@B@@B@@@B@@@BB@@@@@@@B@@BB@A@A@@B@DDDCTJBBBCA@@@@@@A@@@@B@@A@@@@B@@A@@@C@@@@A@@@@A@@BAAAA@@@@@AC@AB@A@BA@@@@@@BD@@@A@@@@@@@@B@@B@@@@@@B@ADB@@A@@@B@@@@@@@@B@@BB@@@B@@@BB@B@@@@@@@@B@@@@@@@@@@@@@@B@@@@B@@A@@BEB@B@@@BB@@FB@@@A@C@@@@@@@ABB@ADB@AB@@@@@@@@@BAB@BB@CB@ABB@@A@B@BD@@@@@@@@@B@@@A@@B@@B@@B@@BB@@B@@@@@@@@@@@@@BBAB@@B@@A@@@ABBAB@@B@@@@B@@F@@ADBFBF@@@@BABH@BA@A@CB@@AACCCPKHENMAAB@@A@C@CBE@@BC@AB@@@A@@A@AA@AAAA@AA@A@@@@@AB@@E@@AAA@@@@AAB@@AB@@@@@@A@@@@@A@@@@A@@@@@@@AA@B@@A@@@@@@@@@@A@@A@@B@@@ABA@B@@B@@A@@@@@A@@@@BAFEDABAAA@@@@AA@@@@@@AA@A@@@A@@A@@@@@A@@A@A@A@@@@A@@@@@@A@@BABA@AA@@@B@@A@@@AAB@@@AA@@@AABAAA@@@@@A@@@A@@@AAA@@B@@A@@B@B@@@@AB@D@@D@BB@B@@@@@B@@@@@BB@A@BB@@@@@@@@@@@@F@@B@@AB@@@@@@AB@@@@@@@@@@A@@@@@@B@B@@@@@@@BB@@JB@A@@AAAACAECGE@@ABAAC@@@A@A@A@@@@C@@@ABC@CCB@A@A@@A@@@@@A@@@@@AA@@@@@@@A@@D@@@AA@@@@@@@@@B@A@@@@A@@@@@@A@@A@@@@@@@@@A@B@AA@@@@A@@A@@C@@AB@@B@@@@@@@A@@@@A@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@BAA@@AG@@@AA@@@@@@@@@A@A@@BA@@@A@@AAB@@A@@@@@@@@@@@@@@@A@@A@@@@A@@@@@@@A@@A@@@@@@A@A@@@A@@@@@@@@B@@@@A@@@A@BAA@@B@@A@@@@@@A@@@A"],"encodeOffsets":[[123629,31334]]}}],"UTF8Encoding":true});}));
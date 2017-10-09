/*----- constants -----*/
var boards = [`<table>
  <tr id='0'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
  <tr id='1'>
  <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
  <tr id='2'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
  <tr id='3'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
  <tr id='4'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
  <tr id='5'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
  <tr id='6'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
  <tr id='7'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
  <tr id='8'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
  </tr>
</table>`, `<table>
  <tr id='0'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='1'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='2'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='3'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='4'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='5'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='6'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='7'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='8'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='9'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='10'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='11'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='12'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='13'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='14'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
  <tr id='15'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
  </tr>
</table>`, `<table>
  <tr id='0'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='1'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='2'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='3'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='4'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='5'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='6'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='7'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='8'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='9'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='10'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='11'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='12'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='13'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='14'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='15'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='16'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='17'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='18'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='19'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='20'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>
  <tr id='21'>
    <td class='0'></td>
    <td class='1'></td>
    <td class='2'></td>
    <td class='3'></td>
    <td class='4'></td>
    <td class='5'></td>
    <td class='6'></td>
    <td class='7'></td>
    <td class='8'></td>
    <td class='9'></td>
    <td class='10'></td>
    <td class='11'></td>
    <td class='12'></td>
    <td class='13'></td>
    <td class='14'></td>
    <td class='15'></td>
    <td class='16'></td>
    <td class='17'></td>
    <td class='18'></td>
    <td class='19'></td>
    <td class='20'></td>
    <td class='21'></td>
  </tr>  
</table>`];

/*----- app's state (variables) -----*/
var board;
var boardDimensions;
var numMines;
var winner;
var gameOver;
var explosionCoordinates;

/*----- cached element references -----*/
var $table = $('.gameBoard');
var $navBar = $('nav');
/*----- event listeners -----*/

// Gameplay listener, handles game events

$table.on('click', 'td', handleClick);

// Button event listeners, serve to handle page navigation signals from user

$navBar.on('click', 'button', handleButtonClick);

function resetGame() {
  init();
  console.log('game reset')
}

function handleButtonClick() {
  var $button = $(this);
  switch($button.html()) {
    case 'Play Game':
      $button.parent().hide().siblings('.difficulty').show();
      break;
    
    case 'Beginner':
    case 'Intermediate':
    case 'Expert':
      $button.parent().hide().siblings('.gameplay').show();
      boardDimensions = parseInt($button.attr('data-boardDimension'));
      numMines = parseInt($button.attr('data-numberMines'));
      $('.gameBoard').html(boards[parseInt($button.attr('data-boardNumber'))]);
      init();
      break;
    
    case 'Reset':
      resetGame();
      break;

    case 'Change Difficulty':
      $button.parent().hide().siblings('.difficulty').show();
      break;

    case 'Main Menu':
      $button.parent().hide().siblings('.start-screen').show();
  }
}

/*----- classes -----*/
class Cell {
  constructor (mine, adjMines, flagged, shown) {
    this.mine = mine;
    this.adjMines = adjMines;
    this.flagged = flagged;
    this.shown = shown;
  }
}
/*----- functions -----*/
// new Cell(false, 0, false, false)
function init () {
  board = new Array(boardDimensions).fill(null);
  board.forEach(function(elem, idx) {
    elem = new Array(boardDimensions).fill(null);
    elem = elem.map(function() {
      return new Cell(false, null, false, false);
    });
    board[idx] = elem;
  })
  // boardDimensions = 9;
  // numMines = 10;
  winner = null;
  gameOver = null;
  randomMinePlacement(boardDimensions);
  assignAdjMines();

  render();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function randomMinePlacement(dimensions) {
  for (var i = 0; i < numMines; i++) {
    var row = getRandomIntInclusive(0, dimensions - 1);
    var col = getRandomIntInclusive(0, dimensions - 1);
    if (board[row][col].mine) {
      i--;
    } else {
      board[row][col].mine = true;
    }
  }
}

function assignAdjMines() {
  for (var i = 0; i < boardDimensions; i++) {
    for (var j = 0; j < boardDimensions; j++) {
      var currentCell = board[i][j];
      currentCell.row = i;
      currentCell.column = j;
      if (currentCell.mine) {
        currentCell.adjMines = null;
      }
      else {
        checkNeighbours(i, j).forEach(function(neighbour) {
          neighbour.mine && (currentCell.adjMines += 1);
        })
      }
    } 
  }
}

function checkNeighbours(row, col) {
  var neighbours = []; 
  for (var i = (row - 1); i < (row + 2); i++) {
    for (var j = (col - 1); j < (col + 2); j++) {
      if (i >= 0 && j >= 0 && i <= (boardDimensions - 1) && j <= (boardDimensions - 1) && (i !== row || j !== col)) {
        var neighbour = board[i][j];
        neighbours.push(neighbour);
      }
    }
  }
  return neighbours;
}

function expandShownCells(row, col) {
  cell = board[row][col];
  if (cell.mine) {
    return;
  } else if (cell.shown) {
    return
  } else if (cell.adjMines) {
    cell.shown = true;
    return
  } else {
    cell.shown = true;
    checkNeighbours(row, col).forEach(function(neighbour) {
      expandShownCells(neighbour.row, neighbour.column);
    })
  }
}

function calculateWinner() {
  winner = board.every(function(tableRow) {
    return tableRow.every(function(cell) {
      return (cell.mine || cell.shown);
    });
  })
}

function handleClick() {
  console.log('clicked')
  var row = parseInt($(this).parent().attr('id'));
  var column = parseInt($(this).attr('class'));
  if (winner || gameOver) {
    return;
  } else if (board[row][column].mine) {
    explosionCoordinates = [row, column];
    gameOver = true;
  } else {
    expandShownCells(row, column);
    calculateWinner();
  }

  render();
}

function render() {
  if (!gameOver) {
    board.forEach(function(tableRow, row) {
      tableRow.forEach(function(cell, col) {
        var $currentCell = $(`#${row}`).children(`.${col}`);
        if (cell.shown) {
            $currentCell.css('background-color', 'green');
            $currentCell.html(cell.adjMines);
        } else {
          $currentCell.css('background-color', 'white');
          $currentCell.html(null);
        }
      })
    })
    if (winner) {
      alert('You won!')
    }
  } else {
    $(`#${explosionCoordinates[0]}`).children(`.${explosionCoordinates[1]}`).css('background-color', 'red').html('X');
  }
}
// init();
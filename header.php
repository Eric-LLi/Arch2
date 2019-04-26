<div id="header" data-options="region: 'north'" style="width: 100%; height: 120px; padding: 5px;display:none">
  <div class="easyui-layout" data-options="fit: true">
    <div data-options="region: 'west', border: false" style="width: 10%;">
      <img src="images/logo1.jpg" width="110" height="110" />
    </div>

    <div data-options="region: 'east', border: false" style="width: 25%;text-align:right;margin-top:65px;margin-right:20px">
      <?php
        if (SharedIsLoggedIn())
        {
      ?>
          <form id="frmLogout" action="member.php" method="post">
            <input name="fldLogout" type="hidden" value="1"/>
            Welcome back <strong><?php echo $_SESSION['username']; ?></strong>
            &nbsp;&nbsp;&nbsp;
            <a href="#" id="btnLogout" class="easyui-linkbutton" data-options="iconCls:'icon-lock'">Logout</a>
          </form>
      <?php
        }
        else
        {
      ?>
          <!-- <a href="#" id="btnLogin" class="easyui-linkbutton" data-options="iconCls:'icon-login'" style="font-family:Arial, Helvetica, sans-serif;">Login</a> -->
          <form id="frmLogin" action="index.php" method="post">
            <div id='frmLoginConatiner' style="display:none">
              <input id="fldUid" name="fldUid" class="easyui-textbox" label="Login:" labelPosition="left" data-options="prompt: 'Enter login email address...', validType: 'email'" style="width: 300px;" />
              &nbsp;&nbsp;&nbsp;
              <input id="fldPwd" name="fldPwd" class="easyui-passwordbox" prompt="Login password" iconWidth="28" style="width: 200px;" />
              &nbsp;&nbsp;&nbsp;
            </div>
            
            <a href="#" id="btnLogin" class="easyui-linkbutton" data-options="iconCls:'icon-login'" style="font-family:Arial, Helvetica, sans-serif;">Login</a>
          </form>
      <?php
        }
      ?>
    </div>

    <div data-options="region: 'center', border: false" style="padding: 5px;text-align:center;">
      <h2 style="font-size:24px; text-align:center;margin-top:30px">Assessment Experts & Design Architects</h2>
      <!-- <h3 style="font-size:16px; text-align:right;">Call us on <strong>1300 13 45 13</strong></h3>
      <p>&nbsp;</p> -->
    </div>
</div>
</div>

<div data-options="region: 'north'" style="width: 100%; height: 150px; padding: 5px">
  <div class="easyui-layout" data-options="fit: true">
    <div data-options="region: 'west', border: false" style="width: 40%; height: 150px; padding: 5px">
      <img src="images/logo1.jpg" width="130" height="130" />
    </div>

    <div data-options="region: 'east', border: false" style="width: 58%; height: 130px; padding: 5px;">
      <div class="easyui-layout" data-options="fit: true">
        <div data-options="region: 'north', border: false" style="width: 100%; height: 90px;">
          <h2 style="font-size:24px; text-align:right;">Assessment Experts & Design Architects</h2>
          <h3 style="font-size:16px; text-align:right;">Call us on <strong>1300 13 45 13</strong></h3>
          <p>&nbsp;</p>
        </div>

        <div data-options="region: 'south', border: false" style="width: 100%; height: 30px; text-align:right;">
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
              <form id="frmLogin" action="index.php" method="post">
                <input name="fldUid" class="easyui-textbox" label="Login:" labelPosition="left" data-options="prompt: 'Enter login email address...', validType: 'email'" style="width: 300px;" />
                &nbsp;&nbsp;&nbsp;
                <input name="fldPwd" class="easyui-passwordbox" prompt="Login password" iconWidth="28" style="width: 200px;" />
                &nbsp;&nbsp;&nbsp;
                <a href="#" id="btnLogin" class="easyui-linkbutton" data-options="iconCls:'icon-login'" style="font-family:Arial, Helvetica, sans-serif; font-size:">Login</a>
              </form>
          <?php
            }
          ?>
        </div>
      </div>
    </div>
  </div>
</div>

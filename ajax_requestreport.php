<?php
  require_once("shared.php");

  global $gConfig;

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['firstname']) && isset($_POST['lastname']))
    {
      $firstname = SharedCleanString($_POST['firstname'], 50);
      $lastname = SharedCleanString($_POST['lastname'], 50);
      $email = SharedCleanString($_POST['email'], 50);
      $mobile = SharedCleanString($_POST['mobile'], 50);
      $notes = SharedCleanString($_POST['notes'], 50);
      $repPropertyAssessment = $_POST['repPropertyAssessment'];
      $repTimberPest = $_POST['repTimberPest'];
	  $repArchitectAdvice = $_POST['repArchitectAdvice'];
	  $repMaintenanceAdvice = $_POST['repMaintenanceAdvice'];
	  $repConstructionQA = $_POST['repConstructionQA'];
	  $repDilapidationSurvey = $_POST['repDilapidationSurvey'];

      $body = "<strong>First name:</strong> $firstname<br/>" .
              "<strong>Last name:</strong> $lastname<br/>" .
              "<strong>Email:</strong> $email<br/>" .
              "<strong>Mobile:</strong> $mobile<br/>" .
              "<strong>Notes:</strong><br/>$notes<br/><br/>" .
              "Requires information about the following reports:<br/>" .
              "<ul><br/>";

      if ($repPropertyAssessment == 1)
        $body .= "<li>Property Assessment</li><br/>";

      if ($repTimberPest == 1)
        $body .= "<li>Timber Pest Inspection</li><br/>";
		
	  if ($repArchitectAdvice == 1)
        $body .= "<li>Architect's Advice Report</li><br/>";
		
	  if ($repMaintenanceAdvice == 1)
        $body .= "<li>Maintenance Advice</li><br/>";
		
	  if ($repConstructionQA == 1)
        $body .= "<li>Construction Quality Assurance</li><br/>";
		
	  if ($repDilapidationSurvey == 1)
        $body .= "<li>Residential Dilapidation Survey</li><br/>";		

      $body .= "</ul><br/>";
      error_log($body);

      if (SharedSendHtmlMail($email, $firstname + ' ' + $lastname, $gConfig['adminemail'], "Web Enquiry", "Online Report Request", $body))
      {
        $rc = 0;
        $msg = "Thank you for your enquiry, we will respond as soon as possible";
      }
      else
        $msg = "Sorry, but we're unable to process your request at this time, please try again...";
    }
    else
      $msg = "Missing contact information for report request...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to request report...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>

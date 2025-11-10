// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

// Called when answering question about whether NHS number is known
router.post("/magical-powers-action", (req, res) => {
  // Make a variable and give it the value from 'nhsNumberKnown'
  const mostBotheringSymptom = req.session.data.mostBotheringSymptom;

  // Check whether the variable matches a condition
  if (mostBotheringSymptom === "I've moved an object with my mind") {
    // Send user to a page where they'll enter their NHS number
    res.redirect("/more-detail");
  } else if (mostBotheringSymptom === "I have none of these") {
    // Send user to a page where they can find their NHS number
    res.redirect("/ineligible");
    
  } else if (mostBotheringSymptom === "I've set something on fire with my mind") {
    // Send user to a page where they can find their NHS number
    res.redirect("/more-detail");
    
  } else if (mostBotheringSymptom === "I keep turning invisible") {
    // Send user to a page where they can find their NHS number
    res.redirect("/more-detail");
    
  } else if (mostBotheringSymptom === "I unexpectedly teleported to Thailand") {
    // Send user to a page where they can find their NHS number
    res.redirect("/more-detail");
      } else if (mostBotheringSymptom === "I'm thirsty for blood") {
    // Send user to a page where they can find their NHS number
    res.redirect("/blood-hunted");
  } else {
    // Send user back to the question page
    res.redirect("/ineligible");
  }
  
});

module.exports = router

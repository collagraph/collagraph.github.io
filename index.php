<?php require_once("functions.php"); ?>

<?php require_once('html-head.php'); ?>

<?php require_once('header.php'); ?>

<!-- 
	
	Body
	
-->

<!-- What we do -->

<section id="our-approach" class="our-approach main">

	<h2>Our approach</h2>
	
	<div class="principle">
	
		<h3>Designed for you</h3>
		
		<p>A website designed from the ground up to achieve <em>your</em> goals. We make sure you, and your users, are happy.</p>
	
	</div>
	
	<div class="principle">
	
		<h3>Content strategy</h3>
		
		<p>Well organised information puts you in control. We help you to develop strong web content that&#8217;s clear and effective.</p>
	
	</div>
	
	<div class="principle">
	
		<h3>Mobile, Tablet, Desktop, ?</h3>
		
		<p>One site that looks and works great, no matter how your users view it.</p>
	
	</div>
	
</section>

<section id="our-work" class="our-work main">

	<h2>Our work</h2>

	<!--<h3>The Plan</h3>-->
	
	<h3>Investigate.org.au</h3>
	
	<figure>
		<img src="images/investigate-multi-device.png" alt="Investigate.org.au website displayed across a range of desktop, tablet and mobile devices" />
	</figure>

</section>

<!--
<section id="about-us" class="about-us main">
	<h2>Who we are</h2>
	
	<h3>Robert Irish</h3>
	
	<h3>Luke Bacon</h3>
</section>
-->
<form id="contact" class="contact-form main" >
		<h2>Contact</h2>
		<p>Let us know about your project</p>
	
		<fieldset>
			<label for="contact-name">Your name <span class="discrete">(required)</span></label>
			<input type="text" required id="contact-name" name="contact-name" />
		</fieldset>
		
		<fieldset>
			<label for="contact-email">Email address <span class="discrete">(required)</span></label>
			<input type="email" required id="contact-email" name="contact-email" />
		</fieldset>

		<fieldset>	
			<label for="contact-org">Organisation/Company</label>
			<input type="text" id="contact-org" name="contact-org" />
		</fieldset>
		
		<fieldset>
			<label for="contact-msg">How can we help? <span class="discrete">(required)</span></label>
			<textarea class="textarea" id="contact-msg" name="contact-msg" cols="50" rows="5" spellcheck="true" required ></textarea>
		</fieldset>

		<fieldset class="form-additional">		
			<label for="deadline-q" id="deadline-c">Does your project have a deadline?</label>
			<input type="checkbox" name="deadline-q" id="deadline-q"/>
			<div id="more-deadline">
				<label for="deadline">When is the project deadline?</label>
				<input name="deadline" type="text"/>
			</div>
		</fieldset>

		<fieldset class="form-additional">
			<label for="budget-q" id="budget-c">Do you have a rough budget for us?</label>
			<input type="checkbox" name="budget-q" id="budget-q"/>
			<div id="more-budget">
				<label for="budget">About how much is the budget?</label>
				<input name="budget" type="text"/>
			</div>
		</fieldset>
		
</form>

<?php require_once('footer.php'); ?>
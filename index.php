<?php require_once("functions.php"); ?>

<?php require_once('html-head.php'); ?>

<?php require_once('header.php'); ?>

<!-- 
	
	Body
	
-->

<!-- What we do -->

<section id="our-approach" class="our-approach main clearfix">

	<h2>Our approach</h2>
	
	<div class="principle">
	
		<h3>Designed for you</h3>
		
		<p>A website designed from the ground up to achieve <em>your</em> goals. We make sure you, and your users, are&nbsp;happy.</p>
	
	</div><!--
	
	--><div class="principle">
	
		<h3>Content strategy</h3>
		
		<p>Well organised information puts you in control. We help you to develop strong web content that&#8217;s clear and&nbsp;effective.</p>
	
	</div><!--
	
	--><div class="principle">
	
		<h3>Mobile, Tablet, Desktop, ?</h3>
		
		<p>One site that looks and works great, no matter how your users view&nbsp;it.</p>
	
	</div>
	
</section>

<section id="our-work" class="our-work main clearfix">

	<h2>Our work</h2>

	<div class="flexslider">
		
		<ul class="slides">
		
			<li>
			
				<article id="investigate-org-au" class="hentry">
			
					<figure class="photo">
						<img src="images/work/investigate-org-au/slide-1.jpg" alt="Investigate.org.au website displayed across a range of desktop, tablet and mobile devices" />
					</figure>
				
					<h3 class="entry-title">Investigate.org.au</h3>
						
					<div class="entry-summary">
						
						<p>This is a sample paragraph written in regards to working on Investigate.org.au. It outlines the main considerations taken into account prior to commencement of the project, as well as the relationship between those initial goals and the final design outcomes.</p>
						
						<ul>
							<li><a class="slide-link slide-1 current">Small</a></li>
							<li><a class="slide-link slide-2">Medium</a></li>
							<li><a class="slide-link slide-3">Large</a></li>
						</ul>
						
					</div>
					
				</article>
		
			</li>
		    <li>
		    
			    <article id="sustainable-communities-plan" class="hentry">
				
					<figure class="photo">
						<img src="images/work/sustainable-communities-plan/slide-1.jpg" alt="The Sustainable Communities Plan website displayed across a range of desktop, tablet and mobile devices" />
					</figure>
				
					<h3 class="entry-title">The Sustainable Communities Plan</h3>
						
					<div class="entry-summary">
						
						<p>This is a sample paragraph written in regards to working on theplan.sustainablehouse.com.au. It outlines the main considerations taken into account prior to commencement of the project, as well as the relationship between those initial goals and the final design outcomes.</p>
						
						<ul>
							<li><a class="slide-link slide-1 current">Small</a></li>
							<li><a class="slide-link slide-2">Medium</a></li>
							<li><a class="slide-link slide-3">Large</a></li>
						</ul>
						
					</div>
					
			    </article>
			
			</li>
		    <li>
			
				<article id="acoss-national-conference" class="hentry">
				
					<figure class="photo">
						<img src="images/work/sustainable-communities-plan/slide-1.jpg" alt="The ACOSS National Conference website displayed across a range of desktop, tablet and mobile devices" />
					</figure>
				
					<h3 class="entry-title">ACOSS National Conference 2013</h3>
						
					<div class="entry-summary">
						
						<p>This is a sample paragraph written in regards to working on conference.acoss.org.au. It outlines the main considerations taken into account prior to commencement of the project, as well as the relationship between those initial goals and the final design outcomes.</p>
						
						<ul>
							<li><a class="slide-link slide-1 current">Small</a></li>
							<li><a class="slide-link slide-2">Medium</a></li>
							<li><a class="slide-link slide-3">Large</a></li>
						</ul>
						
					</div>
				
				</article>	
						
			</li>
			
		</ul>
		
	</div>
	
</section>

<!--
<section id="about-us" class="about-us main">
	<h2>Who we are</h2>
	
	<h3>Robert Irish</h3>
	
	<h3>Luke Bacon</h3>
</section>
-->
<form id="contact" class="contact-form main clearfix">
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
		<fieldset class="checkbox-list">
			<legend>Service required:</legend>
			<label for="service-webdesign" class="checkbox">Web design</label>
			<input id="service-webdesign" name="service-webdesign" type="checkbox">
			<label for="service-consulting" class="checkbox">Consulting</label>
			<input id="service-consulting" name="service-consulting" type="checkbox">
			<label for="service-general" class="checkbox">General information design</label>
			<input id="service-general" name="service-general" type="checkbox">
		</fieldset>
		</fieldset>
		<fieldset>
			<label for="contact-msg">How can we help? <span class="discrete">(required)</span></label>
			<textarea class="textarea" id="contact-msg" name="contact-msg" cols="50" rows="5" spellcheck="true" required ></textarea>
		</fieldset>

		<fieldset class="form-additional">		
			<label for="deadline-q" id="deadline-c" class="checkbox">Does your project have a deadline?</label>
			<input type="checkbox" name="deadline-q" id="deadline-q"/>
			<div id="more-deadline" class="display-hide">
				<label for="deadline">When is the project deadline?</label>
				<input id="deadline" name="deadline" type="text"/>
			</div>
		</fieldset>

		<fieldset class="form-additional">
			<label for="budget-q" id="budget-c" class="checkbox">Do you have a rough budget for us?</label>
			<input type="checkbox" name="budget-q" id="budget-q"/>
			<div id="more-budget" class="display-hide">
				<label for="budget">About how much is the budget?</label>
				<input id="budget" name="budget" type="text"/>
			</div>
		</fieldset>
		<div>
			<input type="button" value="Send" class="button" >
			<p class="msg alert required-alert">Please make sure to fill out all the required fields.</p>
			<p class="msg alert email-alert">Please make sure you've entered your email correctly.</p>
			<p class="msg success">Thanks for getting in touch. We'll be in contact shortly.</p>
</form>

<?php require_once('footer.php'); ?>
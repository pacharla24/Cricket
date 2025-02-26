
Tuesday, February 25, 2025 8:30 PM - 9:00 PM

Open in Stream
Content
No files were shared.

Notes

Transcript
Transcript. Use arrow keys to navigate between transcript entries.


Search

AI-generated content may be incorrect

Vincent Chan
0 minutes 4 seconds0:04
Vincent Chan 0 minutes 4 seconds
Would you mind just reiterating the solution?
WT

Willett, Teresa
0 minutes 4 seconds0:04
Willett, Teresa 0 minutes 4 seconds
Yeah.

Vincent Chan
0 minutes 7 seconds0:07
Vincent Chan 0 minutes 7 seconds
I just turned on Coldplay, so I've done all of it.
WT

Willett, Teresa
0 minutes 10 seconds0:10
Willett, Teresa 0 minutes 10 seconds
Oh, sure, no problem.
Willett, Teresa 0 minutes 11 seconds
So using the requirements that were already shared, the web messaging requirements, we will have the web messenger configuration and the Web Messenger deployment configured to point to an inbound message flow with an in queue flow that will basically work.
Willett, Teresa 0 minutes 35 seconds
Going through all these requirements, letting the customer know what their position is in queue upon connection, and then after so much time waiting.

Vincent Chan
0 minutes 39 seconds0:39
Vincent Chan 0 minutes 39 seconds
Mm hmm.
WT

Willett, Teresa
0 minutes 44 seconds0:44
Willett, Teresa 0 minutes 44 seconds
So I think we maybe want to reiterate how long of a wait. Yeah. Do we want to do 3 minutes instead of 5 minutes, which seems excessive.

Vincent Chan
0 minutes 45 seconds0:45
Vincent Chan 0 minutes 45 seconds
Take 3 minutes.
Vincent Chan 0 minutes 52 seconds
I think 5 seems a bit long, I'd say.
WT

Willett, Teresa
0 minutes 54 seconds0:54
Willett, Teresa 0 minutes 54 seconds
Yeah.

Andrew Barno
0 minutes 55 seconds0:55
Andrew Barno 0 minutes 55 seconds
Yeah, 3 minutes probably.
WT
Willett, Teresa
0 minutes 57 seconds0:57
Willett, Teresa 0 minutes 57 seconds
3 minutes.
Willett, Teresa 0 minutes 58 seconds
So here's my recommendation, just from what we've done in the past with other clients, let's do a 2 minute notification up front because usually your expectations to connect to an agent are pretty high at the beginning.

Andrew Barno
1 minute 6 seconds1:06
Andrew Barno 1 minute 6 seconds
OK.
WT
Willett, Teresa
1 minute 11 seconds1:11
Willett, Teresa 1 minute 11 seconds
So after 2 minutes, hey, you're still in position number.
Willett, Teresa 1 minute 14 seconds
Please continue to wait. An agent will be with you shortly.
Willett, Teresa 1 minute 18 seconds
And then we can wait 3 minutes after that give them that same message. You're now in this position in queue.
Willett, Teresa 1 minute 25 seconds
Please continue to wait if someone will be with you shortly, then we wait 10 minutes and after 10 minutes we give them the final message, which will say. Unfortunately, we're really busy at this time.
Willett, Teresa 1 minute 37 seconds
Please continue to chat with our Cozi chatbot or you can reach out to the call center.
Willett, Teresa 1 minute 41 seconds
And provide them the number and then it will disconnect from Genesis but still allow them to continue their conversation within the chatbot.

Andrew Barno
1 minute 43 seconds1:43
Andrew Barno 1 minute 43 seconds
Right.
Andrew Barno 1 minute 50 seconds
Right.

Vincent Chan
1 minute 52 seconds1:52
Vincent Chan 1 minute 52 seconds
Oh, sorry, just a question.
Vincent Chan 1 minute 53 seconds
Was it so? First is 2 minutes, then it's. Is it repeating 3 minutes after that until we reach 10 OK.
WT
Willett, Teresa
1 minute 58 seconds1:58
Willett, Teresa 1 minute 58 seconds
Yeah.
Willett, Teresa 2 minutes
Yeah. So we'll do. No, no.

Andrew Barno
2 minutes 2 seconds2:02
Andrew Barno 2 minutes 2 seconds
You said 2/5.
WT
Willett, Teresa
2 minutes 2 seconds2:02
Willett, Teresa 2 minutes 2 seconds
So we'll do first message.
Willett, Teresa 2 minutes 5 seconds
Yeah, we'll do 2 minutes first message and then after three minutes after that second message, right.

Andrew Barno
2 minutes 15 seconds2:15
Andrew Barno 2 minutes 15 seconds
Yeah, it's a 2 minute mark.
WT
Willett, Teresa
2 minutes 15 seconds2:15
Willett, Teresa 2 minutes 15 seconds
So right now we have a total of.

Andrew Barno
2 minutes 16 seconds2:16
Andrew Barno 2 minutes 16 seconds
And then the five minute mark. So we have a total of 5 minutes right now, right?

Vincent Chan
2 minutes 19 seconds2:19
Vincent Chan 2 minutes 19 seconds
Mm hmm.
WT
Willett, Teresa
2 minutes 19 seconds2:19
Willett, Teresa 2 minutes 19 seconds
Right. So right there, that's 5 minutes.
Willett, Teresa 2 minutes 21 seconds
So then after that, do we want to skip right to 10 or we could do another one at 5 minutes that says the third message which is something similar to the second and 1st and then wait another 10 minutes and then disconnect with final message.

Vincent Chan
2 minutes 37 seconds2:37
Vincent Chan 2 minutes 37 seconds
If it gets a position, update.
WT
Willett, Teresa
2 minutes 39 seconds2:39
Willett, Teresa 2 minutes 39 seconds
Yep, it's yeah.

Vincent Chan
2 minutes 41 seconds2:41
Vincent Chan 2 minutes 41 seconds
Then.
Vincent Chan 2 minutes 43 seconds
My worry is like let's say the position's updating right and it actually that time is actually like take 10 minutes. Then we disconnect them before like they're like, oh, you're next in queue. And then we disconnect them.
Vincent Chan 2 minutes 54 seconds
Do you know what I mean?
Vincent Chan 2 minutes 55 seconds
Like let's say like my first 2 pins was like 10.

Andrew Barno
2 minutes 56 seconds2:56
Andrew Barno 2 minutes 56 seconds
Yeah.

Vincent Chan
2 minutes 57 seconds2:57
Vincent Chan 2 minutes 57 seconds
Then I went to like 5.
WT
Willett, Teresa
2 minutes 58 seconds2:58
Willett, Teresa 2 minutes 58 seconds
Mm hmm.

Vincent Chan
2 minutes 59 seconds2:59
Vincent Chan 2 minutes 59 seconds
Then there's like, oh your, your your two, your two left. And then we reach 10 minutes and then we disconnected, which might be a risk.
Vincent Chan 3 minutes 6 seconds
Shouts and they'll be really, you know, upset.
WT
Willett, Teresa
3 minutes 11 seconds3:11
Willett, Teresa 3 minutes 11 seconds
That's true, but I would say at this point that's 20 minutes.
Willett, Teresa 3 minutes 16 seconds
You know, we could always.

Vincent Chan
3 minutes 16 seconds3:16
Vincent Chan 3 minutes 16 seconds
Is there a way to set it that that if the sorry, there's a way to set that if the cube is in doesn't move for 10 like for a certain amount of time, then disconnect it? Like if that two position is moving then we shouldn't be disconnecting right?
WT
Willett, Teresa
3 minutes 17 seconds3:17
Willett, Teresa 3 minutes 17 seconds
We can always update these later.
Willett, Teresa 3 minutes 19 seconds
Yeah, these are always editable later.

Vincent Chan
3 minutes 32 seconds3:32
Vincent Chan 3 minutes 32 seconds
Like or? Is that too complex?

Andrew Barno
3 minutes 33 seconds3:33
Andrew Barno 3 minutes 33 seconds
That was kind of like what I had that that's kind of what I had kind of laid out before.

Vincent Chan
3 minutes 39 seconds3:39
Vincent Chan 3 minutes 39 seconds
Mm hmm.

Andrew Barno
3 minutes 39 seconds3:39
Andrew Barno 3 minutes 39 seconds
I dunno if that was reviewed earlier, I wasn't in it, but.
Andrew Barno 3 minutes 43 seconds
That if the queue position were to move or if the queue position didn't move after a certain time, then we like disconnect.
Andrew Barno 3 minutes 51 seconds
So mine really didn't the I guess what I was asking for was not really.
Andrew Barno 3 minutes 55 seconds
I didn't really have an end date or end time, I guess prior, but I understand like it's probably unrealistic, like it's probably not gonna happen.

Vincent Chan
3 minutes 57 seconds3:57
Vincent Chan 3 minutes 57 seconds
Oh, OK.

Andrew Barno
4 minutes 3 seconds4:03
Andrew Barno 4 minutes 3 seconds
And then who wants to wait?
Andrew Barno 4 minutes 4 seconds
I don't know like 20 minutes anyways.
Andrew Barno 4 minutes 9 seconds
Yeah.
WT
Willett, Teresa
4 minutes 9 seconds4:09
Willett, Teresa 4 minutes 9 seconds
OK.
Willett, Teresa 4 minutes 10 seconds
So we can investigate that. You know, between this five minute and 10 minute message, if the queue position hasn't changed then give the final message if the queue position has changed then continue to wait.
Willett, Teresa 4 minutes 22 seconds
Is that what you're saying?

Andrew Barno
4 minutes 24 seconds4:24
Andrew Barno 4 minutes 24 seconds
Yeah, I think that's what Vincent was saying, right, Vincent?

Vincent Chan
4 minutes 26 seconds4:26
Vincent Chan 4 minutes 26 seconds
Yes, I I think that makes more sense if application is moving, this shouldn't disconnect unless they choose of their own, you know will to do it.

Andrew Barno
4 minutes 27 seconds4:27
Andrew Barno 4 minutes 27 seconds
Yeah.
Andrew Barno 4 minutes 32 seconds
Yeah.
Andrew Barno 4 minutes 37 seconds
Yeah, I agree.
Andrew Barno 4 minutes 42 seconds
Yeah, but then if it keeps on moving, well, we never have a queue position like to to high anyways. But with with that then it would never disconnect as long as there's a queue position there, right?
Andrew Barno 4 minutes 53 seconds
As long as the queue position is moving right, yeah.
WT
Willett, Teresa
4 minutes 53 seconds4:53
Willett, Teresa 4 minutes 53 seconds
Yeah. So.
Willett, Teresa 4 minutes 56 seconds
Right. If they're if their Q positions moving and they keep getting closer and closer to that, finally connecting to an agent, I got it.
Willett, Teresa 5 minutes 2 seconds
You don't want to be. Hey, I was next.
Willett, Teresa 5 minutes 4 seconds
Why did you disconnect me?
Willett, Teresa 5 minutes 5 seconds
So we'll look into that.

Andrew Barno
5 minutes 6 seconds5:06
Andrew Barno 5 minutes 6 seconds
Yeah.
WT
Willett, Teresa
5 minutes 7 seconds5:07
Willett, Teresa 5 minutes 7 seconds
We haven't had to go through that before.
Willett, Teresa 5 minutes 10 seconds
The realistic options that might happen.
Willett, Teresa 5 minutes 13 seconds
Possibly, but I will say we can keep that open as well. If this does become an issue, we can always go an update and increase this.

Andrew Barno
5 minutes 19 seconds5:19
Andrew Barno 5 minutes 19 seconds
Yeah.
WT
Willett, Teresa
5 minutes 22 seconds5:22
Willett, Teresa 5 minutes 22 seconds
Threshold.
Willett, Teresa 5 minutes 23 seconds
Or even how many messages we put in so we can update that later.
Willett, Teresa 5 minutes 26 seconds
But we can go forward with this as as the first setup test it out, see what we think.

Andrew Barno
5 minutes 32 seconds5:32
Andrew Barno 5 minutes 32 seconds
OK. Does you said we could change this after?
Andrew Barno 5 minutes 35 seconds
Do we need some sort of like?
Is this transcript useful?



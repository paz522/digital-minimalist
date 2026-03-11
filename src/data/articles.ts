// Digital Minimalist Article Data

export interface Article {
  id: string;
  title: string;
  category: 'tips' | 'guide' | 'science' | 'challenge';
  readTime: number; // minutes
  content: string;
  icon: string;
  summary: string;
  keypoints: string[];
}

export const ARTICLES: Article[] = [
  {
    id: 'digital-detox-basics',
    title: 'Basics of Digital Detox',
    category: 'guide',
    readTime: 25,
    icon: '🌿',
    summary: 'A comprehensive guide to what digital detox is, why it\'s necessary, and how to get started. Includes practical programs for beginners to advanced users.',
    keypoints: ['Definition and effects of digital detox', '3 steps for beginners', 'Tips for continuation and common failures', '30-day practice program'],
    content: `# Basics of Digital Detox

Are you struggling with how to manage your smartphone and PC usage? "I know I use it too much, but I can't stop" or "Before I know it, I've been scrolling for hours" — If this sounds like you, we propose digital detox as a solution.

This guide comprehensively covers everything from the basics to advanced techniques of digital detox. By the time you finish reading, you should find a digital detox method that suits you.

---

## Chapter 1: What is Digital Detox?

### Definition of Digital Detox

Digital detox refers to **temporarily stepping away from digital devices (smartphones, PCs, tablets, etc.) to restore mental and physical health**. It began gaining attention around 2010 and has now become a global movement.

The word "detox" originally means "detoxification." This concept is based on the idea that information and stimuli emitted from digital devices accumulate as "toxins" in our minds and bodies.

### Why is Digital Detox Necessary?

Modern humans have never lived a life surrounded by digital devices to this extent in all of human history. Our brains and bodies have not fully adapted to this rapid change.

#### Penetration Rate of Digital Devices

| Year | Smartphone Penetration | Average Daily Usage Time |
|------|------------------------|--------------------------|
| 2010 | About 20% | About 30 minutes |
| 2015 | About 50% | About 2 hours |
| 2020 | About 80% | About 4 hours |
| 2024 | About 90% | About 5 hours |

Our lives have changed dramatically over these 15 years. However, the human brain does not evolve that rapidly.

### 5 Negative Effects of Digital Devices

#### 1. Decline in Sleep Quality

Blue light emitted from smartphones suppresses the secretion of melatonin, the sleep hormone. According to research, **2 hours of smartphone use before bedtime increases sleep onset time by 30 minutes** and reduces sleep quality by 20%.

**Mechanism**:
1. Blue light enters the retina
2. The suprachiasmatic nucleus (the body's master clock) perceives it as "daytime"
3. Melatonin secretion from the pineal gland is suppressed
4. Body temperature doesn't drop, making it difficult to fall asleep
5. REM sleep (light sleep) increases, reducing sleep quality

**Actual Harm**:
- Unable to wake up in the morning
- Daytime drowsiness
- Decreased concentration
- Reduced immunity
- Increased obesity risk

#### 2. Scattered Concentration

Being distracted by notifications makes it difficult to enter a state of deep concentration (flow state). According to research from the University of California, **it takes an average of 23 minutes to return to the original task after being distracted**.

**Cost of Distraction**:
- 10 distractions per day due to notifications → 230 minutes lost
- 26 hours per week
- Over 100 hours per month

This means you're wasting **more than 4 days per month**.

#### 3. Mental Health Deterioration

"Comparing yourself to others" on SNS reduces self-esteem and increases symptoms of depression and anxiety. The correlation between SNS usage time and depressive symptoms, especially among teenagers, has been reported in numerous studies.

**University of Pennsylvania Study (2023)**:
- Group that limited SNS usage to 30 minutes per day
- After 3 months, depressive symptoms and feelings of loneliness significantly decreased
- Self-esteem improved

**Psychology of Comparison**:
- Comparing others' "highlights" with your "daily life"
- SNS posts are snapshots of parts of life
- However, the brain processes them as "reality"

#### 4. Physical Discomfort

Excessive use of digital devices also causes physical discomfort.

**Main Symptoms**:
- **Eye strain**: Dry eyes, blurred vision, headaches
- **Neck and shoulder stiffness**: "Text neck" phenomenon (burden on the neck from looking downward)
- **Finger pain**: Smartphone finger, tendinitis
- **Lower back pain**: Burden on the lower back from hunching
- **Obesity**: Lack of exercise and reduced metabolism from nighttime blue light exposure

**Problem of Text Neck**:
- Tilting neck 15 degrees → 12kg burden on the neck
- Tilting neck 30 degrees → 18kg burden on the neck
- Tilting neck 60 degrees → 27kg burden on the neck

This is equivalent to **supporting one child on your neck**.

#### 5. Weakening of Real-World Relationships

The "phubbing" phenomenon, where family and friends each look at their smartphones while in the same space, is increasing. The quality of face-to-face communication is declining.

**Impact of Phubbing**:
- Decreased conversation satisfaction
- Reduced quality of relationships
- Increased feelings of loneliness
- Damage to trust relationships

---

## Chapter 2: 7 Effects of Digital Detox

### 1. Improved Sleep Quality

80% of people who practice digital detox report "improved sleep quality."

**Specific Changes**:
- Shortened sleep onset time (average 15 minutes)
- Reduced nighttime awakenings
- Improved morning awakening
- Reduced daytime drowsiness

### 2. Recovery of Concentration

You can work and study in a state of deep concentration.

**Research Results**:
- After digital detox, concentration test scores improved by 25%
- Work efficiency improved by 30%
- Mistakes decreased by 40%

### 3. Stress Reduction

Your mind becomes calmer, and irritability decreases.

**Changes**:
- Reduced cortisol (stress hormone) levels
- Improved heart rate variability
- Reduced subjective stress

### 4. Improved Memory

Information is organized, and memories become easier to consolidate.

**Mechanism**:
- Activation of the Default Mode Network (DMN)
- Recovery of hippocampal function
- Promotion of consolidation into long-term memory

### 5. Increased Creativity

Increased time for daydreaming leads to more ideas emerging.

**Reasons**:
- The Default Mode Network is responsible for creative thinking
- Information in the brain is organized without external stimuli
- New connections are formed

### 6. Improved Relationships

Increased face-to-face communication improves the quality of relationships.

**Changes**:
- Increased conversation time
- Deepening of conversations
- Improved empathy
- Strengthened trust relationships

### 7. Improved Self-Esteem

You stop comparing yourself to others and gain confidence in yourself.

**Changes**:
- Increased self-comparison (decreased comparison with others)
- Awareness of your own growth
- Promotion of self-acceptance

---

## Chapter 3: 3 Steps for Beginners

### Step 1: Start with Small Goals

Suddenly attempting "no smartphone for a day" is difficult. Start with the following instead.

#### 4-Week Program

| Week | Goal | Specific Actions | Expected Difficulties | Countermeasures |
|------|------|------------------|----------------------|-----------------|
| Week 1 | No smartphone 30 minutes before bed | Don't bring smartphone to bedroom | Difficulty falling asleep | Read a book |
| Week 2 | Put smartphone away during meals | Put it in a bag during meals | Worried about notifications | Set to silent mode |
| Week 3 | No smartphone for first 30 minutes after waking | Place charger in another room | Concerned about time | Buy an alarm clock |
| Week 4 | 1 hour of digital detox on weekends | Time for walks and hobbies | Feeling bored | List things to do |

#### Details for Each Week

**Week 1: No Smartphone 30 Minutes Before Bed**

This is the most effective and easiest goal to tackle.

**Merits**:
- Improved sleep quality
- Better awakening the next morning
- Ability to relax at the end of the day

**How to Practice**:
1. Move the charger to the living room
2. Prepare an alarm clock (around $10 is fine)
3. Read or keep a journal instead
4. Dim the lights and enter relaxation mode

**Common Failures**:
- Checking it "just a little"
- Using it as a clock

**Countermeasures**:
- Set app usage limits
- Place it physically out of reach

**Week 2: Put Smartphone Away During Meals**

Prevent "multitasking with smartphone."

**Merits**:
- Increased meal satisfaction
- Improved digestion and absorption
- Increased conversation with family

**How to Practice**:
1. Declare "smartphone time over" before meals
2. Put it in a bag or drawer
3. Ask family for cooperation
4. Focus on your meal

**Week 3: No Smartphone for First 30 Minutes After Waking**

Start the day proactively rather than in reactive mode.

**Merits**:
- You can decide the day's priorities yourself
- A morning with less stress
- A proactive day

**How to Practice**:
1. Place the charger in another room
2. Use an alarm clock
3. Create a morning routine (stretching, water, journaling, etc.)
4. Check your smartphone after 30 minutes

**Week 4: 1 Hour of Digital Detox on Weekends**

Set aside a solid block of digital-free time.

**Merits**:
- Deep relaxation
- Time for hobbies
- Time to connect with yourself

**How to Practice**:
1. Choose either Saturday or Sunday
2. Decide on a time slot (morning is recommended)
3. Prepare what to do in advance
4. Inform your family and gain their understanding

**Recommended Activities**:
- Walking
- Reading
- Cooking
- Hobbies
- Meditation
- Face-to-face interaction with friends

### Step 2: Prepare Alternative Activities

Decide in advance "what to do" during times when you're not using your smartphone.

#### List of 50 Alternative Activities

**Indoor Activities**:
1. Reading (physical books)
2. Journaling
3. Cooking
4. Cleaning and organizing
5. Meditation
6. Stretching
7. Yoga
8. Drawing
9. Playing musical instruments
10. Puzzles
11. Knitting
12. Organizing photos
13. Writing letters
14. Household budgeting
15. Planning

**Outdoor Activities**:
16. Walking
17. Running
18. Cycling
19. Relaxing at a park
20. Photography
21. Shopping (at physical stores)
22. Library visits
23. Cafe hopping
24. Art museums
25. Visiting shrines and temples

**Interpersonal Relationships**:
26. Conversation with family
27. Meeting friends
28. Phone calls (voice)
29. Volunteering
30. Lessons/classes

**Self-Improvement**:
31. Language learning
32. Studying for qualifications
33. Reading (self-improvement)
34. Watching videos (educational)
35. Podcasts

**Relaxation**:
36. Bathing
37. Aromatherapy
38. Massage
39. Napping
40. Listening to music

**Creative Activities**:
41. Writing
42. Drawing
43. Photo editing
44. Video editing
45. Music production

**Others**:
46. Daydreaming
47. Looking out the window
48. Gardening
49. Playing with pets
50. Doing nothing

### Step 3: Prepare Your Environment

Creating systems that don't rely solely on willpower is important.

#### Environment Adjustment Checklist

**Physical Distance**:
- [ ] Don't bring smartphone to bedroom
- [ ] Place charger in living room
- [ ] Put smartphone in another room during work
- [ ] Keep it in a bag during meals

**Notification Settings**:
- [ ] Turn off unnecessary notifications
- [ ] Turn off all SNS notifications
- [ ] Only important people can notify
- [ ] Turn off badge display too

**App Settings**:
- [ ] Move SNS apps off the home screen
- [ ] Set usage limits
- [ ] Enable grayscale mode
- [ ] Log out every time

**Time Settings**:
- [ ] Don't use 30 minutes before bed
- [ ] Don't use 30 minutes after waking
- [ ] Don't use during meals
- [ ] Digital detox once a week

---

## Chapter 4: Common Failures and Countermeasures

### Failure 1: Giving Up by Aiming for Perfection

Even if you're determined with "I won't use it all day!", it won't last long.

**Problems**:
- Perfectionism is the enemy of continuation
- Giving up everything after one failure
- Falling into self-loathing

**Countermeasures**:
- **80% Rule**: It's OK if you achieve 80%
- **Recovery Plan**: Prepare countermeasures for when you fail in advance
- **Self-Acceptance**: Don't blame yourself if you fail

**Mindset**:
> "Progress, not perfection"

### Failure 2: No Alternative Activities

With just the goal of "not using smartphone," empty time is created.

**Problems**:
- Feeling bored
- Unable to endure boredom
- Eventually returning to smartphone

**Countermeasures**:
- Create a list of alternative activities in advance
- Prepare multiple options
- Start with easy-to-begin activities

### Failure 3: Lack of Understanding from Others

If you don't tell your family and friends that "you're doing digital detox," you won't get their understanding.

**Problems**:
- "Why?" reactions
- Worry when they can't contact you
- Receiving invitations

**Countermeasures**:
- Explain your purpose in advance
- Tell them when you can be contacted
- Recruit people to do it together

### Failure 4: Not Considering Emergency Situations

There's anxiety about "not being able to be contacted when something happens."

**Problems**:
- Contact from family
- Emergency work contact
- Disaster information

**Countermeasures**:
- Allow voice calls for emergency contacts
- Explain the situation to family
- Define disasters as exceptions

### Failure 5: Not Keeping Records

Motivation decreases because you can't see changes.

**Problems**:
- Can't see results
- No sense of continuation
- Don't know what to improve

**Countermeasures**:
- Keep records with Digital Minimalist
- Review weekly
- Verbalize changes

---

## Chapter 5: 30-Day Digital Detox Program

### Week 1: Awareness

| Day | Theme | Task | Reflection |
|-----|-------|------|------------|
| 1 | Recording usage time | Record daily usage time | Which apps are most used? |
| 2 | Turn off notifications | Turn off 5 unnecessary notifications | How do you feel with fewer notifications? |
| 3 | No smartphone during meals | Put smartphone away during meals | How did your meals change? |
| 4 | No smartphone in toilet | Don't bring it to the toilet | How was the time? |
| 5 | Morning 30 min off | Don't check for 30 minutes after waking | How's your morning mood? |
| 6 | 30 min before bed off | Don't check 30 minutes before bed | How's your sleep quality? |
| 7 | 1 hour detox | 1 continuous hour off | How did you spend it? |

### Week 2: Environment

| Day | Theme | Task | Reflection |
|-----|-------|------|------------|
| 8 | App organization | Move SNS to 2nd page | How often do you open them? |
| 9 | Grayscale | Monochrome setting | Has appeal decreased? |
| 10 | Move charger | Move to living room | How's bedroom usage? |
| 11 | Alarm clock | Purchase and use | How's your morning? |
| 12 | No bedroom access | Completely don't bring it in | How's your sleep quality? |
| 13 | Alternative list | Create 10 items | What do you want to do? |
| 14 | 2 hour detox | 2 continuous hours off | What did you do? |

### Week 3: Habits

| Day | Theme | Task | Reflection |
|-----|-------|------|------------|
| 15 | Morning routine | Create 30-minute routine | How's it going? |
| 16 | Night routine | Create 30-minute routine | How's your sleep? |
| 17 | No multitasking | Don't use while doing something else | Any insights? |
| 18 | Additional notifications off | Turn off 5 more | Any inconvenience? |
| 19 | Usage time goal | Set a goal | Did you achieve it? |
| 20 | Family declaration | Tell family your goal | How did they react? |
| 21 | Half-day detox | 4 hours off | How did you spend it? |

### Week 4: Establishment

| Day | Theme | Task | Reflection |
|-----|-------|------|------------|
| 22 | Review usage time | Review 3 weeks | What changes? |
| 23 | Success experiences | Record successes | What could you do? |
| 24 | New goals | Set next goals | What are your goals? |
| 25 | Share with friends | Tell friends | How did they react? |
| 26 | Usage limits | Set app limits | What's the effect? |
| 27 | Reward | Reward yourself | What will you do? |
| 28 | Final check | Dependency check | What's the result? |

---

## Chapter 6: Summary

The purpose of digital detox is not to completely eliminate digital devices. **Using them consciously and proactively** is important.

### Important Points

1. **Don't aim for perfection** — Use the 80% rule
2. **Start with small steps** — From 30 minutes before bed
3. **Prepare alternative activities** — List things to do
4. **Prepare your environment** — Don't rely on willpower
5. **Keep records** — Visualize changes
6. **Declare to those around you** — Gain understanding and support
7. **Enjoy** — It's a choice, not an obligation

### What You Can Start Today

1. Don't use smartphone 30 minutes before bed
2. Turn off one notification
3. Put smartphone away during meals
4. Start recording with Digital Minimalist

---

**Next Action**: Record today's digital detox in Digital Minimalist's journal function! Small steps create big changes.`
  },
  {
    id: 'pomodoro-technique',
    title: 'Complete Guide to Pomodoro Technique',
    category: 'guide',
    readTime: 20,
    icon: '🍅',
    summary: 'A complete explanation of the world\'s most famous time management technique. Master the surprising effects of 25-minute focus sessions and practical tips.',
    keypoints: ['Basic rules of Pomodoro Technique', 'Scientific basis for why 25 minutes', 'Advanced techniques and tool utilization'],
    content: `# Complete Guide to Pomodoro Technique

"I want to concentrate, but before I know it, I'm touching my smartphone" or "I can't get my work done" — Here's the world's most famous time management technique to solve such problems.

This guide comprehensively covers everything from the basics to advanced techniques of Pomodoro Technique. By the time you finish reading, you should be able to start practicing today.

---

## Chapter 1: What is Pomodoro Technique?

### Origin and History

Pomodoro Technique is a time management method developed in the 1980s by Italian **Francesco Cirillo**.

**Origin of the Name**:
The kitchen timer Cirillo used as a student was **tomato-shaped**. "Pomodoro" means "tomato" in Italian.

### Basic Method: 5 Steps

#### Step 1: Decide on a Task

Decide on one task to work on. If there are multiple tasks, prioritize them.

**How to Choose Tasks**:
- Something specific and clear
- Something that can be completed or show progress in 25 minutes
- High-priority tasks

**Examples**:
- ❌ "Do work"
- ⭕ "Create pages 1-3 of the document"
- ⭕ "Reply to 5 emails"

#### Step 2: Set Timer to 25 Minutes

Select the 25-minute preset in Digital Minimalist's Focus Mode.

**How to Choose a Timer**:
- Smartphone app (Digital Minimalist)
- Physical kitchen timer
- Web timer

**Recommended**: A physical timer that allows you to place your smartphone in another room

#### Step 3: Focus for 25 Minutes

It's crucial **not to do anything else**.

**What NOT to Do**:
- Look at your smartphone
- Open different tabs in web browser
- Say "later" when someone talks to you
- Leave your seat except for toilet breaks
- Think about unrelated things

**Tips for Concentration**:
- Clear your desk
- Prepare water in advance
- Adjust temperature
- Set appropriate lighting

#### Step 4: 5-Minute Break

When the timer rings, take a break without fail.

**What You CAN Do**:
- Stand up
- Stretch
- Drink water
- Look out the window
- Deep breathing

**What NOT to Do**:
- **Look at smartphone** (Most important!)
- Check SNS
- Check emails
- Continue working

#### Step 5: Long Break After 4 Pomodoros

After completing 4 sets, take a longer break of 15-30 minutes.

**How to Spend Long Breaks**:
- Light meal
- Walk
- Nap (within 20 minutes)
- Meditation

---

## Chapter 2: Why 25 Minutes? Scientific Basis

### Limits of Human Concentration

According to research, adult concentration lasts **90 minutes at most**, typically around 20-45 minutes.

#### Changes in Concentration Over Time

| Time | Concentration State | Description |
|------|---------------------|-------------|
| 0-5 min | Warm-up | Time for brain to adapt to task |
| 5-20 min | Concentration Zone | Concentration depth gradually increases |
| 20-45 min | Peak Concentration Zone | Can enter flow state |
| 45 min+ | Concentration Decline | Fatigue accumulates, quality decreases |

25 minutes is an exquisite timing to take a break **just before concentration reaches its peak**.

### Deadline Effect

The restriction of "just 25 minutes" puts the brain into concentration mode. This is a method that takes advantage of **Parkinson's Law** in reverse.

**Parkinson's Law**:
> "Work expands to fill the time available"

- Given 1 day, it takes 1 day
- Given 25 minutes, it finishes in 25 minutes

**Psychological Effects of Time Limits**:
- Creates urgency
- Clarifies priorities
- Prevents procrastination

### Ultradian Rhythm

The human body has a natural **ultradian rhythm** of approximately 90-minute cycles.

**90-Minute Cycle**:
1. Arousal period (90 min): Concentration and activity
2. Rest period (20 min): Recovery and rest

Pomodoro Technique is a method aligned with this natural rhythm.

---

## Chapter 3: 5 Surprising Effects

### 1. Qualitative Improvement in Concentration

Because it's a short time of 25 minutes, **high-density concentration** is achieved.

**Research Results**:
- Conventional method: 60 minutes work with 60% concentration maintenance rate
- Pomodoro: 25 min × 2 with 85% concentration maintenance rate

### 2. Prevention of Procrastination

Thinking "just 25 minutes" makes it easier to get started.

**Psychological Mechanism**:
- Task hurdle is lowered
- Resistance to starting decreases
- Can visualize completion

### 3. Improved Time Perception

You become able to accurately grasp how long your tasks take.

**Effects**:
- Improved estimation accuracy
- Better planning
- Enhanced time management skills

### 4. Reduced Fatigue

Regular breaks make you less tired even after long hours of work.

**Comparison**:
- Continuous 2-hour work: 80% fatigue level
- 4 sets of Pomodoro: 50% fatigue level

### 5. Increased Sense of Achievement

You get a small sense of achievement with each completed Pomodoro, maintaining motivation.

**Dopamine Effect**:
- Completion → Dopamine release
- Improved motivation
- Desire for the next set

---

## Chapter 4: Arrangements for Beginners

### 20 Min Focus + 5 Min Break

If 25 minutes is too long, start with 20 minutes.

**Suitable For**:
- Those who can't maintain concentration
- Beginners
- Children

### 15 Min Focus + 3 Min Break

Even shorter is OK. What's important is **continuing**.

**Suitable For**:
- Those with ADHD tendencies
- Those with very limited concentration span
- Those recovering from illness

### 10 Min Focus + 2 Min Break

Starting from the shortest duration.

**Merits**:
- Minimum psychological hurdle
- Can challenge multiple times
- Easy to accumulate success experiences

---

## Chapter 5: Arrangements for Advanced Users

### 45 Min Focus + 10 Min Break

Once you're accustomed, challenge longer concentration periods.

**Suitable For**:
- Those accustomed to Pomodoro
- Tasks requiring deep concentration
- Programming, writing, etc.

### 90 Min Focus + 20 Min Break

A deep work set aligned with ultradian rhythm.

**Suitable For**:
- Advanced users
- Creative work
- Research, development

### Customization Method

Adjust according to your concentration span.

**Adjustment Points**:
1. Do you feel "want to do more" when the focus time ends?
2. Do you feel refreshed after breaks?
3. Is the total daily work time appropriate?

---

## Chapter 6: NG Actions During Breaks

### ❌ Looking at Smartphone

Your brain doesn't rest. Block visual information.

**Reasons**:
- Information continues entering the brain
- Dopamine continues to be released
- Concentration mode is maintained

### ❌ Checking SNS

Other information enters your head, breaking concentration.

**Reasons**:
- Comparative thinking emerges
- Emotions are stirred
- Hard to return to original task

### ❌ Continuing Work

There's no point in taking a break. Always step away.

**Reasons**:
- Fatigue accumulates
- Concentration decreases
- Efficiency drops

---

## Chapter 7: OK Actions During Breaks

### ⭕ Standing Up

Blood flow improves, and oxygen is sent to the brain.

**Effects**:
- Promotes circulation
- Oxygen supply to brain
- Prevents muscle stiffness

### ⭕ Stretching

Loosen your neck, shoulders, and wrists.

**Recommended Stretches**:
1. Neck rotation (5 times each direction)
2. Shoulder rotation (5 times forward and backward)
3. Wrist rotation (5 times each direction)
4. Stretching upward (3 times)

### ⭕ Drinking Water

Dehydration causes decreased concentration.

**Guidelines**:
- 100-200ml per Pomodoro
- Room temperature is recommended
- Drink gradually, not all at once

### ⭕ Looking Out the Window

Looking at distant objects relaxes eye muscles.

**Effects**:
- Relief of eye strain
- Reset of focal distance
- Change in visual information

### ⭕ Deep Breathing

Send oxygen to the brain and refresh.

**Method**:
1. Inhale for 4 seconds
2. Hold for 4 seconds
3. Exhale for 8 seconds
4. Repeat 3 times

### ⭕ Light Walking

If possible, walk outside.

**Effects**:
- Promotes blood circulation
- Sun exposure (serotonin secretion)
- Change of mood

---

## Chapter 8: Practicing with Digital Minimalist

### Step by Step

1. **Open Focus Mode**
   - Launch the app
   - Select Focus tab

2. **Select 25-Minute Preset**
   - Select "25 minutes" from preset buttons
   - Or set to 25 minutes with custom

3. **Press "Start"**
   - Timer starts
   - Put down your smartphone

4. **Put Smartphone Away for 25 Minutes**
   - Ideally place in another room
   - Don't place it where visible

5. **Relax During Break Without Looking at Timer**
   - 5 minutes of OK actions mentioned above
   - Don't touch smartphone

6. **Take Long Break After 4 Sets**
   - 15-30 minute break
   - Completely off

### Utilizing Records

Digital Minimalist records your focus sessions.

**Information You Can Check**:
- Total daily focus time
- Number of sets
- Completed sessions

---

## Chapter 9: Frequently Asked Questions

### Q: What if ideas come up during concentration?

**A**: Keep a memo nearby, quickly write it down, and immediately return to concentration.

**Reason**:
- Ideas should be recorded before forgotten
- However, don't dig deeper
- Consider during breaks

### Q: What if interrupted?

**A**: Tell them "in 25 minutes" and wait until the timer rings.

**Countermeasures**:
- Inform in advance that you're "concentrating"
- Close the door
- Wear headphones (as a signal)

### Q: What if concentration breaks before 25 minutes?

**A**: Reset once and take a break. Don't force yourself.

**Judgment Criteria**:
- Completely unable to concentrate
- Strong drowsiness
- Poor physical condition

### Q: What if I forget to take a break and continue?

**A**: Take a break at that point, and start the next Pomodoro as usual.

**Notes**:
- Don't feel self-blame
- Be careful from next time
- Don't aim for perfection

### Q: How many sets should I do?

**A**: Aim for 4-8 sets per day.

**Guidelines**:
- Beginners: 2-4 sets
- Intermediate: 4-6 sets
- Advanced: 6-8 sets

---

## Chapter 10: Summary

The wonderful thing about Pomodoro Technique is that **you can start today, immediately**.

All you need is a timer. Digital Minimalist's Focus Mode will be your partner.

### Important Points

1. **25 min focus + 5 min break** is basic
2. **Don't aim for perfection** — Adjust flexibly
3. **Don't look at smartphone during breaks** — Most important
4. **Keep records** — Visualize growth
5. **Continue** — Habit formation is key

### Start Today

1. Open Digital Minimalist's Focus Mode
2. Select 25-minute preset
3. Press start button
4. Concentrate on the task at hand for 25 minutes

---

**Next Action**: Launch Focus Mode right now and challenge your first 25 minutes!`
  },
  {
    id: 'screen-time-truth',
    title: 'The Truth About Screen Time',
    category: 'science',
    readTime: 18,
    icon: '📊',
    summary: 'Average usage time for Japanese people, the relationship between usage time and happiness, and what truly dangerous "usage" is? Explaining latest research.',
    keypoints: ['Actual state of screen time among Japanese people', 'Usage time vs surprising relationship with happiness', 'Checklist for dangerous usage patterns'],
    content: `# The Truth About Screen Time

"4 hours per day" — This is the average screen time for modern people. However, latest research reveals that the real problem is not just "time."

---

## Chapter 1: Actual State of Screen Time Among Japanese People

### Average Usage Time by Age Group (Ministry of Internal Affairs and Communications 2024 Survey)

| Age Group | Weekdays | Weekends/Holidays |
|-----------|---------|-------------------|
| Teens | 5.5 hours | 7.2 hours |
| 20s-30s | 4.0 hours | 5.5 hours |
| 40s-50s | 3.0 hours | 4.0 hours |
| 60s+ | 2.0 hours | 2.5 hours |

### Surprising Facts

Screen time for teens accounts for **about 40% of their waking hours** per day. This means they spend more than one full day per week looking at smartphone screens.

### Comparison with Other Countries

| Country | Average Daily Usage Time |
|---------|--------------------------|
| Japan | 4.0 hours |
| USA | 5.5 hours |
| South Korea | 5.0 hours |
| China | 4.5 hours |
| Germany | 3.0 hours |
| France | 2.8 hours |

Japan is **relatively low** among developed countries, but even so, this equals about 2 months per year spent on smartphones.

---

## Chapter 2: Relationship Between Usage Time and Happiness: Surprising Truth

### "Quality" is More Important Than Time Itself

According to research from the University of Pennsylvania (2023), **the "quality" of usage correlates more strongly with happiness than usage time itself**.

### Two Types of Usage

#### Passive Usage
- Mindlessly scrolling through SNS
- Continuously watching videos
- Browsing others' posts

→ Correlated with **decreased happiness**

#### Active Usage
- Exchanging messages with friends
- Searching for information
- Creative activities (photos, video editing)

→ Correlated with **increased happiness**

### Oxford University Study (2022)

A large-scale survey of 150,000 people yielded the following results:

**Moderate Usage** (1-2 hours/day):
- No negative impact on happiness
- Rather, higher happiness than non-users

**Excessive Usage** (5+ hours/day):
- Significant decrease in happiness
- Increased sleep disorders
- Deterioration of interpersonal relationships

**Important Finding**:
> The relationship between usage time and happiness is "U-shaped" — moderate is best

---

## Chapter 3: 5 Truly Dangerous Ways of Using

### 1. Fair Morning

The habit of checking your smartphone within the **first 15 minutes** after waking puts your entire day in "reactive mode."

**Problems**:
- Others decide your day's priorities
- Stress hormone (cortisol) spikes suddenly
- Unable to think proactively

**Countermeasures**:
- Don't check smartphone for first 30 minutes of morning
- Use an alarm clock
- Create a morning routine

### 2. Multitasking with Smartphone

Using smartphone while doing something else ("multitasking") places a heavy burden on the brain.

**Problems**:
- Work efficiency decreases by 40%
- Mistakes increase by 50%
- Memory retention rate decreases

**Countermeasures**:
- Focus only on smartphone when using it
- Put it away during meals
- Keep it in bag during conversations

### 3. Comparison Scrolling

Comparing others' "highlights" on SNS with your "daily life."

**Problems**:
- Decreased self-esteem
- Increased depressive symptoms
- Jealousy and feelings of inferiority

**Countermeasures**:
- Limit SNS usage time
- Organize who you follow
- Control browsing rather than posting

### 4. Notification Dependency

The habit of checking every time you receive a notification is an **early stage of addiction**.

**Problems**:
- Scattered attention
- Decreased concentration
- Compulsive checking behavior

**Countermeasures**:
- Turn off notifications
- Turn off badge display too
- Allow only important people

### 5. Smartphone Before Bed

Sleep quality decreases, affecting next day's performance.

**Problems**:
- Increased sleep onset time
- Decreased sleep quality
- Decreased concentration next day

**Countermeasures**:
- Don't bring to bedroom
- Turn off 1 hour before bed
- Blue light cut

---

## Chapter 4: Screen Time Diagnosis Checklist

Count the number of questions you answer "Yes" to.

### Checklist

1. You touch your smartphone within the **first 5 minutes** after waking
2. You bring your smartphone to the toilet
3. You use your smartphone during meals **3 or more times per week**
4. You wonder "maybe I got a notification" **10 or more times per day**
5. You feel **anxiety or restlessness** without your smartphone
6. You use your smartphone until right before bed (in bed)
7. You check your smartphone **150 or more times per day** (screen checks)
8. You use your smartphone during conversations with family/friends
9. You have **failed to reduce** smartphone usage time before
10. You continue using smartphone even when your eyes are tired

### Results

| Number of Yes | Result | Advice |
|---------------|--------|--------|
| 0-3 | 🟢 Healthy | You maintain a healthy relationship |
| 4-6 | 🟡 Caution | You have slight dependency tendencies |
| 7-10 | 🔴 Danger | Full-scale countermeasures are needed |

---

## Chapter 5: Target Time Setting Guidelines

Guidelines for target time settings in Digital Minimalist:

| Lifestyle | Recommended Time | Reason |
|-----------|------------------|--------|
| Students | 120-180 minutes | Secure study time |
| Office Workers | 120-150 minutes | Excluding business use |
| Self-employed/Freelancers | 150-200 minutes | High business use |
| Homemakers | 90-120 minutes | Centered on housework and childcare |

### Example Usage Breakdown (120 minutes/day)

| Purpose | Time | Percentage |
|---------|------|------------|
| Contact/Messages | 30 min | 25% |
| Information Gathering | 30 min | 25% |
| SNS | 20 min | 17% |
| Videos | 20 min | 17% |
| Others | 20 min | 16% |

---

## Chapter 6: 7 Techniques to Reduce Screen Time

### 1. Grayscale Setting

Making the screen monochrome dramatically reduces smartphone appeal.

**How to Set**:
- iPhone: Settings → Accessibility → Display → Color Filters
- Android: Settings → Digital Wellbeing → Bedtime Mode

**Effects**:
- Average 40% reduction in usage time
- Suppression of dopamine release

### 2. App Organization

Move frequently used apps to the first page of home screen, SNS to second page or later.

**Effects**:
- Reduced opening frequency
- Promotion of conscious usage

### 3. Notification Off Campaign

Turning off notifications reduces usage time by **an average of 40%**.

**Notifications to Turn Off**:
- SNS likes
- Game notifications
- News apps
- Shopping apps

### 4. Physical Distance

Place smartphone out of reach. Even "being visible" increases usage frequency.

**How to Practice**:
- In another room during work
- In living room when sleeping
- In bag during meals

### 5. Creating Alternative List

Prepare a "things to do when you want to touch smartphone" list:

1. 3 deep breaths
2. Drink water
3. Stretch
4. Look out the window
5. Read

### 6. Visualizing Usage Time

Record your daily usage time with Digital Minimalist. **Just visualizing reduces it**.

**Recording Points**:
- Check at the same time every day
- Don't get overly happy or sad about changes
- Review weekly

### 7. Digital Sunset

Reduce screen brightness after sunset and cut blue light.

**How to Set**:
- iPhone: Night Shift
- Android: Blue Light Filter

---

## Chapter 7: Summary

What's important is not reducing usage time. **Using consciously and proactively** is important.

### What You Can Do Today

1. Know your usage time (record with Digital Minimalist)
2. Check for dangerous usage patterns
3. Implement one improvement measure

Small steps create big changes.

---

**Next Action**: Check the screen time diagnosis right now!`
  },
  {
    id: 'sleep-and-smartphone',
    title: 'Relationship Between Sleep and Smartphone',
    category: 'science',
    readTime: 16,
    icon: '😴',
    summary: 'Explaining the mechanism by which pre-bedtime smartphone use destroys sleep, and sleep improvement techniques you can practice today.',
    keypoints: ['Effects of blue light on sleep', 'Creating environment for better sleep quality', 'Practice! Sleep improvement routine'],
    content: `# Relationship Between Sleep and Smartphone

"Before I knew it, 2 hours had passed while looking at my smartphone before bed" or "I can't wake up at all in the morning" — Have you had such experiences? There is a deep relationship between sleep and smartphones.

---

## Chapter 1: The Truth About Blue Light

### What is Blue Light?

**Bluish-white light** emitted from smartphone and PC screens, characterized by short wavelength and strong energy.

### Mechanism of Effect on Sleep

1. Blue light enters the retina
2. Brain mistakes it for "daytime"
3. Secretion of sleep hormone "melatonin" is suppressed
4. Circadian rhythm is disrupted
5. Difficulty falling asleep, decreased sleep quality

---

## Chapter 2: Surprising Research Results

### Study 1: Increased Sleep Onset Time

According to Harvard University research (2022), **smartphone use 2 hours before bedtime increases sleep onset time by an average of 30 minutes**.

### Study 2: Decreased Sleep Quality

The same study also found that **the proportion of REM sleep (light sleep) increases**, while deep non-REM sleep decreases.

### Study 3: Next Day Performance

The day after pre-bedtime smartphone use, **concentration decreases by 20%**, and reaction speed also becomes slower.

---

## Chapter 3: Effects of Sleep Quality

### Short-Term Effects

- Daytime drowsiness
- Decreased concentration
- Irritability
- Increased appetite (obesity risk)

### Long-Term Effects

- Decreased immunity
- Increased depression risk
- Increased lifestyle disease risk
- Increased dementia risk

---

## Chapter 4: 7 Sleep Improvement Techniques

### 1. Digital Sunset

Reduce screen brightness after sunset and cut blue light.

**How to Set**:
- iPhone: Settings → Display & Brightness → Night Shift (sunset to sunrise)
- Android: Settings → Display → Blue Light Filter

### 2. Bedroom Rules

**Iron Rule**: Don't bring smartphone to bedroom

- Use a separate clock for alarm
- Place charger in living room
- Place it physically "out of reach"

### 3. 90-Minute Rule

Stop using digital devices **90 minutes** before bed.

**Example 90-Minute Routine**:
1. Take a bath (40 min)
2. Stretching (10 min)
3. Reading (20 min)
4. Meditation/Deep breathing (10 min)
5. Get into bed

### 4. Alternative Routine

Replace pre-bedtime smartphone habits with other actions.

**Recommended Alternative Activities**:
- 📖 Reading physical books
- 🧘 Meditation
- 📝 Journaling (paper)
- 🎵 Listening to calm music
- 🌿 Aromatherapy

### 5. Environment Adjustment

Optimize your **bedroom environment** for sleep.

| Element | Optimal Condition |
|---------|-------------------|
| Temperature | 18-22°C |
| Humidity | 50-60% |
| Brightness | Complete darkness |
| Sound | Silence or white noise |

### 6. Morning Light

Exposing yourself to sunlight in the morning resets your circadian rhythm.

**Ideal Morning Routine**:
1. Wake up
2. Open curtains
3. Spend 5 minutes by the window
4. Breakfast

### 7. Sleep Records

Record the following items in Digital Minimalist's journal:
- Mood before bed
- Bedtime
- Wake time
- Mood upon waking

---

## Chapter 5: Frequently Asked Questions

### Q: I need smartphone for alarm

A: We recommend purchasing an inexpensive alarm clock (around $10). Considering sleep quality, it pays for itself.

### Q: I need smartphone at night for work

A: Wear blue light cutting glasses and set screen brightness to minimum.

### Q: I end up looking at it anyway

A: Set "Do Not Disturb Mode" on your smartphone and limit usage for specific apps only.

---

## Chapter 6: 7-Day Sleep Improvement Program

| Day | Goal | Specific Actions |
|-----|------|------------------|
| Day 1 | Record | Record bedtime and wake time |
| Day 2 | Night Shift | Blue light cut setting |
| Day 3 | 30 minutes | Smartphone off 30 minutes before bed |
| Day 4 | Reading | Read physical book for 10 minutes |
| Day 5 | Bedroom | Don't bring smartphone to bedroom |
| Day 6 | 60 minutes | Off 60 minutes before bed |
| Day 7 | Establishment | Complete your own routine |

---

## Chapter 7: Summary

Sleep is the foundation of mental and physical health. Improving the quality of sleep, which occupies about one-third of your day, leads to improving the quality of your life.

Start with one thing you can do tonight.

---

**Next Action**: Start tonight by not bringing your smartphone to the bedroom!`
  },
  {
    id: 'smartphone-addiction-check',
    title: 'Smartphone Dependency Check',
    category: 'challenge',
    readTime: 12,
    icon: '🔍',
    summary: 'Diagnose your smartphone dependency level with 10 questions. Includes countermeasures by result and improvement program to start today.',
    keypoints: ['10-question dependency check', 'Countermeasures by result', '30-day improvement program'],
    content: `# Smartphone Dependency Check

Do you have concerns about how you relate to your smartphone? This check will diagnose your dependency level.

---

## Chapter 1: 10-Question Dependency Check

Count the number of questions you answer "Yes" to.

### Checklist

1. You touch your smartphone within the **first 5 minutes** after waking
2. You bring your smartphone to the toilet
3. You use your smartphone during meals **3 or more times per week**
4. You wonder "maybe I got a notification" **10 or more times per day**
5. You feel **anxiety or restlessness** without your smartphone
6. You use your smartphone until right before bed (in bed)
7. You check your smartphone **150 or more times per day** (screen checks)
8. You use your smartphone during conversations with family/friends
9. You have **failed to reduce** smartphone usage time before
10. You continue using smartphone even when your eyes are tired

---

## Chapter 2: Results

### 0-3 Yes: 🟢 Healthy

**You have a healthy relationship with your smartphone!**

Maintain your current habits. However, don't be careless. Take the check periodically.

**Advice**:
- Maintain current usage time
- Take the check once a month
- Recommend digital wellbeing to those around you

### 4-6 Yes: 🟡 Caution

**You have slight dependency tendencies.**

Start countermeasures while you have self-awareness.

**Countermeasures to Start Immediately**:
1. Turn off 3 notifications
2. Don't use smartphone 30 minutes before bed
3. Put smartphone away during meals

**1-Week Goal**:
- Create 1 hour of digital detox time per day
- Record usage time with Digital Minimalist

### 7-10 Yes: 🔴 Danger

**You may have addiction. Full-scale countermeasures are needed.**

However, don't give up. You can definitely improve with proper countermeasures.

**Emergency Countermeasures**:
1. Set smartphone to grayscale (monochrome)
2. Delete (or hide) SNS apps
3. Don't bring smartphone to bedroom
4. Completely step away from smartphone for 1 hour per day

Participate in the **30-Day Improvement Program**.

---

## Chapter 3: 30-Day Improvement Program

### Week 1: Awareness

| Day | Task |
|-----|------|
| 1 | Record usage time |
| 2 | Turn off 5 notifications |
| 3 | No smartphone during meals |
| 4 | Don't bring to toilet |
| 5 | Don't check smartphone for 30 minutes after waking |
| 6 | Turn off 30 minutes before bed |
| 7 | 1 hour digital detox |

### Week 2: Environment

| Day | Task |
|-----|------|
| 8 | App organization (move SNS to 2nd page) |
| 9 | Grayscale setting |
| 10 | Move charger to living room |
| 11 | Purchase alarm clock |
| 12 | Don't bring smartphone to bedroom |
| 13 | Create alternative activity list |
| 14 | 2 hours digital detox |

### Week 3: Habits

| Day | Task |
|-----|------|
| 15 | Establish morning routine |
| 16 | Establish pre-bedtime routine |
| 17 | No multitasking with smartphone |
| 18 | Turn off more notifications |
| 19 | Set usage time goal |
| 20 | Declare to family |
| 21 | Half-day digital detox |

### Week 4: Establishment

| Day | Task |
|-----|------|
| 22 | Review usage time |
| 23 | Record success experiences |
| 24 | Set new goals |
| 25 | Share with friends |
| 26 | Set app usage limits |
| 27 | Reward for yourself |
| 28 | Final check |

---

## Chapter 4: 5 Techniques to Escape Addiction

### 1. Physical Distance

Place smartphone **out of reach**.

- In another room during work
- In living room when sleeping
- In bag during meals

### 2. Increase Friction

Increase the **effort** required to use smartphone.

- Complex password
- Apps in the back of folders
- Log out every time

### 3. Alternative Rewards

Find **fun things** other than smartphone.

- Hobbies
- Exercise
- Reading
- Face-to-face communication

### 4. Social Pressure

**Declare** to those around you.

- Tell them "I'm reducing smartphone use"
- Find partners to work on it together
- Share records with Digital Minimalist

### 5. Professional Help

If addiction is serious, seek professional help.

- Counseling
- Addiction support groups
- Medical institutions

---

## Chapter 5: Summary

Did you notice anything from taking the dependency check?

What's important is that **you can change from the moment you notice**.

Start today, from this moment.

---

**Next Action**: Track your improvement records with Digital Minimalist's Achievements!`
  },
  {
    id: '7day-challenge',
    title: '7-Day Challenge',
    category: 'challenge',
    readTime: 10,
    icon: '🎯',
    summary: 'A challenge to reduce smartphone usage time by 10% over 7 days starting today. Change habits enjoyably with daily changing themes.',
    keypoints: ['Detailed 7-day program', 'Daily themes and tasks', 'Next steps after achievement'],
    content: `# 7-Day Challenge

Challenge yourself to reduce smartphone usage time by **10%** over 7 days starting today. We'll change habits enjoyably with daily changing themes.

---

## Chapter 1: Preparation: Before the Challenge

### 1. Check Current Usage Time

Check today's usage time on Digital Minimalist's dashboard.

### 2. Calculate Target Time

Set target at 90% of current time.

**Example**: Current 120 minutes → Target 108 minutes (12 minutes reduction)

### 3. Declare

Tell family and friends "I'm doing a 7-day challenge."

---

## Chapter 2: 7-Day Program

### Day 1: Awareness

**Theme**: "Know your usage patterns"

**Tasks**:
- Record daily usage time
- Check which apps you used and for how long
- Note the time periods when you used

**Reflection**:
- Which app did you use most?
- Which time period did you use most?
- What usage did you think was "wasteful"?

### Day 2: Turn Off Notifications

**Theme**: "Reduce passive usage"

**Tasks**:
- Turn off 5 unnecessary notifications
- Turn off all SNS notifications
- Keep only important notifications ON

**Awareness**:
- How do you feel with fewer notifications?
- How often do you check smartphone yourself?

### Day 3: No Smartphone During Meals

**Theme**: "Focus on what's in front of you"

**Tasks**:
- Put smartphone away during meals
- Focus on the taste of food
- If there's conversation, focus on the other person

**Effects**:
- Increased meal satisfaction
- Improved digestion and absorption
- Improved quality of interpersonal relationships

### Day 4: Bedroom Rules

**Theme**: "Improve sleep quality"

**Tasks**:
- Don't bring smartphone to bedroom
- Use separate alarm clock
- Charge in living room

**Next Morning Changes**:
- How was your awakening?
- How was your sleep quality?

### Day 5: Alternative Activities

**Theme**: "Enjoyment other than smartphone"

**Tasks**:
- Do something else when you want to use smartphone
- Choose from alternative activity list

**Alternative Activity List**:
- 3 deep breaths
- Drink water
- Stretch
- Look out the window
- Read
- Walk

### Day 6: Digital Detox

**Theme**: "Completely off time"

**Tasks**:
- Completely turn off smartphone for 2 continuous hours
- Immerse yourself in other activities

**Recommended Activities**:
- Watching movies
- Cooking
- Hobbies
- Face-to-face interaction with friends

### Day 7: Reflection

**Theme**: "Establish learnings"

**Tasks**:
- Reflect on the 7 days
- Record success experiences
- Set future goals

**Reflection Sheet**:
1. What was the most difficult?
2. What was most effective?
3. What habits do you want to continue?
4. What's your next goal?

---

## Chapter 3: Daily Hints

### Hint 1: Don't Aim for Perfection

Let's consider 80% achievement as OK.

### Hint 2: Record

Record daily in Digital Minimalist's journal.

### Hint 3: Celebrate Small Successes

Praise yourself for each day's achievement.

---

## Chapter 4: Common Troubles

### Trouble 1: Giving Up on Day 1

**Countermeasure**: Lower your goal. Starting with 5% reduction is OK.

### Trouble 2: Worried About Notifications

**Countermeasure**: Use "Favorites" feature to allow notifications only from important people.

### Trouble 3: Feeling Bored

**Countermeasure**: Enrich your alternative activity list.

---

## Chapter 5: Rewards After Achievement

When you achieve 7 days, give yourself a reward.

**Reward Ideas**:
- Go to your favorite cafe
- Buy a new book
- Watch a movie
- Eat something delicious
- Small shopping

---

## Chapter 6: Next Step: 30-Day Challenge

When you achieve 7 days, challenge the 30-day challenge.

**30-Day Goals**:
- Reduce usage time by 20%
- Increase digital detox time
- Find new hobbies

---

## Chapter 7: Summary

7 days pass in no time. However, changes will definitely appear.

**The best day to start is "today."**

---

**Next Action**: Set your target time in Digital Minimalist and start the challenge!`
  },
];

// For category-based display
export const getArticlesByCategory = (category: Article['category']) => {
  return ARTICLES.filter(article => article.category === category);
};

// Search by article ID
export const getArticleById = (id: string) => {
  return ARTICLES.find(article => article.id === id);
};

// Search function
export const searchArticles = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return ARTICLES.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.content.toLowerCase().includes(lowerQuery) ||
    article.summary.toLowerCase().includes(lowerQuery)
  );
};

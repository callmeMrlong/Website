    function getCookie(c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
    }
    
    // Check if this is the first visit
    var hasVisited = localStorage.getItem("classManagerVisited");
    if (!hasVisited) {
        alert("Welcome to Class Manager!\n\nQuick Start Guide:\n• Use the \"`\" key to show schedule settings\n• Press \"t\" and \"l\" together to show the games button\n• Drag and drop a .ics file anywhere to import your schedule!\n\nThis message will only show once.");
        localStorage.setItem("classManagerVisited", "true");
    }
        function clearAllData() {
    // Clear localStorage
    localStorage.clear();
    
    // Clear all cookies
    document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    
    console.log("All cookies and localStorage cleared! Refresh the page to see changes.");
    alert("All data cleared! The page will now reload.");
    location.reload();
}

console.log("Type 'clearAllData()' in the console to clear all cookies and saved data.");
        function toggleElementById(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        }
        function toggleElements() {
            toggleElementById('update-schedule-button')
            toggleElementById('theme-editor-button')
            toggleElementById('import-ics-button')
            toggleElementById('ics-guide-button')
            toggleElementById('buttons-section')
        //toggleElemntById('Id')
        }
        let keysPressed = {};
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;

        if (keysPressed['t']) {
                if (keysPressed['l']){
                    toggleElementById('games-button');}
        }   
        });
        document.addEventListener('keyup', (event) => {
        delete keysPressed[event.key];
        });
        toggleElements()//this makes it hidden when the project starts
        toggleElementById('games-button')
        const Periods = {
                    "A": "Human Geography - 2 (A)" ,
                    "B": "Christian Foundations - 2 (B)" ,
                    "C": "Honors Geometry - 2 (C)" ,
                    "D": "Intro to Java Programming - 1 (D)" ,
                    "E": "Honors Biology - 1 (E)" ,
                    "F": "English 9 - 3 (F)" ,
                    "G": "Spanish 2 - 1 (G)" 
        }
        const defaultSchedules = {
            // Monday (0 = Sunday, 1 = Monday, etc.)
            1: [
                { time: "8:00 AM - 8:45 AM", name: Periods['A'], start: "08:00", end: "08:45" },
                { time: "8:50 AM - 9:35 AM", name: Periods['B'], start: "08:50", end: "09:35" },
                { time: "9:40 AM - 10:25 AM", name: Periods['C'], start: "09:40", end: "10:25" },
                { time: "10:30 AM - 11:10 AM", name: "Programming - 1 (Programming)", start: "10:30", end: "11:10" },
                { time: "11:15 AM - 12:00 PM", name: Periods['D'], start: "11:15", end: "12:00" },
                { time: "12:00 PM - 12:30 PM", name: "Lunch - 1 (Lunch)", start: "12:00", end: "12:30" },
                { time: "12:35 PM - 1:25 PM", name: Periods['E'], start: "12:35", end: "13:25" },
                { time: "1:30 PM - 2:20 PM", name: Periods['F'], start: "13:30", end: "14:20" },
                { time: "2:25 PM - 3:15 PM", name: Periods['G'], start: "14:25", end: "15:15" }
            ],
            // Tuesday
            2: [
                { time: "8:00 AM - 8:50 AM", name: Periods['B'], start: "08:00", end: "08:50" },
                { time: "8:55 AM - 9:45 AM", name: Periods['A'], start: "08:55", end: "09:45" },
                { time: "9:50 AM - 10:10 AM", name: "Programming - 1 (Programming)", start: "09:50", end: "10:10" },
                { time: "10:15 AM - 11:05 AM", name: Periods['C'], start: "10:15", end: "11:05" },
                { time: "11:10 AM - 12:00 PM", name: Periods['D'], start: "11:10", end: "12:00" },
                { time: "12:00 PM - 12:30 PM", name: "Lunch - 1 (Lunch)", start: "12:00", end: "12:30" },
                { time: "12:35 PM - 1:25 PM", name: Periods['G'], start: "12:35", end: "13:25" },
                { time: "1:30 PM - 2:20 PM", name: Periods['E'], start: "13:30", end: "14:20" },
                { time: "2:25 PM - 3:15 PM", name: Periods['F'], start: "14:25", end: "15:15" }
            ],
            // Wednesday
            3: [
                { time: "8:30 AM - 9:20 AM", name: Periods['A'], start: "08:30", end: "09:20" },
                { time: "9:25 AM - 10:15 AM", name: Periods['B'], start: "09:25", end: "10:15" },
                { time: "10:20 AM - 11:10 AM", name: Periods['C'], start: "10:20", end: "11:10" },
                { time: "11:15 AM - 12:05 PM", name: Periods['D'], start: "11:15", end: "12:05" },
                { time: "12:05 PM - 12:30 PM", name: "Lunch - 1 (Lunch)", start: "12:05", end: "12:30" },
                { time: "12:35 PM - 1:25 PM", name: Periods['F'], start: "12:35", end: "13:25" },
                { time: "1:30 PM - 2:20 PM", name: Periods['G'], start: "13:30", end: "14:20" },
                { time: "2:25 PM - 3:15 PM", name: Periods['E'], start: "14:25", end: "15:15" }
            ],
            // Thursday
            4: [
                { time: "8:00 AM - 8:50 AM", name: Periods['B'], start: "08:00", end: "08:50" },
                { time: "8:55 AM - 9:45 AM", name: Periods['A'], start: "08:55", end: "09:45" },
                { time: "9:50 AM - 10:10 AM", name: "Programming - 1 (Programming)", start: "09:50", end: "10:10" },
                { time: "10:15 AM - 11:05 AM", name: Periods['C'], start: "10:15", end: "11:05" },
                { time: "11:10 AM - 12:00 PM", name: Periods['D'], start: "11:10", end: "12:00" },
                { time: "12:00 PM - 12:30 PM", name: "Lunch - 1 (Lunch)", start: "12:00", end: "12:30" },
                { time: "12:35 PM - 1:25 PM", name: Periods['G'], start: "12:35", end: "13:25" },
                { time: "1:30 PM - 2:20 PM", name: Periods['E'], start: "13:30", end: "14:20" },
                { time: "2:25 PM - 3:15 PM", name: Periods['F'], start: "14:25", end: "15:15" }
            ],
            // Friday
            5: [
                { time: "8:00 AM - 8:45 AM", name: Periods['A'], start: "08:00", end: "08:45" },
                { time: "8:50 AM - 9:35 AM", name: Periods['B'], start: "08:50", end: "09:35" },
                { time: "9:40 AM - 10:25 AM", name: Periods['C'], start: "09:40", end: "10:25" },
                { time: "10:30 AM - 11:10 AM", name: "Programming - 1 (Programming)", start: "10:30", end: "11:10" },
                { time: "11:15 AM - 12:00 PM", name: Periods['D'], start: "11:15", end: "12:00" },
                { time: "12:00 PM - 12:30 PM", name: "Lunch - 1 (Lunch)", start: "12:00", end: "12:30" },
                { time: "12:35 PM - 1:25 PM", name: Periods['E'], start: "12:35", end: "13:25" },
                { time: "1:30 PM - 2:20 PM", name: Periods['F'], start: "13:30", end: "14:20" },
                { time: "2:25 PM - 3:15 PM", name: Periods['G'], start: "14:25", end: "15:15" }
            ]
        };

        // Define class periods in order
        let classPeriods = [
            { period: "A", name: Periods['A'] },
            { period: "B", name: Periods['B'] },
            { period: "C", name: Periods['C'] },
            { period: "Programming", name: "Programming - 1 (Programming)" },
            { period: "D", name: Periods['D'] },
            { period: "E", name: Periods['E'] },
            { period: "F", name: Periods['F'] },
            { period: "G", name: Periods['G'] }
        ];

        // Notes functionality
        let classNotes = {};
        let currentSelectedClass = '';

        // Drag and Drop functionality
        let dragCounter = 0;

        document.addEventListener('dragenter', function(e) {
            e.preventDefault();
            dragCounter++;
            if (e.dataTransfer.types.includes('Files')) {
                document.getElementById('drop-zone').classList.add('active');
            }
        });

        document.addEventListener('dragleave', function(e) {
            e.preventDefault();
            dragCounter--;
            if (dragCounter === 0) {
                document.getElementById('drop-zone').classList.remove('active');
            }
        });

        document.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        document.addEventListener('drop', function(e) {
            e.preventDefault();
            dragCounter = 0;
            document.getElementById('drop-zone').classList.remove('active');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.name.endsWith('.ics')) {
                    processICSFile(file);
                } else {
                    alert('Please drop a .ics file');
                }
            }
        });

        function processICSFile(file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const icsContent = e.target.result;
                    console.log("ICS file content loaded, length:", icsContent.length);
                    console.log("First 500 characters:", icsContent.substring(0, 500));
                    
                    const schedules = parseICSFile(icsContent);
                    
                    console.log("Schedules object:", schedules);
                    console.log("Number of days in schedule:", Object.keys(schedules).length);
                    
                    if (Object.keys(schedules).length === 0) {
                        alert("No valid schedule data found in the ICS file. Check the browser console (F12) for details.");
                        return;
                    }
                    
                    localStorage.setItem('customSchedules', JSON.stringify(schedules));
                    updateClassPeriodsFromSchedules(schedules);
                    rebuildNotesDropdown();
                    updateCountdown();
                    
                    alert(`Schedule imported successfully! Found ${Object.keys(schedules).length} days with classes.`);
                } catch (error) {
                    console.error("Error parsing ICS file:", error);
                    console.error("Error stack:", error.stack);
                    alert("Error parsing ICS file: " + error.message + "\n\nCheck the browser console (F12) for more details.");
                }
            };
            reader.onerror = function(e) {
                console.error("File reading error:", e);
                alert("Error reading file. Please try again.");
            };
            reader.readAsText(file);
        }

        function parseTime(timeStr) {
            const [hours, minutes] = timeStr.split(':').map(Number);
            return hours * 3600 + minutes * 60;
        }

        function getCurrentTime() {
            const now = new Date();
            return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        }

        function formatTime(totalSeconds) {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            if (hours > 0) {
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            } else {
                return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }

        function initializeNotes() {
            const savedNotes = JSON.parse(localStorage.getItem('classNotes')) || {};
            classNotes = savedNotes;

            classPeriods.forEach(classInfo => {
                if (!classNotes[classInfo.name]) {
                    classNotes[classInfo.name] = '';
                }
            });

            currentSelectedClass = localStorage.getItem('currentSelectedClass') || classPeriods[0].name;

            const selector = document.getElementById('class-selector');
            classPeriods.forEach((classInfo, index) => {
                const option = document.createElement('option');
                option.value = classInfo.name;
                option.textContent = `${classInfo.period} Period`;
                selector.appendChild(option);
            });

            selector.value = currentSelectedClass;

            loadNotes();

            document.getElementById('class-selector').addEventListener('change', switchClass);
            document.getElementById('notes-textarea').addEventListener('input', saveNotes);
        }

        function switchClass() {
            const selector = document.getElementById('class-selector');
            currentSelectedClass = selector.value;
            
            localStorage.setItem('currentSelectedClass', currentSelectedClass);
            
            loadNotes();
        }

        function loadNotes() {
            const textarea = document.getElementById('notes-textarea');
            textarea.value = classNotes[currentSelectedClass] || '';
        }

        function saveNotes() {
            const textarea = document.getElementById('notes-textarea');
            classNotes[currentSelectedClass] = textarea.value;
            
            localStorage.setItem('classNotes', JSON.stringify(classNotes));
            
            const saveStatus = document.getElementById('save-status');
            saveStatus.textContent = 'Notes saved ✓';
            saveStatus.style.opacity = '1';
            
            setTimeout(() => {
                saveStatus.textContent = 'Notes auto-save as you type';
                saveStatus.style.opacity = '0.8';
            }, 2000);
        }

        function openGames() {
            document.getElementById('games-menu-overlay').style.display = 'flex';
        }

        function closeGamesMenu() {
            document.getElementById('games-menu-overlay').style.display = 'none';
            document.getElementById('games-search').value = '';
            filterGames();
        }

        function launchGame(url) {
            const gameWindow = window.open('about:blank', '_blank');
            
            gameWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Loading...</title>
                    <style>
                        body, html {
                            margin: 0;
                            padding: 0;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                        }
                        iframe {
                            border: none;
                            width: 100%;
                            height: 100%;
                        }
                    </style>
                </head>
                <body>
                    <iframe src="${url}" allowfullscreen></iframe>
                </body>
                </html>
            `);
            gameWindow.document.close();
            
            closeGamesMenu();
        }

        document.addEventListener('click', function(e) {
            const gamesOverlay = document.getElementById('games-menu-overlay');
            if (e.target === gamesOverlay) {
                closeGamesMenu();
            }
        });
        
        function updateSchedule() {
            if (!confirm("Import Schedule\n\nEnter class names for each period. Programming and Lunch stay the same.\n\nContinue?")) return;
            
            let periodInputs = {};
            ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(p => {
                const name = prompt(`Enter class name for Period ${p}:\n(Leave blank to keep default)`);
                if (name && name.trim()) periodInputs[p] = name.trim();
            });
            
            if (Object.keys(periodInputs).length === 0) {
                alert("No classes entered. Cancelled.");
                return;
            }
            
            let newSchedules = {};
            for (let day = 1; day <= 5; day++) {
                newSchedules[day] = defaultSchedules[day].map(slot => {
                    const match = slot.name.match(/\(([A-G])\)$/);
                    if (match && periodInputs[match[1]]) {
                        return { ...slot, name: `${periodInputs[match[1]]} (${match[1]})` };
                    }
                    return slot;
                });
            }
            
            localStorage.setItem('customSchedules', JSON.stringify(newSchedules));
            
            let newPeriods = [];
            let seen = new Set();
            newSchedules[1].forEach(item => {
                if (!item.name.includes('Lunch') && !item.name.includes('Programming') && !seen.has(item.name)) {
                    const match = item.name.match(/\(([A-G])\)$/);
                    newPeriods.push({ period: match ? match[1] : item.name[0], name: item.name });
                    seen.add(item.name);
                }
            });
            newSchedules[1].forEach(item => {
                if ((item.name.includes('Programming') || item.name.includes('Lunch')) && !seen.has(item.name)) {
                    newPeriods.push({ period: item.name.includes('Programming') ? 'Programming' : 'Lunch', name: item.name });
                    seen.add(item.name);
                }
            });
            
            let classPeriods = newPeriods;
            classPeriods.forEach(c => { if (!classNotes[c.name]) classNotes[c.name] = ''; });
            
            rebuildNotesDropdown();
            updateCountdown();
            alert("Schedule updated successfully!");
        }

        function resetSchedule() {
            if (!confirm("Reset to default schedule?")) return;
            localStorage.removeItem('customSchedules');
            classPeriods = [
                { period: "A", name: "Human Geography - 2 (A)" },
                { period: "B", name: "Christian Foundations - 2 (B)" },
                { period: "C", name: "Honors Geometry - 2 (C)" },
                { period: "Programming", name: "Programming - 1 (Programming)" },
                { period: "D", name: "Intro to Java Programming - 1 (D)" },
                { period: "E", name: "Honors Biology - 1 (E)" },
                { period: "F", name: "English 9 - 3 (F)" },
                { period: "G", name: "Spanish 2 - 1 (G)" }
            ];
            rebuildNotesDropdown();
            updateCountdown();
            alert("Schedule reset successfully!");
        }

        function handleICSFile(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            processICSFile(file);
            event.target.value = '';
        }

        function parseICSFile(icsContent) {
            const schedules = {};
            const seenClasses = {}; // Track which classes we've seen for each day
            
            const events = icsContent.split('BEGIN:VEVENT');
            
            for (let i = 1; i < events.length; i++) {
                const event = events[i];
                
                const summaryMatch = event.match(/SUMMARY:(.+)/);
                const dtStartMatch = event.match(/DTSTART;TZID=America\/New_York:(\d{8}T\d{6})/);
                const dtEndMatch = event.match(/DTEND;TZID=America\/New_York:(\d{8}T\d{6})/);
                
                if (!summaryMatch || !dtStartMatch || !dtEndMatch) continue;
                
                const summary = summaryMatch[1].trim();
                const dtStart = dtStartMatch[1];
                const dtEnd = dtEndMatch[1];
                
                const year = dtStart.substring(0, 4);
                const month = dtStart.substring(4, 6);
                const day = dtStart.substring(6, 8);
                const startHour = dtStart.substring(9, 11);
                const startMin = dtStart.substring(11, 13);
                const endHour = dtEnd.substring(9, 11);
                const endMin = dtEnd.substring(11, 13);
                
                const date = new Date(year, parseInt(month) - 1, day);
                const dayOfWeek = date.getDay();
                
                if (dayOfWeek === 0 || dayOfWeek === 6) continue;
                
                const startTime24 = `${startHour}:${startMin}`;
                const endTime24 = `${endHour}:${endMin}`;
                
                const startTime12 = formatTo12Hour(startHour, startMin);
                const endTime12 = formatTo12Hour(endHour, endMin);
                const timeRange = `${startTime12} - ${endTime12}`;
                
                // Initialize tracking for this day if needed
                if (!seenClasses[dayOfWeek]) {
                    seenClasses[dayOfWeek] = new Set();
                }
                
                // Create a unique key for this time slot
                const timeKey = `${startTime24}-${endTime24}`;
                
                // Only add if we haven't seen this time slot for this day yet
                if (!seenClasses[dayOfWeek].has(timeKey)) {
                    if (!schedules[dayOfWeek]) {
                        schedules[dayOfWeek] = [];
                    }
                    
                    schedules[dayOfWeek].push({
                        time: timeRange,
                        name: summary,
                        start: startTime24,
                        end: endTime24
                    });
                    
                    seenClasses[dayOfWeek].add(timeKey);
                }
            }
            
            // Sort each day's schedule by start time
            for (let day in schedules) {
                schedules[day].sort((a, b) => {
                    return a.start.localeCompare(b.start);
                });
            }
            
            console.log("Parsed schedules:", schedules);
            return schedules;
        }

        function formatTo12Hour(hour, minute) {
            const h = parseInt(hour);
            const m = minute;
            const ampm = h >= 12 ? 'PM' : 'AM';
            const hour12 = h % 12 || 12;
            return `${hour12}:${m} ${ampm}`;
        }

        function updateClassPeriodsFromSchedules(schedules) {
            const classMap = new Map();
            
            for (let day in schedules) {
                schedules[day].forEach(item => {
                    if (!classMap.has(item.name)) {
                        const periodMatch = item.name.match(/\(([A-G]|Programming|Lunch)\)/);
                        const period = periodMatch ? periodMatch[1] : item.name.substring(0, 1);
                        classMap.set(item.name, period);
                    }
                });
            }
            
            classPeriods = Array.from(classMap.entries()).map(([name, period]) => ({
                period: period,
                name: name
            }));
            
            classPeriods.forEach(classInfo => {
                if (!classNotes[classInfo.name]) {
                    classNotes[classInfo.name] = '';
                }
            });
        }

        function rebuildNotesDropdown() {
            const selector = document.getElementById('class-selector');
            const currentValue = selector.value;
            
            selector.innerHTML = '';
            
            classPeriods.forEach((classInfo) => {
                const option = document.createElement('option');
                option.value = classInfo.name;
                option.textContent = `${classInfo.period} Period`;
                selector.appendChild(option);
            });
            
            if (currentValue && classPeriods.some(c => c.name === currentValue)) {
                selector.value = currentValue;
            } else if (classPeriods.length > 0) {
                selector.value = classPeriods[0].name;
                currentSelectedClass = classPeriods[0].name;
                localStorage.setItem('currentSelectedClass', currentSelectedClass);
            }
            
            loadNotes();
        }
        
        function updateCountdown() {
            const now = new Date();
            const dayOfWeek = now.getDay();
            const currentTime = getCurrentTime();
            
            const customSchedules = JSON.parse(localStorage.getItem('customSchedules'));
            const todaySchedule = customSchedules ? customSchedules[dayOfWeek] : defaultSchedules[dayOfWeek];
            
            if (!todaySchedule) {
                document.getElementById('status').textContent = 'No classes today!';
                document.getElementById('current-class').textContent = 'Weekend';
                document.getElementById('countdown').textContent = 'Enjoy!';
                document.getElementById('next-class').textContent = '';
                document.getElementById('schedule').innerHTML = '<div class="no-class">No classes scheduled for today</div>';
                return;
            }

            let scheduleHTML = '';
            let currentClassIndex = -1;
            let nextClassIndex = -1;

            todaySchedule.forEach((classItem, index) => {
                const startTime = parseTime(classItem.start);
                const endTime = parseTime(classItem.end);
                
                let classStatus = '';
                
                if (currentTime >= startTime && currentTime < endTime) {
                    currentClassIndex = index;
                    classStatus = 'current';
                } else if (currentTime < startTime && nextClassIndex === -1) {
                    nextClassIndex = index;
                    classStatus = 'next';
                }
                
                scheduleHTML += `
                    <div class="class-item ${classStatus}">
                        <div class="class-time">${classItem.time}</div>
                        <div class="class-name">${classItem.name}</div>
                    </div>
                `;
            });
            
            document.getElementById('schedule').innerHTML = scheduleHTML;

            if (currentClassIndex !== -1) {
                const currentClass = todaySchedule[currentClassIndex];
                const endTime = parseTime(currentClass.end);
                const timeLeft = endTime - currentTime;
                
                document.getElementById('status').textContent = 'Currently in class:';
                document.getElementById('current-class').textContent = currentClass.name;
                document.getElementById('countdown').textContent = formatTime(timeLeft);
                
                if (currentClassIndex + 1 < todaySchedule.length) {
                    const nextClass = todaySchedule[currentClassIndex + 1];
                    document.getElementById('next-class').textContent = `Next: ${nextClass.name}`;
                } else {
                    document.getElementById('next-class').textContent = 'Last class of the day!';
                }
            } else if (nextClassIndex !== -1) {
                const nextClass = todaySchedule[nextClassIndex];
                const startTime = parseTime(nextClass.start);
                const timeUntil = startTime - currentTime;
                
                document.getElementById('status').textContent = 'Next class starts in:';
                document.getElementById('current-class').textContent = nextClass.name;
                document.getElementById('countdown').textContent = formatTime(timeUntil);
                document.getElementById('next-class').textContent = `Starts at ${nextClass.time.split(' - ')[0]}`;
            } else {
                document.getElementById('status').textContent = 'All classes done!';
                document.getElementById('current-class').textContent = 'Free time';
                document.getElementById('countdown').textContent = 'Done!';
                document.getElementById('next-class').textContent = 'Enjoy your evening!';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            initializeNotes();
            updateCountdown();
            setInterval(updateCountdown, 1000);
            loadTheme();
        });

var countDownDate = new Date("May 22, 2026 15:15:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-school").innerHTML = "Time Left To Serve: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-school").innerHTML = "Time Left To Serve: " + "EXPIRED";
  }
}, 1000);
var countDownDate1 = new Date("Aug 12, 2025 8:55:00").getTime();

var x1 = setInterval(function() {

  var now1 = new Date().getTime();

  var distance1 = now1 - countDownDate1;

  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  document.getElementById("countup-school").innerHTML = "Time Served: " + days1 + "d " + hours1 + "h "
  + minutes1 + "m " + seconds1 + "s ";

  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("countup-school").innerHTML = "Time Served: " + "EXPIRED";
  }
}, 1000);

function openThemeEditor() {
    document.getElementById('theme-editor-overlay').style.display = 'flex';
    loadCurrentTheme();
}

function closeThemeEditor() {
    document.getElementById('theme-editor-overlay').style.display = 'none';
}

function loadCurrentTheme() {
    const savedTheme = JSON.parse(localStorage.getItem('siteTheme'));
    if (savedTheme) {
        document.getElementById('color-gradient-start').value = savedTheme.gradientStart;
        document.getElementById('color-gradient-end').value = savedTheme.gradientEnd;
        document.getElementById('color-timer').value = savedTheme.timer;
        document.getElementById('color-current-class').value = savedTheme.currentClass;
        document.getElementById('color-next-class').value = savedTheme.nextClass;
    }
}

function saveTheme() {
    const theme = {
        gradientStart: document.getElementById('color-gradient-start').value,
        gradientEnd: document.getElementById('color-gradient-end').value,
        timer: document.getElementById('color-timer').value,
        currentClass: document.getElementById('color-current-class').value,
        nextClass: document.getElementById('color-next-class').value
    };
    
    localStorage.setItem('siteTheme', JSON.stringify(theme));
    applyTheme(theme);
    alert('Theme saved! Your changes are now active.');
}

function applyTheme(theme) {
    document.body.style.background = `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`;
    
    const style = document.createElement('style');
    style.id = 'custom-theme';
    const existingStyle = document.getElementById('custom-theme');
    if (existingStyle) existingStyle.remove();
    
    style.textContent = `
        .countdown-timer, .countdown-timer-school, .countup-timer-school {
            color: ${theme.timer} !important;
        }
        .class-item.current {
            border-left-color: ${theme.currentClass} !important;
            background: ${theme.currentClass}4d !important;
        }
        .class-item.next {
            border-left-color: ${theme.nextClass} !important;
            background: ${theme.nextClass}33 !important;
        }
        .game-item {
            background: linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%) !important;
        }
    `;
    document.head.appendChild(style);
}

function loadTheme() {
    const savedTheme = JSON.parse(localStorage.getItem('siteTheme'));
    if (savedTheme) {
        applyTheme(savedTheme);
    }
}

function resetTheme() {
    if (confirm('Reset to default theme colors?')) {
        localStorage.removeItem('siteTheme');
        document.getElementById('color-gradient-start').value = '#667eea';
        document.getElementById('color-timer').value = '#ffeb3b';
        document.getElementById('color-current-class').value = '#4caf50';
        document.getElementById('color-next-class').value = '#ff9800';
        
        const customStyle = document.getElementById('custom-theme');
        if (customStyle) customStyle.remove();
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        
        alert('Theme reset to defaults!');
    }
}

document.addEventListener('click', function(e) {
    const overlay = document.getElementById('theme-editor-overlay');
    if (e.target === overlay) {
        closeThemeEditor();
    }
    
    const guideOverlay = document.getElementById('ics-guide-overlay');
    if (e.target === guideOverlay) {
        closeICSGuide();
    }
});

function openICSGuide() {
    document.getElementById('ics-guide-overlay').style.display = 'flex';
}

function closeICSGuide() {
    document.getElementById('ics-guide-overlay').style.display = 'none';
}

function filterGames() {
    const searchInput = document.getElementById('games-search').value.toLowerCase();
    const gameItems = document.querySelectorAll('.game-item');
    
    gameItems.forEach(item => {
        const gameName = item.querySelector('.game-item-name').textContent.toLowerCase();
        const gameDesc = item.querySelector('.game-item-description').textContent.toLowerCase();
        
        if (gameName.includes(searchInput) || gameDesc.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
// Settings button hover detection
const settingsHoverZone = document.getElementById('settings-hover-zone');
const settingsButton = document.getElementById('settings-button');

settingsHoverZone.addEventListener('mouseenter', function() {
    settingsButton.classList.add('visible');
});

settingsHoverZone.addEventListener('mouseleave', function() {
    settingsButton.classList.remove('visible');
});

// Keep button visible when hovering over it
settingsButton.addEventListener('mouseenter', function() {
    settingsButton.classList.add('visible');
});

settingsButton.addEventListener('mouseleave', function(e) {
    // Check if mouse is still in hover zone
    const rect = settingsHoverZone.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || 
        e.clientY < rect.top || e.clientY > rect.bottom) {
        settingsButton.classList.remove('visible');
    }
});

function openSettingsMenu() {
    document.getElementById('settings-menu-overlay').style.display = 'flex';
}

function closeSettingsMenu() {
    document.getElementById('settings-menu-overlay').style.display = 'none';
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const settingsOverlay = document.getElementById('settings-menu-overlay');
    if (e.target === settingsOverlay) {
        closeSettingsMenu();
    }
});

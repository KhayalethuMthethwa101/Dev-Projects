package com.epl.english_premier_league.player;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="player")
public class Player {
    @Id
    private int id;
    private String name;
    private int playerNumber;
    private String surname;
    private String country;
    private String position;
    private Integer goals;
    private Integer interceptions;
    private Integer minutesPlayed;
    private String teamName;

    public Player(int id, Integer minutesPlayed, Integer interceptions, String surname, int playerNumber, String name, String country, String position, Integer goals, String team) {
        this.id = id;
        this.minutesPlayed = minutesPlayed;
        this.interceptions = interceptions;
        this.surname = surname;
        this.playerNumber = playerNumber;
        this.name = name;
        this.country = country;
        this.position = position;
        this.goals = goals;
        this.teamName = team;
    }

    public Player() {

    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPlayerNumber() {
        return playerNumber;
    }

    public void setPlayerNumber(int playerNumber) {
        this.playerNumber = playerNumber;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Integer getGoals() {
        return goals;
    }

    public void setGoals(Integer goals) {
        this.goals = goals;
    }

    public Integer getInterceptions() {
        return interceptions;
    }

    public void setInterceptions(Integer interceptions) {
        this.interceptions = interceptions;
    }

    public Integer getMinutesPlayed() {
        return minutesPlayed;
    }

    public void setMinutesPlayed(Integer minutesPlayed) {
        this.minutesPlayed = minutesPlayed;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

}
